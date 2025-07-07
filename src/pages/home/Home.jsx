import React from 'react';
import Layout from '../../layout/Layout';
import Section1 from './section1/Section1';
import Section2 from './section2/Section2';
import Section3 from './section3/Section3';
import Section4 from './section4/Section4';

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
      // Clear state after scrolling so it doesn't scroll again
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <Layout>
        <Section1/> 
        <Section2/>
        <Section3/>
        <Section4/>
    </Layout>
  );
};

export default Home;
