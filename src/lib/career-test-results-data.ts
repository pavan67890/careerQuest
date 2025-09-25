export type CareerProfile = {
  id: string;
  title: string;
  summary: string;
  careers: string[];
  strengths: string[];
  explanation: string;
};

export const careerProfiles: Record<string, CareerProfile> = {
  a: {
    id: "a",
    title: "The Analyst & Technologist",
    summary:
      "You are a logical, analytical thinker who excels at solving complex problems. You are drawn to technology, data, and understanding how things work.",
    careers: [
      "Software Engineer",
      "Data Scientist",
      "Financial Analyst",
      "Research Scientist",
      "Engineer (Mechanical, Electrical, etc.)",
    ],
    strengths: [
      "Problem-Solving",
      "Logical Reasoning",
      "Analytical Skills",
      "Attention to Detail",
      "Independent Work",
    ],
    explanation:
      "Your answers indicate a strong preference for logic, data, and structured problem-solving. You enjoy diving deep into technical challenges and are comfortable with complex systems. Careers in tech, finance, and research are a natural fit for your analytical mind.",
  },
  b: {
    id: "b",
    title: "The Creative & Innovator",
    summary:
      "You are an imaginative and artistic individual with a passion for expression and design. You thrive in environments where you can innovate and bring new ideas to life.",
    careers: [
      "UX/UI Designer",
      "Graphic Designer",
      "Writer/Author",
      "Architect",
      "Marketing Manager",
    ],
    strengths: [
      "Creativity",
      "Imagination",
      "Aesthetic Sense",
      "Brainstorming",
      "Communication",
    ],
    explanation:
      "Your choices show a strong inclination towards creativity, aesthetics, and original thinking. You enjoy expressing ideas visually or verbally and are not afraid to think outside the box. Design, arts, and marketing fields will allow your creative talents to shine.",
  },
  c: {
    id: "c",
    title: "The Helper & Communicator",
    summary:
      "You are an empathetic and socially-oriented person who finds fulfillment in helping others and fostering community. You excel at communication and collaboration.",
    careers: [
      "Doctor/Nurse",
      "Teacher/Professor",
      "Counselor/Therapist",
      "Social Worker",
      "Human Resources Manager",
    ],
    strengths: [
      "Empathy",
      "Communication",
      "Teamwork",
      "Mentoring",
      "Public Speaking",
    ],
    explanation:
      "Your responses suggest that you are driven by a desire to help and connect with people. You are a natural communicator and find joy in collaborative, service-oriented work. Careers in healthcare, education, and social services align well with your empathetic nature.",
  },
  d: {
    id: "d",
    title: "The Organizer & Entrepreneur",
    summary:
      "You are a practical, organized, and dependable person who enjoys structure, planning, and leading projects. You have a knack for business and management.",
    careers: [
      "Project Manager",
      "Business Owner/Entrepreneur",
      "Accountant (CA)",
      "Investment Banker",
      "Operations Manager",
    ],
    strengths: [
      "Organization",
      "Leadership",
      "Dependability",
      "Practicality",
      "Financial Acumen",
    ],
    explanation:
      "Your answers point to a personality that is organized, efficient, and business-savvy. You are practical and enjoy creating structure and achieving clear goals. A career in business, management, or finance would be a great use of your organizational and leadership skills.",
  },
};
