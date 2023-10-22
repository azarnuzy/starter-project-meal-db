import Navbar from '../components/navbar';
import Provider from '../components/provider';
import './global.css';
import React from 'react';

export const metadata = {
  title: 'Recipe App',
  description:
    'Recipe app is a simple app to manage your recipes. It is built with Next.js and TailwindCss. State management is handled by Recoil. ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className="max-w-[1440px] w-full px-4 sm:px-6 md:px-8 lg:px-16 mx-auto ">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
