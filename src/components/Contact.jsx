import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://portfolio-backend-production-b665.up.railway.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      
      const data = await res.json();
      if (data.success) {
        toast.success(" Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else{
        toast.error('Failed to send message')
        
      }
    } catch (error) {
      toast.error(" Something went wrong.");
    }
  };

  return (
    <motion.section
      id="Contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-950 via-cyan-900 to-cyan-950 text-white px-6 py-12 border-b border-cyan-900"
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-cyan-950/50 border border-cyan-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-cyan-950/50 border border-cyan-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-cyan-950/50 border border-cyan-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 h-32"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-500 transition-colors p-3 rounded-lg font-semibold shadow-lg"
          >
            Send Message
          </button>
        </form>

      </div>
    </motion.section>
  );
};

export default Contact;