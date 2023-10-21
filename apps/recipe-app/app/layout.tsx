import './global.css';

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
      <body>{children}</body>
    </html>
  );
}
