import {
  createAuthorsField, createBodyField, createChangelogField, createLastUpdatedField, createPatchField, createThumbnailField,
} from '../../../fields';
import { getPathForJob } from '../helpers';

export const createFightTips = (job, folderPrefix) => ({
  label: 'Fight tips',
  name: 'fight-tips',
  file: `${folderPrefix}${getPathForJob(job)}/fight-tips.md`,
  fields: [
    createBodyField(),
    createThumbnailField(),
    createAuthorsField(),
    createPatchField(),
    createLastUpdatedField(),
    createChangelogField(),
  ],
});
