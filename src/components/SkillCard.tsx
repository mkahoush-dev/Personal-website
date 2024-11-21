import React from 'react';
import { Icon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: Icon;
  skills: string[];
}

export default function SkillCard({ title, icon: Icon, skills }: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <Icon className="h-6 w-6 text-indigo-600 mr-2" />
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}