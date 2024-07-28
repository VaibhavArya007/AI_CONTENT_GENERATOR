"use client"
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'

interface PROPS{
    params:{
        'template-slug':string
    }
   
}

function CreateNewContent(props:PROPS) {

    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);

    const [loading,setLoading]=useState(false);
    const [aiOutput,setAiOutput]=useState<string>('');
    const {user}=useUser();
    const router=useRouter();
    const {totalUsage,setTotalUsage}=useContext(TotalUsageContext);
    

    const GenerateAIContent= async (formData:any)=>{
    //
    if(totalUsage>=10000){

        alert('You have used all your credits');
        router.push('/dashboard/billing');
        return;
    }
      setLoading(true);
        const SelectedPromt=selectedTemplate?.aiPrompt;

        const FinalAIPrompt=JSON.stringify(formData)+", "+SelectedPromt;

        const result=await chatSession.sendMessage(FinalAIPrompt);

        setAiOutput(result?.response.text());
        await SaveInDb(JSON.stringify(formData),selectedTemplate?.slug,result?.response.text());
        setLoading(false);
    }

    const SaveInDb=async (formData:any, slug:any,aiResp:string)=>{
      const result= await db.insert(AIOutput).values({
        formData:formData,
        templateSlug:slug,
        aiResponse:aiResp,
        createdBy:user?.primaryEmailAddress?.emailAddress,
        createdAt:moment().format('DD/MM/YYYY')

      })

      console.log(result);
    }
  return (
    <div className='p-10'>
        <Link href={"/dashboard"}>
        <Button className='ml-1' ><ArrowLeft/> Back</Button>
        </Link>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        {/* formsection */}

        <FormSection 
        userFormInput={(v:any)=>GenerateAIContent(v)}
        selectedTemplate={selectedTemplate}
        
        loading={loading}
        />

 

        {/* outputsection */}
        <div className='col-span-2'>
        <OutputSection aiOutput={aiOutput}/>
        </div>
        </div>

    </div>
  )
}

export default CreateNewContent
