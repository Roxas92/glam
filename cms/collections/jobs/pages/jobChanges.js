import { createStaticLayoutField, createThumbnailField } from '../../../fields';
import { getPathForJob } from '../helpers';

export const createJobChanges = (job, folderPrefix) => ({
  label: 'Job Changes',
  name: 'job-changes',
  file: `${folderPrefix}${getPathForJob(job)}/job-changes.md`,
  fields: [
    createThumbnailField(),
    {
      label: 'Change',
      name: 'changes',
      widget: 'list',
      summary: '{{fields.patch}}',
      fields: [
        {
          label: 'Patch',
          name: 'patch',
          widget: 'string',
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'markdown',
        },
      ],
    },
    createStaticLayoutField('changes'),
  ],
});
