"use client"
import IntroText from '@/components/IntroText'
import PreSection from '@/components/PreSection';
import PresentCard from '@/components/PresentCard';
import maumau from '../app/img/maumautroop.jpg';
import jomospeak from '../app/img/jomospeak.png';
import jomotom from '../app/img/jomotom.png';
import jomowave from '../app/img/independence/jomowave.png'
import jomowavecrowd from '../app/img/independence/jomowavecrowd.png'
import jomoaero from '../app/img/independence/jomoaero.png'
import jomotraditional from '../app/img/independence/jomotraditional.png'
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
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
    flex-col items-center justify-between font-urban">

      <section id='home' className="hero-section h-[100vh] w-full px-2">
        <div className='hero w-full pt-[35vh]
          text-center '>
          <h1 className='uppercase text-4xl md:text-5xl xl:text-7xl 2xl:text-[5vw]'>In the shadows of freedom</h1>
          <p className='text-subtitle text-lg xl:text-2xl 2xl:text-[1.7vw] md:leading-6 '>Where the spirit of independence soars.</p>
        </div>
      </section>

      <div className='line'>
        <span className=''></span>
      </div>

      <section id='pre-colonial' className='px-2 sm:px-[8vw] flex flex-col'>

        <IntroText
          title="1000BC - 19TH CE"
          subtitle="Pre-colonial era"
          desc="This timeline explores the rich and diverse history of the region that is now Kenya before the arrival of Europeans. It delves into the various ethnic groups, their cultures, and the way of life before colonialism."
        />

        <div className='sub-section'>

          <PreSection />

        </div>



      </section>

      {/* section resistant groups
      Detailing information in a gazette structure stsyle
      */}

      <div className='line'>
        <span></span>
      </div>

      <section className='colonial-rule'>


        <div className='px-2 sm:px-[8vw]'>
          <IntroText
            title="1900 - 1963"
            subtitle="Colonial Rule and Resistance Movements"
            desc="This timeline highlights the period of British colonial rule, which lasted from the late 19th century until Kenya's independence in 1963. It includes the struggles and resistance against colonial oppression and exploitation."
          />
        </div>


        <div className={`relative ${windowWidth > 700 ? 'h-[100vh]' : 'h-[60vh]'} w-[100%]`}>
          <Image src={maumau} alt='mau mau troops' fill style={{ objectFit: "cover" }} />
        </div>

        <div className='px-2 sm:px-[8vw] py-40 md:py-64 w-[100%] flex flex-col md:flex-row md:items-center items-start
         justify-center gap-4 md:gap-8 xl:gap-20'>
          <p className='uppercase text-[1.6rem] md:text-5xl xl:text-[5rem] 2xl:text-[4vw] text-start md:text-center font-semi-bold md:tracking-wider tracking-wide'>MAU MAU REBELLION</p>
          <p className=' text-[0.93rem] md:text-base 2xl:text-[1.1vw]  2xl:leading-[1.4vw]  '>{mauMauText}</p>
        </div>



      </section>


      {/* section Lancaster meeting
      Detailing agreements towards the path to independence
      */}
      <div className='line'>
        <span></span>
      </div>

      <section id='path-to-independence' className='px-2 sm:px-[8vw] pb-32 md:pb-50 '>

        <IntroText
          title="1960 - 1962"
          subtitle="Path To Independence"
          desc="This timeline covers the series of events, negotiations, and political developments that ultimately led to Kenya's independence. It includes key figures like Jomo Kenyatta and the Lancaster House Conference of 1960-1962."
        />

        <div className='flex flex-col gap-3 md:flex-row pt-10'>
          <figure>
            <div className='relative h-[50vh] w-[100%]'>
              <Image src={jomospeak} alt="jomo kenyatta speaking at lancaster" fill style={{ objectFit: "cover" }} />
            </div>
            <figcaption className='text-[0.65rem] 2xl:text-[0.7vw] 2xl:leading-[1.4vw]'>Mr Jomo Kenyatta (left), President of the Kenya African National Union, and Mr Tom Mboya (check suit) are pictured at the closing ceremony of the Kenya Constitutional Conference at Lancaster House, London.</figcaption>

          </figure>

          <figure>
            <div className='relative h-[50vh] w-[100%]'>
              <Image src={jomotom} alt="jomo kenyatta speaking at lancaster" fill style={{ objectFit: "cover" }} />
            </div>
            <figcaption className='text-[0.65rem] 2xl:text-[0.7vw] 2xl:leading-[1.4vw]'>Mr Jomo Kanyatta, President of the Kenya African National Union, speaking at the closing ceremony of the Kenya Constitutional Conference at Lancaster House, London.</figcaption>

          </figure>

        </div>
      </section>

      <div className='line'>
        <span></span>
      </div>
      <section id='jamhuri' className='px-2 sm:px-[8vw] pb-32 md:pb-50 '>
        <IntroText
          title="December 12, 1964"
          subtitle="Jamhuri Day Declaration"
          desc="This timeline celebrates the day the Kenyan flag was raised, and the country's first president, Jomo Kenyatta, took office. These timelines provide a historical context for the significance of Jamhuri Day and help Kenyans reflect on the journey toward self-governance and the birth of their republic."
        />

        <div>

          <div className='w-full gallery grid grid-cols-3 gap-10'>


            <div className='col-span-3'>
              <figure className='w-full flex flex-col items-center'>
                <div className='relative w-[100%] h-[45vh] sm:h-[65vh] md:h-[75vh]'>
                  <Image className='text-center mx-auto' src={selectedImage.src} alt={caption} fill style={{ objectFit: "contain" }}
                  />
                </div>
                <figcaption className='text-[0.65rem] 2xl:text-[0.7vw] 2xl:leading-[1.4vw]'>
                  {caption}
                </figcaption>
              </figure>
            </div>

            <div className=" flex col-span-3 gap-2">
              {smallimages.map((image) => (
                <button key={image.id} className="small-image flex-1" onClick={() => handleClick(image)}>
                  <div className='relative w-full h-[20vh] md:h-[25vh] xl:h-[35vh]' >
                    <Image fill style={{ objectFit: "cover" }} src={image.src} alt={image.desc} />
                  </div>
                </button>
              ))}
            </div>




          </div>

        </div>


      </section>

      <div className='line'>
        <span></span>
      </div>

      <section id='post-independence' className='px-2 sm:px-[8vw] pb-32 md:pb-50'>

        <IntroText
          title="Post-Independence Era"
          subtitle="A sorveign country"
          desc="Following its independence from British colonial rule on December 12, 1963, Kenya embarked on a journey of nation-building and self-determination. However, the post-independence era was not without challenges. Political transitions, socio-economic disparities, ethnic tensions, and struggles for democratic governance characterized different phases of Kenya's evolution. Over the decades, the country underwent significant changes, shaping its identity and paving the way for the Kenya we see today."
        />

        <div className='pt-16 flex flex-col gap-10 md:gap-16'>

          <PresentCard
            title='The Constitution'
            desc='Kenya has had its own constitution since achieving independence. The countrys constitution outlines the framework for government, the separation of powers, and the rights and responsibilities of its citizens.
          '

          />
          <PresentCard
            order={2}
            title='The Constitution'
            desc='Kenya has had its own constitution since achieving independence. The countrys constitution outlines the framework for government, the separation of powers, and the rights and responsibilities of its citizens.
          '
          />

        </div>


      </section>

      <footer className='w-full '>
        <div className='line'>
          <span className=''></span>
        </div>

        <div className=' px-2 sm:px-[8vw] py-10 md:py-10'>

          <div className='flex flex-col gap-6 md:gap-32 text-textColor md:flex-row'>


            <div>
              <h2 className='text-xl'>Useful Links</h2>
              <ul className='text-[0.88rem] pt-4'>
                <li><a className='cursor-pointer hover:text-slate-400' href='#home'>Home</a></li>
                <li><a className='cursor-pointer hover:text-slate-400' href='#pre-colonial'>Pre-colonial era</a></li>
                <li><a className='cursor-pointer hover:text-slate-400' href='#colonial-rule'>Colonial rule and resistance groups</a></li>
                <li><a className='cursor-pointer hover:text-slate-400' href='#path-to-independence'>Path to Independence</a></li>
                <li><a className='cursor-pointer hover:text-slate-400' href='#jamhuri'>The Jamhuri Day</a></li>
                <li><a className='cursor-pointer hover:text-slate-400' href='#post-independence'>Present day</a></li>
              </ul>

            </div>

            <div className=''>
              <h2 className='text-xl'>Social Links</h2>
              <ul className='pt-4 flex gap-3'>
                <a className='w-[30px] h-[30px] rounded-full bg-red-500 '>
                </a>
                <a className='w-[30px] h-[30px]  rounded-full bg-red-500 '>
                </a>
              </ul>
            </div>

          </div>
        </div>
      </footer>

    </main>
  )
}
