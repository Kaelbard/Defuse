import { FC, memo } from 'react';

const About: FC = memo(() => {
  return (
    <header className="bg-rose-500">
      <div className="container px-[80px] mx-auto flex flex-wrap py-16 flex-col md:flex-row items-center justify-center">
        <a className="mr-4">
          <img src="./passos-1.svg" />
        </a>
        <a className="mr-4">
          <img src="./passos-2.svg" />
        </a>
        <a className="mr-4">
          <img src="./passos-3.svg" />
        </a>
        <a className="mr-4">
          <img src="./passos-4.svg" />
        </a>
      </div>
      <div>
      <section id="what" className= "flex-grow bg-white bg-cover bg-center" style={{ backgroundImage: `url('./background-what.png')` }}>
            <div className="container flex pl-72 py-40 md:flex-row flex-col items-center">
                <div className="lg:flex md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl mb-3 font-medium text-black text-left">
                    Se você ainda não investe em UX/UI, você está perdendo clientes!
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-20 leading-relaxed sm:text-lg text-black text-justify">
                    75% dos usuários julgam a credibiliade de uma empresa com base em seu design de site, de acordo com a pesquisa da Stanford University. Um estudo da Forrester concluiu que cada dólar investido em UX pode resultar em um retorno de investimento (ROI) de até 100 dólares. De acordo com a Nielsen Norman Group, a má experiência do usuário pode levar até 88% dos usuários a deixar um site ou aplicativo.</p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
            </div>
        </section>
      </div>
      <div>
        <section id="projects" className="bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('./quem_somos.png')` }}>
          <div className="container px-6 pt-20 pb-24 mx-auto text-center lg:px-40 justify-center ">
            <h1 className="text-center text-white text-[20px] py-2">
              Conheça nosso time
            </h1>
            <div className=" w-[360px] px-2 py-2 justify-center text-center mx-auto align-baseline bg-rose-500 items-center ">
              <h1 className="sm:text-4xl font-medium title-font mb-0 text-white">
                Quem somos nós
              </h1>
            </div>
          </div>
          <div className="columns-2 gap-[104px] px-10 pb-48 flex items-center justify-center">
            <div className="w-[420px] h-[340px] relative">
              <div className="w-[420px] h-[340px] left-0 top-0 absolute bg-white rounded-xl drop-shadow-md">
                <div className="w-[100px] h-[100px] left-[16px] top-[40px] absolute">
                  <div className="w-[100px] h-[100px] left-0 top-0 absolute bg-rose-500 rounded-full" />
                  <img className="w-[96.55px] h-[96.55px] left-[1.38px] top-0 absolute rounded-full" src="./matheus.png" />
                </div>
                <div className="w-[352px] h-28 left-[34px] top-[195px] absolute">
                  <div className="w-[336px] left-[16px] top-[16px] absolute text-start text-neutral-700 text-[16px] font-normal leading-normal">Brasiliense, formado em design gráfico, com 4 anos de experiência no mercado, e apaixonado por desenhar soluções digitais!</div>
                  <a className="">
                    <img src="./aspas.svg" />
                  </a>
                </div>
                <div className="w-[236px] h-[65px] left-[140px] top-[58px] absolute">
                  <div className="left-0 top-0 absolute text-center text-neutral-700 text-[24px] font-semibold leading-7">Matheus Rodrigues</div>
                  <div className="left-[40px] top-[39px] absolute text-center text-neutral-700 text-[16px] font-normal leading-tight">UX/UI Desginer</div>
                  <div className="w-8 h-8 left-0 top-[33px] absolute">
                    <a className="w-[32px] h-[32px] left-0 top-0 absolute bg-rose-500 rounded-full">
                      <img src="./design-ux.svg" />
                    </a>
                  </div>
                </div>
                <div className="w-[420px] h-[0px] left-0 top-[156px] absolute border border-neutral-700 border-opacity-20"></div>
              </div>
              <div className="w-[50px] h-2.5 left-[16px] top-[16px] absolute">
                <div className="w-2.5 h-2.5 left-0 top-0 absolute bg-red-500 rounded-full" />
                <div className="w-2.5 h-2.5 left-[20px] top-0 absolute bg-yellow-300 rounded-full" />
                <div className="w-2.5 h-2.5 left-[40px] top-0 absolute bg-lime-400 rounded-full" />
              </div>
            </div>
            <div className="w-[420px] h-[340px] relative">
              <div className="w-[420px] h-[340px] left-0 top-0 absolute bg-white rounded-xl drop-shadow-md">
                <div className="w-[100px] h-[100px] left-[16px] top-[40px] absolute">
                  <div className="w-[100px] h-[100px] left-0 top-0 absolute bg-rose-500 rounded-full" />
                  <img className="w-[96.55px] h-[96.55px] left-[1.38px] top-0 absolute rounded-full" src="./christiano_barbosa.png" />
                </div>
                <div className="w-[352px] h-28 left-[34px] top-[195px] absolute">
                  <div className="w-[336px] left-[16px] top-[16px] absolute text-start text-neutral-700 text-[16px] font-normal leading-normal">Entusiasta de tecnologia com foco em desenvolvimento front-end e UX/UI Design. Atuanto em desenvolvimento Web e Mobile.</div>
                  <a className="">
                    <img src="./aspas.svg" />
                  </a>
                </div>
                <div className="w-[236px] h-[65px] left-[140px] top-[58px] absolute">
                  <div className="left-0 top-0 absolute text-center text-neutral-700 text-[24px] font-semibold leading-7">Christiano Barbosa</div>
                  <div className="left-[40px] top-[39px] absolute text-center text-neutral-700 text-[16px] font-normal leading-tight">Front-end developer</div>
                  <div className="w-8 h-8 left-0 top-[33px] absolute">
                    <a className="w-[32px] h-[32px] left-0 top-0 absolute bg-rose-500 rounded-full">
                      <img className="justify-center items-center" src="./tag-codeing.svg" />
                    </a>
                  </div>
                </div>
                <div className="w-[420px] h-[0px] left-0 top-[156px] absolute border border-neutral-700 border-opacity-20"></div>
              </div>
              <div className="w-[50px] h-2.5 left-[16px] top-[16px] absolute">
                <div className="w-2.5 h-2.5 left-0 top-0 absolute bg-red-500 rounded-full" />
                <div className="w-2.5 h-2.5 left-[20px] top-0 absolute bg-yellow-300 rounded-full" />
                <div className="w-2.5 h-2.5 left-[40px] top-0 absolute bg-lime-400 rounded-full" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
});

About.displayName = 'About';
export default About;
