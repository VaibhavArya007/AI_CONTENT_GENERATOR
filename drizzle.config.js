/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://AI-Content-Generator_owner:wHZ0GSb9RKtA@ep-solitary-cloud-a5h1kd11.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require',
    }
  };