'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import WorkScroll from '@/components/WorkScroll';

const CATEGORIES = ['All', 'Events', 'Competitions', 'Organizations'];

const EXPERIENCES = [
  {
    title: "TEDxCUET",
    category: "Events",
    folder: "Portfolio/Experience",
    prefix: "TedxCUET",
    description: "Worked across multiple teams in TEDxCUET, contributing to design, media production, sponsorship coordination, and logistics. As part of the design team, I developed visual assets and branding, collaborated with the videography team for event coverage, coordinated with sponsors including GPH Ispat and Diamond Cement, and supported logistics to ensure smooth on-ground execution through cross-functional collaboration.",
    tools: "Graphic Design, Videography, Sponsorship Management, Logistics Coordination, Cross-functional Collaboration, Canva, Communication",
    role: null
  },
  {
    title: "Cascade",
    category: "Events",
    folder: "Portfolio/Experience",
    prefix: "Cascade",
    description: "Attended and contributed to Cascade, a collaborative event bringing together students for networking, presentations, and creative exchange.",
    role: "Participated in event activities and sessions. Collaborated with peers across disciplines. Contributed to team-based interactions.",
    tools: "Collaboration, Communication, Adaptability"
  },
  {
    title: "Intrabiz",
    category: "Events",
    folder: "Portfolio/Experience",
    prefix: "Intrabiz",
    description: "Engaged in Intrabiz, a business-focused event involving presentations, networking, and strategic discussions.",
    role: "Participated in event activities and discussions. Observed and analyzed business presentation styles. Interacted with participants and organizers.",
    tools: "Presentation Analysis, Communication, Critical Thinking"
  },
  {
    title: "Blueprint Battle (Runner-Up)",
    category: "Competitions",
    folder: "Portfolio/Experience",
    prefix: "BluePrint_Battle",
    description: "Achieved Runner-Up position in Blueprint Battle, a competitive engineering/design challenge focused on innovation and execution.",
    role: "Worked on idea development and concept refinement. Collaborated on presentation and final pitch. Contributed to visual and communication aspects.",
    tools: "Design Thinking, Problem Solving, Canva, Pitching"
  },
  {
    title: "Break The Inertia (2nd Runner-Up)",
    category: "Competitions",
    folder: "Portfolio/Experience",
    prefix: "Break_The_Inertia",
    description: "Secured 2nd Runner-Up in ASME’s “Break The Inertia” (Engineer’s Pen & Pitch), combining technical thinking with presentation.",
    role: "Developed structured pitch content. Assisted in storytelling and delivery. Contributed to team coordination.",
    tools: "Public Speaking, Technical Communication, Presentation Design"
  },
  {
    title: "KBE Competition",
    category: "Competitions",
    folder: "Portfolio/Experience",
    prefix: "Kbec",
    description: "Participated in KBE Nexus competition, focusing on engineering knowledge, teamwork, and presentation.",
    role: "Engaged in team-based problem solving. Contributed to presentation and delivery. Participated in competitive rounds.",
    tools: "Teamwork, Analytical Thinking, Presentation Skills"
  },
  {
    title: "Triscend (Finalist)",
    category: "Competitions",
    folder: "Portfolio/Experience",
    prefix: "Triscend",
    description: "Finalist in Triscend, a competitive platform emphasizing innovation, teamwork, and execution under pressure.",
    role: "Contributed to idea development and refinement. Participated in competitive evaluation rounds. Assisted in presenting the solution.",
    tools: "Problem Solving, Adaptability, Competitive Strategy"
  },
  {
    title: "Bangladesh Leads – Executive Board 2026",
    category: "Organizations",
    folder: "Portfolio/Experience",
    prefix: "Banglaleads",
    description: "Serving as Creative Secretary in Bangladesh Leads, responsible for visual communication and branding.",
    role: "Designed promotional and branding materials. Developed visual identity for campaigns. Managed creative outputs for events and communication.",
    tools: "Canva, Graphic Design, Branding, Content Strategy"
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredExp = EXPERIENCES.filter(exp => activeTab === 'All' || exp.category === activeTab);

  return (
    <div className="w-full flex-col section-padding">
      <div className="container">
        
        <AnimatedSection className="flex-col items-center text-center" style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            My <span className="text-accent">Experience</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '600px', lineHeight: 1.6 }}>
            A journey of design, leadership, and competitive problem-solving across various organizational engagements.
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
            {filteredExp.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={exp.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="case-study-row" style={{ flexDirection: isEven ? 'row' : 'row-reverse' }}>
                    
                    {/* Content Container */}
                    <div className="case-study-content" style={{ textAlign: 'left' }}>
                      
                      <h3 style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                        {exp.category}
                      </h3>
                      
                      <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.25, margin: 0, marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                        {exp.title}
                      </h2>
                      
                      <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '550px', marginBottom: '1.5rem' }}>
                        {exp.description}
                      </p>
                      
                      {exp.role && (
                        <div style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.02)', padding: '1rem 1.25rem', borderRadius: '12px', borderLeft: '3px solid var(--accent-primary)' }}>
                          <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.5rem' }}>My Contribution:</h4>
                          <ul style={{ color: 'var(--text-muted)', margin: 0, paddingLeft: '1.25rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                            {exp.role.split('. ').map((point, pIdx) => point.length > 0 ? (
                              <li key={pIdx}>{point.trim() + (point.endsWith('.') ? '' : '.')}</li>
                            ) : null)}
                          </ul>
                        </div>
                      )}
                      
                      {/* Tools & Skills */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                         {exp.tools.split(',').map((skill, sIdx) => (
                           <span key={sIdx} style={{
                             padding: '0.35rem 0.8rem',
                             background: 'rgba(56, 189, 248, 0.08)',
                             border: '1px solid rgba(56, 189, 248, 0.2)',
                             borderRadius: '20px',
                             color: 'var(--accent-primary)',
                             fontSize: '0.8rem',
                             fontWeight: 500
                           }}>
                             {skill.trim()}
                           </span>
                         ))}
                      </div>

                    </div>

                    {/* Image Container (Dynamic Horizontal Scroll) */}
                    <div style={{ flex: 1, minWidth: '300px', maxWidth: '550px', marginLeft: isEven ? 'auto' : '0', marginRight: isEven ? '0' : 'auto' }}>
                      <WorkScroll folder={exp.folder} prefix={exp.prefix} />
                    </div>
                    
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {filteredExp.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
              No experience blocks found in this category.
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
}
