"use client";

import { FaCode, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          Hello everyone! My name is Fahrezi Cheista A.A, you can call me
          Fahrezi. I am interested in programming, especially in website
          development, particularly as a front-end developer. My interest in
          this field has been ongoing for more than two years since I was in
          vocational high school.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Frontend */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md h-full"
            variants={fadeInUp}
            whileHover={cardHover.whileHover}
            whileTap={cardHover.whileTap}
          >
            <FaCode className="h-8 w-8 text-primary mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>-</li>
              <li>-</li>
              <li>-</li>
            </ul>
          </motion.div>

          {/* Tools & Others */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md h-full"
            variants={fadeInUp}
            whileHover={cardHover.whileHover}
            whileTap={cardHover.whileTap}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>-</li>
              <li>-</li>
              <li>-</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={cardHoverSmall.whileHover}
            whileTap={cardHoverSmall.whileTap}
          >
            <h3 className="text-xl font-semibold mb-2">
              Junior Front-end Web Developer
            </h3>
            <p className="text-primary mb-2">
              Digi Dreams Indonesia • 2025 - Present
            </p>
            <ul className="text-secondary list-disc list-inside space-y-2"></ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={cardHoverSmall.whileHover}
            whileTap={cardHoverSmall.whileTap}
          >
            <h3 className="text-xl font-semibold mb-2">
              Student Software Engineer
            </h3>
            <p className="text-primary mb-2">
              SMK Muhammadiyah 1 Sukoharjo • 2023 - 2026
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}