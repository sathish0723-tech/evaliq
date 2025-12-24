import "./globals.css";

export const metadata = {
  title: "Evaliq - Intelligent Student Management Platform",
  description: "AI-driven precision for educators to unlock every student's potential",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

