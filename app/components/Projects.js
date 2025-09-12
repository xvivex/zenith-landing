"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Subscription Content Platform",
    description: "Built a full-stack app with Razorpay subscriptions, gated video/image content, and admin dashboard.",
    tech: "Next.js, Prisma, Razorpay, Supabase",
  },
  {
    title: "Trading Platform (RFQ)",
    description: "Developed APIs & UI for bond trading (NSE/BSE integration), used by fintech clients.",
    tech: "Go, Next.js, Postgres",
  },
  {
    title: "AI WhatsApp Chatbot",
    description: "Created an AI-powered chatbot to answer user queries and fetch real-time financial data.",
    tech: "Node.js, LangChain, WhatsApp API",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-[var(--foreground)]">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
                {proj.title}
              </h3>
              <p className="text-gray-600 mb-4">{proj.description}</p>
              <span className="text-sm text-blue-500">{proj.tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
