import "./globals.css"
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: '300',
  // You can also pass an array for multiple font weights, e.g. ['400', '600'].
});

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
    );
}