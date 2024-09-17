// src/app/layout.tsx
import '../styles.css';
import { OrderProvider } from '../context/OrderContext';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Pizza App',
  description: 'Ordina la tua pizza preferita online',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <OrderProvider>
          <Navbar />
          <div>
            {children}
          </div>
        </OrderProvider>
      </body>
    </html>
  );
}
