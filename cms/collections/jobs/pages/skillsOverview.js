import {
  createAuthorsField, createBodyField, createChangelogField, createLastUpdatedField, createPatchField, createThumbnailField,
} from '../../../fields';
import { getPathForJob } from '../helpers';

export const createSkillsOverview = (job, folderPrefix) => ({
  label: 'Skills overview',
  name: 'skills-overview',
  file: `${folderPrefix}${getPathForJob(job)}/skills-overview.md`,
  fields: [
    createBodyField(),
    createThumbnailField(),
    createAuthorsField(),
    createPatchField(),
    createLastUpdatedField(),
    createChangelogField(),
  ],
});
