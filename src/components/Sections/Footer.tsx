import { FC, memo } from 'react';

const Footer: FC = memo(() => (
  <div className={`h-[300px] w-[100%] items-center justify-center bg-[#FC3E60] pb-[62px] pl-[108px] pr-[178px] pt-[39px] text-left text-[#FFFFFA] `}
  >
    <div className="flex h-full w-full gap-[139px] justify-center">
      <p className="font-syne h-6 w-[170px] text-2xl font-[800] uppercase leading-6">
        DEFUSE
      </p>
      <div className="font-poppins ml-[315px] flex flex-col gap-6">
        <p className="h-[39px] w-[173px] text-[32px] font-[700] leading-[38.4px] [flex-grow:1]"
        >
          Links úteis
        </p>
        <p className="h-4 w-20 text-base font-[400] leading-4">
          Sobre nós
        </p>
        <p className="h-4 w-[121px] text-base font-[400] leading-4">
          O que fazemos
        </p>
        <p className="h-4 w-[156px] text-base font-[400] leading-4">
          Como nós fazemos
        </p>
        <p className="h-4 w-[129px] text-base font-[400] leading-4">
          Como contratar
        </p>
      </div>
      <div className="font-poppins flex flex-col gap-6">
        <p
          className="h-[39px] w-[135px] text-[32px] font-[700] leading-[38.4px] [flex-grow:1]"
        >
          Contato
        </p>
        <p className="mt-0.5 h-4 w-[132px] text-base font-[400] leading-4">
          (61) 9 9965-7196
        </p>
        <p className="h-4 w-[218px] text-base font-[400] leading-4">
          matheus.dsgn@gmail.com
        </p>
        <p className="h-4 w-[196px] text-base font-[400] leading-4">
          matheus-rodrigues2396
        </p>
      </div>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
