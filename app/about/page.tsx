import Header from "@/components/layout/header";
import Herosection from "@/components/about/hero";
import Mission from "@/components/about/mission";
import Founder from "@/components/about/founder";
import Culture from "@/components/about/culture";
import Footer from "@/components/layout/footer";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Header />
      {/* Hero Section */}
      <Herosection />

      {/* Mission & Name Section */}
      <Mission />

      {/* Co-Founders Section */}
      <Founder />

      {/* Culture Values Section */}
      <Culture />

      <Footer isTransparent={false} />
    </main>
  );
} 