import Header from "@/components/Header";
import Isaiah from "@/components/Isaiah";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Isaiah />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
