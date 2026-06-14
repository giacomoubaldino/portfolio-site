import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityClient } from 'next-sanity'
import { client } from './client'

const builder = createImageUrlBuilder(client as SanityClient)

export const urlFor = (source: any) => builder.image(source)