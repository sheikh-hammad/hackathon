import { createClient } from 'next-sanity'


export const client = createClient({
  projectId: 'ged7ghur',
  dataset: "production",
  apiVersion: "2024-12-29",
  token: process.env.NEXT_SANITY_TOKEN,
  useCdn: true,
})
