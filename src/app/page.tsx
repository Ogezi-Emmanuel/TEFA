"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Video from "@/components/Video";

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    garment: "",
    size: "",
    destination: "",
    acknowledgment: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const garments = [
    "The Eko Blazer",
    "The Lagos Silk Slip",
    "The Aso Oke Maxi Skirt",
    "The Ankara Bomber",
    "The Adire Kimono",
    "The Custom Statement Piece",
  ];

  const sizes = [
    "UK 6",
    "UK 8",
    "UK 10",
    "UK 12",
    "UK 14",
    "UK 16",
    "Custom Measurements - Will provide in DM",
  ];

  const destinations = [
    "Lagos Delivery",
    "Interstate Nigeria",
    "International/Worldwide 🌍",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const invoiceText = `
🧵 TÉFA PRE-ORDER INVOICE 🧵
━━━━━━━━━━━━━━━━━━━━━━━━
👤 Full Name: ${formData.name}
👔 Garment/Collection Piece: ${formData.garment}
📏 Size: ${formData.size}
📍 Shipping Destination: ${formData.destination}
✅ Acknowledged Pre-Order Terms: Yes (Dispatches on Mondays & Fridays)
━━━━━━━━━━━━━━━━━━━━━━━━
Thank you for your pre-order! We will reach out shortly with payment details.
    `.trim();

    const whatsappUrl = `https://api.whatsapp.com/send?phone=2348164724078&text=${encodeURIComponent(invoiceText)}`;
    window.open(whatsappUrl, "_blank");
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-onyx text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-emerald text-onyx py-3 text-center text-sm md:text-base font-medium"
      >
        🌍 Worldwide Shipping | 🚚 Dispatches strictly on Mondays & Fridays
      </motion.div>

      <header className="py-6 px-6 md:px-12 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl md:text-3xl font-bold tracking-tight"
        >
          TÉFA
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sm text-gray-400"
        >
          @shop.tefa
        </motion.div>
      </header>

      <section className="px-4 md:px-6 lg:px-12 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="aspect-[9/16] md:aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden mb-12 max-w-full"
        >
          <Video src="/Tefa hero.mp4" className="w-full h-full" />
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter">
            Confidence in Every Stitch.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Born in Lagos. Worn globally.
          </p>
          <motion.a
            href="#story"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-emerald text-onyx px-12 py-4 rounded-full text-lg font-bold hover:bg-emerald/90 transition-all"
          >
            Discover Our Story
          </motion.a>
        </motion.div>
      </section>

      <section id="story" className="px-4 md:px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <Video src="/Tefa 1.mp4" className="aspect-[3/4] rounded-3xl overflow-hidden" />
          </motion.div>
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial" transition={{ delay: 0.2 }}>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Crafted for the Fearless.
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              TÉFA isn't just clothing—it's armor. Each piece is designed to command attention, 
              crafted with intention, and built for the modern Nigerian who refuses to blend in.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From the bustling streets of Lagos to international runways, our silhouettes carry 
              the spirit of a city that never sleeps and a culture that never compromises.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 md:px-6 lg:px-12 py-24 bg-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial" className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Heritage Meets Modernity.
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We honor traditional craftsmanship while pushing the boundaries of contemporary design. 
              Aso Oke textures meet urban cuts, Adire patterns grace modern silhouettes.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Every stitch tells a story of Nigeria's rich textile heritage, reimagined for today.
            </p>
          </motion.div>
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial" className="order-1 lg:order-2">
            <Video src="/Tefa 2.mp4" className="aspect-[3/4] rounded-3xl overflow-hidden" />
          </motion.div>
        </div>
      </section>

      <section className="px-4 md:px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <Video src="/Tefa 3.mp4" className="aspect-[3/4] rounded-3xl overflow-hidden" />
          </motion.div>
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial" transition={{ delay: 0.1 }}>
            <Video src="/Tefa 4.mp4" className="aspect-[3/4] rounded-3xl overflow-hidden" />
          </motion.div>
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial" transition={{ delay: 0.2 }}>
            <Video src="/Tefa 5.mp4" className="aspect-[3/4] rounded-3xl overflow-hidden" />
          </motion.div>
        </div>
        <motion.div 
          {...fadeInUp} 
          viewport={{ once: true }} 
          whileInView="animate" 
          initial="initial" 
          className="max-w-3xl mx-auto text-center mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            The Collection Speaks.
          </h2>
          <p className="text-lg text-gray-300">
            Each video showcases the movement, the drape, the attitude—because luxury isn't just seen, it's felt.
          </p>
        </motion.div>
      </section>

      <section id="preorder" className="px-6 md:px-12 py-24 bg-white/5">
        <div className="max-w-2xl mx-auto">
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
            className="bg-onyx backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              The Pre-Order Engine
            </h2>
            <p className="text-gray-400 text-center mb-10">
              Skip the DMs. Configure your order directly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20 text-lg"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Garment / Collection Piece
                </label>
                <select
                  name="garment"
                  value={formData.garment}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20 text-lg"
                >
                  <option value="">Select a piece...</option>
                  {garments.map((g) => (
                    <option key={g} value={g} className="bg-onyx">
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Size Configuration
                </label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20 text-lg"
                >
                  <option value="">Select your size...</option>
                  {sizes.map((s) => (
                    <option key={s} value={s} className="bg-onyx">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Shipping Destination
                </label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20 text-lg"
                >
                  <option value="">Select destination...</option>
                  {destinations.map((d) => (
                    <option key={d} value={d} className="bg-onyx">
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="acknowledgment"
                  checked={formData.acknowledgment}
                  onChange={handleChange}
                  required
                  className="mt-1 w-5 h-5 text-emerald bg-white/5 border-white/10 rounded focus:ring-emerald"
                />
                <label className="text-gray-300 text-sm leading-relaxed">
                  I understand this is a Pre-Order and dispatches occur only on
                  Mondays and Fridays.
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-emerald text-onyx py-5 rounded-xl text-xl font-bold hover:bg-emerald/90 transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Opening WhatsApp..." : "Generate Pre-Order Invoice"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="flex flex-col md:flex-row justify-center gap-6 text-gray-400">
            <span>Made in Nigeria 🇳🇬</span>
            <span>Refunds subject to T&C</span>
            <span>Engineered for Digital Sovereignty</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
