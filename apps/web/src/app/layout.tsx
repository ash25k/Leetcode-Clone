"use client"

import "./globals.css";
import "ui/styles.css";
import { useRouter } from "next/navigation";
import { Navbar } from "ui";



export default function RootLayout({children,}: {children: React.ReactNode;}): JSX.Element {

  const router = useRouter();

  const LINKS = [{
    name : "Register",
    onClick : () => router.push('/signup')
  },
  {
    name : "Sign in",
    onClick : () => router.push('/login')
  }]

  return (
    <html >
      <body className="bg-gray-200">
        <Navbar links = {LINKS}/>
        {children}
      </body>
    </html>
  );
}
