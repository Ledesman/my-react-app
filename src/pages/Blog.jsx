import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser, faComments } from '@fortawesome/free-solid-svg-icons';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <div className="flex items-center space-x-4 mb-4 text-gray-600">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <p className="mb-4 text-gray-600">{post.excerpt}</p>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faComments} className="text-gray-400" />
                  <span className="text-gray-400">25 comentarios</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Componente de post completo */}
        <div className="mt-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm mb-12">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
