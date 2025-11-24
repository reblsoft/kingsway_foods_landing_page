"use client";
import Footer from "@/components/fragments/Footer";
import AboutUs from "@/components/sections/AboutUs";
import ContactUs from "@/components/sections/ContactUs";
import Features from "@/components/sections/Features";
import HeroSection from "@/components/sections/HeroSection";
import Screenshots from "@/components/sections/Screenshots";
import Testimonials from "@/components/sections/Testimonials";
import { motion } from "motion/react";

import "./globals.css";
import Link from "next/link";
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >


    <div className="scrollbar-hidden">

      <HeroSection/>
      <AboutUs />
      <Features />
      <Screenshots />
      <Testimonials />
      <ContactUs />
    </div>

    
    </motion.div>
  );
}
