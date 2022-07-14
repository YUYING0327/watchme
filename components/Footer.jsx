import React from 'react';
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="text-center h-32 flex flex-col items-center justify-center">
      <div className="flex items-center">
        <Link href="https://www.facebook.com/">
          <BsFacebook size={35} color="#4267B2" className="mx-[6px]" />
        </Link>
        <Link href="https://www.youtube.com/">
          <BsYoutube size={35} color="#FF0000" className="mx-[6px]" />
        </Link>
        <Link href="https://www.twitter.com/">
          <BsTwitter size={35} color="#1DA1F2" className="mx-[6px]" />
        </Link>
        <Link href="https://www.instagram.com/">
          <AiOutlineInstagram size={45} color="#833AB4" className="mx-[6px]" />
        </Link>
      </div>
      <p className="text-xl text-gray-800">
        &copy; Copyright 2022 <span className="font-bold">Canddev</span>
      </p>
    </div>
  );
};

export default Footer;
