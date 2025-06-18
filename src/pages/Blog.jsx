import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendar, 
  faUser, 
  faComments, 
  faBookOpen, 
  faVideo, 
  faPodcast,
  faPlayCircle
} from '@fortawesome/free-solid-svg-icons';
import { blogPosts } from '../data/blogPosts';

// Sample data for the new sections
const unitSummaries = [
  {
    id: 1,
    title: 'Introducción a la IA Generativa',
    description: 'Conceptos básicos y fundamentos de la inteligencia artificial generativa.',
    content: 'La IA Generativa es una rama de la inteligencia artificial que se enfoca en crear nuevos contenidos...',
    date: '18 Jun 2025',
    duration: '15 min de lectura'
  },
  {
    id: 2,
    title: 'Modelos de Lenguaje Avanzados',
    description: 'Exploración de los modelos de lenguaje más recientes y sus aplicaciones.',
    content: 'Los modelos de lenguaje como GPT-4 han revolucionado la forma en que interactuamos con la tecnología...',
    date: '15 Jun 2025',
    duration: '20 min de lectura'
  }
];

const videos = [
  {
    id: 1,
    title: 'Introducción a la IA Generativa',
    thumbnail: 'https://img.youtube.com/vi/abc123/maxresdefault.jpg',
    duration: '12:45',
    views: '1.2K',
    date: 'Hace 1 semana',
    url: 'https://youtu.be/ub2LW07NsGc'
  },
  {
    id: 2,
    title: 'Tutorial: Primeros pasos con modelos de IA',
    thumbnail: 'https://img.youtube.com/vi/def456/maxresdefault.jpg',
    duration: '18:30',
    views: '856',
    date: 'Hace 2 semanas',
    url: 'https://www.youtube.com/watch?v=yBb8RErNPN4'
  }
];

const podcasts = [
  {
    id: 1,
    title: 'El futuro de la IA Generativa',
    description: 'Discusión sobre las tendencias y futuro de la IA generativa.',
    duration: '45:22',
    date: '10 Jun 2025',
    audioUrl: 'https://drive.google.com/file/d/1ogDOuKaFS83WXcH83jevHLQNcpoZAX6C/view',
    image: 'https://www.esic.edu/rethink/business/ia-generativa-que-es-principales-ejemplos-de-uso-c1'
  },
  {
    id: 2,
    title: 'Ética en la IA',
    description: 'Analizando los aspectos éticos del desarrollo de IA.',
    duration: '38:15',
    date: '5 Jun 2025',
    audioUrl: 'https://open.spotify.com/episode/4pfUDlsazk9yGraRr1EPCF?si=qPpQuMd-QWqaINLVm9A_UA',
    image: 'https://cloud.google.com/ai/generative-ai?hl=es'
  }
];

const Blog = () => {
  const [activeTab, setActiveTab] = useState('summaries');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Recursos de Aprendizaje</h1>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('summaries')}
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'summaries' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
            Resúmenes
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'videos' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <FontAwesomeIcon icon={faVideo} className="mr-2" />
            Videos
          </button>
          <button
            onClick={() => setActiveTab('podcasts')}
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'podcasts' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <FontAwesomeIcon icon={faPodcast} className="mr-2" />
            Podcasts
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'blog' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <FontAwesomeIcon icon={faComments} className="mr-2" />
            Blog
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Resúmenes de Unidad */}
          {activeTab === 'summaries' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Resúmenes de la Unidad 6</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {unitSummaries.map((item) => (
                  <div key={item.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{item.date}</span>
                      <span>{item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Videos */}
          {activeTab === 'videos' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Videos Educativos</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {videos.map((video) => (
                  <div key={video.id} className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                      <button 
                        className="absolute inset-0 flex items-center justify-center"
                        onClick={() => window.open(video.url, '_blank')}
                      >
                        <FontAwesomeIcon 
                          icon={faPlayCircle} 
                          className="text-white text-4xl bg-blue-600 rounded-full p-2 bg-opacity-90 hover:scale-110 transition-transform"
                        />
                      </button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{video.title}</h3>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{video.views} vistas</span>
                        <span>{video.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Podcasts */}
          {activeTab === 'podcasts' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Podcasts Recientes</h2>
              <div className="space-y-4">
                {podcasts.map((podcast) => (
                  <div key={podcast.id} className="flex items-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <img 
                      src={podcast.image} 
                      alt={podcast.title} 
                      className="w-24 h-24 object-cover rounded-lg mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{podcast.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{podcast.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{podcast.date} • {podcast.duration}</span>
                        <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700 transition-colors">
                          Escuchar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Blog Posts */}
          {activeTab === 'blog' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Últimas Publicaciones</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 border">
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                      <div className="flex items-center space-x-4 mb-4 text-gray-600 text-sm">
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
                      <div className="flex items-center space-x-2 text-sm">
                        <FontAwesomeIcon icon={faComments} className="text-gray-400" />
                        <span className="text-gray-400">25 comentarios</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
