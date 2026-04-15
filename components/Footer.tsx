import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      padding: '4rem 5%',
      background: 'rgba(15, 47, 63, 0.6)',
      borderTop: '1px solid var(--border-color)',
      marginTop: 'auto'
    }}>
      <div className="container flex flex-col items-center justify-center gap-6" style={{ margin: '0 auto', maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="mailto:k.miftu.h@gmail.com" style={{ color: 'var(--text-muted)', fontSize: '1rem', transition: 'color 0.3s' }} className="hover:text-accent">
            k.miftu.h@gmail.com
          </a>
          <span style={{ color: 'var(--border-color)' }}>|</span>
          <a href="tel:01869040634" style={{ color: 'var(--text-muted)', fontSize: '1rem', transition: 'color 0.3s' }} className="hover:text-accent">
            01869040634
          </a>
          <span style={{ color: 'var(--border-color)' }}>|</span>
          <Link href="/works" style={{ color: 'var(--text-muted)', fontSize: '1rem', transition: 'color 0.3s' }} className="hover:text-accent">
            Portfolio
          </Link>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', textAlign: 'center' }}>
          © 2026 Kazi Miftahul Hoque
        </p>
      </div>
    </footer>
  );
}
