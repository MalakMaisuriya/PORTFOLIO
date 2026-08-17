import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaCheck, FaCopy } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#061412] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#10b981]/8 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#34d399]/6 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Continuous Running Background Animation (Spinning Global Wireframe Sphere) */}
      <div className="absolute top-1/2 -right-24 -translate-y-1/2 pointer-events-none opacity-25 hidden md:block z-0">
        <div className="w-[520px] h-[520px] lg:w-[650px] lg:h-[650px] animate-spin-slow">
          <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
            <ellipse cx="250" cy="250" rx="240" ry="90" stroke="rgba(16,185,129,0.4)" strokeWidth="0.8" />
            <ellipse cx="250" cy="250" rx="90" ry="240" stroke="rgba(52,211,153,0.35)" strokeWidth="0.8" />
            <circle cx="250" cy="250" r="240" stroke="rgba(16,185,129,0.35)" strokeWidth="0.5" strokeDasharray="6 6" />
            <circle cx="250" cy="10" r="6" fill="#10b981" />
            <circle cx="490" cy="250" r="6" fill="#34d399" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] text-xs font-mono tracking-[0.25em] uppercase">
            <span>◆ GET IN TOUCH ◆</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl font-normal text-gradient-teal tracking-tight">
            Let's Build Something Extraordinary
          </h2>
          <p className="text-[#72b09e] text-base max-w-xl mx-auto">
            Open for full-stack developer roles, freelance opportunities, and collaborative software projects.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#10b981] to-[#34d399] mx-auto rounded-full mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-serif text-3xl font-normal text-[#e6f7f2]">
                Contact Information
              </h3>
              <p className="text-[#72b09e] text-sm leading-relaxed">
                Feel free to reach out directly via email or phone. I'm currently based in Surat, Gujarat, India and open to both remote and on-site opportunities.
              </p>
            </div>

            {/* Email Card */}
            <div className="glass-panel p-6 rounded-2xl border border-[#193d37] flex items-center justify-between gap-4 hover:border-[#10b981]/50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#061412]/90 border border-[#193d37] flex items-center justify-center text-[#10b981]">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#72b09e] uppercase">Email Address</div>
                  <a href={`mailto:${personalDetails.email}`} className="text-sm sm:text-base font-bold text-[#e6f7f2] hover:text-[#10b981] transition-colors">
                    {personalDetails.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalDetails.email, 'email')}
                className="p-2.5 rounded-xl bg-[#061412] border border-[#193d37] text-[#10b981] hover:bg-[#10b981] hover:text-[#061412] transition-all text-xs"
                title="Copy Email"
              >
                {copiedField === 'email' ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-6 rounded-2xl border border-[#193d37] flex items-center justify-between gap-4 hover:border-[#10b981]/50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#061412]/90 border border-[#193d37] flex items-center justify-center text-[#10b981]">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#72b09e] uppercase">Phone & WhatsApp</div>
                  <a href={`tel:${personalDetails.phone}`} className="text-sm sm:text-base font-bold text-[#e6f7f2] hover:text-[#10b981] transition-colors">
                    {personalDetails.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalDetails.phone, 'phone')}
                className="p-2.5 rounded-xl bg-[#061412] border border-[#193d37] text-[#10b981] hover:bg-[#10b981] hover:text-[#061412] transition-all text-xs"
                title="Copy Phone Number"
              >
                {copiedField === 'phone' ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-6 rounded-2xl border border-[#193d37] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#061412]/90 border border-[#193d37] flex items-center justify-center text-[#10b981]">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#72b09e] uppercase">Location</div>
                <div className="text-sm sm:text-base font-bold text-[#e6f7f2]">
                  {personalDetails.location}
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={personalDetails.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-[#0b211e] border border-[#193d37] text-[#e6f7f2] hover:text-[#061412] hover:bg-[#10b981] flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <FaGithub className="text-base" /> GitHub
              </a>
              <a
                href={personalDetails.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-[#0b211e] border border-[#193d37] text-[#e6f7f2] hover:text-[#061412] hover:bg-[#10b981] flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <FaLinkedin className="text-base" /> LinkedIn
              </a>
            </div>

          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#193d37] relative">
              <h3 className="font-serif text-3xl font-normal text-[#e6f7f2] mb-2">
                Send Me a Message
              </h3>
              <p className="text-[#72b09e] text-sm mb-6">
                Have a project idea, job inquiry, or question? Fill out the form below.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#10b981] text-[#061412] flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-[#72b09e] text-xs">
                    Thank you for reaching out, Malak will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#72b09e] uppercase mb-1.5 font-semibold">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#061412] border border-[#193d37] text-white placeholder-[#72b09e]/50 focus:outline-none focus:border-[#10b981] transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#72b09e] uppercase mb-1.5 font-semibold">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#061412] border border-[#193d37] text-white placeholder-[#72b09e]/50 focus:outline-none focus:border-[#10b981] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#72b09e] uppercase mb-1.5 font-semibold">Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-[#061412] border border-[#193d37] text-white placeholder-[#72b09e]/50 focus:outline-none focus:border-[#10b981] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#72b09e] uppercase mb-1.5 font-semibold">Message *</label>
                    <textarea
                      required
                      rows="5"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Malak, I'd like to discuss a project..."
                      className="w-full px-4 py-3 rounded-xl bg-[#061412] border border-[#193d37] text-white placeholder-[#72b09e]/50 focus:outline-none focus:border-[#10b981] transition-colors text-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#10b981] text-[#061412] font-bold uppercase tracking-wider text-xs shadow-xl shadow-[#10b981]/20 hover:bg-[#059669] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 group"
                  >
                    Send Message <FaPaperPlane className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
