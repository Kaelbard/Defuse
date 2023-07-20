import dynamic from 'next/dynamic';
import { FC, memo } from 'react';
import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Doing from '../components/Sections/Doing';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Whyux from '../components/Sections/Whyux';
import Como from '../components/Sections/Como';
import Empresa from '../components/Sections/Empresa';
import { homePageMeta } from '../data/data';
import Contratar from '../components/Sections/Contratar';
import Finalstep from '../components/Sections/Finalstep';



// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const Home: FC = memo(() => {
  const { title, description } = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <About />
      <Doing />
      <Como />
      <Empresa />
      <Whyux />
      <Contratar />
      <Finalstep />
      <Footer />
    </Page>
  );
});

export default Home;
