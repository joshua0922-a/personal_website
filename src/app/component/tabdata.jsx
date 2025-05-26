import React from "react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-black">
        <li>Node.js</li>
        <li>SQL</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-black">
        <li>IT Technician 2020</li>
        <li>Central Philippine University 2020-2025</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-black">
        <li>IT Specialist</li>
        <li>Intern at TechnoPH 4 months</li>
      </ul>
    ),
  },
  {
    title: "Work Experience",
    id: "work-experience",
    content: (
      <ul className="list-disc pl-5 space-y-1 text-black">
        <li>Student Lab Assistant 2023-2024</li>
        <li>Intern at TechnoPH 2025</li>
        <li>Line Chef 2025</li>
        <li>Mechanic 3 months</li>
      </ul>
    ),
  },
];

export default TAB_DATA;
