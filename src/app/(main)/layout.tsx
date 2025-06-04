import "./globals.css";
import Navbar from "@/components/shared/navbar/components/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
}
