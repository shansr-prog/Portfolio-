import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';
import { projects, skills, experience } from './data';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#home" className="text-xl font-bold text-gray-900">Md Shahin</a>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-gray-900">Skills</a>
              <a href="#experience" className="text-gray-700 hover:text-gray-900">Experience</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Hi, I'm Md Shahin</span>
                  <span className="block text-indigo-600">Full Stack Developer</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  I build exceptional websites, applications, and everything in between.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Get in touch
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#projects" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      View Projects
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt="Developer workspace" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">About Me</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              With over 5 years of experience in web development, I specialize in building scalable, maintainable, and user-friendly applications. My passion lies in creating solutions that make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-500">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 text-sm bg-gray-100 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex space-x-4">
                    <a href={project.demo} className="flex items-center text-indigo-600 hover:text-indigo-500">
                      <ExternalLink className="w-4 h-4 mr-1" /> Demo
                    </a>
                    <a href={project.source} className="flex items-center text-indigo-600 hover:text-indigo-500">
                      <Code2 className="w-4 h-4 mr-1" /> Source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Skills</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <p className="text-indigo-600">{job.company}</p>
                  </div>
                  <p className="text-gray-500">{job.period}</p>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start">
                      <span className="h-6 flex items-center sm:h-7">
                        <svg className="flex-shrink-0 h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <p className="ml-2 text-gray-500">{resp}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-500">
              I'm always open to new opportunities and interesting projects.
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="https://github.com/shansr-prog" className="text-gray-400 hover:text-gray-500">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/md-shahin-b6258b2a5" className="text-gray-400 hover:text-gray-500">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:bdshan24@gmail.com" className="text-gray-400 hover:text-gray-500">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            ©{new Date().getFullYear()} - 2024 Md Shahin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
