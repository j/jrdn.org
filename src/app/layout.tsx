import './globals.css';
import { inter, outfit, mono } from './fonts';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${mono.variable}`}
    >
      <head />
      <body>{children}</body>
    </html>
  );
}
