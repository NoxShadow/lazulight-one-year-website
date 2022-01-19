import React from 'react';
import { Link } from 'wouter';
import eliraPortrait from '../../images/Elira_Pendora_Portrait.webp';
import pomuPortrait from '../../images/Pomu_Rainpuff_Portrait.webp';
import finanaPortrait from '../../images/Finana_Ryugu_Portrait.webp';

export default function HomePg(props) {

  return (
    <div>
      <div className='panel'>
        <div>
          <h1>Lazulight</h1>
          <h1>Happy 1 year!</h1>
          <p>Someone better than me at drawing please add a better background image</p>
        </div>
      </div>
      <div className='panel'>
        <Link href='/2022/pomu'><img src={pomuPortrait} alt='Pomu' className='portrait'/></Link>
        <Link href='/2022/elira'><img src={eliraPortrait} alt='Elira' className='portrait'/></Link>
        <Link href='/2022/finana'><img src={finanaPortrait} alt='Finana' className='portrait'/></Link>
      </div>
      <div className='panel'>
        {/* this is just the default iframe embed from youtube, can mess around with size later */}
        <iframe width="560" height="315"
          src="https://www.youtube.com/embed/ZnP0cKNPE04"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      </div>
    </div>
  );
};
