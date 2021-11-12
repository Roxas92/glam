import {
  createAuthorsField, createChangelogField, createLastUpdatedField, createPatchField, createStaticLayoutField, createThumbnailField,
} from '../../../fields';
import { getPathForJob } from '../helpers';

export const createFAQ = (job, folderPrefix) => ({
  label: 'Frequently Asked Questions',
  name: 'faq',
  file: `${folderPrefix}${getPathForJob(job)}/faq.md`,
  fields: [
    createPatchField(),
    createLastUpdatedField(),
    createThumbnailField(),
    createAuthorsField(),
    createChangelogField(),
    {
      label: 'FAQ Entry',
      name: 'qna',
      widget: 'list',
      summary: '{{fields.question}}: {{fields.answer}}',
      fields: [
        {
          label: 'Question',
          name: 'question',
          widget: 'string',
        },
        {
          label: 'Answer',
          name: 'answer',
          widget: 'markdown',
        },
      ],
    },
    createStaticLayoutField('qna'),
  ],
});
