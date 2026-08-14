import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaTerminal as FaCli, FaTimes, FaMinus, FaExpandAlt } from 'react-icons/fa';

export default function TerminalWidget() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: 'Malak Maisuriya CLI v2.0 (Type "help" to list commands)', type: 'system' }
  ]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `$ ${input}`, type: 'user' }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          text: 'Available Commands:\n - help       Show this menu\n - about      Learn about Malak Maisuriya\n - skills     List technical skills & stack\n - projects   Show GitHub projects\n - github     Open GitHub profile\n - contact    Get contact info\n - clear      Clear terminal screen\n - sudo hire  Special recruiter command',
          type: 'response'
        });
        break;
      case 'about':
        newHistory.push({
          text: 'Malak Maisuriya: BCA Sem 5 Student at Vidhyadeep University & Full Stack MERN Trainee at Red & White Multimedia Education. Passionate about building high-performance web applications and solving C++ DSA logic challenges.',
          type: 'response'
        });
        break;
      case 'skills':
        newHistory.push({
          text: 'Tech Stack:\n - Frontend: React JS, HTML5, CSS3, JavaScript (ES6+), Bootstrap, jQuery\n - Backend: Node.js, Express.js, EJS\n - Database: MongoDB, Mongoose\n - Language & CS: C++, Data Structures & Algorithms\n - Tools: Git, GitHub, VS Code, Netlify, Chrome DevTools',
          type: 'response'
        });
        break;
      case 'projects':
        newHistory.push({
          text: 'GitHub Repositories:\n 1. MERN Stack Repo      -> https://github.com/MalakMaisuriya/MERN\n 2. React & Redux Repo   -> https://github.com/MalakMaisuriya/REACT\n 3. HTML & CSS Repo      -> https://github.com/MalakMaisuriya/HTML-CSS\n 4. JavaScript Repo      -> https://github.com/MalakMaisuriya/JAVASCRIPT\n 5. C++ DSA Repo         -> https://github.com/MalakMaisuriya/DSA',
          type: 'response'
        });
        break;
      case 'github':
        window.open('https://github.com/MalakMaisuriya', '_blank');
        newHistory.push({
          text: 'Opening GitHub profile: https://github.com/MalakMaisuriya ...',
          type: 'response'
        });
        break;
      case 'contact':
        newHistory.push({
          text: 'Contact Info:\n - Email: malakmaisuriya857@gmail.com\n - Phone: +91 8160991260\n - Location: Surat, Gujarat, India\n - LinkedIn: https://in.linkedin.com/in/malak-maisuriya',
          type: 'response'
        });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'sudo hire':
      case 'hire':
        newHistory.push({
          text: '🎉 OFFER ACCEPTED! Malak is actively seeking entry-level Junior Full Stack / React Developer roles. Email: malakmaisuriya857@gmail.com',
          type: 'success'
        });
        break;
      default:
        newHistory.push({
          text: `Command not recognized: "${cmd}". Type "help" to see available commands.`,
          type: 'error'
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <section className="relative py-16 bg-[#080c14] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <FaTerminal className="text-xs" /> Interactive Terminal
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Developer <span className="text-gradient-cyan">CLI Playground</span>
          </h3>
        </div>

        {/* Terminal Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-[#090d16] border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 overflow-hidden font-mono text-sm"
        >
          {/* Terminal Title Bar */}
          <div className="px-4 py-3 bg-slate-900/90 border-b border-indigo-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              <span className="text-xs text-slate-400 font-semibold ml-2 flex items-center gap-1.5">
                <FaCli className="text-cyan-400 text-xs" /> malak@developer-portfolio:~
              </span>
            </div>
            <div className="flex items-center gap-3 text-slate-500 text-xs">
              <FaMinus />
              <FaExpandAlt />
              <FaTimes />
            </div>
          </div>

          {/* Terminal Output Body */}
          <div className="p-5 h-64 overflow-y-auto space-y-3 bg-[#080c14]/90 text-slate-200">
            {history.map((item, idx) => (
              <div
                key={idx}
                className={`whitespace-pre-wrap leading-relaxed ${
                  item.type === 'system'
                    ? 'text-cyan-400 font-semibold'
                    : item.type === 'user'
                    ? 'text-slate-300 font-bold'
                    : item.type === 'success'
                    ? 'text-emerald-400 font-bold'
                    : item.type === 'error'
                    ? 'text-rose-400'
                    : 'text-slate-300'
                }`}
              >
                {item.text}
              </div>
            ))}
          </div>

          {/* Terminal Form Input */}
          <form onSubmit={handleCommand} className="p-3 bg-slate-900/90 border-t border-indigo-500/20 flex items-center gap-2">
            <span className="text-cyan-400 font-bold pl-2">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'help', 'about', 'skills', 'projects', 'sudo hire'..."
              className="w-full bg-transparent border-none text-slate-100 placeholder-slate-500 focus:outline-none text-sm font-mono"
            />
            <button
              type="submit"
              className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition-all"
            >
              Run
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
