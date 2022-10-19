export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '634faabd1fe82e6d1dbca66f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-goixopxn',
                  apiId: 'f615ddd9-69d7-4221-9358-e2d9f9eff45e'
                },
                {
                  buildHookId: '634faabecd615f654a44deca',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hypqmq92',
                  apiId: 'f8d5b7c7-04ef-46a2-85d9-6b7602db5a3f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/d0rsha/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hypqmq92.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
