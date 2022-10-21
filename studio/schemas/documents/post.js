import { LogoTsIcon } from '@sanity/icons'

export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  icon: LogoTsIcon,
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'newsArticles',
      type: 'string',
      title: 'Nyhetsartiklar',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Nyhetsartiklar',
      of: [{ type: 'article'}],
    //   of: [
    //     { type: 'reference', to: {type: 'article'} },
    //   ],
    },
  ],

  preview: {
    select: {
        title: 'newsArticles',
        author: 'article.heading',
        media: 'article.image',
    },
  },
}
