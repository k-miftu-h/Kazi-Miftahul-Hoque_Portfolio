'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import WorkScroll from '@/components/WorkScroll';

const CATEGORIES = ['All', 'Graphics', 'Video Edits', 'Programming'];

const PROJECTS = [
  {
    title: "TEDxCUET – Event Branding & Visual Identity",
    category: "Graphics",
    folder: "Portfolio/Designs/TEDxCUET",
    description: "Designed complete visual assets for TEDxCUET 2025, including event posters, social media creatives, and branding materials. Focused on maintaining a bold, modern identity aligned with TED’s global design language while adapting it to a local audience. The work emphasized clarity, hierarchy, and strong visual storytelling for audience engagement.",
  },
  {
    title: "Team Staraptor – Website & Media Strategy",
    category: "Programming",
    folder: "Portfolio/Designs/Staraptor",
    description: "Developed the official website for the VTOL drone project using Vibe Coding and contributed to media strategy. Created sponsorship proposals and digital assets to enhance brand positioning and secure funding. The work combined technical structure with visual clarity to communicate complex engineering ideas effectively.",
  },
  {
    title: "Team Blitzer – Branding & Corporate Design",
    category: "Graphics",
    folder: "Portfolio/Designs/Blitzer",
    description: "Worked with the business and design team to develop partnership proposals and visual identity elements. Focused on clean, professional layouts to support corporate communication and sponsorship acquisition. Contributed to aligning design with business strategy.",
  },
  {
    title: "BanglaLeads – Non-Profit Design & Communication",
    category: "Graphics",
    folder: "Portfolio/Designs/BanglaLeads",
    description: "Designed social media graphics and campaign materials for a non-profit organization. Emphasized clarity, accessibility, and message-driven visuals to effectively communicate social initiatives and engage a broader audience.",
  },
  {
    title: "ASME CUET – Technical & Event Design",
    category: "Graphics",
    folder: "Portfolio/Designs/ASME",
    description: "Created technical posters, certificates, and event visuals for ASME CUET Student Chapter. Focused on structured layouts and informative design to communicate engineering concepts and event details effectively.",
  },
  {
    title: "CAD Society – Design & Competition Visuals",
    category: "Graphics",
    folder: "Portfolio/Designs/CAD SOCIETY",
    description: "Designed promotional materials and competition assets for CUET CAD Society. The work emphasized precision, technical aesthetics, and clarity to reflect the engineering-focused audience.",
  },
  {
    title: "CSF – Social Media & Event Graphics",
    category: "Graphics",
    folder: "Portfolio/Designs/CSF",
    description: "Developed branding and social media content for CSF activities. Focused on modern design trends and consistent visual identity to improve audience engagement and event visibility.",
  },
  {
    title: "CUET PS – Creative Visual Content",
    category: "Graphics",
    folder: "Portfolio/Designs/CUET PS",
    description: "Produced promotional designs and social media graphics tailored for student engagement. Prioritized clean composition and strong visual hierarchy to ensure readability and impact.",
  },
  {
    title: "Cascade 1.0 – Event Branding & Marketing Design",
    category: "Graphics",
    folder: "Portfolio/Designs/Cascade 1.0",
    description: "Designed branding materials and promotional content for Cascade 1.0. The project focused on creating a cohesive visual identity across multiple platforms, ensuring consistency and audience appeal.",
  },
  {
    title: "RMA – Event & Branding Design",
    category: "Graphics",
    folder: "Portfolio/Designs/RMA",
    description: "Worked on event visuals, certificates, and branding materials for RMA. Delivered structured and visually appealing designs aligned with organizational identity and event requirements.",
  },
  {
    title: "Departmental Projects – Academic & Technical Design",
    category: "Graphics",
    folder: "Portfolio/Designs/Departmental",
    description: "Designed presentations, reports, and visual materials for academic purposes. Combined technical accuracy with clean design to enhance clarity and communication.",
  },
  {
    title: "Freelance Projects – Branding & Digital Content",
    category: "Graphics",
    folder: "Portfolio/Designs/Personal_Freelance",
    description: "Delivered branding, posters, and digital assets for various clients since 2021. Focused on client requirements, audience targeting, and high-quality execution across different design styles.",
  },
  {
    title: "Miscellaneous Works – Experimental & Creative Designs",
    category: "Video Edits",
    folder: "Portfolio/Designs/Miscelleneous",
    description: "A collection of exploratory designs, creative experiments, and concept-based visuals. Showcases versatility, adaptability, and continuous learning in design trends and tools.",
  }
];

export default function Works() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = PROJECTS.filter(project => activeTab === 'All' || project.category === activeTab);

  return (
    <div className="w-full flex-col section-padding">
      <div className="container">
        
        <AnimatedSection className="flex-col items-center text-center" style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            My <span className="text-accent">Works</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '600px', lineHeight: 1.6 }}>
            A curated collection of my most impactful projects focusing on precise execution, branding, and telling a clear story.
          </p>
        </AnimatedSection>

        {/* Custom Tabs */}
        <AnimatedSection delay={0.1}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '5rem' }}>
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '30px',
                  position: 'relative',
                  fontWeight: 600,
                  color: activeTab === category ? '#000' : 'var(--text-primary)',
                  transition: 'color 0.3s ease',
                  border: '1px solid var(--border-color)',
                  background: 'rgba(255,255,255,0.02)'
                }}
              >
                {activeTab === category && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '30px',
                      background: 'var(--accent-primary)',
                      zIndex: -1
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span style={{ position: 'relative', zIndex: 1 }}>{category}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="case-study-row" style={{ flexDirection: isEven ? 'row' : 'row-reverse' }}>
                    
                    {/* Content Container */}
                    <div className="case-study-content" style={{ textAlign: 'left' }}>
                      <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.2rem)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.25, margin: 0, letterSpacing: '-0.01em' }}>
                        {project.title.split('–').map((part, index) => (
                          index === 0 ? <span key={index}>{part.trim()} <br /> <span style={{ fontSize: '70%', color: 'var(--text-muted)', fontWeight: 500 }}>{project.title.split('–')[1]?.trim()}</span></span> : null
                        ))}
                      </h2>
                      
                      <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: '550px' }}>
                        {project.description}
                      </p>
                    </div>

                    {/* Image Container (Dynamic Horizontal Scroll) */}
                    <div style={{ flex: 1, minWidth: '300px', maxWidth: '550px', marginLeft: isEven ? 'auto' : '0', marginRight: isEven ? '0' : 'auto' }}>
                      <WorkScroll folder={project.folder} />
                    </div>
                    
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
              No projects found in this category.
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
}
