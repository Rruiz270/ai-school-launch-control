// AI School Brazil - Complete Project Management Data
// AI School Brazil - Comprehensive Project Data (Updated with Alpha School Research & Financial Model)
export const PROJECT_DATA = {
  workstreams: [
    {
      id: 'funding',
      name: 'Funding & Finance',
      color: '#10B981', // green
      lead: 'Raphael Ruiz',
      icon: 'DollarSign',
      status: 'active',
      tasks: [
        {
          id: 'f1',
          title: 'Finalize investor pitch deck',
          status: 'in-progress',
          priority: 'critical',
          dueDate: '2025-08-30',
          assignee: 'Raphael',
          progress: 75,
          subtasks: [
            { id: 'f1.1', title: 'Update financial projections', completed: true },
            { id: 'f1.2', title: 'Add competitor analysis (Alpha School)', completed: true },
            { id: 'f1.3', title: 'Create executive summary', completed: false },
            { id: 'f1.4', title: 'Design pitch deck', completed: false }
          ]
        },
        {
          id: 'f2',
          title: 'Series A roadshow',
          status: 'not-started',
          priority: 'critical',
          dueDate: '2025-10-15',
          assignee: 'Raphael',
          progress: 0,
          subtasks: [
            { id: 'f2.1', title: 'Target 20 investors', completed: false },
            { id: 'f2.2', title: 'Schedule meetings', completed: false },
            { id: 'f2.3', title: 'Due diligence preparation', completed: false }
          ]
        },
        {
          id: 'f3',
          title: 'Close R$20M funding',
          status: 'not-started',
          priority: 'critical',
          dueDate: '2025-11-15',
          assignee: 'Raphael',
          progress: 0,
          milestone: true
        },
        {
          id: 'f4',
          title: 'Setup financial controls',
          status: 'not-started',
          priority: 'high',
          dueDate: '2025-11-30',
          assignee: 'CFO (TBH)',
          progress: 0
        }
      ]
    },
    {
      id: 'construction',
      name: 'Construction & Infrastructure',
      color: '#F59E0B', // orange
      lead: 'TBD - Head of Operations',
      icon: 'Building2',
      status: 'planning',
      tasks: [
        {
          id: 'c1',
          title: 'Architect selection process',
          status: 'urgent',
          priority: 'critical',
          dueDate: '2025-09-15',
          assignee: 'Raphael',
          progress: 20,
          subtasks: [
            { id: 'c1.1', title: 'Create RFP document', completed: false },
            { id: 'c1.2', title: 'Identify 5 architecture firms', completed: false },
            { id: 'c1.3', title: 'Site visits with architects', completed: false },
            { id: 'c1.4', title: 'Select architect', completed: false }
          ]
        },
        {
          id: 'c2',
          title: 'Finalize Rio government building',
          status: 'in-progress',
          priority: 'critical',
          dueDate: '2025-09-30',
          assignee: 'Raphael',
          progress: 60,
          subtasks: [
            { id: 'c2.1', title: 'Legal review of agreement', completed: true },
            { id: 'c2.2', title: 'Building inspection', completed: false },
            { id: 'c2.3', title: 'Sign 30-year agreement', completed: false }
          ]
        },
        {
          id: 'c3',
          title: 'Construction permits',
          status: 'not-started',
          priority: 'high',
          dueDate: '2025-11-15',
          assignee: 'Architect',
          progress: 0
        },
        {
          id: 'c4',
          title: 'Begin renovation',
          status: 'not-started',
          priority: 'critical',
          dueDate: '2025-12-01',
          assignee: 'Contractor',
          progress: 0,
          milestone: true
        },
        {
          id: 'c5',
          title: 'Complete construction',
          status: 'not-started',
          priority: 'critical',
          dueDate: '2026-10-30',
          assignee: 'Contractor',
          progress: 0,
          milestone: true
        }
      ]
    },
    {
      id: 'technology',
      name: 'Technology & Platform',
      color: '#3B82F6', // blue
      lead: 'Jay (Harvard)',
      icon: 'Laptop',
      status: 'active',
      tasks: [
        {
          id: 't1',
          title: 'Assemble tech team',
          status: 'in-progress',
          priority: 'critical',
          dueDate: '2025-09-30',
          assignee: 'Jay',
          progress: 40,
          subtasks: [
            { id: 't1.1', title: 'Hire lead architect', completed: false },
            { id: 't1.2', title: 'Hire 3 senior developers', completed: false },
            { id: 't1.3', title: 'Hire UI/UX designer', completed: false },
            { id: 't1.4', title: 'Hire AI/ML engineer', completed: false }
          ]
        },
        {
          id: 't2',
          title: 'Platform architecture design (INCEPT/TIMEBACK model)',
          status: 'in-progress',
          priority: 'critical',
          dueDate: '2025-10-31',
          assignee: 'Jay + Team',
          progress: 25,
          subtasks: [
            { id: 't2.1', title: 'BNCC curriculum mapping', completed: false },
            { id: 't2.2', title: 'AI integration strategy (Multi-LLM orchestration)', completed: true },
            { id: 't2.3', title: 'System architecture doc (Alpha School model adaptation)', completed: false },
            { id: 't2.4', title: 'Vision monitoring system design', completed: false },
            { id: 't2.5', title: 'Anti-pattern detection algorithms', completed: false }
          ]
        },
        {
          id: 't3',
          title: 'MVP development - Core AI Tutoring (Brazilian INCEPT)',
          status: 'not-started',
          priority: 'critical',
          dueDate: '2026-03-31',
          assignee: 'Tech Team',
          progress: 0,
          subtasks: [
            { id: 't3.1', title: 'Multi-LLM integration (GPT-4, Claude, Gemini)', completed: false },
            { id: 't3.2', title: 'Portuguese language optimization', completed: false },
            { id: 't3.3', title: 'BNCC curriculum prompts', completed: false },
            { id: 't3.4', title: 'Mastery-based progression (90%+ requirement)', completed: false },
            { id: 't3.5', title: 'Personalization engine', completed: false }
          ]
        },
        {
          id: 't4',
          title: 'TIMEBACK Operating System - Parent & Guide Portals',
          status: 'not-started',
          priority: 'high',
          dueDate: '2026-06-30',
          assignee: 'Tech Team',
          progress: 0,
          subtasks: [
            { id: 't4.1', title: 'Parent progress monitoring dashboard', completed: false },
            { id: 't4.2', title: 'Guide intervention system', completed: false },
            { id: 't4.3', title: 'Real-time behavior analysis', completed: false },
            { id: 't4.4', title: 'App store ecosystem setup', completed: false }
          ]
        },
        {
          id: 't5',
          title: 'Platform ready for launch',
          status: 'not-started',
          priority: 'critical',
          dueDate: '2026-11-30',
          assignee: 'Tech Team',
          progress: 0,
          milestone: true
        }
      ]
    },
    {
      id: 'education',
      name: 'Educational Model',
      color: '#8B5CF6', // purple
      lead: 'Whitney + Harvard Team',
      icon: 'GraduationCap',
      status: 'planning',
      tasks: [
        {
          id: 'e1',
          title: 'Brazilian Life Skills Curriculum (24 Skills + Alpha Model)',
          status: 'in-progress',
          priority: 'high',
          dueDate: '2025-10-31',
          assignee: 'Whitney',
          progress: 15,
          subtasks: [
            { id: 'e1.1', title: 'Map Alpha School 24 life skills to age groups', completed: true },
            { id: 'e1.2', title: 'Design Brazilian workshop adaptations', completed: false },
            { id: 'e1.3', title: 'Triathlon workshop (Rubik\'s + juggling + running)', completed: false },
            { id: 'e1.4', title: 'Entrepreneurship programs (Airbnb, business sims)', completed: false },
            { id: 'e1.5', title: 'Gaming with Grit workshops', completed: false },
            { id: 'e1.6', title: 'HypeSquad team building system', completed: false }
          ]
        },
        {
          id: 'e2',
          title: 'BNCC compliance documentation',
          status: 'not-started',
          priority: 'critical',
          dueDate: '2025-11-30',
          assignee: 'Education Consultant',
          progress: 0
        },
        {
          id: 'e3',
          title: 'AI Guide Training Program (Alpha School Model)',
          status: 'not-started',
          priority: 'high',
          dueDate: '2026-03-31',
          assignee: 'Whitney',
          progress: 0,
          subtasks: [
            { id: 'e3.1', title: 'Sports/performance background recruitment', completed: false },
            { id: 'e3.2', title: 'Daily 1-on-1 meeting protocols', completed: false },
            { id: 'e3.3', title: 'Motivation and high standards training', completed: false },
            { id: 'e3.4', title: 'R$100k+ compensation structure', completed: false }
          ]
        },
        {
          id: 'e4',
          title: 'Bilingual program structure',
          status: 'not-started',
          priority: 'medium',
          dueDate: '2026-04-30',
          assignee: 'Whitney',
          progress: 0
        }
      ]
    },
    {
      id: 'hiring',
      name: 'Hiring & Training',
      color: '#EC4899', // pink
      lead: 'Head of School (TBH)',
      icon: 'Users',
      status: 'planning',
      tasks: [
        {
          id: 'h1',
          title: 'Hire Head of School',
          status: 'urgent',
          priority: 'critical',
          dueDate: '2025-10-31',
          assignee: 'Raphael',
          progress: 0,
          subtasks: [
            { id: 'h1.1', title: 'Define role & compensation', completed: false },
            { id: 'h1.2', title: 'Executive search firm', completed: false },
            { id: 'h1.3', title: 'Interview top 5 candidates', completed: false }
          ]
        },
        {
          id: 'h2',
          title: 'Core leadership team',
          status: 'not-started',
          priority: 'high',
          dueDate: '2025-12-31',
          assignee: 'Head of School',
          progress: 0,
          subtasks: [
            { id: 'h2.1', title: 'Academic Director', completed: false },
            { id: 'h2.2', title: 'Operations Director', completed: false },
            { id: 'h2.3', title: 'Technology Director', completed: false },
            { id: 'h2.4', title: 'Marketing Director', completed: false }
          ]
        },
        {
          id: 'h3',
          title: 'Hire 50 AI guides',
          status: 'not-started',
          priority: 'critical',
          dueDate: '2026-06-30',
          assignee: 'HR Director',
          progress: 0
        },
        {
          id: 'h4',
          title: 'Life skills specialists',
          status: 'not-started',
          priority: 'high',
          dueDate: '2026-07-31',
          assignee: 'HR Director',
          progress: 0,
          subtasks: [
            { id: 'h4.1', title: 'Sports coaches (5)', completed: false },
            { id: 'h4.2', title: 'Arts instructors (3)', completed: false },
            { id: 'h4.3', title: 'Engineering/Maker (2)', completed: false },
            { id: 'h4.4', title: 'Cooking chef (2)', completed: false },
            { id: 'h4.5', title: 'Music teachers (2)', completed: false }
          ]
        },
        {
          id: 'h5',
          title: 'Complete staff training',
          status: 'not-started',
          priority: 'critical',
          dueDate: '2026-12-15',
          assignee: 'Whitney',
          progress: 0,
          milestone: true
        }
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing & Enrollment',
      color: '#EF4444', // red
      lead: 'Marketing Director (TBH)',
      icon: 'Megaphone',
      status: 'planning',
      tasks: [
        {
          id: 'm1',
          title: 'Brand identity finalization',
          status: 'urgent',
          priority: 'high',
          dueDate: '2025-09-30',
          assignee: 'Raphael',
          progress: 30,
          subtasks: [
            { id: 'm1.1', title: 'Select brand name', completed: false },
            { id: 'm1.2', title: 'Logo design', completed: false },
            { id: 'm1.3', title: 'Brand guidelines', completed: false },
            { id: 'm1.4', title: 'Trademark registration', completed: false }
          ]
        },
        {
          id: 'm2',
          title: 'Marketing website launch',
          status: 'not-started',
          priority: 'high',
          dueDate: '2025-12-31',
          assignee: 'Marketing Team',
          progress: 0
        },
        {
          id: 'm3',
          title: 'Soft marketing campaign',
          status: 'not-started',
          priority: 'high',
          dueDate: '2026-01-15',
          assignee: 'Marketing Director',
          progress: 0,
          milestone: true
        },
        {
          id: 'm4',
          title: 'Campus preview tours',
          status: 'not-started',
          priority: 'critical',
          dueDate: '2026-08-01',
          assignee: 'Marketing Team',
          progress: 0,
          milestone: true
        },
        {
          id: 'm5',
          title: 'Aggressive marketing launch',
          status: 'not-started',
          priority: 'critical',
          dueDate: '2026-08-15',
          assignee: 'Marketing Director',
          progress: 0,
          milestone: true
        },
        {
          id: 'm6',
          title: 'Achieve 750 Year 1 enrollments (1,500 Year 2 target)',
          status: 'not-started',
          priority: 'critical',
          dueDate: '2026-12-31',
          assignee: 'Marketing Director',
          progress: 0,
          milestone: true,
          kpi: { target: 750, current: 0, unit: 'students' },
          subtasks: [
            { id: 'm6.1', title: 'São Paulo/Rio location final decision', completed: false },
            { id: 'm6.2', title: 'Premium family targeting (R$10K+ income)', completed: false },
            { id: 'm6.3', title: 'R$2,500/month competitive positioning', completed: false }
          ]
        }
      ]
    },
    {
      id: 'regulatory',
      name: 'Regulatory & Compliance',
      color: '#6B7280', // gray
      lead: 'Legal/Compliance Director',
      icon: 'Shield',
      status: 'active',
      tasks: [
        {
          id: 'r1',
          title: 'Municipal education license',
          status: 'not-started',
          priority: 'critical',
          dueDate: '2026-06-30',
          assignee: 'Legal Team',
          progress: 0,
          subtasks: [
            { id: 'r1.1', title: 'Prepare documentation', completed: false },
            { id: 'r1.2', title: 'Submit application', completed: false },
            { id: 'r1.3', title: 'Site inspection', completed: false },
            { id: 'r1.4', title: 'License approval', completed: false }
          ]
        },
        {
          id: 'r2',
          title: 'Safety certifications',
          status: 'not-started',
          priority: 'high',
          dueDate: '2026-11-30',
          assignee: 'Operations',
          progress: 0
        },
        {
          id: 'r3',
          title: 'BNCC approval',
          status: 'not-started',
          priority: 'critical',
          dueDate: '2026-10-31',
          assignee: 'Academic Director',
          progress: 0
        }
      ]
    },
    {
      id: 'operations',
      name: 'Operations Setup',
      color: '#14B8A6', // teal
      lead: 'Operations Director',
      icon: 'Settings',
      status: 'planning',
      tasks: [
        {
          id: 'o1',
          title: 'Technology infrastructure',
          status: 'not-started',
          priority: 'critical',
          dueDate: '2026-11-30',
          assignee: 'IT Team',
          progress: 0,
          subtasks: [
            { id: 'o1.1', title: 'Network installation', completed: false },
            { id: 'o1.2', title: 'Computer lab setup', completed: false },
            { id: 'o1.3', title: 'Security systems', completed: false },
            { id: 'o1.4', title: 'Student devices procurement', completed: false }
          ]
        },
        {
          id: 'o2',
          title: 'Furniture & equipment',
          status: 'not-started',
          priority: 'high',
          dueDate: '2026-12-15',
          assignee: 'Operations',
          progress: 0
        },
        {
          id: 'o3',
          title: 'Food service setup',
          status: 'not-started',
          priority: 'medium',
          dueDate: '2026-12-20',
          assignee: 'Operations',
          progress: 0
        },
        {
          id: 'o4',
          title: 'Transportation planning',
          status: 'not-started',
          priority: 'medium',
          dueDate: '2026-12-01',
          assignee: 'Operations',
          progress: 0
        }
      ]
    }
  ],
  
  milestones: [
    { id: 'm1', title: 'Series A Funding Secured (R$20M)', date: '2025-11-15', status: 'pending', critical: true },
    { id: 'm2', title: 'Government Building Partnership Finalized', date: '2025-12-01', status: 'pending', critical: true },
    { id: 'm3', title: 'Harvard Tech Team Complete (Jay + 4)', date: '2025-10-31', status: 'pending', critical: false },
    { id: 'm4', title: 'Head of School Hired', date: '2025-10-31', status: 'pending', critical: true },
    { id: 'm5', title: 'Brand Identity & Website Live', date: '2025-12-31', status: 'pending', critical: false },
    { id: 'm6', title: 'INCEPT MVP Platform Ready', date: '2026-03-31', status: 'pending', critical: true },
    { id: 'm7', title: 'TIMEBACK Operating System Live', date: '2026-06-30', status: 'pending', critical: true },
    { id: 'm8', title: '24 Life Skills Curriculum Complete', date: '2026-05-31', status: 'pending', critical: false },
    { id: 'm9', title: 'Campus Tours Begin (750 target)', date: '2026-08-01', status: 'pending', critical: true },
    { id: 'm10', title: 'Construction Complete (São Paulo/Rio)', date: '2026-10-30', status: 'pending', critical: true },
    { id: 'm11', title: '750 Students Enrolled Year 1', date: '2026-12-31', status: 'pending', critical: true },
    { id: 'm12', title: 'AI School Brazil Opens! (2x Learning in 2 Hours)', date: '2027-01-15', status: 'pending', critical: true },
    { id: 'm13', title: 'Franchise Development Program Launch', date: '2027-06-30', status: 'pending', critical: false },
    { id: 'm14', title: 'Technology Adoption Licensing (25K students)', date: '2027-12-31', status: 'pending', critical: false }
  ],
  
  risks: [
    {
      id: 'risk1',
      title: 'Funding Delay',
      probability: 'medium',
      impact: 'critical',
      mitigation: 'Multiple investor conversations, bridge funding options',
      owner: 'Raphael'
    },
    {
      id: 'risk2',
      title: 'Construction Delays',
      probability: 'medium',
      impact: 'high',
      mitigation: 'Penalty clauses, backup contractors, buffer time',
      owner: 'Operations Director'
    },
    {
      id: 'risk3',
      title: 'INCEPT/TIMEBACK Platform Not Ready',
      probability: 'low',
      impact: 'critical',
      mitigation: 'Harvard team expertise, Alpha School proven model, phased launch with basic AI first',
      owner: 'Jay'
    },
    {
      id: 'risk4',
      title: 'Low Initial Enrollment (750 target)',
      probability: 'medium',
      impact: 'high',
      mitigation: 'Premium positioning at R$2,500/month, São Paulo/Rio location advantage, 2x learning proof',
      owner: 'Marketing Director'
    },
    {
      id: 'risk5',
      title: 'Regulatory Approval Delays',
      probability: 'low',
      impact: 'critical',
      mitigation: 'Early engagement with authorities, expert consultants, government building partnership advantage',
      owner: 'Legal Team'
    },
    {
      id: 'risk6',
      title: 'Competition from Traditional Schools',
      probability: 'high',
      impact: 'medium',
      mitigation: 'First-mover advantage, proven Alpha School results, unique 2x learning value proposition',
      owner: 'Marketing Director'
    },
    {
      id: 'risk7',
      title: 'Parent Skepticism of AI Education',
      probability: 'medium',
      impact: 'high',
      mitigation: 'Transparent demo programs, Alpha School success stories, guide human touch emphasis',
      owner: 'Head of School'
    }
  ],
  
  kpis: [
    { id: 'kpi1', name: 'Series A Funding Progress', current: 0, target: 20000000, unit: 'R$', description: 'R$20M for flagship + technology + public pilot' },
    { id: 'kpi2', name: 'Year 1 Students Enrolled', current: 0, target: 750, unit: 'students', description: '750 Year 1, 1,500 Year 2 target' },
    { id: 'kpi3', name: 'Core Team Hired', current: 3, target: 70, unit: 'people', description: 'Harvard team + 50 AI guides + specialists' },
    { id: 'kpi4', name: 'Construction Progress', current: 0, target: 100, unit: '%', description: 'São Paulo/Rio flagship school' },
    { id: 'kpi5', name: 'INCEPT Platform Development', current: 15, target: 100, unit: '%', description: 'AI tutoring + TIMEBACK system' },
    { id: 'kpi6', name: 'Premium Family Reach', current: 0, target: 50000, unit: 'families', description: 'R$10K+ income demographic' },
    { id: 'kpi7', name: '24 Life Skills Curriculum', current: 10, target: 100, unit: '%', description: 'Brazilian adaptation of Alpha model' },
    { id: 'kpi8', name: 'Government Partnership', current: 60, target: 100, unit: '%', description: 'Building agreement finalization' },
    { id: 'kpi9', name: 'Technology Adoption Pipeline', current: 0, target: 25000, unit: 'students', description: 'Year 1 licensing revenue stream' }
  ]
};

// Helper functions
export const getTasksByStatus = (status) => {
  const tasks = [];
  PROJECT_DATA.workstreams.forEach(workstream => {
    workstream.tasks.forEach(task => {
      if (task.status === status) {
        tasks.push({ ...task, workstreamId: workstream.id, workstreamName: workstream.name, workstreamColor: workstream.color });
      }
    });
  });
  return tasks;
};

export const getUpcomingDeadlines = (days = 30) => {
  const tasks = [];
  const today = new Date();
  const futureDate = new Date(today.getTime() + days * 24 * 60 * 60 * 1000);
  
  PROJECT_DATA.workstreams.forEach(workstream => {
    workstream.tasks.forEach(task => {
      const taskDate = new Date(task.dueDate);
      if (taskDate >= today && taskDate <= futureDate) {
        tasks.push({ 
          ...task, 
          workstreamId: workstream.id, 
          workstreamName: workstream.name, 
          workstreamColor: workstream.color,
          daysUntilDue: Math.ceil((taskDate - today) / (1000 * 60 * 60 * 24))
        });
      }
    });
  });
  
  return tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
};

export const calculateOverallProgress = () => {
  let totalTasks = 0;
  let totalProgress = 0;
  
  PROJECT_DATA.workstreams.forEach(workstream => {
    workstream.tasks.forEach(task => {
      totalTasks++;
      totalProgress += task.progress;
    });
  });
  
  return totalTasks > 0 ? Math.round(totalProgress / totalTasks) : 0;
};