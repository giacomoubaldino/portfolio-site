import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Progetto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Personal Brand', value: 'personal-brand' },
          { title: 'Brand & Advertising', value: 'brand-advertising' },
          { title: 'Social Content', value: 'social-content' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Cliente',
      type: 'string',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Copertina',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'videoUrl',
      title: 'URL Video (Vimeo / YouTube)',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'date',
      title: 'Data',
      type: 'date',
    }),
    defineField({
      name: 'featured',
      title: 'In evidenza',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'thumbnail',
    },
  },
})