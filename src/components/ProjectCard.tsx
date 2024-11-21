import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink?: string;
  demoLink?: string;
}

export default function ProjectCard({ title, description, image, tags, githubLink, demoLink }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <Github className="h-5 w-5 mr-1" />
              Code
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <ExternalLink className="h-5 w-5 mr-1" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}