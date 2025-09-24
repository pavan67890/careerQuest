export type RoadmapItem = {
  title: string;
  children?: RoadmapItem[];
};

export const after10th: RoadmapItem[] = [
  {
    title: "Science Stream",
    children: [
      {
        title: "PCMB (Physics, Chemistry, Maths, Biology)",
        children: [
          { title: "Engineering (B.E./B.Tech)" },
          { title: "Medical (MBBS, BDS, BAMS)" },
          { title: "Pharmacy (B.Pharm)" },
          { title: "Architecture (B.Arch)" },
          { title: "Biotechnology" },
        ],
      },
      {
        title: "PCM (Physics, Chemistry, Maths)",
        children: [
          { title: "Engineering (B.E./B.Tech)" },
          { title: "BSc in Maths/Physics/Chemistry" },
          { title: "Commercial Pilot License" },
          { title: "National Defence Academy (NDA)" },
        ],
      },
      {
        title: "PCB (Physics, Chemistry, Biology)",
        children: [
          { title: "Medical (MBBS, BDS, BAMS)" },
          { title: "Veterinary Science (B.V.Sc)" },
          { title: "Physiotherapy (BPT)" },
        ],
      },
       {
        title: "Computer Science",
        children: [
            { title: "Software Development courses" },
            { title: "Web Development" },
            { title: "Data Science basics" }
        ]
      }
    ],
  },
  {
    title: "Commerce Stream",
    children: [
      {
        title: "With Maths",
        children: [
          { title: "B.Com (Hons.)" },
          { title: "B.A. (Hons.) in Economics" },
          { title: "Chartered Accountancy (CA)" },
          { title: "Company Secretary (CS)" },
          { title: "BBA/BMS" },
        ],
      },
      {
        title: "Without Maths",
        children: [
          { title: "B.Com" },
          { title: "BBA (Bachelor of Business Administration)" },
          { title: "Journalism and Mass Communication" },
        ],
      },
    ],
  },
  {
    title: "Arts/Humanities Stream",
    children: [
      { title: "Psychology" },
      { title: "Sociology" },
      { title: "History" },
      { title: "Political Science" },
      { title: "Fine Arts" },
      { title: "Literature" },
      { title: "Law (Integrated B.A. LLB)" },
    ],
  },
  {
    title: "Polytechnic Diploma",
    children: [
      { title: "Diploma in Mechanical Engineering" },
      { title: "Diploma in Civil Engineering" },
      { title: "Diploma in Electrical Engineering" },
      { title: "Diploma in Computer Science" },
    ],
  },
  {
    title: "ITI (Industrial Training Institute)",
    children: [
      { title: "Electrician" },
      { title: "Fitter" },
      { title: "Welder" },
      { title: "Plumber" },
    ],
  },
  {
    title: "Paramedical Courses",
    children: [
      { title: "Diploma in Medical Laboratory Technology (DMLT)" },
      { title: "Diploma in Operation Theatre Technology (DOTT)" },
      { title: "Diploma in X-Ray Technology" },
    ],
  },
];


export const after12th: RoadmapItem[] = [
  {
    title: "Engineering (B.E./B.Tech)",
    children: [
      {
        title: "Computer Science & Engineering",
        children: [
          {
            title: "Software Development",
            children: [
              { 
                title: "Frontend Developer",
                children: [
                  { title: "Learn HTML, CSS, JavaScript" },
                  { title: "Learn React/Angular/Vue.js" },
                  { title: "Build Projects" },
                  { title: "Senior Frontend Role" },
                ]
              },
              { 
                title: "Backend Developer",
                children: [
                  { title: "Learn Python/Java/Node.js" },
                  { title: "Learn Databases (SQL/NoSQL)" },
                  { title: "Build APIs" },
                  { title: "Senior Backend Role" },
                ]
              },
              { 
                title: "Full Stack Developer",
                children: [
                  { title: "Master Frontend & Backend" },
                  { title: "Learn DevOps" },
                  { title: "Lead Full Stack Role" },
                ]
               },
              { title: "M.Tech in Software Engineering" },
            ],
          },
          {
            title: "AI & Machine Learning",
            children: [
              { 
                title: "Data Scientist",
                children: [
                  { title: "Learn Python & R" },
                  { title: "Statistics & Probability" },
                  { title: "ML Algorithms" },
                  { title: "Senior Data Scientist" },
                ]
              },
              { 
                title: "ML Engineer",
                children: [
                  { title: "Build & Deploy ML Models" },
                  { title: "Learn MLOps" },
                  { title: "Lead ML Engineer" },
                ]
               },
              { title: "Research in AI" },
            ],
          },
          {
            title: "Cybersecurity",
            children: [
              { title: "Security Analyst" },
              { title: "Ethical Hacker (CEH)" },
              { title: "Cybersecurity Consultant" },
              { title: "Chief Information Security Officer (CISO)" },
            ],
          },
          {
            title: "Data Science",
            children: [
              { title: "Data Analyst" },
              { title: "Business Analyst" },
              { title: "Data Engineer" },
              { title: "Chief Data Officer (CDO)" }
            ]
          }
        ],
      },
      {
        title: "Mechanical Engineering",
        children: [
          { title: "Automotive Industry" },
          { title: "Aerospace Industry" },
          { title: "Robotics" },
          { title: "M.Tech in Mechanical Design" },
          { title: "PhD in Robotics" }
        ],
      },
      {
        title: "Electrical Engineering",
        children: [
          { title: "Power Systems" },
          { title: "Electronics Design" },
          { title: "VLSI Design" },
          { title: "Telecommunications" },
          { title: "M.Tech in Power Electronics" }
        ],
      },
       {
        title: "Civil Engineering",
        children: [
          { title: "Structural Engineer" },
          { title: "Construction Management" },
          { title: "Urban Planning" },
          { title: "Environmental Engineer" },
          { title: "M.Tech in Structural Engineering" }
        ],
      },
    ],
  },
  {
    title: "Medical (MBBS)",
    children: [
      {
        title: "MD/MS (Post Graduation)",
        children: [
          {
            title: "Cardiology",
            children: [
                { title: "Super Specialization (DM)" },
                { title: "Interventional Cardiologist" },
            ],
          },
          { title: "Neurology" },
          { title: "General Surgery" },
          { title: "Pediatrics" },
          { title: "Oncology" },
          { title: "Radiology" }
        ],
      },
      { title: "Clinical Practice" },
      { title: "Medical Research" },
      { title: "Hospital Administration (MHA)" },
      { title: "Civil Services (Medical Officer)" }
    ],
  },
  {
    title: "Bachelor of Science (B.Sc)",
    children: [
      {
        title: "B.Sc in Physics/Chemistry/Maths",
        children: [
          { title: "M.Sc" },
          { title: "Research (PhD)" },
          { title: "Teaching (B.Ed)" },
          { title: "Data Science" }
        ],
      },
      {
        title: "B.Sc in Computer Science",
        children: [
          { title: "MCA (Master of Computer Applications)" },
          { title: "Software Developer" },
          { title: "M.Sc in CS" },
          { title: "MBA in IT" }
        ],
      },
      {
        title: "B.Sc in Biotechnology",
        children: [
          { title: "M.Sc in Biotechnology" },
          { title: "Jobs in Pharma/Biotech companies" },
          { title: "Research Scientist" }
        ],
      },
      {
        title: "B.Sc in Agriculture",
        children: [
            { title: "M.Sc in Agriculture" },
            { title: "Agricultural Scientist" },
            { title: "Jobs in Agri-business" }
        ]
      }
    ],
  },
  {
    title: "Commerce & Finance (B.Com/BBA)",
    children: [
      {
        title: "Chartered Accountancy (CA)",
        children: [
            { title: "Practice as CA" }, 
            { title: "Work in Corporate Finance" },
            { title: "Forensic Auditing" }
        ],
      },
      {
        title: "MBA",
        children: [
          { title: "Marketing" },
          { title: "Finance" },
          { title: "Human Resources" },
          { title: "Operations" },
          { title: "International Business" }
        ],
      },
      {
        title: "Investment Banking",
        children: [{ title: "Analyst" }, { title: "Associate" }, { title: "Portfolio Manager" }],
      },
      { title: "Company Secretary (CS)" },
      { title: "Cost and Management Accountant (CMA)" },
      { title: "Certified Financial Planner (CFP)" }
    ],
  },
  {
    title: "Arts & Humanities (B.A.)",
    children: [
      {
        title: "Civil Services (UPSC/State PSC)",
        children: [{ title: "IAS/IPS/IFS Officer" }, { title: "Group A/B Officer" }],
      },
      {
        title: "Journalism and Mass Communication",
        children: [{ title: "Reporter" }, { title: "Editor" }, { title: "Public Relations" }, { title: "Digital Marketing" }],
      },
      {
        title: "Law (LLB)",
        children: [{ title: "Corporate Lawyer" }, { title: "Litigation" }, { title: "Judiciary" }, { title: "LLM" }],
      },
      {
        title: "MA in subject of choice",
        children: [{ title: "Professor" }, { title: "Researcher (PhD)" }, { title: "Content Writer/Editor" }],
      },
      {
          title: "Psychology",
          children: [
              { title: "Clinical Psychologist (M.Phil)" },
              { title: "Counselor" },
              { title: "Organizational Psychologist" }
          ]
      }
    ],
  },
  {
    title: "Design (B.Des)",
    children: [
      { title: "Fashion Design" },
      { title: "Graphic Design" },
      { title: "UX/UI Design" },
      { title: "Product Design" },
      { title: "Animation" },
      { title: "Game Design" }
    ],
  },
  {
    title: "Architecture (B.Arch)",
    children: [
      { title: "M.Arch" },
      { title: "Urban Planning" },
      { title: "Landscape Architecture" },
      { title: "Start own firm" },
      { title: "Sustainable Architecture" }
    ],
  },
  {
    title: "Hotel Management (BHM)",
    children: [
      { title: "Work in 5-star hotels" },
      { title: "Cruise Ship jobs" },
      { title: "Airline Cabin Crew" },
      { title: "Event Management" },
      { title: "Start own restaurant/cafe" }
    ],
  },
];

export const boardGameSteps = [
  "Choose Stream", "Prepare for Entrance Exams", "Select College", "First Year", "Internship", "Final Year Project", "Graduate", "First Job", "Promotion"
];

export const boardGameDescriptions: Record<string, string> = {
    "Choose Stream": "This is the first major crossroad. Your choice of Science, Commerce, or Arts will open up different sets of career paths. Think about your interests and strengths before deciding.",
    "Prepare for Entrance Exams": "Many professional courses require you to clear competitive entrance exams like JEE for Engineering, NEET for Medical, or CLAT for Law. Focused preparation is key.",
    "Select College": "Your college plays a significant role in your career. Look at rankings, faculty, infrastructure, and placement records. It's not just about education, but also about the network you build.",
    "First Year": "The foundation year. Focus on understanding the fundamentals of your chosen field. Explore clubs and activities to develop soft skills.",
    "Internship": "Gain real-world experience. An internship is your first taste of the corporate or professional world. It helps you apply your knowledge and learn practical skills.",
    "Final Year Project": "This is your chance to showcase your skills by working on a comprehensive project. It's a key highlight on your resume for your first job.",
    "Graduate": "Congratulations, you've earned your degree! This is a major milestone and the culmination of years of hard work.",
    "First Job": "Stepping into the professional world. Your first job is a huge learning experience. Be open to challenges and absorb as much as you can.",
    "Promotion": "Your hard work is recognized, and you move up the ladder. This brings more responsibility and new opportunities for growth."
}
