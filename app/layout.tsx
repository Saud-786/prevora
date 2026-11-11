
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "PREVORA | Digital Agency",
  description:
    "PREVORA is a digital agency based in Lahore, Pakistan, bringing strategy, creative design and technology together to build meaningful digital experiences.",
  applicationName: "PREVORA",
  keywords: [
    "PREVORA",
    "Digital Agency",
    "Web Development",
    "UI UX Design",
    "Digital Marketing",
    "Lahore",
    "Pakistan",
  ],
  openGraph: {
    title: "PREVORA | Build. Grow. Succeed.",
    description:
      "Thoughtful ideas. Powerful execution. Discover digital solutions by PREVORA.",
    siteName: "PREVORA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en">
    <body>
      <Navbar />
      {children}
        <Footer />

    </body>
  </html>
);
}
