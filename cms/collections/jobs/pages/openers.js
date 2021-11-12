import {
  createAuthorsField, createBodyField, createChangelogField, createLastUpdatedField, createPatchField, createThumbnailField,
} from '../../../fields';
import { getPathForJob } from '../helpers';

export const createOpeners = (job, folderPrefix) => ({
  label: 'Openers',
  name: 'openers',
  file: `${folderPrefix}${getPathForJob(job)}/openers.md`,
  fields: [
    createBodyField(),
    createThumbnailField(),
    createAuthorsField(),
    createPatchField(),
    createLastUpdatedField(),
    createChangelogField(),
  ],
});
