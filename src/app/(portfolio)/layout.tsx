import AppBackground from "@/components/app-background";
import Header from "@/components/header";

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppBackground />
      <Header />
      {children}
    </>
  );
}
