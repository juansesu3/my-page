import NavBar from "@/components/navbar/NavBar";
import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import Navbar2 from "@/components/nav2/Navbar2";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NeGiUpp",
  description: "Software develoment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
         <AuthProvider>
         
          <div className="container">
          <Navbar2/>
            {children}
            <Footer />
          </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
