import ContextProvider from "./component/ContextProvider";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <NavBar />
          <div className=" h-12 w-100">navbar</div>
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
