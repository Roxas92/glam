import { createBodyField } from '../../../fields';
import { getPathForJob } from '../helpers';

export const createLandingPage = (job, folderPrefix) => ({
  label: 'Landing page',
  name: 'landing',
  file: `${folderPrefix}${getPathForJob(job)}/_index.md`,
  fields: [
    createBodyField(),
    { label: 'Job Name', name: 'job_name', widget: 'string' },
    {
      label: 'Header Image',
      name: 'header_image',
      widget: 'image',
      choose_url: false,
    },
    {
      label: 'Leveling Guide Image',
      name: 'leveling_guide_image',
      widget: 'image',
      choose_url: false,
      required: false,
    },
    {
      label: 'Basic Guide Image',
      name: 'basic_guide_image',
      widget: 'image',
      choose_url: false,
      required: false,
    },
    {
      label: 'Advanced Guide Image',
      name: 'advanced_guide_image',
      widget: 'image',
      choose_url: false,
      required: false,
    },
    {
      label: 'Fight Tips Image',
      name: 'fight_tips_image',
      widget: 'image',
      choose_url: false,
      required: false,
    },
    {
      label: 'Resources Image',
      name: 'resources_image',
      widget: 'image',
      choose_url: false,
      required: false,
    },
  ],
});
