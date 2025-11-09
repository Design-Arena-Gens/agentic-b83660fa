export const metadata = {
  title: 'Agentic App',
  description: 'Deployed on Vercel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Inter, system-ui, sans-serif', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
