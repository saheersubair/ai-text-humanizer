import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import { Loader2, User, Calendar, Clock, ExternalLink, Edit3 } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  status: 'Completed' | 'In Progress';
}

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Project Alpha',
    description: 'An innovative AI-powered content generation system designed to create engaging blog posts and articles.',
    createdAt: '2024-02-15',
    status: 'Completed'
  },
  {
    id: '2',
    name: 'Project Beta',
    description: 'Advanced natural language processing pipeline for analyzing customer feedback and sentiment.',
    createdAt: '2024-02-20',
    status: 'In Progress'
  },
  {
    id: '3',
    name: 'Project Gamma',
    description: 'Machine learning model optimization framework for improving text generation quality.',
    createdAt: '2024-02-25',
    status: 'In Progress'
  },
  {
    id: '4',
    name: 'Project Delta',
    description: 'Automated content moderation system using state-of-the-art AI algorithms.',
    createdAt: '2024-03-01',
    status: 'Completed'
  }
];

export const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-primary-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
              <p className="text-gray-600">{user?.email}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">My Past Projects</h2>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
            </div>
          ) : mockProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found. Start creating new projects!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-success-100 text-success-800' 
                        : 'bg-warning-100 text-warning-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Created on {formatDate(project.createdAt)}</span>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-gray-700 font-medium">
                      <Edit3 className="w-4 h-4 mr-2" />
                      Edit Project
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};