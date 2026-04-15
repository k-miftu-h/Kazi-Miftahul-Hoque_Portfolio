'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight, PenTool, Video, Edit3, Briefcase, ChevronRight, LayoutTemplate } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full flex-col">
      <style dangerouslySetInnerHTML={{__html: `
        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .hero-actions {
          display: flex; gap: 1rem; margin-top: 1rem;
        }
        .text-stack {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            margin-top: 3rem; /* Push down away from the sticky navbar */
          }
          .hero-grid p {
            margin: 0;
          }
          .text-stack {
            gap: 1rem; /* Tighten gaps between headings and descriptions */
          }
          /* Ensure floating element is contained horizontally and vertically */
          .hero-image-container {
             margin-bottom: 4rem !important; /* Creates explicit document flow space for the absolute float to exist without colliding */
          }
          .hero-glass-floating {
            left: 50% !important;
            transform: translateX(-50%);
            bottom: -30px !important;
          }
        }
        .works-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
        }
        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 3rem;
          align-items: center;
        }
        @media (max-width: 768px) {
          .works-grid, .about-grid {
             grid-template-columns: 1fr;
             gap: 2rem; /* Tighter gap on phones so it flows better */
          }
          .timeline-item {
             gap: 1.25rem !important;
          }
          .timeline-line {
             left: 12px !important; /* Shift line to match tightened flex gap */
          }
          .timeline-dot {
             width: 26px !important;
             height: 26px !important;
          }
        }
      `}} />

      {/* 1. HERO SECTION */}
      <section className="section-padding flex items-center justify-center container" style={{ minHeight: '90vh', position: 'relative', overflow: 'hidden' }}>
        {/* Background glow effects */}
        <div style={{
          position: 'absolute',
          top: '-10%', left: '-10%', width: '50vw', height: '50vw',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 60%)',
          filter: 'blur(80px)', zIndex: 0, borderRadius: '50%'
        }} />
        
        <div className="hero-grid w-full">
          
          <div className="text-stack">
            <AnimatedSection delay={0.1}>
              <span style={{ 
                color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600, 
                letterSpacing: '0.15em', textTransform: 'uppercase', display: 'inline-block',
                padding: '0.5rem 1rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '100px',
                border: '1px solid rgba(56, 189, 248, 0.2)'
              }}>
                DESIGN • VIDEO • STORYTELLING
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                I Design Experiences That <span className="text-accent" style={{ background: 'linear-gradient(90deg, var(--accent-primary), #fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>People Remember</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', lineHeight: 1.6 }}>
                Mechanical Engineering student at CUET blending design, video editing, and storytelling to create visually engaging digital experiences.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} className="hero-actions">
              <Link href="/works" className="btn-primary">
                View Work <ArrowRight size={18} />
              </Link>
              <Link href="/resume" className="btn-outline">
                Resume
              </Link>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.5} className="hero-image-container" style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '400px', aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Image 
                src="/Images/miftu.jpg" 
                alt="Kazi Miftahul Hoque"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,47,63,0.8) 0%, transparent 50%)' }} />
            </div>
            
            {/* Floating Glass element */}
            <div className="glass-panel hero-glass-floating" style={{ 
              position: 'absolute', bottom: '-20px', left: '-40px', padding: '1.25rem', 
              display: 'flex', alignItems: 'center', gap: '1rem', backdropFilter: 'blur(16px)', width: 'max-content'
            }}>
              <div style={{ padding: '0.8rem', background: 'var(--accent-primary)', borderRadius: '50%', color: '#000' }}>
                <PenTool size={20} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Creative</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Professional</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. FEATURED WORK (PROOF IMMEDIATELY) */}
      <section className="section-padding container" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedSection>
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 className="section-title">Selected Work</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px' }}>
              A selection of projects focused on impact, clarity, and visual storytelling.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="works-grid">
          {/* Project Item 1 */}
          <AnimatedSection delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer', group: 'true' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', borderRadius: '16px', overflow: 'hidden', background: '#111', border: '1px solid var(--border-color)', transition: 'all 0.4s ease' }}
                   onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.4)'; }}
                   onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(15,47,63,0.8))', zIndex: 1, transition: 'opacity 0.3s ease', opacity: 0.8 }} className="hover:opacity-100" />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 600, color: '#fff', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>Campaign Design</h3>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 500 }}>Social Media Campaign Design</h3>
                <p style={{ color: 'var(--accent-primary)', fontSize: '1rem', marginTop: '0.25rem' }}>Graphic Design</p>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Project Item 2 */}
          <AnimatedSection delay={0.2}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', borderRadius: '16px', overflow: 'hidden', background: '#111', border: '1px solid var(--border-color)', transition: 'all 0.4s ease' }}
                   onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.4)'; }}
                   onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(62,193,255,0.1), rgba(0,0,0,0.7))', zIndex: 1, transition: 'opacity 0.3s ease', opacity: 0.8 }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                  <Video size={48} color="rgba(255,255,255,0.8)" />
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 500 }}>Event Promo Video</h3>
                <p style={{ color: 'var(--accent-primary)', fontSize: '1rem', marginTop: '0.25rem' }}>Video Editing</p>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Project Item 3 */}
          <AnimatedSection delay={0.3}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', borderRadius: '16px', overflow: 'hidden', background: '#111', border: '1px solid var(--border-color)', transition: 'all 0.4s ease' }}
                   onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.4)'; }}
                   onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(30,90,120,0.6), rgba(15,47,63,0.9))', zIndex: 1, transition: 'opacity 0.3s ease', opacity: 0.8 }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                  <LayoutTemplate size={48} color="rgba(255,255,255,0.8)" />
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 500 }}>Club Branding & Identity</h3>
                <p style={{ color: 'var(--accent-primary)', fontSize: '1rem', marginTop: '0.25rem' }}>Graphic Design</p>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Project Item 4 */}
          <AnimatedSection delay={0.4}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', borderRadius: '16px', overflow: 'hidden', background: '#111', border: '1px solid var(--border-color)', transition: 'all 0.4s ease' }}
                   onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.4)'; }}
                   onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(56,189,248,0.2) 0%, rgba(15,47,63,0.9) 100%)', zIndex: 1, transition: 'opacity 0.3s ease', opacity: 0.8 }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 600, color: '#fff', textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>Web App UI</h3>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 500 }}>Interactive Dashboard</h3>
                <p style={{ color: 'var(--accent-primary)', fontSize: '1rem', marginTop: '0.25rem' }}>Web Projects</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. ABOUT ME */}
      <section className="section-padding container">
        <div className="about-grid">
          <AnimatedSection delay={0.1} className="text-stack">
            <h2 className="section-title" style={{ marginBottom: '0' }}>About Me</h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              I am Kazi Miftahul Hoque, a Mechanical Engineering student at CUET with a strong focus on design and digital storytelling.
            </p>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              I specialize in creating visually structured content that communicates ideas clearly—whether through graphics, motion, or interactive experiences.
            </p>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              My approach combines engineering precision with creative execution to produce work that is both functional and engaging.
            </p>
          </AnimatedSection>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <AnimatedSection delay={0.2} className="glass-panel" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <PenTool size={24} className="text-accent" />
                <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Graphic Designer</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Clean, modern, and high-retention visuals.</p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="glass-panel" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <Video size={24} className="text-accent" />
                <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Video Editor</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Story-driven edits optimized for engagement.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. SKILLS / SERVICES */}
      <section className="section-padding container">
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>What I Do</h2>
          </div>
        </AnimatedSection>
        
        <div className="works-grid">
          {[
            { icon: <PenTool size={36} />, title: "Graphic Design", desc: "Social media designs, branding, and promotional visuals focused on clarity and engagement." },
            { icon: <Video size={36} />, title: "Video Editing", desc: "High-retention edits using Premiere Pro with strong storytelling and pacing." },
            { icon: <Edit3 size={36} />, title: "Content & Storytelling", desc: "Structured narratives designed to communicate ideas effectively across platforms." }
          ].map((service, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.2}>
              <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', background: 'rgba(56, 189, 248, 0.1)', padding: '1rem', borderRadius: '12px', width: 'fit-content' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600 }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '1.05rem' }}>{service.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 5. WORK & INVOLVEMENT */}
      <section className="section-padding container">
        <AnimatedSection>
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 className="section-title">Work & Involvement</h2>
          </div>
        </AnimatedSection>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative' }}>
          {/* Timeline Line */}
          <div className="timeline-line" style={{ position: 'absolute', left: '16px', top: '24px', bottom: '24px', width: '2px', background: 'var(--border-color)', zIndex: 0 }} />

          {/* Item 1 */}
          <AnimatedSection delay={0.1} className="timeline-item" style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 1 }}>
            <div className="timeline-dot" style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--accent-primary)', border: '4px solid var(--primary-bg)', flexShrink: 0, boxShadow: '0 0 0 2px rgba(56, 189, 248, 0.3)' }} />
            <div style={{ paddingBottom: '1rem' }}>
              <span style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem', marginBottom: '0.25rem', display: 'block', letterSpacing: '0.05em' }}>2022 – Present</span>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Graphic Designer <span style={{ color: 'var(--accent-primary)', fontWeight: 400 }}>— University Clubs</span></h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '1.1rem', maxWidth: '700px' }}>
                Designed event posters, social media creatives, and branding materials.
              </p>
            </div>
          </AnimatedSection>

          {/* Item 2 */}
          <AnimatedSection delay={0.2} className="timeline-item" style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 1 }}>
            <div className="timeline-dot" style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--primary-bg)', border: '2px solid var(--accent-primary)', flexShrink: 0 }} />
            <div>
              <span style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem', marginBottom: '0.25rem', display: 'block', letterSpacing: '0.05em' }}>Previous</span>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Content Writer <span style={{ color: 'var(--accent-primary)', fontWeight: 400 }}>— 10 Minute School IELTS</span></h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '1.1rem', maxWidth: '700px' }}>
                Created structured educational content focused on clarity and engagement.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="section-padding" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 60%)',
          zIndex: 0
        }} />
        <AnimatedSection className="container flex-col items-center gap-6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>Let&apos;s Build Something Meaningful</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '1.15rem' }}>
            Open to collaborations in design, video editing, and creative projects.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <Link href="/works" className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              View All Work <ChevronRight size={20} />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
