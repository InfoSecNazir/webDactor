import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { HelmetProvider } from "react-helmet-async";
import LoadingAnimation from "./components/LoadingAnimation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import WelcomePopup from "./components/WelcomePopup";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import EquipmentPage from "./pages/EquipmentPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <HelmetProvider>
      <DarkModeProvider>
      <LoadingAnimation />
      <div className="App" dir="rtl">
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/equipment" element={<EquipmentPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingButtons />
          <WelcomePopup />
          <Toaster position="top-center" dir="rtl" />
        </BrowserRouter>
      </div>
      </DarkModeProvider>
    </HelmetProvider>
  );
}

export default App;
