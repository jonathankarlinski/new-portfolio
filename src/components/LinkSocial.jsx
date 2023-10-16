import React from 'react'
import Image from 'next/image';
import PropTypes from 'prop-types';


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

LinkSocial.propTypes = {
  link: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
}.isRequired;

export default LinkSocial;