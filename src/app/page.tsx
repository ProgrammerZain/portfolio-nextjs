import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* About, Projects, Experience, Skills, Contact land here in Phase 4 */}
      </main>
      <Footer />
    </>
  );
}
