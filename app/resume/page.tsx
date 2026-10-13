'use client';

import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';
import { Download, ChevronRight, Briefcase, Award, Clock, Users } from 'lucide-react';

export default function Resume() {
  const INFO_ITEMS = [
    { label: "Birthday", value: "28 December, 2004" },
    { label: "Age", value: "21" },
    { label: "Website", value: "linkedin.com/in/kazi-miftahul-hoque", link: "https://www.linkedin.com/in/kazi-miftahul-hoque/" },
    { label: "Nationality", value: "Bangladeshi" },
    { label: "Phone", value: "+8801560057400" },
    { label: "Email", value: "k.miftu.h@gmail.com" },
    { label: "Address", value: "Chattogram, Bangladesh" },
    { label: "Freelance", value: "Available" },
    { label: "Education", value: "B.Sc. in Mechanical Engineering" },
    { label: "University", value: "CUET" },
    { label: "Focus", value: "Design, Video Editing, Storytelling" },
    { label: "Tools", value: "Canva, Photoshop, Illustrator, Figma" }
  ];

  const SKILL_CATEGORIES = [
    {
      title: "Design Tools",
      skills: ["Canva", "Photoshop", "Illustrator", "Figma UI-UX", "Solidworks (Basics)"]
    },
    {
      title: "Programming",
      skills: ["Python", "Numpy", "Pandas", "Vibe Coding"]
    },
    {
      title: "Additional Skills",
      skills: ["Presentation Design", "Documentation", "Data Handling"]
    },
    {
      title: "Creative & Media",
      skills: ["Video editing (Premiere Pro)", "Storytelling", "Content planning"]
    },
    {
      title: "Interpersonal Skills",
      skills: ["Communication", "Leadership", "Team Management", "Problem Solving", "Time Management", "Adaptability"]
    }
  ];

  const STATS = [
    { icon: <Users size={24} />, value: "20+", label: "Happy Clients" },
    { icon: <Briefcase size={24} />, value: "40+", label: "Projects Delivered" },
    { icon: <Clock size={24} />, value: "1,000+", label: "Hours of Service" },
    { icon: <Award size={24} />, value: "3+", label: "Years of Working" },
  ];

  return (
    <div className="w-full flex-col section-padding">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Header Area */}
        <AnimatedSection style={{ marginBottom: '1rem' }}>
          <h2 style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            ABOUT <div style={{ height: '2px', width: '40px', background: 'var(--accent-primary)' }}></div>
          </h2>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
            Learn More <span className="text-accent">About Me</span>
          </h1>
        </AnimatedSection>

        {/* 1. ABOUT SPLIT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          
          {/* Left Column: Image */}
          <AnimatedSection delay={0.1} style={{ position: 'relative', width: '100%', minHeight: '380px', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
            <Image 
              src="/Images/miftu.jpg" 
              alt="Kazi Miftahul Hoque"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,47,63,0.9) 0%, transparent 60%)' }} />
          </AnimatedSection>

          {/* Right Column: Info */}
          <AnimatedSection delay={0.2} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-primary)', fontWeight: 700, marginBottom: '1rem' }}>
              Graphic Designer & Creative Technologist
            </h2>
            <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Hello, I’m Kazi Miftahul Hoque (Miftu), a Mechanical Engineering student at CUET, focused on crafting visually engaging and meaningful digital experiences.
            </p>

            {/* 2-Column Info Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem 2rem', marginBottom: '2.5rem' }}>
              {INFO_ITEMS.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <ChevronRight size={16} className="text-accent flex-shrink-0" />
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.label}:</span>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', wordBreak: 'break-all' }} className="hover:text-accent">
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--text-muted)' }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              I specialize in combining engineering precision with creative execution—designing visuals and digital content that are both functional and engaging. My work focuses on clarity, structure, and audience impact, whether through graphic design, video editing, or storytelling.
              <br /><br />
              With experience across university organizations, competitions, and freelance projects, I aim to create standout digital experiences that integrate cutting-edge tools to engage users and deliver results, shaping the future of digital interactions.
            </p>
            
            <a href="/Kazi Miftahul Hoque Resume.pdf" target="_blank" className="btn-primary" style={{ marginTop: '2rem', width: 'fit-content' }}>
              <Download size={20} /> Download Resume
            </a>
          </AnimatedSection>
        </div>

        {/* 2. STATISTICS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8">
          {STATS.map((stat, idx) => (
            <AnimatedSection key={idx} delay={0.2 + (idx * 0.1)}>
              <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', textAlign: 'center' }}>
                <div style={{ padding: '0.85rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '50%', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>
                  {stat.icon}
                </div>
                <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem', lineHeight: 1 }}>{stat.value}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* 3. SKILLS SECTION */}
        <AnimatedSection style={{ marginTop: '4rem', width: '100%' }}>
          <h2 style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            SKILLS <div style={{ height: '2px', width: '40px', background: 'var(--accent-primary)' }}></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '100%' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: 600 }}>{category.title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem 0.75rem', width: '100%' }}>
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} style={{
                      padding: '0.45rem 1rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      color: 'var(--text-muted)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      maxWidth: '100%',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      transition: 'all 0.3s ease'
                    }}
                    className="hover:border-accent hover:text-primary"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-primary)';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.color = 'var(--text-muted)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
        
      </div>
    </div>
  );
}
