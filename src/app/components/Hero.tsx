'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations'

const Hero = () => {
  return (
    <section className='py-28 container max-w-7xl mx-auto px-4'>
      <div className='max-w-3xl mx-auto text-center'>

        {/* Profile Image */}
        <motion.div
          className='flex flex-col items-center mb-4'
          {...scaleIn}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/profile.fahrezi.jpeg"
            alt='profile image'
            width={100}
            height={100}
            className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary'
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          className='text-4xl md:text-6xl font-bold mb-6'
          {...fadeInUp}
          transition={{ delay: 0.3 }}
        >
          Hi, I&apos;m{" "}
          <motion.span
            className='text-primary'
            {...fadeIn}
            transition={{ delay: 0.8 }}
          >
            Fahrezi
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          Frontend
        </motion.p>

        {/* Social Links */}
        <motion.div
          className='flex justify-center space-x-4 mb-8'
          {...fadeInUp}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/fahrezicheista"
            target="_blank"
            rel="noopener noreferrer"
            className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors'
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="/"
            className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors'
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="/"
            className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors'
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter />
          </motion.a>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className='flex flex-col md:flex-row justify-center gap-4'
          {...fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/projects"
              className='bg-primary inline-block w-full md:w-auto text-white px-8 py-3 
              rounded-lg hover:bg-primary/80 transition-colors'
            >
              View Project
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className='bg-gray-500 inline-block w-full md:w-auto text-white hover:text-gray-800 px-8 py-3 
              rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
