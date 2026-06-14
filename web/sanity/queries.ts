import { groq } from 'next-sanity'

export const projectsQuery = groq`
  *[_type == "project"] | order(date desc) {
    _id,
    title,
    slug,
    category,
    client,
    thumbnail,
    videoUrl,
    description,
    date,
    featured
  }
`