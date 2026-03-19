/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  Wrench, 
  Zap, 
  Shield, 
  Cpu, 
  ArrowRight, 
  ChevronRight, 
  Layers, 
  Settings,
  Bike,
  Trophy,
  Users
} from "lucide-react";

import bikeVideo from "./components/assets/Bike_move_in_202603191743.mp4";

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex items-baseline gap-4 mb-12 border-b border-white/10 pb-4">
    <span className="font-mono text-sm opacity-50">{number}</span>
    <h2 className="text-4xl font-bold uppercase tracking-tighter">{title}</h2>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 border border-white/10 bg-zinc-900/50 backdrop-blur-sm rounded-2xl flex flex-col gap-4 group transition-all hover:bg-white hover:text-black"
  >
    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-black/10">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold uppercase tracking-tight">{title}</h3>
    <p className="text-sm opacity-70 leading-relaxed">{description}</p>
    <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
      Learn More <ArrowRight className="w-3 h-3" />
    </div>
  </motion.div>
);

const BuildStep = ({ step, title, description, detail }: { step: string; title: string; description: string; detail: string }) => (
  <div className="grid grid-cols-[40px_1fr] gap-8 py-8 border-b border-white/10 last:border-0">
    <span className="font-mono text-xs opacity-40 pt-1">{step}</span>
    <div>
      <h4 className="text-lg font-bold uppercase mb-2">{title}</h4>
      <p className="text-sm opacity-80 mb-2">{description}</p>
      <p className="text-[10px] font-mono opacity-40 uppercase tracking-tight">{detail}</p>
    </div>
  </div>
);

const ScrollText = ({ text, className = "text-xl font-bold uppercase tracking-tight" }: { text: string, className?: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 50%"]
  });

  const characters = text.split("");
  
  return (
    <p ref={ref} className={className + " flex flex-wrap"}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = start + (1 / characters.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
        return (
          <motion.span key={i} style={{ opacity }} className={char === " " ? "w-[0.3em]" : ""}>
            {char}
          </motion.span>
        );
      })}
    </p>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  // Fade from 50% opacity at the top, down to 10% opacity as we scroll to ~20% of the page
  const videoOpacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 0.1]);

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-white selection:text-black">
      
      {/* Sticky Background Video */}
      <motion.div 
        style={{ opacity: videoOpacity }} 
        className="fixed inset-0 z-[0]"
      >
        <video 
          src={bikeVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </motion.div>

      {/* Main Content Wrapper */}
      <div className="relative z-10">
        {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <Bike className="text-black w-5 h-5" />
            </div>
            <span className="font-bold uppercase tracking-tighter text-xl">Bulky.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#services" className="hover:opacity-50 transition-opacity">Services</a>
            <a href="#build" className="hover:opacity-50 transition-opacity">Engineering</a>
            <a href="#about" className="hover:opacity-50 transition-opacity">Agency</a>
            <button className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition-transform">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="inline-block px-4 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-[0.3em] mb-8 rounded-full">
              Est. 2024 / Heavy Duty Engineering
            </span>
            <h1 className="text-[15vw] md:text-[12vw] leading-[0.85] font-black uppercase tracking-tighter mb-12">
              New <br />
              <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '2px #FFFFFF' }}>Era</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <p className="max-w-md text-lg md:text-xl opacity-70 leading-tight">
                We don't just build bikes. We engineer mechanical beasts designed for the bold. Bulky Bikes Agency is the frontier of heavy-duty two-wheel dominance.
              </p>
              <div className="flex gap-4">
                <button className="group flex items-center gap-4 bg-white text-black px-8 py-6 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors">
                  Explore Models <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Accent */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.05] pointer-events-none">
          <Bike size={800} strokeWidth={0.5} />
        </div>
      </section>

      {/* Stats / Marquee */}
      <div className="bg-black/40 py-12 overflow-hidden border-y border-white/10 backdrop-blur-md">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              <span className="text-white font-black uppercase text-4xl tracking-tighter opacity-20 italic">Bulky Engineering</span>
              <Zap className="text-white w-8 h-8 opacity-20" />
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="01" title="Our Services" />
          
          <div className="mb-16 max-w-4xl">
             <ScrollText text="We don't just assemble parts. We forge machines built for absolute dominance. Every frame, every weld, every wire is engineered to outlast the rider." className="text-2xl md:text-4xl font-black uppercase leading-tight tracking-tighter opacity-90" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon={Wrench}
              title="Custom Fabrication"
              description="Every frame is hand-welded using aerospace-grade steel. We don't do mass production; we do masterpieces."
            />
            <ServiceCard 
              icon={Cpu}
              title="Electric Integration"
              description="High-torque motors paired with custom battery management systems for silent, overwhelming power."
            />
            <ServiceCard 
              icon={Shield}
              title="Armor Coating"
              description="Industrial-grade powder coating and ceramic finishes that withstand the harshest urban environments."
            />
            <ServiceCard 
              icon={Layers}
              title="Performance Tuning"
              description="Suspension and drivetrain calibration tailored to your weight, height, and riding style."
            />
            <ServiceCard 
              icon={Settings}
              title="Fleet Management"
              description="Scalable solutions for delivery agencies and urban logistics requiring unbreakable hardware."
            />
            <ServiceCard 
              icon={Trophy}
              title="Design Consulting"
              description="From concept sketches to 3D prototypes, we help you define the visual identity of your ride."
            />
          </div>
        </div>
      </section>

      {/* Build Process Section */}
      <section id="build" className="py-32 px-6 bg-zinc-950/50 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionHeader number="02" title="The Build" />
            
            <div className="mb-12">
               <ScrollText text="Our process is a collision of brute force and surgical precision. We call it Bulky Logic." className="text-2xl font-medium leading-tight opacity-80" />
            </div>

            <div className="space-y-4">
              <BuildStep 
                step="01"
                title="Stress Analysis"
                description="We simulate 10 years of heavy use before a single cut is made. Our frames are built to outlast their riders."
                detail="Using advanced FEA (Finite Element Analysis) to identify structural weak points."
              />
              <BuildStep 
                step="02"
                title="Raw Material Selection"
                description="Only 4130 Chromoly and 6061-T6 Aluminum make the cut. No compromises on weight-to-strength ratios."
                detail="Sourced from certified industrial suppliers with full traceability."
              />
              <BuildStep 
                step="03"
                title="The Assembly"
                description="One bike, one engineer. This ensures accountability and perfection in every bolt tightened."
                detail="Torque-verified assembly with documented quality control logs for every unit."
              />
            </div>
          </div>
          <div className="relative group">
            <div className="aspect-[4/5] bg-zinc-900 rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800" 
                alt="Bike Engineering"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                <p className="text-white text-sm font-mono">PROTOTYPE_V4.2 / TESTING_PHASE</p>
              </div>
            </div>
            {/* Floating Technical Label */}
            <div className="absolute -bottom-6 -left-6 bg-white text-black p-8 rounded-2xl hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Live Diagnostics</span>
              </div>
              <div className="space-y-2 font-mono text-[10px] opacity-70">
                <p>TORQUE_LIMIT: 120NM</p>
                <p>FRAME_STIFFNESS: 98%</p>
                <p>BATT_EFFICIENCY: OPTIMAL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Agency Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1 order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-zinc-900 rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=400" alt="Detail" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square bg-zinc-900 rounded-2xl overflow-hidden translate-y-8">
                  <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=400" alt="Detail" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <SectionHeader number="03" title="The Agency" />

              <div className="mb-8">
                <ScrollText text="We are a collective of engineers, designers, and rebels." className="text-3xl font-bold uppercase tracking-tight" />
              </div>

              <div className="space-y-6 text-lg opacity-70">
                <p>
                  Founded in the heart of the industrial district, Bulky Bikes Agency started with a simple question: Why are modern bikes so fragile?
                </p>
                <p>
                  We decided to build the opposite. Bikes that feel like tanks. Bikes that command respect on the road. Bikes that represent a new era of urban mobility.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-black mb-1">120+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">Custom Builds</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-1">15</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">Design Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 bg-black/60 backdrop-blur-sm text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12">
            Join the <br />Movement
          </h2>
          <p className="text-xl opacity-60 mb-12 max-w-xl mx-auto">
            Ready to experience the weight of excellence? Contact our agency for a consultation or a test ride.
          </p>
          <button className="bg-white text-black px-12 py-6 rounded-2xl font-bold uppercase tracking-widest hover:scale-105 transition-transform">
            Get in Touch
          </button>
        </div>
        {/* Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black opacity-[0.03] select-none pointer-events-none uppercase">
          Bulky
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <Bike className="text-black w-4 h-4" />
              </div>
              <span className="font-bold uppercase tracking-tighter text-lg">Bulky.</span>
            </div>
            <p className="text-sm opacity-50 max-w-xs">
              Engineering the future of heavy-duty urban mobility. Built for the bold, by the bold.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40">Navigation</h4>
              <ul className="text-sm font-medium space-y-2">
                <li><a href="#" className="hover:opacity-50 transition-opacity">Models</a></li>
                <li><a href="#" className="hover:opacity-50 transition-opacity">Services</a></li>
                <li><a href="#" className="hover:opacity-50 transition-opacity">Process</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40">Agency</h4>
              <ul className="text-sm font-medium space-y-2">
                <li><a href="#" className="hover:opacity-50 transition-opacity">About</a></li>
                <li><a href="#" className="hover:opacity-50 transition-opacity">Careers</a></li>
                <li><a href="#" className="hover:opacity-50 transition-opacity">Press</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40">Social</h4>
              <ul className="text-sm font-medium space-y-2">
                <li><a href="#" className="hover:opacity-50 transition-opacity">Instagram</a></li>
                <li><a href="#" className="hover:opacity-50 transition-opacity">Twitter</a></li>
                <li><a href="#" className="hover:opacity-50 transition-opacity">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest opacity-30">
          <p>© 2024 Bulky Bikes Agency. All Rights Reserved.</p>
          <p>Privacy Policy / Terms of Service</p>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
      </div>
    </div>
  );
}
