import React, { useContext } from 'react'
import AppProvider from '../context/AppContext';
import Image from 'next/image';
import ButtonEmail from './ButtonEmail';


function LinkSocial(props) {
  const { link, src, alt} = props;
  return (
    <a
      href={link}
      target="_blank" rel="noreferrer"
    >
      <Image
        width='50'
        height='50'
        sizes="100vw"
        src={src}
        alt={alt}
        loading="lazy"
      />
    </a>
  );
}

export default LinkSocial;