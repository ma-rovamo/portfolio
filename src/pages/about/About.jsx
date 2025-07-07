import { FaLinkedin, FaDribbble, FaTimes } from 'react-icons/fa';
import Layout from '../../layout/Layout';

const ProfileSection = () => {
    return (
        <Layout>
            <div className="min-h-screen max-w-4xl mx-auto bg-transparent text-white px-6 py-12 md:px-12 lg:flex lg:gap-0">
                {/* Sidebar Navigation */}
                <div className="mb-8 lg:w-1/4">
                    <nav className="flex flex-col space-y-4 text-gray-300 text-sm font-medium">
                        <span className="text-white  cursor-pointer  font-semibold">I’m Robert</span>
                        <span className="cursor-pointer hover:text-white">Expertise</span>
                        <span className="cursor-pointer hover:text-white">Tool Stack</span>
                        <span className="cursor-pointer hover:text-white">Achievements</span>
                        <span className="cursor-pointer hover:text-white">Hobbies</span>
                        <span className="cursor-pointer hover:text-white">Quotes</span>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="lg:w-full">
                    {/* Images Grid */}
                    <div className="flex w-full h-[350px] gap-4 mb-8">
                        {/* Left: Large image (50%) */}
                        <div className="w-1/2 h-full">
                            <img
                                src="https://d33wubrfki0l68.cloudfront.net/d60809b00245b908cb6bd13f738448884ce8ab8a/da314/img/byt8.jpg"
                                alt="Portrait"
                                className="rounded-xl object-cover w-full h-full"
                                style={{ objectPosition: 'center' }}
                            />
                        </div>

                        {/* Middle: Two stacked images (25%) */}
                        <div className="w-1/4 h-full flex flex-col gap-4">
                            <img
                                src="https://framerusercontent.com/images/PrXt5YnhivwZnFBmO4CXpCjhE.jpg"
                                alt="Fitness"
                                className="rounded-xl object-cover w-full h-1/2"
                            />
                            <img
                                src="https://framerusercontent.com/images/LRTfW33dDQ4cq3ud2AIafMsp8.jpg"
                                alt="Workspace"
                                className="rounded-xl object-cover w-full h-1/2"
                            />
                        </div>

                        {/* Right: Large image (25%) */}
                        <div className="w-1/4 h-full">
                            <img
                                src="https://framerusercontent.com/images/6Kw3mxswD13ZkXKHzWvEr6T6tRk.jpg"
                                alt="Beach"
                                className="rounded-xl object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Intro Text */}
                    <h1 className="text-2xl md:text-3xl font-semibold mb-4">
                        I’m Murtaza, a Senior Product & Web Designer.
                    </h1>
                    <p className="text-white text-lg mb-6 max-w-3xl leading-relaxed">
                        With 13+ years of experience in UX/UI, no-code, and Web3, I help businesses build intuitive,
                        scalable digital experiences that drive growth. By blending strategy, design, and technology,
                        I craft functional, engaging solutions that make an impact.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="mailto:ma@hellorovamo.com"
                            className="bg-[#343434] hover:bg-[#444] text-white px-4 py-2 rounded-xl text-md font-medium transition-colors duration-200"
                        >
                            ma@hellorovamo.com
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#343434] hover:bg-[#444] text-white px-4 py-2 rounded-xl text-md font-medium transition-colors duration-200 flex items-center gap-2"
                        >
                            Resume <span className="text-base">↗</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/murt4z4/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-6 h-6 flex items-center justify-center  rounded-xl bg-[#343434] hover:bg-[#444] transition-colors duration-200"
                            style={{ minWidth: 40, minHeight: 40 }}
                        >
                            <span className="sr-only">LinkedIn</span>
                            <img src="/icon.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
                        </a>
                    </div>
                    <p className="text-white text-lg my-6 max-w-3xl leading-relaxed">
                        Great design is more than aesthetics. It is about creating seamless user experiences that engage, convert, and scale. My approach combines strategy, usability, and execution to create solutions that make a real impact.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default ProfileSection;
