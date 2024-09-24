import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Pokemon",
  description: "Learn about your favorite Pokemon!",
  icons: {
    icon: "/icon.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
