"use client";

import { useState } from 'react';
import clsx from 'clsx';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Zap, Check, Star, Github } from 'lucide-react';

export default function Page() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const handleFaqToggle = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };
  
  return (
    <div className="relative flex flex-col bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white min-h-screen">
      {/* Sticky Glassmorphism Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur-xl bg-zinc-950/80 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center space-x-4">
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500">Impact</span>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-cyan-500 transition">Features</a>
              <a href="#" className="hover:text-cyan-500 transition">Pricing</a>
              <a href="#" className="hover:text-cyan-500 transition">Contact</a>
            </nav>
          </motion.div>
          <div className="flex space-x-4">
            <button className="text-cyan-500">Sign In</button>
            <button className="bg-cyan-500 text-zinc-950 px-4 py-2 rounded-lg hover:shadow-lg transition">Get Started</button>
          </div>
        </div>
      </header>

      {/* Cinematic Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-transparent">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">Make Impactful Decisions</h1>
          <p className="text-xl text-zinc-300 mb-6">Join thousands of successful teams reimagining decision making with our platform.</p>
          <div className="flex justify-center items-center space-x-4">
            <button className="px-6 py-3 bg-cyan-500 text-zinc-950 rounded-lg text-lg hover:shadow-lg transition">Try for Free</button>
            <button className="px-6 py-3 bg-transparent border border-cyan-500 text-cyan-500 rounded-lg text-lg hover:bg-cyan-500 hover:text-zinc-950 transition">Learn More</button>
          </div>
        </motion.div>
      </section>

      {/* Trusted By Logo Strip */}
      <section className="py-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-wrap items-center justify-around gap-4">
            <img src="/logos/logo-1.svg" alt="logo" className="h-12 opacity-60 hover:opacity-100 transition duration-300" />
            <img src="/logos/logo-2.svg" alt="logo" className="h-12 opacity-60 hover:opacity-100 transition duration-300" />
            <img src="/logos/logo-3.svg" alt="logo" className="h-12 opacity-60 hover:opacity-100 transition duration-300" />
            <img src="/logos/logo-4.svg" alt="logo" className="h-12 opacity-60 hover:opacity-100 transition duration-300" />
            <img src="/logos/logo-5.svg" alt="logo" className="h-12 opacity-60 hover:opacity-100 transition duration-300" />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Features</motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-zinc-800 p-6 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                  <Sparkles className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Feature {index + 1}</h3>
                <p className="text-zinc-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="py-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{label: 'Users', value: '10K+'}, {label: 'Projects', value: '500+'}, {label: 'Countries', value: '30+'}].map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-zinc-800 p-6 rounded-lg shadow-lg text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-3">{stat.value}</div>
                <div className="text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Testimonials</h2>
          </motion.div>
          <div className="flex space-x-4 overflow-x-auto">
            {[...Array(3)].map((_, index) => (
              <motion.div key={index} className="flex-shrink-0 w-[300px] bg-zinc-800 p-6 rounded-lg">
                <p className="text-zinc-300">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."</p>
                <div className="mt-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-cyan-400 mr-2" />
                    <span className="text-zinc-400">User {index + 1}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-500/20 to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Pricing</motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{title: 'Basic', price: '$19/mo'}, {title: 'Pro', price: '$49/mo', popular: true}, {title: 'Enterprise', price: 'Custom'}].map((pricing, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className={clsx("bg-zinc-800 p-8 rounded-lg shadow-lg", pricing.popular && "border-2 border-cyan-400")}
              >
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold text-white">{pricing.title}</h3>
                  <div className="text-3xl font-bold text-cyan-400">{pricing.price}</div>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center"><Check className="h-5 w-5 text-cyan-400 mr-2" /> Feature 1</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-cyan-400 mr-2" /> Feature 2</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-cyan-400 mr-2" /> Feature 3</li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">FAQs</h2>
          </motion.div>
          <div className="space-y-6">
            {[0, 1, 2].map(index => (
              <div key={index} className="bg-zinc-800 p-6 rounded-lg">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleFaqToggle(index)}>
                  <h3 className="text-lg font-medium text-white">FAQ Question {index + 1}</h3>
                  <ChevronDown className={clsx("h-6 w-6 text-cyan-400", faqOpen === index && "rotate-180")}/>
                </div>
                {faqOpen === index && (
                  <p className="mt-4 text-zinc-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit tempor incididunt.</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA Banner */}
      <section className="py-24 bg-gradient-to-l from-zinc-900 to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Ready to make an impact?</h2>
            <button className="px-8 py-4 bg-cyan-500 text-zinc-950 rounded-lg text-lg hover:shadow-xl transition">Get Started Today</button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <span className="text-zinc-400">&copy; {new Date().getFullYear()} Impact. All rights reserved.</span>
          <div className="flex space-x-4">
            <a href="#" className="text-zinc-400 hover:text-cyan-500"><Github className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
