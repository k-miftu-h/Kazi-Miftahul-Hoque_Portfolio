'use client';

import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Loader2, Image as ImageIcon, X } from "lucide-react";

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
}

export default function WorkScroll({ folder, prefix }: { folder?: string, prefix?: string }) {
  const [images, setImages] = useState<CloudinaryResource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams();
        if (folder) params.append('folder', folder);
        if (prefix) params.append('prefix', prefix);
        
        const res = await fetch(`/api/cloudinary?${params.toString()}`);
        if (!res.ok) throw new Error("Failed to fetch");
        
        const data = await res.json();
        setImages(data.resources || []);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (folder || prefix) fetchImages();
  }, [folder, prefix]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  // Track scrolling to update the active dot
  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.clientWidth);
      // Ensure index is within bounds (prevents weird edge-case math issues on bouncing scrolls)
      const clampedIndex = Math.max(0, Math.min(index, images.length - 1));
      setActiveIndex(clampedIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.clientWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const scrollFiles = (direction: "left" | "right") => {
    if (images.length <= 1) return;
    
    let nextIndex = direction === "left" ? activeIndex - 1 : activeIndex + 1;
    
    // Infinite looping logic!
    if (nextIndex < 0) {
      nextIndex = images.length - 1; // Jump to the end
    } else if (nextIndex >= images.length) {
      nextIndex = 0; // Jump to the beginning
    }
    
    scrollToIndex(nextIndex);
  };

  if (loading) {
    return (
      <div style={{ width: '100%', height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
        <Loader2 className="animate-spin text-accent" size={32} />
      </div>
    );
  }

  if (error || images.length === 0) {
    return (
      <div style={{ width: '100%', minHeight: '300px', aspectRatio: '16/10', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(255,255,255,0.02), rgba(0,0,0,0.2))', borderRadius: '16px', border: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,47,63,0.8) 0%, transparent 50%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
          <ImageIcon size={48} color="rgba(255,255,255,0.4)" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div style={{ position: 'relative', width: '100%', maxWidth: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', overflow: 'hidden' }}>
        
        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          style={{ 
            display: 'flex', 
            overflowX: 'auto', 
            scrollBehavior: 'smooth',
            width: '100%',
            maxWidth: '100%',
            alignItems: 'stretch',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',   // Firefox
            msOverflowStyle: 'none',  // IE and Edge
            WebkitOverflowScrolling: 'touch', // iOS smooth scrolling
          }}
          className="hide-scrollbar" 
        >
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}} />
          
          {images.map((img) => (
            <div 
              key={img.public_id} 
              style={{ 
                width: '100%',
                minWidth: '100%',
                flex: '0 0 100%',
                scrollSnapAlign: 'start',
                boxSizing: 'border-box'
              }}
            >
              <div
                style={{ 
                  width: '100%',
                  aspectRatio: '16/10',
                  borderRadius: '16px', 
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid var(--border-color)',
                  background: 'rgba(15, 47, 63, 0.4)',
                  cursor: 'pointer',
                  boxSizing: 'border-box'
                }}
                onClick={() => setSelectedImage(img.secure_url)}
              >
                <img
                  src={img.secure_url}
                  alt="Project asset"
                  loading="lazy"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain',
                    padding: '12px' 
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation & Indicator Bar */}
        {images.length > 1 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 0.25rem', marginTop: '0.25rem', width: '100%', boxSizing: 'border-box' }}>
            
            {/* Dots Counter (for <= 8 images) or Numeric Badge (for > 8 images) */}
            {images.length <= 8 ? (
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'nowrap' }}>
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToIndex(idx)}
                    aria-label={`Go to image ${idx + 1}`}
                    style={{
                      width: activeIndex === idx ? '20px' : '6px',
                      height: '6px',
                      borderRadius: '3px',
                      background: activeIndex === idx ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0
                    }}
                    onMouseEnter={(e) => { if(activeIndex !== idx) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)'; }}
                    onMouseLeave={(e) => { if(activeIndex !== idx) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'; }}
                  />
                ))}
              </div>
            ) : (
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '6px', 
                padding: '3px 10px', 
                background: 'rgba(255,255,255,0.04)', 
                borderRadius: '20px', 
                border: '1px solid var(--border-color)',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                fontWeight: 500
              }}>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>{activeIndex + 1}</span>
                <span>/</span>
                <span>{images.length}</span>
              </div>
            )}

            {/* Navigation Controls */}
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <button 
                onClick={() => scrollFiles('left')}
                aria-label="Previous image"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-primary)'; e.currentTarget.style.color = '#000'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={() => scrollFiles('right')}
                aria-label="Next image"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-primary)'; e.currentTarget.style.color = '#000'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
            
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(1rem, 3vw, 2rem)',
            animation: 'fadeIn 0.2s ease-out',
            boxSizing: 'border-box'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          `}} />
          <button 
            style={{ 
              position: 'absolute', 
              top: 'clamp(0.75rem, 2vw, 1.5rem)', 
              right: 'clamp(0.75rem, 2vw, 1.5rem)', 
              background: 'rgba(255,255,255,0.15)', 
              border: 'none', 
              borderRadius: '50%', 
              padding: '0.65rem', 
              color: 'white', 
              cursor: 'pointer', 
              zIndex: 10000,
              transition: 'background 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            <X size={22} />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            style={{ 
              maxWidth: '92vw', 
              maxHeight: '88vh', 
              objectFit: 'contain', 
              borderRadius: '8px', 
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)' 
            }} 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
}
