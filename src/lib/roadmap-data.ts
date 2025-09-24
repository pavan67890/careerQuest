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
              { title: "Frontend Developer" },
              { title: "Backend Developer" },
              { title: "Full Stack Developer" },
              { title: "M.Tech in Software Engineering" },
            ],
          },
          {
            title: "AI & Machine Learning",
            children: [
              { title: "Data Scientist" },
              { title: "ML Engineer" },
              { title: "Research in AI" },
            ],
          },
          {
            title: "Cybersecurity",
            children: [
              { title: "Security Analyst" },
              { title: "Ethical Hacker" },
              { title: "Cybersecurity Consultant" },
            ],
          },
        ],
      },
      {
        title: "Mechanical Engineering",
        children: [
          { title: "Automotive Industry" },
          { title: "Aerospace Industry" },
          { title: "Robotics" },
          { title: "M.Tech in Mechanical Design" },
        ],
      },
      {
        title: "Electrical Engineering",
        children: [
          { title: "Power Systems" },
          { title: "Electronics Design" },
          { title: "VLSI Design" },
        ],
      },
       {
        title: "Civil Engineering",
        children: [
          { title: "Structural Engineer" },
          { title: "Construction Management" },
          { title: "Urban Planning" },
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
            children: [{ title: "Super Specialization (DM)" }],
          },
          { title: "Neurology" },
          { title: "General Surgery" },
          { title: "Pediatrics" },
        ],
      },
      { title: "Clinical Practice" },
      { title: "Medical Research" },
      { title: "Hospital Administration (MHA)" },
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
          { title: "Teaching" },
        ],
      },
      {
        title: "B.Sc in Computer Science",
        children: [
          { title: "MCA (Master of Computer Applications)" },
          { title: "Software Developer" },
        ],
      },
      {
        title: "B.Sc in Biotechnology",
        children: [
          { title: "M.Sc in Biotechnology" },
          { title: "Jobs in Pharma/Biotech companies" },
        ],
      },
    ],
  },
  {
    title: "Commerce & Finance (B.Com/BBA)",
    children: [
      {
        title: "Chartered Accountancy (CA)",
        children: [{ title: "Practice as CA" }, { title: "Work in Corporate Finance" }],
      },
      {
        title: "MBA",
        children: [
          { title: "Marketing" },
          { title: "Finance" },
          { title: "Human Resources" },
          { title: "Operations" },
        ],
      },
      {
        title: "Investment Banking",
        children: [{ title: "Analyst" }, { title: "Associate" }],
      },
      { title: "Company Secretary (CS)" },
      { title: "Cost and Management Accountant (CMA)" },
    ],
  },
  {
    title: "Arts & Humanities (B.A.)",
    children: [
      {
        title: "Civil Services (UPSC/State PSC)",
        children: [{ title: "IAS/IPS/IFS Officer" }],
      },
      {
        title: "Journalism and Mass Communication",
        children: [{ title: "Reporter" }, { title: "Editor" }, { title: "Public Relations" }],
      },
      {
        title: "Law (LLB)",
        children: [{ title: "Corporate Lawyer" }, { title: "Litigation" }, { title: "Judiciary" }],
      },
      {
        title: "MA in subject of choice",
        children: [{ title: "Professor" }, { title: "Researcher" }],
      },
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
    ],
  },
  {
    title: "Architecture (B.Arch)",
    children: [
      { title: "M.Arch" },
      { title: "Urban Planning" },
      { title: "Landscape Architecture" },
      { title: "Start own firm" },
    ],
  },
  {
    title: "Hotel Management (BHM)",
    children: [
      { title: "Work in 5-star hotels" },
      { title: "Cruise Ship jobs" },
      { title: "Airline Cabin Crew" },
      { title: "Event Management" },
    ],
  },
];

export const boardGameSteps = [
  "Choose Stream", "Prepare for Entrance Exams", "Select College", "First Year", "Internship", "Final Year Project", "Graduate", "First Job", "Promotion"
];
