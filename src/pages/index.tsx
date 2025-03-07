import { AboutMe } from '@/components/Home/AboutMe';
import { Projects } from '@/components/Home/Projects';
import { Project, AboutMe as TAboutMe } from '@/types/Home';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import home from '../configs/home.json';


const Home = () => {
  const { projects, aboutMe } = home;

  return (
    <>
      <Head>
        <title>About me | Clariana</title>
        <meta
          name="description"
          content="I'm a front-end developer with a passion for creating interfaces and helping other devs!"
        />
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
        <AboutMe aboutMe={aboutMe} />
        <Projects projects={projects} />
      </div>
    </>
  );
};

export default Home;
