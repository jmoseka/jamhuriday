"use client"
import IntroText from '@/components/IntroText'
import PreSection from '@/components/PreSection';
import PresentCard from '@/components/PresentCard';
import ResistantCard from '@/components/ResistantCard'
import Image from 'next/image'
import { useState } from 'react';


export default function Home() {
  const mauMauText = `The Mau Mau movement was a significant anti-colonial uprising in Kenya during the 1950s against British colonial rule.
  It was primarily led by the Kikuyu people, Kenya's largest ethnic group, who sought independence and the return of their land, which had been taken by British settlers.
  The movement was named after the secret society known as "Mau Mau," which played a key role in organizing resistance against colonialism.
  The Mau Mau movement was characterized by guerrilla warfare, strikes, protests, and acts of defiance against the British authorities and their loyalist allies.
  The British responded to the uprising with a heavy-handed crackdown, declaring a state of emergency in 1952. They carried out mass arrests, detentions, torture, and executions.
  The Mau Mau uprising ultimately played a crucial role in Kenya's struggle for independence. It brought international attention to the injustices of colonialism and contributed significantly to the push for Kenya's eventual independence, which was achieved in 1963.`;

  const [images, setImages] = useState([
    { id: 1, src: '' },
    { id: 2, src: '' },
    { id: 3, src: '' },
    { id: 4, src: '' },
  ]);

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const smallimages = images.slice(1, 4);

  const handleClick = (image) => {
    setSelectedImage(image);
    setImages((prevImages) => {
      const updatedImages = prevImages.filter((img) => img.id !== image.id);
      return [image, ...updatedImages];
    });
  };

  return (
    <main className="flex min-h-screen w-full bg-bgcolor
    flex-col items-center justify-between font-urban">

      <section className="hero-section h-[100vh]  w-full border px-2">
        <div className='hero w-full pt-[35vh]
          text-center '>
          <h1 className='uppercase text-4xl md:text-5xl xl:text-7xl 2xl:text-[5vw]'>In the shadows of freedom</h1>
          <p className='text-subtitle text-lg xl:text-2xl 2xl:text-[1.7vw] md:leading-6 '>Where the spirit of independence soars.</p>
        </div>
      </section>

      <section className='flex flex-col'>
        <div className='line'>
          <span className=''></span>
        </div>
        <IntroText
          title="1000BC - 1900's"
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

      <section className=''>
        <div className='line'>
          <span></span>
        </div>

        <IntroText
          title="1900 - 1963"
          subtitle="Colonial Rule and Resistance Movements"
          desc="This timeline highlights the period of British colonial rule, which lasted from the late 19th century until Kenya's independence in 1963. It includes the struggles and resistance against colonial oppression and exploitation."
        />


        <div className='margins flex flex-col gap-10 md:gap-20 pt-14'>
          <article>
            <ResistantCard
              float='left'
              title='Mau Mau Rebellion'
              desc={mauMauText}
            />
          </article>

          <article>
            <ResistantCard
              align='right'
              float='right'
              title='Mau Mau Rebellion'
              desc={mauMauText}
            />
          </article>
        </div>

      </section>


      {/* section Lancaster meeting
      Detailing agreements towards the path to independence
      */}

      <section className=''>

        <div className='line'>
          <span></span>
        </div>

        <IntroText
          title="1960 - 1962"
          subtitle="Path To Independence"
          desc="This timeline covers the series of events, negotiations, and political developments that ultimately led to Kenya's independence. It includes key figures like Jomo Kenyatta and the Lancaster House Conference of 1960-1962."
        />

        <div className='flex flex-col gap-3 md:flex-row pt-20'>
          <figure>
            <div className='h-[15rem] border'>
              <Image src="" alt="image" />
            </div>
            <figcaption>Mr Jomo Kenyatta (left), President of the Kenya African National Union, and Mr Tom Mboya (check suit) are pictured at the closing ceremony of the Kenya Constitutional Conference at Lancaster House, London.</figcaption>

          </figure>

          <figure>
            <div className='h-[15rem] border'>
              <Image src="" alt="image" />
            </div>

            <figcaption>Mr Jomo Kanyatta, President of the Kenya African National Union, speaking at the closing ceremony of the Kenya Constitutional Conference at Lancaster House, London.

            </figcaption>

          </figure>

        </div>
      </section>

      <section className=''>

        <div className='line'>
          <span></span>
        </div>

        <IntroText
          title="December 12, 1964"
          subtitle="Jamhuri Day Declaration"
          desc="This timeline celebrates the day the Kenyan flag was raised, and the country's first president, Jomo Kenyatta, took office. These timelines provide a historical context for the significance of Jamhuri Day and help Kenyans reflect on the journey toward self-governance and the birth of their republic."
        />

        <div className='pt-8'>

          <div className='w-full gallery grid grid-cols-3 border gap-y-8'>


            <div className='col-span-3'>
              <figure>
                <p>paragraph {selectedImage.id}</p>
                <Image className=' w-full h-[12rem] md:h-[18rem]' width={200} src={selectedImage.src} alt="image" />
                <figcaption>
                  (Original Caption) 6/1/1963-Nairobi, Kenya- Waving his wisk the newly-elected Premier of Kenya, Jomo Kenyatta, (R, foreground), greeted throngs of cheering citizens as he rode through the streets of Nairobi. Accompanying Kenyatta are Tom Mboya, (L), Minister of Justice and Constitutional Affairs; A. Oginga Odinga, Minister for Home Affairs; and James S. Gichuru, Minister for Finance.
                </figcaption>
              </figure>
            </div>

            <div className=" flex col-span-3">
              {smallimages.map((image) => (
                <button key={image.id} className="small-image h-36 flex-1" onClick={() => handleClick(image)}>
                  <p>Number {image.id}</p>
                  <Image src={image.src} alt={`Image ${image.id}`} />
                </button>
              ))}
            </div>




          </div>

        </div>


      </section>

      <section className=''>
        <div className='line'>
          <span></span>
        </div>

        <IntroText
          title="Present Day"
          subtitle="A sorveign country"
          desc="Since Jamhuri Day on December 12, 1964, when Kenya became a republic, there have been several indicators and events that demonstrate the country's status as a self-governing and independent nation. Some of these include:"
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

      <footer className='w-full'>
        <div className='line'>
          <span className=''></span>
        </div>
        <div className='flex '>


          <div className='text-textColor'>
            <h2 className='text-xl'>Useful Links</h2>
            <ul>
              <li>Home</li>
              <li>Pre-colonial era</li>
              <li>Colonial rule and resistance groups</li>
              <li>Path to Independence</li>
              <li>The Jamhuri Day</li>
              <li>Present day</li>
            </ul>

          </div>

          <div className=''>
            <h2>Social media</h2>
          </div>

        </div>
      </footer>

    </main>
  )
}
