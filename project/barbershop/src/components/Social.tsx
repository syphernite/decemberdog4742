import React from 'react';
import { Instagram, Music, ExternalLink } from 'lucide-react';

const Social = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Follow My
            <span className="text-red-600"> Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with my latest cuts and behind-the-scenes content on social media.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Instagram Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 p-3 rounded-xl">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Instagram</h3>
              <a
                href="https://instagram.com/tonyscuts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span className="font-medium">@tonyscuts</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Instagram Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src="https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Instagram post 1"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src="https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Instagram post 2"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src="https://images.pexels.com/photos/1832334/pexels-photo-1832334.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Instagram post 3"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src="https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Instagram post 4"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://instagram.com/tonyscuts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                <Instagram className="h-5 w-5" />
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>

          {/* TikTok Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="bg-black p-3 rounded-xl">
                <Music className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">TikTok</h3>
              <a
                href="https://tiktok.com/@tonyscuts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span className="font-medium">@tonyscuts</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* TikTok Video Previews */}
            <div className="space-y-6">
              <div className="bg-black rounded-2xl overflow-hidden aspect-[9/16] max-w-sm mx-auto relative group cursor-pointer">
                <img
                  src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="TikTok video preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-semibold">Fresh Fade Tutorial</div>
                  <div className="text-xs opacity-80">125K views</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://tiktok.com/@tonyscuts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25 hover:scale-105"
              >
                <Music className="h-5 w-5" />
                <span>Follow on TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Stats */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-600 mb-1">2.5K</div>
              <div className="text-gray-600 text-sm">Instagram Followers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-black mb-1">8.1K</div>
              <div className="text-gray-600 text-sm">TikTok Followers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600 mb-1">150K</div>
              <div className="text-gray-600 text-sm">Total Views</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
              <div className="text-gray-600 text-sm">Engagement Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;