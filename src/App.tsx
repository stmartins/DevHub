import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { CvSection } from "./components/CvSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectsSection } from "./components/ProjectsSection";
import { LanguageProvider } from "./i18n/language";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-ink">
        <Header />
        <main>
          <Hero />
          <ProjectsSection />
          <CvSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
