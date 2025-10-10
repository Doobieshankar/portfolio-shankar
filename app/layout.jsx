import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio - Shankar D | Full Stack Developer",
  description:
    "Shankar D - Entry-level Full Stack Developer skilled in Django, React / Next.js, REST APIs, MySQL, JavaScript, and Git. Passionate about building scalable web apps and innovative digital solutions.",
  keywords: [
    "Shankar D",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Django Developer",
    "JavaScript",
    "Frontend",
    "Backend",
    "Web Developer",
    "Tiruppur Developer",
  ],
  authors: [{ name: "Shankar D" }],
  creator: "Shankar D",
  openGraph: {
    title: "Shankar D | Full Stack Developer Portfolio",
    description:
      "Explore my portfolio showcasing projects in React, Next.js, Django, and more. Let's build scalable and interactive web applications together.",
    url: "https://portfolio-shankar.vercel.app", // replace with your domain
    siteName: "Shankar Portfolio",
    images: [
      {
        url: "https://portfolio-shankar.vercel.app/preview.png", // add your preview image
        width: 1200,
        height: 630,
        alt: "Shankar D Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shankar D | Full Stack Developer",
    description:
      "Portfolio of Shankar D, showcasing projects in React, Next.js, Django, and modern web technologies.",
    images: ["https://portfolio-shankar.vercel.app/preview.png"], // same preview image
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${poppins.variable} ${openSans.variable} antialiased relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <StarsBackground />
          <ShootingStars
            minSpeed={10}
            maxSpeed={30}
            minDelay={4200}
            maxDelay={8700}
            starWidth={10}
            starHeight={2}
          />
          <div className="mt-6">{children}</div>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
