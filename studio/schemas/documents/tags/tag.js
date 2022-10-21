import React from 'react';

const LinkRender = ({ children }) => <span>{children} 🌍</span>;

export default {
  title: 'Taggar',
  name: 'tag',
  type: 'document',
  fields: [
    {
      title: 'Tagg',
      name: 'tagName',
      type: 'string',
      description: "Ange ett namn för taggen",
    //   validation: (Rule: { requiered: () => any }) => Rule.requiered(),
    //   validation: Rule =>
    //     Rule.uri({
    //       allowRelative: true,
    //       scheme: ['Marknadsnyheter', 'Förklarande artiklar', 'Aktieanalyser'],
    //     }),
    },
    {
        name: "slug",
        title: "Slug",
        type: "slug",
        description: "Generera en unik url för taggen",
        options: {
            source: "tagName",
            maxlength: 96,
            slugify: input => input
                         .toLowerCase()
                         // Match all letters and numbers and invert selection
                         .replace(/[^a-zA-Z0-9]+/g, '-')
                         .slice(0, 200)
        },
        // validation: (Rule: { requiered: () => any }) => Rule.requiered(),
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Kategori(er)',
      weak: true,
      of: [{type: 'reference', to: { type: 'tagCategory'}}],
    },
  ],
  preview: {
    select: {
      title: "tagName",
      slug: "slug.current",
    },
    prepare(selection) {
      const { title, slug } = selection
      return {
        title: title,
        subtitle: slug
      }
    }
  },
  blockEditor: {
    icon: () => '🌍',
    render: LinkRender,
  },
};
