import {
  createAuthorsField, createChangelogField, createLastUpdatedField, createPatchField, createThumbnailField,
} from '../../../fields';
import { getPathForJob } from '../helpers';

export const createStatPriority = (job, folderPrefix) => ({
  label: 'Stat Priority',
  name: 'stat-priority',
  file: `${folderPrefix}${getPathForJob(job)}/stat-priority.md`,
  fields: [
    createPatchField(),
    createThumbnailField(),
    createAuthorsField(),
    createLastUpdatedField(),
    createChangelogField(),
    {
      label: 'Priority',
      name: 'priority',
      widget: 'string',
    },
  ],
});
