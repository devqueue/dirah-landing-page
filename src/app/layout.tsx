import type { Metadata } from "next";
import "./globals.css";
import {
  allRoundGothic,
  geSsTwo,
  adelleSans,
  adelleSansAra,
  adelleSansCnd,
} from "../styles/fonts";

export const metadata: Metadata = {
  title: "Dirah Development",
  description:
    "Dirah Development Company specializes in development and asset management, focusing on the development and management of real estate projects and destinations in the heart of the city of Riyadh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${allRoundGothic.variable} ${geSsTwo.variable} ${adelleSans.variable} ${adelleSansAra.variable} ${adelleSansCnd.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
