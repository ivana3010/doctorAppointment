import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from "framer-motion";

const Contact = () => {
  const [showText, setShowText] = useState(true);

  const handleClick = () => {
    setShowText(false);
  };

  return (
    <div>
      <div className="relative h-[60vh] w-full " onClick={handleClick}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16412.521705777697!2d16.592041000000002!3d59.05599254999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465ec163511dde7f%3A0x21a2a66f0a3c7dde!2sFlen!5e0!3m2!1ssr!2sse!4v1763319822792!5m2!1ssr!2sse"
          className="absolute w-full h-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {showText && (
          <>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-white text-5xl font-semibold">Contact Us</h1>
              <p className="text-white text-lg mt-4">We'd love to hear from you!</p>
            </div>
          </>
        )}
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0 }} 
        >
          <div className="py-12">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Get in Touch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <LocationOnIcon className="text-primary text-4xl mb-4" />
                  <p className="text-gray-700 text-center">
                    Flen, Sweden
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <LocalPhoneIcon className="text-primary text-4xl mb-4" />
                  <p className="text-gray-700 text-center">
                    +46735831302
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <EmailIcon className="text-primary text-4xl mb-4" />
                  <p className="text-gray-700 text-center">
                    ivanagabricm@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Contact;








