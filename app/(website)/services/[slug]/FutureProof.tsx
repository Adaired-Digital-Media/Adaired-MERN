'use client';
import React, { useState } from 'react';
import SaveAndCancel from '@/app/components/common/SaveAndCancel';
import Future_Proof_Card from '../../../../public/assets/linkBuilding/blueCardBg.png';
import Image from 'next/image';

const FutureProof = ({handleClick}:any) => {
  return (
    <div className="relative min-h-[450px] rounded-2xl transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:duration-300">
      <Image
        src={Future_Proof_Card}
        fill
        alt="hero bg"
        priority
        className="pointer-events-none rounded-2xl object-fill lg:object-cover"
      />
      <div className="absolute left-[2rem] right-[2rem] top-[2rem] h-full">
        <p className="text-center uppercase text-white lg:text-left">
          Future-Proof Your
        </p>

        <h1 className="text-center text-[clamp(1.8rem,2.688vw,2.688rem)] leading-[clamp(2.5rem,2.688vw,3.65rem)] text-white lg:text-left">
          Business With <br />
          Smart{' '}
          <span className="text-[clamp(1.8rem,2.688vw,2.688rem)] font-bold text-[#00A3FF]">
            Link Building Services.
          </span>
        </h1>

        <p className="whitespace-pre-line py-[1rem] text-white">
          We combine the power of AI precision with editorial outreach to scale
          your organic visibility, dominate search results and strengthen your
          brand.
        </p>

        <div className="absolute bottom-[4rem] left-0 right-0 flex justify-center lg:justify-start">
          <SaveAndCancel
            name="Talk To an Expert!"
            isIcon={true}
            buttonWidth=""
            isBgWhite={true}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default FutureProof;
