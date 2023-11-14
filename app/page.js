import IntroText from '@/components/IntroText'
import PreCard from '@/components/PreCard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full 
    flex-col items-center justify-between px-3 font-istok">

      <section className="hero-section h-[90vh] w-full  border border-purple-900 ">
        <div className='hero w-full border pt-48
         border-red-700 text-center'>
          <h1 className='uppercase text-2xl font-ibara'>In the shadows of freedom</h1>
          <p className='text-sm'>Where the spirit of independence soars.</p>
        </div>
      </section>

      <section className='flex flex-col'>
        <div className='line'>
          <span className=''></span>
        </div>
        <IntroText
          title="1000BC - 19TH CE"
          subtitle="Pre-colonial era"
          desc="This timeline explores the rich and diverse history of the region that is now Kenya before the arrival of Europeans. It delves into the various ethnic groups, their cultures, and the way of life before colonialism."
        />

        <div className='section-body'>

          <article className='section-body-content'>
            <div className='pre-cardline'>
              <span className=''></span>
            </div>

            <PreCard
              title='Social Structures'
              desc='Several indigenous societies and kingdoms flourished, such as the Kikuyu, Kamba, Luo, Maasai, and many others. They had had well-defined social structures. Evidence of chiefs, elders, and councils for decision-making and conflict resolution can be found in historical accounts and oral traditions.'
            />
          </article>

          <article className='section-body-content'>
            <div className='pre-cardline'>
              <span className=''></span>
            </div>
            
            <PreCard
              title='Religion and Spirtuality'
              desc='Indigenous belief systems and spiritual practices were an integral part of African traditional societies. Evidence of sacred sites, rituals, and religious artifacts demonstrates their spiritual traditions.'
            />
          </article>

        </div>

       <div className='pt-12  self-end'>
       <button type='button' className='w-14 h-14 border rounded-full text-white text-sm'>NEXT</button>
       </div>

      </section>

      <section className=''>
        <div className='line'>
          <span></span>
        </div>

        <IntroText
          title="1900 - 1963"
          subtitle="Colonial Rule and Resistance Movements"
          desc="This timeline highlights the period of British colonial rule, which lasted from the late 19th century until Kenya's independence in 1963. It includes the struggles and resistance against colonial oppression and exploitation."
        />
      </section>

      <section className=''>

        <div className='line'>
          <span></span>
        </div>

        <IntroText
          title="1960 - 1962"
          subtitle="Path To Independence"
          desc="This timeline covers the series of events, negotiations, and political developments that ultimately led to Kenya's independence. It includes key figures like Jomo Kenyatta and the Lancaster House Conference of 1960-1962."
        />
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
      </section>

    </main>
  )
}
