"use client"
import IntroText from '@/components/IntroText'
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import PreSection from '@/components/PreSection';
import PresentCard from '@/components/PresentCard';
import maumau from '../app/img/maumautroop.jpg';
import jomospeak from '../app/img/jomospeak.png';
import jomotom from '../app/img/jomotom.png';
import jomowave from '../app/img/independence/jomowave.png'
import jomowavecrowd from '../app/img/independence/jomowavecrowd.png'
import jomoaero from '../app/img/independence/jomoaero.png'
import jomotraditional from '../app/img/independence/jomotraditional.png'
import agri from '../app/img/postindependence/agri.jpg'
import moi from '../app/img/postindependence/moi.jpg'
import protest from '../app/img/postindependence/protest.jpg'
import kibaki from '../app/img/postindependence/kibaki.jpg'
import Image from 'next/image';
import { useState, useEffect } from 'react';


export default function Home() {
  const mauMauText = `The Mau Mau movement was a significant anti-colonial uprising in Kenya during the 1950s against British colonial rule.
  It was primarily led by the Kikuyu people, Kenya's largest ethnic group, who sought independence and the return of their land, which had been taken by British settlers.
  The movement was named after the secret society known as "Mau Mau," which played a key role in organizing resistance against colonialism.
  The Mau Mau movement was characterized by guerrilla warfare, strikes, protests, and acts of defiance against the British authorities and their loyalist allies.
  The British responded to the uprising with a heavy-handed crackdown, declaring a state of emergency in 1952. They carried out mass arrests, detentions, torture, and executions.
  The Mau Mau uprising ultimately played a crucial role in Kenya's struggle for independence. It brought international attention to the injustices of colonialism and contributed significantly to the push for Kenya's eventual independence, which was achieved in 1963.`;

  const [images, setImages] = useState([
    { id: 1, src: jomowave, alt: '(Original Caption) 6/1/1963-Nairobi, Kenya- Waving his wisk the newly-elected Premier of Kenya, Jomo Kenyatta, (R, foreground), greeted throngs of cheering citizens as he rode through the streets of Nairobi.' },
    { id: 2, src: jomowavecrowd, alt: 'Kenyan politician Jomo Kenyatta waving to cheering crowds during Kenya Independence Day celebrations. (Photo by Harry Benson/Getty Images)' },
    { id: 3, src: jomotraditional, alt: '13th December 1963: Kenyas first prime minister Jomo Kenyatta wearing colobus skins at the ceremony in Nairobis Uhuru (freedom) Stadium to proclaim Kenyan independence after 68 years of British rule. (Photo by Keystone/Getty Images)' },
    { id: 4, src: jomoaero, alt: 'Jomo Kenyatta (1897 - 1978), the Prime Minister of Kenya, waves his fly whisk as he leaves London Airport (later Heathrow) after attending the Commonwealth Prime Ministers Conference in London, UK, 20th July 1964. (Photo by Evening Standard/Hulton Archive/Getty Images)' },
  ]);

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [caption, setCaption] = useState(images[0].alt);
  const smallimages = images.slice(1, 4);
  const [windowWidth, setWindowWidth] = useState(null);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleClick = (image) => {
    setSelectedImage(image);
    setCaption(image.alt)

    setImages((prevImages) => {
      const updatedImages = prevImages.filter((img) => img.id !== image.id);
      return [image, ...updatedImages];
    });
  };

  return (
    <main className="flex min-h-screen bg-bgcolor
    flex-col items-center justify-between font-urban  w-full">

      <section id='home' className="hero-section h-[100vh] px-2 pb-10">

        <div className='w-full pt-[35vh] text-center '>
          <h1 className='uppercase text-4xl md:text-5xl xl:text-7xl 2xl:text-[5vw]'>In the shadows of freedom</h1>
          <p className='text-subtitle mt-3 2xl:mt-[1vw] text-lg xl:text-2xl 2xl:text-[1.7vw] md:leading-6 '>Where the spirit of independence soars.</p>
        </div>
      </section>

      {/* line divide  */}

      <div className='line'>
        <span className=''></span>
      </div>


      {/* Precolonial section */}

      <section id='pre-colonial' className='px-2 sm:px-[8vw] flex flex-col'>

        <IntroText
          title="1000BC - 19TH CE"
          subtitle="Pre-colonial era"
          desc="In the precolonial era, Kenya was characterized by diverse and autonomous societies with rich cultural, linguistic, and ethnic diversity. Various ethnic groups, such as the Kikuyu, Luo, Maasai, and others, inhabited distinct regions, each with its own social structures, economic practices, and belief systems. Communities engaged in agriculture, pastoralism, and trade, contributing to a complex tapestry of interconnected societies. The absence of a centralized political authority resulted in localized governance systems, emphasizing communal values and kinship ties."
        />

        <div className='sub-section'>

          <PreSection />

        </div>



      </section>




    </main>
  )
}
