import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollRevealText({
  text = '',
  className = '',
  as = 'h2',
  delay = 0,
  split = 'words', // 'words' | 'characters'
}) {
  const Component = motion[as] || motion.div;

  if (split === 'characters') {
    const characters = Array.from(text);

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.02,
          delayChildren: delay,
        },
      },
    };

    const charVariants = {
      hidden: { opacity: 0, y: 18, filter: 'blur(3px)' },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
          duration: 0.4,
          ease: [0.25, 1, 0.5, 1],
        },
      },
    };

    return (
      <Component
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={`inline-block ${className}`}
      >
        {characters.map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            className="inline-block"
            style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          >
            {char}
          </motion.span>
        ))}
      </Component>
    );
  }

  // Split by words
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-[0.28em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
}

