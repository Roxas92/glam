import {
  createAuthorsField, createBodyField, createChangelogField, createLastUpdatedField, createPatchField, createThumbnailField,
} from '../../../fields';
import { getPathForJob } from '../helpers';

export const createLevelingGuide = (job, folderPrefix) => ({
  label: 'Leveling Guide',
  name: 'leveling-guide',
  file: `${folderPrefix}${getPathForJob(job)}/leveling-guide.md`,
  fields: [
    createBodyField(),
    createThumbnailField(),
    createAuthorsField(),
    createPatchField(),
    createLastUpdatedField(),
    createChangelogField(),
  ],
});
