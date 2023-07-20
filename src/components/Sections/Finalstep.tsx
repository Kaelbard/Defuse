import { FC, memo } from 'react';

const Finalstep: FC = memo(() => {
  return (
    <div
      className="static flex justify-center items-center bg-cover w-[100%] pl-[160px] h-[566px] bg-white" style={{ backgroundImage: `url('./background-who.png')` }}>
      <div className="flex h-full w-full flex-col gap-4 bg-cover bg-center py-[139px] pl-[108px] pr-[836px]">
        <p className="font-poppins h-[116px] w-[427px] text-[32px] font-[700] leading-[38px] text-[#272B3A] [flex-grow:1]">
          Fale com a gente e vamos
          <br />
          começar a evolução da
          <br />
          sua empresa!
        </p>
        <p className="font-poppins h-[72px] w-[496px] text-2xl font-[400] leading-9 text-[#272B3A]">
          Como podemos te ajudar hoje com seu projeto?
        </p>
        <div className="font-montserrat mt-6 flex w-[392px] items-center justify-center gap-2 rounded-md bg-[#FC3E60] px-8 py-3 font-[700] text-white">
          <p className="w-[145px] text-sm uppercase leading-[21px]">
            fale com a gente
          </p>
        </div>
      </div>
    </div>
  );
});

Finalstep.displayName = 'Finalstep';
export default Finalstep;
