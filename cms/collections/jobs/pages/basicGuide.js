import {
  createAuthorsField, createBodyField, createChangelogField, createLastUpdatedField, createPatchField, createThumbnailField,
} from '../../../fields';
import { getPathForJob } from '../helpers';

export const createBasicGuide = (job, folderPrefix) => ({
  label: 'Basic guide',
  name: 'basic-guide',
  file: `${folderPrefix}${getPathForJob(job)}/basic-guide.md`,
  fields: [
    createBodyField(),
    createThumbnailField(),
    createAuthorsField(),
    createPatchField(),
    createLastUpdatedField(),
    createChangelogField(),
  ],
});
