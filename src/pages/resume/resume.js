export default {
  basics: {
    name: 'Travis Nesland',
    label: 'Software Developer',
    picture: 'https://avatars0.githubusercontent.com/u/65454?s=400&v=4',
    email: 'tnesland@gmail.com',
    phone: '(859) 955-0007',
    location: {
      address: '965 Dills Bluff Road',
      postalCode: 'SC 29412',
      city: 'Charleston',
      countryCode: 'US',
      region: 'South Carolina'
    },
    profiles: [
      {
        network: 'Github',
        username: 'tnez',
        url: 'https://www.github.com/tnez'
      },
      {
        network: 'LinkedIn',
        username: 'tnesland',
        url: 'https://www.linkedin.com/in/tnesland'
      },
      {
        network: 'Google Scholar',
        username: 'Travis Nesland',
        url: 'https://scholar.google.com/citations?user=R2m4jbUAAAAJ&hl'
      }
    ],
    summary: 'I am a polyglot developer who gets excited about new ideas and the opportunity to learn. The one constant I have found, is that every project presents some new wrinkle and the best quality I can bring as a developer is the ability to learn quickly and generalize past experience to new paradigms.',
    website: 'http://tnesland.me'
  },
  work: [
    {
      company: 'Farlab',
      position: 'Co-founder, Lead Developer',
      website: 'https://www.farlabhq.com',
      startDate: '2017-07-01',
      summary: 'Co-founder and developer of a platform to provide a transactional, on-demand manufacturing that scales from zero, reducing barrier of entry to the market for physical products.',
      highlights: [
        'Developed an interface to visualize and price 3D CAD models',
        'Currently developing platform to enable on-demand manufacturing and order fulfillment of physical goods'
      ]
    },
    {
      company: 'EZWaves / SearchBookGo',
      position: 'Sr. Software Developer',
      website: 'http://www.ezwaves.net',
      startDate: '2017-05-01',
      endDate: '2017-08-31',
      summary: 'Sr. Developer to a small product team (5 developers and one product manager) responsible for building out the admin and scheduling interface driving an activities booking platform. Left due to funding constraints, but proud of the team we had assembled.',
      highlights: [
        'Provided guidance, feedback, and knowledge to junior and mid-level devs',
        'Built scheduling logic with respect to capacity and resource availability'
      ]
    },
    {
      company: 'Canopy',
      position: 'Software Developer (Lead from Mar 2016 forward)',
      website: 'https://www.canopylawncare.com',
      startDate: '2015-10-01',
      endDate: '2017-04-14',
      summary: 'Developed platform that handled billing, customer communication, and scheduling for a tech-forward landscaping company based out of Raleigh, NC.',
      highlights: [
        'Achieved a median customer response time of less than 15 minutes by consolidating all customer communication in single interface for our customer service team',
        'Routed all SMS communication through Intercom via Twilio',
        'Developed a custom invoicing solution for recurring service',
        'Developed a custom reporting layer, syncing invoicing data with QuickbooksOnline',
        'Implemented optional SMS notifications prior to and upon completion of service appointments, with completion notifications including links to service reports',
        'Helped grow yearly revenue by a factor of 7x from 4.2K to 2.9M'
      ]
    },
    {
      company: 'Medical University of South Carolina',
      position: 'Software Developer, Data-Analyst',
      website: 'https://academicdepartments.musc.edu/research',
      startDate: '2011-09-01',
      endDate: '2015-01-01',
      summary: 'Developed custom software to process and analyze images of the human brain.',
      highlights: [
        'Presented research findings as poster at 2012 Society for Neuroscience conference',
        'Developed custom software for extracting relevant metrics from tractography results - used by a small number of neuroscience research groups',
        'Contributing author to more than 15 peer-reviewed, published research articles'
      ]
    }
  ],
  publications: [
    {
      name: 'Evaluation of machine learning algorithms for treatment outcome prediction in patients with epilepsy based on structural connectome data',
      publisher: 'Neuroimage',
      releaseDate: '2015-09',
      website: 'https://www.ncbi.nlm.nih.gov/pubmed/26054876'
    },
    {
      name: 'Mapping remote subcortical ramifications of injury after ischemic strokes',
      publisher: 'Behavioral Neurology',
      releaseDate: '2014-04',
      website: 'https://www.ncbi.nlm.nih.gov/pubmed/24868120'
    },
    {
      name: 'Presurgical connectome and postsurgical seizure control in temporal lobe epilepsy',
      publisher: 'Neurology',
      releaseDate: '2013-11',
      website: 'https://www.ncbi.nlm.nih.gov/pubmed/24107863'
    },
    {
      name: 'Medial temporal lobe epilepsy is associated with neuronal fibre loss and paradoxical increase in structural connectivity of limbic structures',
      publisher: 'Journal Neurology, Nuerosurgery, and Psychiatry',
      releaseDate: '2012-09',
      website: 'https://www.ncbi.nlm.nih.gov/pubmed/22764263'
    }
  ],
  skills: [
    {
      name: 'Web & Application Development',
      keywords: [
        'javascript',
        'ES6/7/8',
        'react',
        'react-native',
        'redux',
        'd3'
      ]
    },
    {
      name: 'Platform Development',
      keywords: [
        'node',
        'express',
        'micro',
        'ruby',
        'roda',
        'sequel-orm',
        'postgresql',
        'pouchdb'
      ]
    },
    {
      name: 'Data Analysis',
      keywords: [
        'R',
        'ggplot',
        'python',
        'scipy',
        'numpy',
        'tensorflow'
      ]
    }
  ]
}
