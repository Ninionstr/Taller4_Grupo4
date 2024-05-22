import "./globals.css";
import Header from "@/app/components/Header";

// Importamos "Providers": Nos dará acceso a los componentes de Chakra UI
import { Providers } from "@/app/providers/provider";

export const metadata = {
  title: "Cervecerías Valdivianas",
  description: "Puntos de cervecerías en Valdivia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
