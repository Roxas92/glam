import { jobs } from '../../data/jobs';
import { createLandingPage } from './pages/landingPage';
import { createLevelingGuide } from './pages/levelingGuide';
import { createBasicGuide } from './pages/basicGuide';
import { createSkillsOverview } from './pages/skillsOverview';
import { createOpeners } from './pages/openers';
import { createFAQ } from './pages/faq';
import { createAdvancedGuide } from './pages/advancedGuide';
import { createBestInSlot } from './pages/bestInSlot';
import { createStatPriority } from './pages/statPriority';
import { createJobChanges } from './pages/jobChanges';
import { createFightTips } from './pages/fightTips';

const createJobCollection = (job, folderPrefix) => ({
  label: job.label,
  name: job.name,
  media_folder: `/${folderPrefix}static/img/jobs`,
  public_folder: '/img/jobs',
  files: [
    createLandingPage(job, folderPrefix),
    createLevelingGuide(job, folderPrefix),
    createBasicGuide(job, folderPrefix),
    createSkillsOverview(job, folderPrefix),
    createOpeners(job, folderPrefix),
    createFAQ(job, folderPrefix),
    createAdvancedGuide(job, folderPrefix),
    createBestInSlot(job, folderPrefix),
    createStatPriority(job, folderPrefix),
    createJobChanges(job, folderPrefix),
    createFightTips(job, folderPrefix),
    ...job.customFields,
  ],
});

export const createJobCollections = (folderPrefix = '') => jobs.map((job) => createJobCollection(job, folderPrefix));
