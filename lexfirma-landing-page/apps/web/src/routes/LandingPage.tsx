import CTAFinal from "../components/landing/CTAFinal";
import DemoRequest from "../components/landing/DemoRequest";
import FAQ from "../components/landing/FAQ";
import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Hero from "../components/landing/Hero";
import HowItWorks from "../components/landing/HowItWorks";
import LogoMarquee from "../components/landing/LogoMarquee";
import NavBar from "../components/landing/NavBar";
import Pricing from "../components/landing/Pricing";
import ProblemPromise from "../components/landing/ProblemPromise";
import ProductDemo from "../components/landing/ProductDemo";
import SecuritySeals from "../components/landing/SecuritySeals";
import UseCases from "../components/landing/UseCases";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <LogoMarquee />
        <ProblemPromise />
        <Features />
        <HowItWorks />
        <ProductDemo />
        <SecuritySeals />
        <UseCases />
        <Pricing />
        <DemoRequest />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
