import React from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import ExperienceCard from './components/ExperienceCard';
import { Brain, Code, Database, LineChart, Mail, Github, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 px-4 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto mt-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Machine Learning Engineer
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Specializing in deep learning, computer vision, natural language processing, and MLOps. Building scalable intelligent systems that solve real-world problems.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-indigo-600 rounded-lg border border-indigo-600 hover:bg-indigo-50 transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Personal Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Advanced ML Pipeline"
              description="End-to-end machine learning pipeline with automated training, validation, and deployment capabilities."
              image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              tags={["PyTorch", "Tensorflow", "Keras","Streamlit"]}
              githubLink="https://github.com/mkahoush-dev/Train-Predict-Models-UI"
            />
            <ProjectCard
              title="ML API Platform"
              description="API platform for creating and deploying machine learning models."
              image="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              tags={["Python", "FastAPI", "Tensorflow"]}
              githubLink="https://github.com/mkahoush-dev/ML-API"
            />
            <ProjectCard
              title="Website of Machine Learning Projects"
              description="Static website showcasing a collection of machine learning projects."
              image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              tags={["OpenCV", "TensorRT", "Pytorch", "Flask","Huggingface"]}
              githubLink="https://github.com/mkahoush-dev/AI-flask"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              title="Machine Learning"
              icon={Brain}
              skills={["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "MLflow", "TensorRT", "OpenCV","Agentic System", "RAG", "Huggingface", "CUDA"]}
            />
            <SkillCard
              title="Software Development"
              icon={Code}
              skills={["Python", "C++", "Java", "Linux"]}
            />
            <SkillCard
              title="Data Engineering"
              icon={Database}
              skills={["Spark", "Kafka", "MongoDB", "PostgreSQL", "Redis", "SQL"]}
            />
            <SkillCard
              title="Tools & Platforms"
              icon={LineChart}
              skills={["Docker", "Kubernetes", "Azure", "GitOps", "MLOps", "Ansible", "Jenkins"]}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
          <div className="space-y-8">
          <ExperienceCard
              title="Senior AI Engineer"
              company="Synopsys"
              period="09/2024 - Present"
              description={[
                "Lead research and development, from the ground up, of the entire CI/CD pipeline for the GENAI team and taught the team how to use it",
                "Improved efficiency of productionzied deployments through pipeline by 200% and scalability of the deokoyments to more than 3000 users per deployment",
                "Developed an open-source SDK for scalable, enterprise-level agentic and RAG workflows, enabling independent scalable environment hosting (cloud, on-prem) with inter-agent communication.", 
                "Used by over 52 teams in the company saving $3 million in operational costs per month."
              ]}
            />
            <ExperienceCard
              title="Senior ML Engineer"
              company="AI Research Lab"
              period="01/2021 - 09/2024"
              description={[
                "Researched and prototyped innovative solutions as well as provided system recommendations improving performance by 35%.",
                "Developed manifest files and CI/CD pipeline to quickly deploy Machine Learning components that use FluxCD and ArgoCD through GitOPS procedures to automate deployment in a Kubernetes Cluster.",
                "Integrated 6 Machine Learning related components together  in a unified platform to facilitate in the entire model development lifecycle",
                "Automated the creation of kubernetes manifest files and their deployment, improving the time needed to roll out new components by 3x"
              ]}
            />
            <ExperienceCard
              title="Machine Learning Engineer II"
              company="Tech Solutions Inc."
              period="2019 - 2021"
              description={[
                "Utilized Ansible to automate deployment processes, reducing manual intervention by 50% and increasing deployment speed by 40%",
                "Implemented Kubernetes Helm charts for orchestration, simplifying the management of complex applications and enhancing the team’s deployment capabilities reducing environment-related issues by 30%",
                "Developed a web application for basic model generation using Convolutional Neural Networks (CNN). The application currently works with multiple datasets, demonstrating versatility and adaptability saving 70% of the time needed to make a model."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Get in Touch</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="markkahoush@gmail.com"
              className="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <Mail className="h-6 w-6 mr-2" />
              Email
            </a>
            <a
              href="https://github.com/mkahoush-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <Github className="h-6 w-6 mr-2" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mark-kahoush/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <Linkedin className="h-6 w-6 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;