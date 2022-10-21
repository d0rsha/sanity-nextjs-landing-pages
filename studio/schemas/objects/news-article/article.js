export default {
    type: 'object',
    name: 'article',
    title: 'Nyhet',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titel',
        },
        {
            name: 'slug',
            title: 'SEO url',
            type: 'slug',
            options: {
              source: (_doc, options) => options.parent.title,
              slugify: input => input
                         .toLowerCase()
                         // Match all letters and numbers and invert selection
                         .replace(/[^a-zA-Z0-9]+/g, '-')
                         .slice(0, 200)
            },
          },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: 'text',
            type: 'portableText',
            title: 'Innehåll',
        },
        {
            name: 'image',
            type: 'figure',
            title: 'Bild',
        },
        {
            name: 'timeToRead',
            type: 'string',
            title: 'lästid',
        },
        // {
        //     name: 'tags',
        //     type: 'array',
        //     title: 'Taggar',
        //     of: [
        //         {
        //             title: 'Tagg',
        //             type: 'tag',
        //         },
        //     ],
        // },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
        prepare({ title, media }) {
            return {
                title,
                subtitle: 'Artikel',
                media,
            };
        },
    },
};
