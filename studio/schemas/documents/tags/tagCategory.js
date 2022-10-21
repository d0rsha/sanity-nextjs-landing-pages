import { LemonIcon } from '@sanity/icons'
import RefferencedBy from '../../../components/inputs/RefferencedBy';

export default {
  name: 'tagCategory',
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
      name: 'name',
      type: 'string',
      title: 'Kategoritaggar',
      description: 'Välj taggar för detta dokument',
    },
    // Documents which reference this lesson
    {
      name: 'referringDocuments',
      title: 'Referenced By',
      type: 'array',
      of: [{ type: 'tag' }],
      readOnly: true,
      inputComponent: RefferencedBy,
      // Optional: You can read this option in ReferencedBy.tsx to filter the list
      // of backlinks by document type.
      // options: {
      //   referenceType: 'course',
      // },
    },
  ],

  preview: {
    select: {
        title: 'name',
        // author: 'article.heading',
        // media: 'article.image',
    },
  },
}
