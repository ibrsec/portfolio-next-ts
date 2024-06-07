import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

import "@fontsource/bungee-shade";  /*  Defaults to weight 400 */
import "@fontsource/bungee-shade/400.css"; /* Specify weight */
/* @import "@fontsource/bungee-shade/400-italic.css"; Specify weight and style */
/* font-family: "Bungee Shade"; */

import "@fontsource/rampart-one"; /* Defaults to weight 400 */
import "@fontsource/rampart-one/400.css"; /* Specify weight */
/* font-family: "Rampart One"; */


import "@fontsource/poppins"; 
import "@fontsource/poppins/400.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
/* font-family: "Poppins"; */




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ibrahim Seckin | Portfolio",
  description: "Welcome to my portfolio page!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/1.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <ToastContainer />
        <Footer />
        
      </body>
    </html>
  );
}
