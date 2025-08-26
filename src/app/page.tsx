import MusicHero from "@/screens/hero";
import About from "@/screens/about";
import Header from '../components/header'
import Projects from "@/screens/projects";
import Contact from "@/screens/contact";
import Footer from "@/screens/footer";
export default function Home() {
  return (
    <>
    <Header/>
    <MusicHero/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}
