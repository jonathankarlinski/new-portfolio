import React from 'react'
import Image from 'next/image';
import clipboardCopy from 'clipboard-copy';


function ButtonEmail() {

  const handleCopy = () => {
    alert('Link de email copiado!')
    clipboardCopy('jonathankarlinski57@gmail.com');
  };

  return (
    <button
      type='button'
      onClick={() => handleCopy()}
    >
      <Image
        width="50"
        height="50"
        sizes="100vw"
        src={'/images/iconGmail.png'}
        alt='Logo do Gmail'
      />
    </button>
  )
}

export default ButtonEmail;