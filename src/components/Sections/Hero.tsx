import { FC, memo } from 'react';
const Hero: FC = memo(() => {
  return (
    <section id="about" className="bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('./background.png')` }}>
      <div className="container flex px-56 py-60 md:flex-row flex-col items-center">
        <div className="lg:flex lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl mb-4 font-medium text-white">
            Construa a autoridade da sua marca através do seu posicionamento digital!
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-white">
            Aumente o alcance do seu negócio e receba mais leads com um site único e desenvolvido para se comunicar com o seu cliente!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-rose-500 border-0 py-2 px-16 focus:outline-none hover:bg-rose-800 rounded text-lg">
              Fale com a gente
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">

        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
