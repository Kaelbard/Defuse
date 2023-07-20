import { FC, memo } from 'react';

const Whyux: FC = memo(() => {
    return (
        <div className={"flex h-[1107px] w-[100%] items-center justify-center bg-white"}>
            <div className="flex h-full w-full flex-col items-center gap-2 bg-white px-[420px] pb-10 pt-[80px]">
                <p className="font-poppins h-[39px] w-[386px] text-left text-[32px] font-bold leading-[38.4px] text-[#343434]">
                    Por que investir em UX?
                </p>
                <p className="font-poppins h-[58px] w-[556px] text-center text-2xl font-normal leading-[28.8px] text-[#3E3C3C]">
                    A pergunta certa é: quanto está me custando ter uma marca desorganizada e confusa?
                </p>
                <div className="h-[964px]">
                    <div className={"font-poppins flex h-[98px] w-[100%] mt-[16px] mb-[16px] items-center justify-center text-center font-medium text-[#272B3A]"}>
                        <div className="flex h-full w-full items-center justify-between gap-[88px] rounded-lg bg-white pr-[104px] shadow-[0px_0px_3px_0px] shadow-[#ff1f6d70]">
                            <div className="h-[98px] w-4 rounded-l-lg bg-[#FC3E60]" />
                            <p className="h-[47px] w-[400px] flex-grow items-center justify-center flex text-base leading-6">
                                Quantos clientes você está perdendo para a concorrência?
                            </p>
                        </div>
                    </div>
                    <div className={"font-poppins flex h-[98px] w-[100%] mt-[16px] mb-[16px]  items-center justify-center text-center font-medium text-[#272B3A]"}>
                        <div className="flex h-full w-full items-center justify-between gap-[88px] rounded-lg bg-white pr-[104px] shadow-[0px_0px_3px_0px] shadow-[#FF1F6D70]">
                            <div className="h-[98px] w-4 rounded-l-lg bg-[#FC3E60]" />
                            <p className="h-[47px] w-[400px] flex-grow items-center justify-center flex text-base leading-6">
                                Quanto está custando não ter uma marca relevante?
                            </p>
                        </div>
                    </div>
                    <div className={"font-poppins flex h-[98px] w-[100%] mt-[16px] mb-[16px] items-center justify-center text-center font-medium text-[#272B3A]"}>
                        <div className="flex h-full w-full items-center justify-between gap-[88px] rounded-lg bg-white pr-[104px] shadow-[0px_0px_3px_0px] shadow-[#ff1f6d70]">
                            <div className="h-[98px] w-4 rounded-l-lg bg-[#FC3E60]" />
                            <p className="h-[47px] w-[400px] flex-grow items-center justify-center flex text-base leading-6">
                                Quanto dinheiro já gastei com uma comunicação que não funciona?
                            </p>
                        </div>
                    </div>
                    <div className={"font-poppins flex h-[98px] w-[100%] mt-[16px] mb-[16px] items-center justify-center text-center font-medium text-[#272B3A]"}>
                        <div className="flex h-full w-full items-center justify-between gap-[88px] rounded-lg bg-white pr-[104px] shadow-[0px_0px_3px_0px] shadow-[#ff1f6d70]">
                            <div className="h-[98px] w-4 rounded-l-lg bg-[#FC3E60]" />
                            <p className="h-[47px] w-[400px] flex-grow items-center justify-center flex text-base leading-6">
                                Até hoje, quantos leads qualificados ficaram pra trás?
                            </p>
                        </div>
                    </div>
                    <div className={"font-poppins flex h-[98px] w-[100%] mt-[16px] mb-[16px] items-center justify-center text-center font-medium text-[#272B3A]"}>
                        <div className="flex h-full w-full items-center justify-between gap-[88px] rounded-lg bg-white pr-[104px] shadow-[0px_0px_3px_0px] shadow-[#ff1f6d70]">
                            <div className="h-[98px] w-4 rounded-l-lg bg-[#FC3E60]" />
                            <p className="h-[47px] w-[400px] flex-grow items-center justify-center flex text-base leading-6">
                                Quanto você está deixando de crescer por causa da sua marca?
                            </p>
                        </div>
                    </div>
                    <div className={"font-poppins flex h-[98px] w-[100%] mt-[16px] mb-[16px] items-center justify-center text-center font-medium text-[#272B3A]"}>
                        <div className="flex h-full w-full items-center justify-between gap-[88px] rounded-lg bg-white pr-[104px] shadow-[0px_0px_3px_0px] shadow-[#ff1f6d70]">
                            <div className="h-[98px] w-4 rounded-l-lg bg-[#FC3E60]" />
                            <p className="h-[47px] w-[400px] flex-grow items-center justify-center flex text-base leading-6">
                                Quanto tempo você já perdeu tentando explicar o seu negócio?
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-flow-row justify-center items-center mx-auto">
                    <div className="font-montserrat mt-[8px] flex w-[400px] items-center justify-center gap-2 rounded-md bg-[#fC3E60] hover:shadow-[0px_0px_3px_3px] hover:shadow-[#ff1f6d70] px-8 py-3 text-left font-bold text-white">
                        <p className="w-[166px] text-base uppercase leading-[21px]">
                            fale com a gente
                        </p>
                    </div>
                    <div>
                        <p className="font-montserrat h-[21px] w-full py-[16px] text-center text-sm font-normal leading-[21px] text-black">
                            Entre em contato hoje mesmo!
                        </p>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
});

Whyux.displayName = 'Whyux';
export default Whyux;





