import './globals.css';
import HeaderNav from '@/components/organisms/HeaderNav';

export const metadata = {
  title: { default: 'Pangasinan Heritage Digital Showcase', template: '%s | Pangasinan Heritage' },
  description: 'Discover the iconic heritage and tourism sites of Pangasinan.',
};
export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        <HeaderNav />
        <main id="main">{children}</main>
        <footer className="container" style={{ paddingBlock: '2rem', color: 'var(--color-muted)' }}>
          <small>Pangasinan Provincial Tourism Office · Digital Heritage Showcase (student project)</small>
        </footer>
      </body>
    </html>
  );
}
