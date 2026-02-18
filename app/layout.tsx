import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import CustomScrollbar from "./components/CustomScrollbar";

export const metadata: Metadata = {
  title: "UW Skateclub",
  description: "University of Waterloo Skateboarding Club - Join us for skating sessions, events, and community!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <CustomScrollbar />
        {children}
      </body>
    </html>
  );
}
