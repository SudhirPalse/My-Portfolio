
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <p className="mb-6">
              Feel free to reach out to me for any inquiries or opportunities. 
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:palsesudhir9@gmail.com" className="hover:text-primary transition-colors">
                  palsesudhir9@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+917028142154" className="hover:text-primary transition-colors">
                  +91 7028142154
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-sm">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Enter your message"
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 transition-colors py-3 rounded-md font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
