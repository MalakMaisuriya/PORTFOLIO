import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaCheck, FaCopy } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';
import ScrollRevealText from './ScrollRevealText';
import SpotlightCard from './SpotlightCard';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/malakmaisuriya857@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Portfolio Inquiry',
          message: formData.message,
          _subject: `⚡ Portfolio Message: ${formData.subject || formData.name}`,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Service response not ok');
      }
    } catch {
      // Seamless fallback to native mail client if external API blocked
      const mailtoUrl = `mailto:${personalDetails.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-transparent overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#11212D]/40 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11212D] border border-[#4A5C6A]/50 text-[#CCD0CF] text-xs font-mono tracking-wider uppercase font-semibold">
            <span className="text-[#9BA8AB]">[ 06 // INQUIRY ]</span>
            <span>GET IN TOUCH</span>
          </div>
          <ScrollRevealText
            text="Let's Start a Conversation"
            as="h2"
            split="words"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#CCD0CF] tracking-tighter uppercase font-display block"
          />
          <p className="text-[#9BA8AB] text-sm sm:text-base max-w-xl mx-auto">
            Available for full-stack engineering roles, freelance opportunities, and collaborative software projects.
          </p>
          <div className="w-12 h-1 bg-[#4A5C6A] mx-auto rounded-full mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="space-y-2 mb-4">
              <h3 className="text-2xl font-bold text-[#CCD0CF]">
                Direct Contacts
              </h3>
              <p className="text-[#9BA8AB] text-xs sm:text-sm leading-relaxed">
                Reach out directly via email or phone. Open to remote roles and on-site opportunities in Surat & beyond.
              </p>
            </div>

            {/* Email Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#11212D] border border-[#4A5C6A]/40 flex items-center justify-between gap-3 hover:border-[#9BA8AB]/50 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#252745] border border-[#4A5C6A]/60 flex items-center justify-center text-[#CCD0CF]">
                  <FaEnvelope className="text-base" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#9BA8AB] uppercase">Email Address</div>
                  <a href={`mailto:${personalDetails.email}`} className="text-xs sm:text-sm font-semibold text-[#CCD0CF] hover:text-white transition-colors">
                    {personalDetails.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalDetails.email, 'email')}
                className="p-2 rounded-lg bg-[#06141B] border border-[#4A5C6A] text-[#9BA8AB] hover:text-[#CCD0CF] hover:border-[#9BA8AB] text-xs cursor-pointer"
                title="Copy Email"
              >
                {copiedField === 'email' ? <FaCheck className="text-white" /> : <FaCopy />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#11212D] border border-[#4A5C6A]/40 flex items-center justify-between gap-3 hover:border-[#9BA8AB]/50 transition-all">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#252745] border border-[#4A5C6A]/60 flex items-center justify-center text-[#CCD0CF]">
                  <FaPhoneAlt className="text-base" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#9BA8AB] uppercase">Phone & WhatsApp</div>
                  <a href={`tel:${personalDetails.phone}`} className="text-xs sm:text-sm font-semibold text-[#CCD0CF] hover:text-white transition-colors">
                    {personalDetails.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalDetails.phone, 'phone')}
                className="p-2 rounded-lg bg-[#06141B] border border-[#4A5C6A] text-[#9BA8AB] hover:text-[#CCD0CF] hover:border-[#9BA8AB] text-xs cursor-pointer"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? <FaCheck className="text-white" /> : <FaCopy />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#11212D] border border-[#4A5C6A]/40 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#252745] border border-[#4A5C6A]/60 flex items-center justify-center text-[#CCD0CF]">
                <FaMapMarkerAlt className="text-base" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#9BA8AB] uppercase">Location</div>
                <div className="text-xs sm:text-sm font-semibold text-[#CCD0CF]">
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
                className="flex-1 py-2.5 rounded-xl bg-[#11212D] border border-[#4A5C6A] text-[#CCD0CF] hover:bg-[#252745] hover:border-[#9BA8AB] flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <FaGithub className="text-sm text-[#9BA8AB]" /> GitHub
              </a>
              <a
                href={personalDetails.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-[#11212D] border border-[#4A5C6A] text-[#CCD0CF] hover:bg-[#252745] hover:border-[#9BA8AB] flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <FaLinkedin className="text-sm text-[#0A66C2]" /> LinkedIn
              </a>
            </div>

          </motion.div>

          {/* Right Column: Form with SpotlightCard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <SpotlightCard className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#CCD0CF] mb-1">
                Send a Message
              </h3>
              <p className="text-[#9BA8AB] text-xs sm:text-sm mb-5">
                Have an inquiry or project proposal? Fill out the details below.
              </p>

              {formSubmitted ? (
                <div className="p-6 sm:p-8 rounded-xl bg-[#252745]/60 border border-[#4A5C6A] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#CCD0CF] text-[#06141B] flex items-center justify-center mx-auto text-xl font-bold shadow-md">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-[#CCD0CF]">Message Dispatched!</h4>
                  <p className="text-[#9BA8AB] text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                    Your inquiry has been sent directly to <span className="text-[#CCD0CF] font-semibold">{personalDetails.email}</span>. I will get back to you promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 px-4 py-2 rounded-xl bg-[#11212D] border border-[#4A5C6A] text-xs font-mono uppercase text-[#CCD0CF] hover:bg-[#252745] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono text-[#9BA8AB] uppercase mb-1">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#06141B] border border-[#4A5C6A]/60 text-[#CCD0CF] placeholder:text-[#9BA8AB]/40 focus:outline-none focus:border-[#CCD0CF] transition-colors text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#9BA8AB] uppercase mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#06141B] border border-[#4A5C6A]/60 text-[#CCD0CF] placeholder:text-[#9BA8AB]/40 focus:outline-none focus:border-[#CCD0CF] transition-colors text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#9BA8AB] uppercase mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#06141B] border border-[#4A5C6A]/60 text-[#CCD0CF] placeholder:text-[#9BA8AB]/40 focus:outline-none focus:border-[#CCD0CF] transition-colors text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#9BA8AB] uppercase mb-1">Message</label>
                    <textarea
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Brief details about your project or role..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#06141B] border border-[#4A5C6A]/60 text-[#CCD0CF] placeholder:text-[#9BA8AB]/40 focus:outline-none focus:border-[#CCD0CF] transition-colors text-xs sm:text-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-[#CCD0CF] text-[#06141B] font-bold uppercase tracking-wider text-xs hover:bg-white hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-black/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-[#06141B] border-t-transparent rounded-full animate-spin" />
                        <span>Sending to Inbox...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message Directly</span>
                        <FaPaperPlane className="text-xs" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </SpotlightCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
