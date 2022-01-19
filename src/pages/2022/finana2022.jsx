import React from 'react';
import { Link } from 'wouter';
import finanaPortrait from '../../images/Finana_Ryugu_Portrait.webp';

export default function Finana2022(props) {
  return (
    <div>
      <Link href='/'>Back</Link>
      <div className='panel'>
        <img src={finanaPortrait} alt='Finana' className='portrait' />
        <div>
          <h1>Finana Ryugu</h1>
          <p>Finana description</p>
        </div>
      </div>
    </div>
  );
};