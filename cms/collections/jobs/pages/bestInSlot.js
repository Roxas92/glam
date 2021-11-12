import {
  createAuthorsField, createChangelogField, createLastUpdatedField, createPatchField, createStaticLayoutField, createThumbnailField,
} from '../../../fields';
import { getPathForJob } from '../helpers';

export const createBestInSlot = (job, folderPrefix) => ({
  label: 'Best in Slot',
  name: 'bis',
  file: `${folderPrefix}${getPathForJob(job)}/best-in-slot.md`,
  fields: [
    createPatchField(),
    createThumbnailField(),
    createAuthorsField(),
    createLastUpdatedField(),
    createChangelogField(),
    {
      label: 'Sets',
      name: 'bis',
      widget: 'list',
      summary: '{{fields.name}}',
      fields: [
        {
          label: 'Name',
          name: 'name',
          widget: 'string',
        },
        {
          label: 'Type',
          name: 'type',
          widget: 'select',
          options: [
            'etro',
          ],
          default: 'etro',
        },
        {
          label: 'Link',
          name: 'link',
          widget: 'string',
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'markdown',
          required: false,
          default: '',
        },
      ],
    },
    createStaticLayoutField('bis'),
  ],
});
