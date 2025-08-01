import React, { FC } from 'react';
import { title } from '@/components/primitives';

export const MainTitle: FC = () => {
  return (
    <>
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ color: 'yellow' })}>ONE-STOP SOLUTION SUPPLIER OF &nbsp;</span>
        <span className={title({ color: 'violet' })}>CIVIL BLASTING AND &nbsp;</span>
        <br />
        <span className={title({ color: 'blue' })}>CHEMICAL RAW MATERIALS</span>
      </div>
    </>
  );
};
