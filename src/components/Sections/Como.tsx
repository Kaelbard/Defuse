import { FC, memo } from 'react';

const Como: FC = memo(() => {
    return (
        <div className="static flex justify-center items-center w-[100%] h-[1780px] bg-white">
            <div className="font-poppins relative flex h-[1780px] w-[1440px] justify-center bg-white pb-[3px] pt-[177px]">
                <p className="absolute right-[517px] top-[98px] h-[39px] w-[314px] text-left text-[32px] font-bold leading-[38.4px] text-[#626262]">
                    Como nós fazemos
                </p>
                <p className="absolute right-[472px] top-[74px] h-4 w-[400px] text-left text-base font-normal leading-4 text-[#626262]">
                    Nosso processo de desenvolvimento em 4 etapas
                </p>
                <div className="flex h-full w-full flex-col items-center">
                    <div className="flex w-[1225px] flex-grow items-center justify-between gap-[223px] bg-[#FFFFFA] py-[42px] pl-[107px] pr-[211px]">
                        <div className="flex flex-grow flex-col justify-between gap-6">
                            <div className="flex items-center justify-between gap-4 text-left font-bold">
                                <div className="flex flex-col items-center justify-center gap-2 bg-[#FF1F6D] p-4 text-[#FFFFFA]">
                                    <p className="w-4 text-[40px] leading-10">1</p>
                                </div>
                                <p className="h-6 w-[149px] flex-grow text-[32px] leading-6 text-[#666666]">
                                    Entender
                                </p>
                            </div>
                            <p className="h-36 w-[520px] text-justify text-base font-normal leading-6 text-[#666666]">
                                Durante a fase de planejamento, trabalharemos em conjunto para avaliar a situação atual do seu negócio e compreender suas necessidades. É nessa etapa que traçaremos o objetivo do seu produto, para estabelecer uma estratégia que nos permita apresentar uma proposta de atuação personalizada pro sua meta!
                            </p>
                        </div>
                    </div>
                    <div className="flex w-[1225px] flex-grow items-center justify-between gap-[223px] bg-[#FFF6F9] py-[42px] pl-[107px] pr-[211px]">
                        <div className="flex flex-grow flex-col justify-between gap-6">
                            <div className="flex items-center gap-4 text-left font-bold">
                                <div className="flex flex-col items-center justify-center gap-2 bg-[#FF1F6D] p-4 text-[#FFFFFA]">
                                    <p className="w-[23px] text-[40px] leading-10">2</p>
                                </div>
                                <p className="w-[164px] text-[32px] leading-6 text-[#666666]">
                                    Pesquisar
                                </p>
                            </div>
                            <p className="h-36 w-[609px] text-justify text-base font-normal leading-6 text-[#666666]">
                                Através dessa etapa de pesquisa que garantiremos uma base sólida de informações para orientar as próximas etapas do projeto, fazendo uma análise abrangente de mercado para identificar oportunidades e compreender a concorrência. Utilizaremos técnicas de benchmarking para avaliar as melhores práticas identificar áreas de melhoria, identificando seus pontos fortes e fracos.
                            </p>
                        </div>
                    </div>
                    <div className="flex w-[1225px] flex-grow items-center justify-between gap-[119px] bg-[#FFFFFA] py-[42px] pl-[107px] pr-[211px]">
                        <div className="flex h-full flex-grow flex-col justify-between gap-6"
                        >
                            <div className="flex items-center gap-4 text-left font-bold">
                                <div
                                    className="flex flex-col items-center justify-center gap-2 bg-[#FF1F6D] p-4 text-[#FFFFFA]"
                                >
                                    <p className="w-[25px] text-[40px] leading-10">3</p>
                                </div>
                                <p className="w-[87px] text-[32px] leading-6 text-[#666666]">
                                    Idear
                                </p>
                            </div>
                            <p
                                className="h-[168px] w-[609px] text-justify text-base font-normal leading-6 text-[#666666]"
                            >
                                Agora é o momento de trabalharmos em conjunto para idealizar a solução para o seu projeto, onde faremos desde esboços iniciais até a criação de wireframes detalhados, exploraremos diversas abordagens para chegar ao melhor resultado possível. Durante essa fase, dedicaremos tempo para ouvir atentamente o cliente, incorporar suas ideias e fornecer orientação especializada. Nossa equipe de design utilizará sua expertise para traduzir as necessidades em um design funcional e esteticamente agradável.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex w-[1225px] flex-grow items-center justify-between gap-[107px] bg-[#FFF6F9] py-[42px] pl-[107px] pr-[211px]"
                    >
                        <div
                            className="flex h-full flex-grow flex-col justify-between gap-6"
                        >
                            <div className="flex items-center gap-4 text-left font-bold">
                                <div
                                    className="flex flex-col items-center justify-center gap-2 bg-[#FF1F6D] p-4 text-[#FFFFFA]"
                                >
                                    <p className="w-7 text-[40px] leading-10">4</p>
                                </div>
                                <p className="w-[206px] text-[32px] leading-6 text-[#666666]">
                                    Desenvolver
                                </p>
                            </div>
                            <p
                                className="h-48 w-[609px] text-justify text-base font-normal leading-6 text-[#666666]"
                            >
                                Nossa equipe de desenvolvedores vai transformar o protótipo em um produto final de alta qualidade, utilizando a melhor tecnologia disponível para cada caso específico. Esse processo se inicia com a etapa de backup, passando pelo desenvolvimento front-end e back-end, e finaliza com integrações e garantia de qualidade. Nosso objetivo é fornecer um resultado funcional que atenda às necessidades do seu negócio, cuidando de cada etapa do desenvolvimento e garantindo uma integração harmoniosa entre todas as partes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

Como.displayName = 'Como';
export default Como;
