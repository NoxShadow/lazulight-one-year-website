import React from 'react';
import { Link } from 'wouter';
import pomuPortrait from '../../images/Pomu_Rainpuff_Portrait.webp';

export default function Pomu2022(props) {
  return (
    <div>
      <Link href='/'>Back</Link>
      <div className='panel'>
        <img src={pomuPortrait} alt='Pomu' className='portrait' />
        <div>
          <h1>Pomu Rainpuff</h1>
          <p>Pomu description</p>
        </div>
      </div>
    </div>
  );
};