import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sculpture Beauty Studio | Massage & Esthetics in Austin',
  description: 'Personalized massage and esthetic care by Lyubov Yuzyuk in Austin, Texas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
