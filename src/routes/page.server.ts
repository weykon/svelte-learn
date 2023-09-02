import jobs from '../data/jobs.json';

import type { JobsList } from '../models';

const job_list: JobsList = jobs;

export const load = (()=> {
    return {
        job_list
    }
})