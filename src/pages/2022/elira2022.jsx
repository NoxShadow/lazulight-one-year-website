import React from 'react';
import { Link } from 'wouter';
import eliraPortrait from '../../images/Elira_Pendora_Portrait.webp';

export default function Elira2022(props) {
  return (
    <div>
      <Link href='/'>Back</Link>
      <div className='panel'>
        <img src={eliraPortrait} alt='Pomu' className='portrait' />
        <div>
          <h1>Elira Pendora</h1>
          <p>Elira description</p>
        </div>
      </div>
    </div>
  );
};