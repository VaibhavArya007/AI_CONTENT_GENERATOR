import Image from "next/image";
import { AirVent, ArrowRightCircle, Drum, FastForwardIcon, Heart, Key, User, UserCheck2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-5 flex justify-between border-b-2 shadow-sm bg-sky-50">
        <Image src={'/logo.svg'} alt='logo' width={120} height={100} />
        <Link href="/dashboard">
        <Button variant="outline" className="flex gap-2 text-black border-primary hover:bg-primary hover:text-white">
          <User/> Get Started
        </Button>
        </Link>
      </div>

      <div className="bg-gradient-to-b from-sky-100 via-indigo-100 to-indigo-200 flex flex-1 flex-col items-center py-10">
        <div className="border rounded-lg mt-10 flex gap-4 p-2 text-sm border-indigo-700 items-center">
          <UserCheck2Icon /> Made With Love, By Vaibhav Arya <Heart />
        </div>

        <div className="text-4xl md:text-6xl flex gap-3 mt-10 font-bold text-center">
          AI Content <span className="text-primary">Generator</span>
        </div>

        <div className="mt-5 text-center w-full max-w-2xl px-5 md:px-0">
          Revolutionize your experience in the field of content creation, be a part of the future,
          <div>with our AI content generator.</div>
          <Link href="/dashboard">
          <Button className="mt-5 gap-3">
            Get Started <ArrowRightCircle />
          </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 px-5 md:px-10 text-center">
          <div className="flex flex-col items-center gap-3 border rounded-lg bg-sky-50 shadow-md shadow-indigo-400 hover:scale-105 transition-transform duration-500 p-4">
            <h2 className="flex gap-4 font-bold"><AirVent /> Easy to Use</h2>
            <p>Our AI content generator is easy to use and user-friendly.</p>
            <div className="text-primary hover:underline cursor-pointer">
              Learn More
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 border rounded-lg bg-sky-50 shadow-md shadow-indigo-400 hover:scale-105 transition-transform duration-500 p-4">
            <h2 className="flex font-bold gap-4"><FastForwardIcon /> Fast</h2>
            <p>Our AI content generator is fast and efficient.</p>
            <div className="text-primary hover:underline cursor-pointer">
              Learn More
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 border rounded-lg bg-sky-50 shadow-md shadow-indigo-400 hover:scale-105 transition-transform duration-500 p-4">
            <h2 className="flex font-bold gap-4"><Key /> Secure</h2>
            <p>Our AI content generator is secure and reliable.</p>
            <div className="text-primary hover:underline cursor-pointer">
              Learn More
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 border rounded-lg bg-sky-50 shadow-md shadow-indigo-400 hover:scale-105 transition-transform duration-500 p-4">
            <h2 className="flex font-bold gap-4"><Drum /> Reliable</h2>
            <p>Our AI content generator is reliable and trustworthy.</p>
            <div className="text-primary hover:underline cursor-pointer">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
