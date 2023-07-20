import { FC, memo } from 'react';

const Empresa: FC = memo(() => {
    return (
        <div className="w-full h-[336px] bg-neutral-800 justify-center items-center static">
            <div className="flex mx-auto h-[211px] relative">
                <div className=" gap-8 columns-5  flex-col mx-auto justify-center items-center top-[128px] relative">
                <img className="w-[184px] h-[92px]" src="https://via.placeholder.com/184x92" />
                <img className="w-36 h-[117px]" src="https://via.placeholder.com/144x117" />
                <img className="w-[182px] h-28" src="https://via.placeholder.com/182x112" />
                <img className="w-[156px] h-[119px]" src="https://via.placeholder.com/156x119" />
                <img className="w-[188px] h-[124px]" src="https://via.placeholder.com/188x124" />
                </div>
                <div className="container flex max-w-full mx-auto object-center justify-center top-[40px] text-white text-[32px] font-bold leading-[38.40px] absolute">Empresas que confiam em nós</div>
            </div>
        </div>
    );
});

Empresa.displayName = 'Empresa';
export default Empresa;