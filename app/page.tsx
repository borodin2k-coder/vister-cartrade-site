"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Globe, ShieldCheck, Truck, MapPin, Mail, Phone } from "lucide-react";

const floatVariants: Variants = {
  rest: {
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    y: -12,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#050505] to-black text-gray-100 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-gray-300 via-blue-400 to-gray-300 bg-clip-text text-transparent">
            Vister CarTrade
          </div>

          <nav className="hidden md:flex space-x-10 text-sm uppercase tracking-wider font-medium">
            {["About", "Markets", "Expertise", "Process", "License", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "License" ? "/license.jpg" : `#${item.toLowerCase()}`}
                target={item === "License" ? "_blank" : undefined}
                rel={item === "License" ? "noopener noreferrer" : undefined}
                className="hover:text-blue-400 transition-colors relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero – без Georgia */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />
          <img
            src="https://4kwallpapers.com/images/wallpapers/ram-dakota-1920x1080-23846.jpg"
            alt="RAM Dakota Nightfall Concept cinematic dark"
            className="w-full h-full object-cover brightness-75 scale-105"
          />
        </div>

        <div className="relative z-20 text-center max-w-5xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-r from-gray-200 via-blue-400 to-gray-200 bg-clip-text text-transparent mb-8"
          >
            Global Vehicle Sourcing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3 }}
            className="text-2xl md:text-3xl font-light text-gray-300 mb-12 max-w-4xl mx-auto"
          >
            International Car Broker • Premium & Luxury Vehicles from USA, UAE, Europe • Discreet Worldwide Delivery
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Button 
              className="bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 px-12 py-7 text-lg rounded-3xl shadow-2xl shadow-blue-900/40 hover:shadow-blue-700/60 transition-all duration-500"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-gray-700 bg-black/40 backdrop-blur-lg hover:bg-gray-900/60 px-12 py-7 text-lg rounded-3xl"
            >
              View Our Expertise
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About – без Georgia */}
      <section id="about" className="py-32 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={floatVariants}
            initial="rest"
            whileHover="hover"
            className="bg-gradient-to-br from-[#0d0d0d] to-black border border-gray-800/30 rounded-3xl p-12 md:p-16 shadow-[0_25px_70px_rgba(0,0,0,0.9),inset_0_2px_12px_rgba(255,255,255,0.04)] backdrop-blur-sm"
          >
            <h2 className="text-5xl font-bold text-center mb-10 bg-gradient-to-r from-gray-300 to-blue-500 bg-clip-text text-transparent">
              Who We Are
            </h2>
            <p className="text-xl leading-relaxed text-gray-300 text-center max-w-4xl mx-auto mb-10">
              Vister CarTrade is an international car broker with headquarters in Dubai, UAE.  
              We specialize in sourcing and supplying premium and luxury vehicles from key markets: USA, UAE, Europe.  
              International vehicle trading made easy — confidentially, precisely, globally.
            </p>
            <div className="text-center">
              <Button
                asChild
                className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-blue-900/50 px-10 py-6 text-lg rounded-3xl shadow-lg shadow-blue-950/30 hover:shadow-blue-800/50 transition-all"
              >
                <a href="/license.jpg" target="_blank" rel="noopener noreferrer">
                  View Official Trade License
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Sourcing Markets – картинки поменяны местами US и UAE */}
      <section id="markets" className="py-32 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-300 to-blue-500 bg-clip-text text-transparent">
            Key Sourcing Markets
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "United States",
                desc: "The widest selection of new and low-mileage premium vehicles at optimal prices.",
                img: "https://img3.akspic.ru/previews/3/1/3/2/2/122313/122313-avtomobil-shina-obod-dzhip-jeep_wrangler-x750.jpg", // Jeep Wrangler теперь в US
              },
              {
                title: "United Arab Emirates",
                desc: "Exclusive configurations, latest models, and regional advantages.",
                img: "https://4kwallpapers.com/images/wallpapers/ram-dakota-1920x1080-23846.jpg", // RAM теперь в UAE
              },
              {
                title: "Europe",
                desc: "High specifications of German, British, and Italian brands with full compliance.",
                img: "https://di-uploads-pod16.dealerinspire.com/edvoylescdjr/uploads/2021/04/2020-dodge-muscle-vlp-durango-srt-hellcat.jpg.image_.2880_1.jpg",
              },
            ].map((market, i) => (
              <motion.div
                key={market.title}
                variants={floatVariants}
                initial="rest"
                whileHover="hover"
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-[#111111] to-black border border-gray-800/40 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85),inset_0_1px_10px_rgba(255,255,255,0.03)] backdrop-blur-sm">
                  <div className="h-72 overflow-hidden">
                    <img
                      src={market.img}
                      alt={market.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold mb-4 text-gray-100">{market.title}</h3>
                    <p className="text-gray-400 text-lg">{market.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-300 to-blue-500 bg-clip-text text-transparent">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { icon: Globe, title: "Market Intelligence", desc: "Timely insights into global trends and pricing." },
              { icon: ShieldCheck, title: "Discreet Transactions", desc: "Confidential handling of high-value deals." },
              { icon: Truck, title: "Global Logistics", desc: "Secure and efficient worldwide delivery." },
              { icon: MapPin, title: "Specification Advisory", desc: "Custom configurations tailored to your needs." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={floatVariants}
                initial="rest"
                whileHover="hover"
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-[#0f0f0f] to-black border border-gray-800/40 rounded-3xl p-8 shadow-[0_15px_50px_rgba(0,0,0,0.8),inset_0_1px_8px_rgba(255,255,255,0.03)] text-center backdrop-blur-sm"
              >
                <item.icon className="w-12 h-12 mx-auto mb-6 text-blue-500" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-100">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-32 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-300 to-blue-500 bg-clip-text text-transparent">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { num: 1, title: "Inquiry", desc: "Share your requirements and preferences." },
              { num: 2, title: "Consultation", desc: "Expert advice on markets and specs." },
              { num: 3, title: "Sourcing & Verification", desc: "Procurement from optimal sources." },
              { num: 4, title: "Delivery", desc: "Seamless global logistics." },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                variants={floatVariants}
                initial="rest"
                whileHover="hover"
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-[#111111] to-black border border-gray-800/40 rounded-3xl p-8 shadow-[0_15px_50px_rgba(0,0,0,0.8),inset_0_1px_8px_rgba(255,255,255,0.03)] text-center backdrop-blur-sm"
              >
                <div className="text-5xl font-black text-blue-600 mb-4">{step.num}</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-100">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={floatVariants}
            initial="rest"
            whileHover="hover"
            className="bg-gradient-to-br from-[#0d0d0d] to-black border border-gray-800/30 rounded-3xl p-12 shadow-[0_25px_70px_rgba(0,0,0,0.9),inset_0_2px_12px_rgba(255,255,255,0.04)] backdrop-blur-sm"
          >
            <h2 className="text-5xl font-bold text-center mb-10 bg-gradient-to-r from-gray-300 to-blue-500 bg-clip-text text-transparent">
              Contact Us
            </h2>

            <form className="space-y-6 max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-4 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition"
              />
              <Button className="w-full bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 py-7 text-lg rounded-3xl shadow-xl shadow-blue-900/40">
                Send Inquiry
              </Button>
            </form>

            <div className="text-center mt-12 text-gray-400 space-y-3">
              <p>Headquarters: Dubai, UAE</p>
              <p>Dubai Silicon Oasis</p>
              <p>IFZA Properties</p>
              <p>DSO-IFZA</p>
              <p className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5 text-blue-500" /> info@vistercar.com
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5 text-blue-500" /> +971 52 559 7871
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-900/50 text-center text-gray-500 bg-black">
        <p>© 2026 Vister CarTrade. All rights reserved.</p>
        <a href="/license.jpg" target="_blank" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
          Official Trade License
        </a>
      </footer>
    </div>
  );
}