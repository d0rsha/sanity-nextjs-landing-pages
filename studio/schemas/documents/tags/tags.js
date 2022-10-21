import { LemonIcon } from '@sanity/icons'

export default {
  name: 'tags',
  type: 'document',
  title: 'Kategoritaggar',
  icon: LemonIcon,
  fieldsets: [
    {
      title: 'Title',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'tagCategory',
      type: 'string',
      title: 'Kategoritaggar',
      description: 'Välj taggar för detta dokument',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Taggar i denna kategori',
      weak: true,
      of: [{type: 'reference', to: { type: 'tag'}}],
    //   of: [
    //     { type: 'reference', to: {type: 'article'} },
    //   ],
    },
  ],

  preview: {
    select: {
        title: 'tagCategory',
        // author: 'article.heading',
        // media: 'article.image',
    },
  },
}
