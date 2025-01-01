import { createClient } from 'next-sanity'


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-12-29",
  token: process.env.NEXT_SANITY_TOKEN,
  useCdn: true,
})
