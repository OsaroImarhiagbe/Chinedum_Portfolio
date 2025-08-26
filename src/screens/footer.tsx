'use client'
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 text-center md:text-left">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Houdïnï CHïN
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
                Crafting digital experiences through innovative design and cutting-edge development. 
                Let&apos;s build something amazing together.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>hello@yourname.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-green-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-gray-300 hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 text-red-400" />
                  <span>Ypsilanti, MI</span>
                </div>
              </div>
              <div className="text-gray-400 text-sm mt-4">
                © {currentYear} Your Name. All rights reserved.
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col space-y-6 items-center justify-center">
              <h6 className="text-gray-300 font-semibold">Follow my Socials</h6>
              <div className="flex items-center gap-4">
                {[
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Instagram, href: '#', label: 'Instagram' }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
