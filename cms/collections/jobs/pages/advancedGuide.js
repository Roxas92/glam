import {
  createAuthorsField, createBodyField, createChangelogField, createLastUpdatedField, createPatchField, createThumbnailField,
} from '../../../fields';
import { getPathForJob } from '../helpers';

export const createAdvancedGuide = (job, folderPrefix) => ({
  label: 'Advanced guide',
  name: 'advanced-guide',
  file: `${folderPrefix}${getPathForJob(job)}/advanced-guide.md`,
  fields: [
    createBodyField(),
    createThumbnailField(),
    createAuthorsField(),
    createPatchField(),
    createLastUpdatedField(),
    createChangelogField(),
  ],
});
