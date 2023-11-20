import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  preload: true,
  subsets: ['latin'],
  weight: ['400', '700'],
});
