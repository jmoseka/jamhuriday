import IntroText from '@/components/IntroText'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full 
    flex-col items-center justify-between px-3 font-istok">

      <section className="hero-section h-[90vh] w-full text-white border border-purple-900 ">
        <div className='hero w-full border pt-48
         border-red-700 text-center'>
          <h1 className='uppercase text-2xl font-ibara'>In the shadows of freedom</h1>
          <p className='text-sm'>Where the spirit of independence soars.</p>
        </div>
      </section>

      <section className='text-white'>
        <IntroText
          title="1000BC - 19TH CE"
          subtitle="Pre-colonial era"
          desc="This timeline explores the rich and diverse history of the region that is now Kenya before the arrival of Europeans. It delves into the various ethnic groups, their cultures, and the way of life before colonialism."
        />

      </section>

    </main>
  )
}
