import { FC, memo } from 'react';

const Contratar: FC = memo(() => {
    return (
        <div className="font-poppins flex w-[100%] h-[694px] bg-white">
            <div className="relative flex h-full w-[100%] items-center justify-center bg-[#272B3A] pb-[100px] pl-[120px] pr-[120px] pt-[175px]">
                <p className="absolute top-20 text-[32px] font-[700] text-white">
                    Como contratar?
                </p>
                <div className="flex justify-center items-center">
                    <div className="flex flex-col container w-[348px] h-[420px] justify-end items-end gap-4 rounded-xl bg-white px-[34px] py-14 text-[#272B3A]">
                        <p className="mt-6 h-[30px] w-[280px] text-center text-2xl font-[700] leading-[28.8px]">
                            Agende uma conversa
                        </p>
                        <p className="h-[72px] w-[280px] text-center text-base font-[500] leading-6">
                            Entre em contato através do nosso telefone, whatsapp ou formulário.
                        </p>
                    </div>
                    <div className="ml-5 flex flex-col container w-[348px] h-[420px] justify-end items-end gap-4 rounded-xl bg-white px-10 py-14 text-[#272B3A]">
                        <div className="flex w-[150px] items-center justify-center bg-[#C4C4C400] [flex-grow:1]">
                            <div className="flex h-full w-full items-center justify-center bg-[#FFFFFF00] p-[9px]">
                            </div>
                        </div>
                        <p className="mt-6 h-[30px] w-[263px] text-center text-2xl font-[700] leading-[28.8px]">
                            Proposta sob medida
                        </p>
                        <p className="h-[72px] w-[268px] text-center text-base font-[500] leading-6">
                            A partir das suas necessidades, desenharemos uma proposta personalizada.
                        </p>
                    </div>
                    <div className="ml-5 flex flex-col container w-[348px] h-[420px] justify-end items-end gap-4 rounded-xl bg-white px-[42px] pb-14 pt-[65px] text-center text-[#3E3C3CE3]">
                        <p className="mt-6 h-[30px] w-[263px] text-center text-2xl font-[700] leading-[28.8px]">
                            Início do projeto
                        </p>
                        <p className="h-[72px] w-[264px] text-base font-[500] leading-6">
                            Iniciamos a construção do seu projeto, seguindo o cronograma proposto.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
});

Contratar.displayName = 'Contratar';
export default Contratar;