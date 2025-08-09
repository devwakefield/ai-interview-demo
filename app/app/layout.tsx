import './globals.css';

export const metadata = {
  title: 'AI Interview Demo',
  description: 'Minimal Next.js app deployed on Vercel'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
