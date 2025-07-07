import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#101010] md:pt-20 pt-5 pb-10 w-full flex justify-center items-center">
      <div className="flex gap-2">
        <a href="mailto:ma@hellorovamo.com" className="bg-[#353535] text-white px-5 py-2 rounded-lg text-sm flex items-center font-medium hover:bg-[#444] transition">
          ma@hellorovamo.com
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-[#353535] p-2 rounded-lg flex items-center hover:bg-[#444] transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6.75A2.25 2.25 0 0 0 14.25 4.5h-4.5A2.25 2.25 0 0 0 7.5 6.75v10.5A2.25 2.25 0 0 0 9.75 19.5h4.5a2.25 2.25 0 0 0 2.25-2.25v-1.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12.75v-1.5a2.25 2.25 0 0 0-2.25-2.25h-1.5A2.25 2.25 0 0 0 9 11.25v1.5" /></svg>
        </a>
        <a href="https://dribbble.com/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-[#353535] p-2 rounded-lg flex items-center hover:bg-[#444] transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M5.6 17.5c2.1-4.2 6.3-8.2 13-7.2M7.5 7.5c3.5 2.1 7.5 6.6 9 13" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
        </a>
        <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-[#353535] p-2 rounded-lg flex items-center hover:bg-[#444] transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
