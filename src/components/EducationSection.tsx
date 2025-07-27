import React from 'react';
import { GraduationCap, Award, Briefcase } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 px-6 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education & 
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              {' '}Experience
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From tech trucking to web development - a journey of continuous learning and growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
                <p className="text-emerald-400 font-medium">Frontend Web Development</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-lg font-semibold text-white">Udacity Nanodegree</h4>
                </div>
                <p className="text-slate-300 font-medium">Frontend Web Development</p>
                <p className="text-slate-400 text-sm">2016</p>
                <p className="text-slate-300 text-sm mt-2">
                  Comprehensive program covering HTML, CSS, JavaScript, and modern web development practices
                </p>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Career Journey</h3>
                <p className="text-purple-400 font-medium">From Trucking to Tech</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-lg font-semibold text-white mb-2">PrecisionHawk</h4>
                <p className="text-slate-300 font-medium">Remote Pilot in Command</p>
                <p className="text-slate-400 text-sm mb-2">Drone Operations & Software Testing</p>
                <p className="text-slate-300 text-sm">
                  Specialized in drone operations and software testing for aerial data collection systems
                </p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-lg font-semibold text-white mb-2">Current Role</h4>
                <p className="text-slate-300 font-medium">CTO & Multimedia Developer</p>
                <p className="text-slate-400 text-sm mb-2">Cozyartz Media Group</p>
                <p className="text-slate-300 text-sm">
                  Leading technical development and creative solutions for multimedia projects
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-lg italic mb-8">
            "Former Techie Truck Driver turned Web Developer - proving that the best journeys are the ones that surprise you"
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">My Philosophy & Approach</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-3">Neurodiversity as a Superpower</h4>
                <p className="text-slate-300 leading-relaxed">
                  My neurodivergent perspective allows me to see patterns and connections that others might miss. 
                  This unique viewpoint drives innovative problem-solving approaches in both code and hardware design. 
                  I leverage this cognitive diversity to create solutions that are not just functional, but truly transformative.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Bridging Digital & Physical</h4>
                <p className="text-slate-300 leading-relaxed">
                  My journey from trucking technology to web development, combined with my passion for hardware hacking 
                  and drone building, gives me a unique perspective on how digital solutions can impact the physical world. 
                  I create applications that don't just exist in browsers, but connect to real-world systems and processes.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-3">Continuous Learning</h4>
                <p className="text-slate-300 leading-relaxed">
                  Technology evolves rapidly, and so do I. From my Udacity nanodegree to staying current with emerging 
                  frameworks like Astro and advanced TypeScript patterns, I maintain a commitment to continuous learning. 
                  This ensures my solutions leverage the latest tools and best practices.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-400 mb-3">Quality & Innovation</h4>
                <p className="text-slate-300 leading-relaxed">
                  Every project I undertake combines solid engineering principles with creative innovation. Whether 
                  building scalable web applications, custom drone systems, or multimedia experiences, I prioritize 
                  both technical excellence and user experience to deliver solutions that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;