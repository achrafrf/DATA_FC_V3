'use client';
import React from 'react';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import BackToTopButton from './BackToTopButton';

const FloatingSocialButtons = () => {
  const whatsappNumber = '212675343730';
  const whatsappMessage = encodeURIComponent('Bonjour, je souhaite avoir plus d\'infos !');
  const linkedinUrl = 'https://www.linkedin.com/company/dataformationetconsulting/';

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 items-end z-50">
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
        title="Contact WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
        title="Voir mon LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>

      <BackToTopButton />
    </div>
  );
};

export default FloatingSocialButtons;
