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
          desc="In the precolonial era, Kenya was characterized by diverse and autonomous societies with rich cultural, linguistic, and ethnic diversity. Various ethnic groups, such as the Kikuyu, Luo, Maasai, and others, inhabited distinct regions, each with its own social structures, economic practices, and belief systems. Communities engaged in agriculture, pastoralism, and trade, contributing to a complex tapestry of interconnected societies. The absence of a centralized political authority resulted in localized governance systems, emphasizing communal values and kinship ties."
        />

        <div className='sub-section'>

          <PreSection />

        </div>



      </section>

      {/* section resistant groups
     
      */}

      <div className='line'>
        <span></span>
      </div>

      <section className='colonial-rule '>


        <div className='px-2 sm:px-[8vw]'>
          <IntroText
            title="1900 - 1963"
            subtitle="Colonial Rule and Resistance Movements"
            desc="This timeline highlights the period of British colonial rule, which lasted from the late 19th century until Kenya's independence in 1963. It includes the struggles and resistance against colonial oppression and exploitation."
          />
        </div>


        <div className={`relative  ${windowWidth > 700 ? 'h-[100vh]' : 'h-[60vh]'} w-[100%]`}>
          <Image src={maumau} alt='mau mau troops' fill style={{ objectFit: "cover" }} />
        </div>

        <div className='h-[100vh] px-2 sm:px-[8vw] flex flex-col gap-8'>
          <p className='uppercase pt-28 xl:pt-32 2xl:pt-[10vw]
            text-[3.2rem] md:text-7xl lg:text-8xl 2xl:text-[7vw]
           font-semi-bold md:tracking-normal tracking-wide'>MAU MAU </p>
          <p className='body-text  '>{mauMauText}</p>
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

      <section id='post-independence' className='px-2 sm:px-[8vw] pb-32 md:pb-50'  >

        <IntroText
          title="Post-Independence Era"
          subtitle="A sorveign country"
          desc="Following its independence from British colonial rule on December 12, 1963, Kenya embarked on a journey of nation-building and self-determination. However, the post-independence era was not without challenges. Political transitions, socio-economic disparities, ethnic tensions, and struggles for democratic governance characterized different phases of Kenya's evolution. Over the decades, the country underwent significant changes, shaping its identity and paving the way for the Kenya we see today."
        />

        <div className='pt-16 flex flex-col gap-12 md:gap-32 2xl:gap-44 '>

          <PresentCard
            title='Political Evolution'
            img={moi}
            desc='In the 1980s and 1990s, Kenya saw influential leaders shaping governance, leading to political shifts, transitions, and constitutional reforms. Pro-democracy movements emerged, paving the way for Kenyas transition from a single-party to a multi-party system, fundamentally altering the nations political landscape.'


          />
          <PresentCard
            order={2}
            title='Economic Growth and Challenges'
            img={agri}
            desc='In the 2000s, Kenya focused on economic policies, industrialization, and development strategies to spur growth. However, challenges arose in achieving sustainable economic progress. Efforts were made to reduce poverty, promote rural development, and implement social welfare programs to address socio-economic disparities.
          '
          />

          <PresentCard
            title='Constitutional Reforms and Modernization'
            img={kibaki}
            desc='The 2010s saw Kenya undergo constitutional reforms, reshaping governance. Embracing technological advancements, the nation witnessed improvements in various sectors. Initiatives targeted education, healthcare, and infrastructure development, reflecting a commitment to modernization and progress.'
          />

          <PresentCard
            order={2}
            img={protest}
            title='Challenges and Sociopolitical Developments'
            desc='Addressing corruption, ethnic tensions, and challenges to national unity became focal points in the 2010s. Political landscapes underwent changes, with elections and power transitions influencing governance. Social movements, activism, and civil society engagement played key roles in advocating for reforms.
          '
          />

        </div>


      </section>

      <footer className='w-full  '>
        <div className='line'>
          <span className=''></span>
        </div>

        <div className=' px-2 sm:px-[8vw] py-10 md:py-10'>

          <div className='flex flex-col gap-6 md:gap-32 text-subtitle md:flex-row'>


            <div>
              <h2 className='text-xl font-semibold'>Useful Links</h2>
              <ul className='text-[0.88rem] pt-4'>
                <li><a className='cursor-pointer hover:textColor' href='#home'>Home</a></li>
                <li><a className='cursor-pointer hover:textColor' href='#pre-colonial'>Pre-colonial era</a></li>
                <li><a className='cursor-pointer hover:textColor' href='#colonial-rule'>Colonial rule and resistance groups</a></li>
                <li><a className='cursor-pointer hover:textColor' href='#path-to-independence'>Path to Independence</a></li>
                <li><a className='cursor-pointer hover:textColor' href='#jamhuri'>The Jamhuri Day</a></li>
                <li><a className='cursor-pointer hover:textColor' href='#post-independence'>Present day</a></li>
              </ul>

            </div>

            <div className=''>
              <h2 className='text-xl font-semibold'>Social Links</h2>
              <ul className='pt-4 flex gap-3'>
                <a className='footer-links'>
                  <FiGithub />
                </a>
                <a className='footer-links'>
                  <FaXTwitter />
                </a>
              </ul>
            </div>

          </div>
        </div>
      </footer>

    </main>
  )
}
