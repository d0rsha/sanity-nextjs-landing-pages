import S from '@sanity/desk-tool/structure-builder'
import {createDeskHierarchy} from '@sanity/hierarchical-document-list'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem) => !['page', 'route', 'site-config'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.documentListItem().id('global-config').schemaType('site-config').title('Site config'),
      S.documentTypeListItem('page').title('Pages'),
      S.documentTypeListItem('route').title('Routes'),
      ...S.documentTypeListItems().filter(hiddenDocTypes),

      createDeskHierarchy({
        title: 'Main table of contents',

        // The hierarchy will be stored in this document ID 👇
        documentId: 'main-table-of-contents',

        // Document types editors should be able to include in the hierarchy
        referenceTo: ['page', 'route', 'site-config'],

        // ❓ Optional: provide filters and/or parameters for narrowing which documents can be added
        // referenceOptions: {
        //   filter: 'status in $acceptedStatuses',
        //   filterParams: {
        //     acceptedStatuses: ['published', 'approved']
        //   }
        // },

        // ❓ Optional: limit the depth of your hierarachies
        maxDept: 3
      })
    ])
