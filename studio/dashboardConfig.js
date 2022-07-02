export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '62c043fe207c523f5aaaad97',
                  title: 'Sanity Studio',
                  name: 'kitchen-sink-tutorial-studio',
                  apiId: '451755cb-fd94-4feb-a4a8-fbd6b3eb0345'
                },
                {
                  buildHookId: '62c043fea2d427408ad7e227',
                  title: 'Blog Website',
                  name: 'kitchen-sink-tutorial',
                  apiId: 'd1768a7c-a27f-491f-842f-6312b2894895'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/briannelson95/kitchen-sink-tutorial',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://kitchen-sink-tutorial.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
