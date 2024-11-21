import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export default function ExperienceCard({ title, company, period, description }: ExperienceCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-indigo-600 mb-4">{company} • {period}</p>
      <div className="space-y-2">
        {description.map((item, index) => (
          <p key={index} className="text-gray-600">{item}</p>
        ))}
      </div>
    </div>
  );
}