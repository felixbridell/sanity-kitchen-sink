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
                  buildHookId: '63ae0c24be17be3cba5d06e1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ov9fvwpf',
                  apiId: '4f4f4d6e-e180-4b08-a025-90637e2ebca6'
                },
                {
                  buildHookId: '63ae0c2493de993a0a13f9c4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kjeryib9',
                  apiId: 'aadcf9ae-dece-4c4f-b6a1-16ca31da25e5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/felixbridell/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kjeryib9.netlify.app', category: 'apps'}
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
