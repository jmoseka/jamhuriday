import { useRef, useState } from "react";

import PreCard from '@/components/PreCard'
import Grazing from '../app/img/maasaiherd.png'
import ethnic from '../app/img/pre/ethnic.jpg'
import leader from '../app/img/pre/leader.jpg'
import religion from '../app/img/pre/religion.jpg'

function PreSection() {


    const items = [{
        title: 'Diverse ethnic group',
        desc: 'Kenya was home to numerous ethnic groups such as the Kikuyu, Luo, Luhya, Kalenjin, Maasai, and others, each with its own language, customs, and social organization.',
        img: ethnic
    },
    {
        title: 'Political Organization',
        desc: 'Political systems varied, ranging from centralized monarchies to decentralized systems led by councils of elders. Some societies had chiefs or leaders who held authority, often based on lineage or prowess in war.',
        img: leader
    },
    {
        title: 'Economic Activities',
        desc: 'Agriculture was a crucial part of precolonial Kenyan society. People cultivated crops like maize, millet, sorghum, and yams. Livestock, including cattle, goats, and sheep, were also reared for food and as a symbol of wealth and status..',
        img: Grazing
    },
    {
        title: 'Religious Beliefs',
        desc: 'Traditional African religions were prevalent, characterized by beliefs in spirits, ancestor worship, and the presence of supernatural forces in nature. Religious practices varied among different ethnic groups.',
        img: religion
    },

    ]

    const cardsPerPage = 2;
    const totalCards = 4;


    const bigSquare = (number) => {
        return number % 4 === 0 || number % 4 === 3;
    }


    const [displayedItems, setDisplayedItems] = useState(2);



    const handleShowMore = () => {
        setDisplayedItems(items.length);
    };

    const handleShowLess = () => {
        setDisplayedItems(2);
        document.getElementById('content').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

    };



    return (

        <div>

            <div id='content' className="section-body grid gap-y-12  md:gap-y-20 md:grid-cols-2 ">
                {items.slice(0, displayedItems).map((item, index) => (
                    <div
                        key={index}

                        className={`w-full  ${bigSquare(index) ? '' : 'md:w-[84%]'} ${index % 2 !== 0 ? ' md:place-self-end md:mt-48' : ''}
                            `}
                    >
                        <PreCard
                            order={index % 2 === 0 ? '2' : ''}
                            title={item.title}
                            desc={item.desc}
                            img={item.img}
                        />
                    </div>
                ))}
            </div>

            <div className="py-12">
                {displayedItems === 2 ? (
                    <button className="button" onClick={handleShowMore}>Show More</button>
                ) : (
                    <button className="button" onClick={handleShowLess}>Show Less</button>
                )}
            </div>



        </div>

        // <>
        //     <div className="section-body flex flex-col gap-16 md:flex-row md:justify-between md:gap-10">
        //         {renderCard()}
        //     </div>

        //     <div className={`pt-12 md:pt-24  flex justify-center`}>

        //         {
        //             currentPage === 1 ?
        //                 <div className='w-fit'>
        //                     <button onClick={() => nextPage()} type='button' className='button'>VIEW MORE</button>
        //                 </div>
        //                 :
        //                 <div>
        //                     <button onClick={() => prevPage()} type='button' className='button'>VIEW LESS</button>
        //                 </div>
        //         }


        //     </div>
        // </>
    )
}

export default PreSection;