import { FaLinkedin, FaDribbble, FaTimes } from 'react-icons/fa';
import Layout from '../../layout/Layout';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

import React, { useRef, useEffect, useState } from 'react';

const aboutSections = [
  { id: 'about', label: "I’m Robert" },
  { id: 'expertise', label: 'Expertise' },
  { id: 'tools', label: 'Tool Stack' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'quotes', label: 'Quotes' },
];

const dummyContent = {
  about: 'This is the about section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
  expertise: 'Expertise: UX/UI Design, Web Development, Product Strategy, and more. Lorem ipsum dolor sit amet.',
  tools: 'Tool Stack: Figma, React, Tailwind, Framer, Webflow, and more.',
  achievements: 'Achievements: Award-winning designer, featured in top publications, led teams to success.',
  hobbies: 'Hobbies: Photography, Traveling, Fitness, Reading.',
  quotes: '“Design is not just what it looks like and feels like. Design is how it works.” – Steve Jobs',
};

const ProfileSection = () => {
  const [activeSection, setActiveSection] = useState('about');
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = 'about';
      for (const sec of aboutSections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const offsetTop = el.offsetTop - 140; // adjust for header
          if (scrollY >= offsetTop) {
            current = sec.id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                }}
                className="min-h-screen max-w-4xl mx-auto bg-transparent text-white px-6 py-12 md:px-12 lg:flex lg:gap-0"
            >
                {/* Sidebar Navigation */}
                <motion.div variants={fadeUp} className="mb-8 lg:w-1/4">
                    <nav className="md:flex hidden flex-col space-y-4 text-gray-300 text-sm font-medium">
  {[
    { id: 'about', label: "I’m Robert" },
    { id: 'expertise', label: 'Expertise' },
    { id: 'tools', label: 'Tool Stack' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'quotes', label: 'Quotes' },
  ].map((item, idx) => (
    <span
      key={item.id}
      onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
      className={`cursor-pointer hover:text-white transition-colors duration-200 ${activeSection === item.id ? 'text-white font-semibold' : ''}`}
      style={{ transitionDelay: `${idx * 50}ms` }}
    >
      {item.label}
    </span>
  ))}
</nav>
                </motion.div>

                {/* Main Content */}
                <div className="lg:w-full">
                    {/* Images Grid */}
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col md:flex-row md:p-0 p-2 w-full md:h-[350px] gap-4 mb-8"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="w-full md:w-1/2 aspect-square md:aspect-auto h-auto md:h-full"
                        >
                            <img
                                src="https://d33wubrfki0l68.cloudfront.net/d60809b00245b908cb6bd13f738448884ce8ab8a/da314/img/byt8.jpg"
                                alt="Portrait"
                                className="rounded-xl object-cover w-full h-full"
                                style={{ objectPosition: 'center' }}
                            />
                        </motion.div>

                        <div className="w-full md:w-1/4 flex flex-col gap-4">
                            <motion.div whileHover={{ scale: 1.02 }} className="aspect-square md:aspect-auto h-auto md:h-1/2">
                                <img
                                    src="https://framerusercontent.com/images/PrXt5YnhivwZnFBmO4CXpCjhE.jpg"
                                    alt="Fitness"
                                    className="rounded-xl object-cover w-full h-full"
                                    style={{ minHeight: '0' }}
                                />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.02 }} className="aspect-square md:aspect-auto h-auto md:h-1/2">
                                <img
                                    src="https://framerusercontent.com/images/LRTfW33dDQ4cq3ud2AIafMsp8.jpg"
                                    alt="Workspace"
                                    className="rounded-xl object-cover w-full h-full"
                                    style={{ minHeight: '0' }}
                                />
                            </motion.div>
                        </div>

                        <motion.div whileHover={{ scale: 1.02 }} className="w-full md:w-1/4 aspect-square md:aspect-auto h-auto md:h-full">
                            <img
                                src="https://framerusercontent.com/images/6Kw3mxswD13ZkXKHzWvEr6T6tRk.jpg"
                                alt="Beach"
                                className="rounded-xl object-cover w-full h-full"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Intro Text */}
                    <motion.h1
                        variants={fadeUp}
                        className="text-2xl md:text-3xl font-semibold mb-4"
                    >
                        I’m Murtaza, a Senior Product & Web Designer.
                    </motion.h1>
                    <motion.p
                        variants={fadeUp}
                        className="text-white text-lg mb-6 max-w-3xl leading-relaxed"
                    >
                        With 13+ years of experience in UX/UI, no-code, and Web3, I help businesses build intuitive,
                        scalable digital experiences that drive growth. By blending strategy, design, and technology,
                        I craft functional, engaging solutions that make an impact.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="mailto:ma@hellorovamo.com"
                            className="bg-[#343434] hover:bg-[#444] text-white px-4 py-2 rounded-xl text-md font-medium transition-colors duration-200"
                        >
                            ma@hellorovamo.com
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#343434] hover:bg-[#444] text-white px-4 py-2 rounded-xl text-md font-medium transition-colors duration-200 flex items-center gap-2"
                        >
                            Resume <span className="text-base">↗</span>
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            href="https://www.linkedin.com/in/murt4z4/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-6 h-6 flex items-center justify-center rounded-xl bg-[#343434] hover:bg-[#444] transition-colors duration-200"
                            style={{ minWidth: 40, minHeight: 40 }}
                        >
                            <span className="sr-only">LinkedIn</span>
                            <img src="/icon.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
                        </motion.a>
                    </motion.div>

                    <motion.p
                        variants={fadeUp}
                        className="text-white text-lg my-6 max-w-3xl leading-relaxed"
                    >
                        Great design is more than aesthetics. It is about creating seamless user experiences that
                        engage, convert, and scale. My approach combines strategy, usability, and execution to create
                        solutions that make a real impact.
                    </motion.p>

                    {/* About Sections */}
                    <div className="space-y-20 pt-8">
                      {aboutSections.map((sec, idx) => (
                        <section
                          key={sec.id}
                          id={sec.id}
                          ref={el => (sectionRefs.current[sec.id] = el)}
                          className="scroll-mt-32"
                        >
                          <h2 className="text-2xl font-bold text-white mb-4">{sec.label}</h2>
                          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                            {dummyContent[sec.id] || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                          </p>
                        </section>
                      ))}
                    </div>
                </div>
            </motion.div>
        </Layout>
    );
};

export default ProfileSection;
