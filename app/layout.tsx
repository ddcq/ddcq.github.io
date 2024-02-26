import "../styles/globals.css";
import "../styles/nothing.css"
import '@fontsource-variable/montserrat';
import '@fontsource/courier-prime';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'CV - Denis Declercq',
  icons: {
    icon: '/favicon.ico',
    apple: 'apple-icon.png'
  }
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-base-100 text-base-content">{children}</body>
    </html>
  );
}
