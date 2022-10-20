// hierarchicalSchemas.js
import {createHierarchicalSchemas} from '@sanity/hierarchical-document-list'

export const hierarchicalOptions = {
  // choose the document type name that suits you best
  documentType: 'myCustomHierarchicalType',

  // key for the tree field in the document - "tree" by default
  fieldKeyInDocument: 'customTreeDataKey',

  // Document types editors should be able to include in the hierarchy
  referenceTo: ['page', 'route', 'site-config'],

  // ❓ Optional: provide filters and/or parameters for narrowing which documents can be added
//   referenceOptions: {
//     filter: 'status in $acceptedStatuses',
//     filterParams: {
//       acceptedStatuses: ['published', 'approved']
//     }
//   },

  // ❓ Optional: limit the depth of your hierarachies
  maxDept: 3
}

export default createHierarchicalSchemas(hierarchicalOptions)