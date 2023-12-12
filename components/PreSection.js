import { useState } from "react";

import PreCard from '@/components/PreCard'
import Grazing from '../app/img/maasaiherd.png'

function PreSection() {

    const [currentPage, setCurrentPage] = useState(1);

    const items = [{
        title: 'Diverse ethnic group',
        desc: 'Kenya was home to numerous ethnic groups such as the Kikuyu, Luo, Luhya, Kalenjin, Maasai, and others, each with its own language, customs, and social organization.',
        img: Grazing
    },
    {
        title: 'Political Organization',
        desc: 'Political systems varied, ranging from centralized monarchies to decentralized systems led by councils of elders. Some societies had chiefs or leaders who held authority, often based on lineage or prowess in war.',
        img: Grazing
    },
    {
        title: 'Economic Activities',
        desc: 'Agriculture was a crucial part of precolonial Kenyan society. People cultivated crops like maize, millet, sorghum, and yams. Livestock, including cattle, goats, and sheep, were also reared for food and as a symbol of wealth and status..',
        img: Grazing
    },
    {
        title: 'Religious Beliefs',
        desc: 'Traditional African religions were prevalent, characterized by beliefs in spirits, ancestor worship, and the presence of supernatural forces in nature. Religious practices varied among different ethnic groups.',
        img: Grazing
    },

    ]

    const cardsPerPage = 2;
    const totalCards = 4;
    const totalPages = Math.ceil(totalCards / cardsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const renderCard = () => {
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = Math.min(startIndex + cardsPerPage, totalCards);

        const cardsToShow = [];
        for (let i = startIndex; i < endIndex; i++) {
            cardsToShow.push(
                <article className={` ${i % 2 !== 0 ? 'pt-40 w-[40%]' : 'w-[50%] '}`}>

                    <PreCard
                        order={i % 2 === 0 ? '2' : ''}
                        title={items[i].title}
                        desc={items[i].desc}
                        img={items[i].img}
                    />
                </article>
            );
        }
        return cardsToShow;
    }

    return (
        <>
            <div className="section-body flex justify-between gap-10 margins">
                {renderCard()}
            </div>

            <div className={`pt-12 flex  justify-center`}>

                {
                    currentPage === 1 ?
                        <div className='w-fit'>
                            <button onClick={() => nextPage()} type='button' className='w-14 h-14 border rounded-full text-white text-sm'>NEXT</button>
                        </div>
                        :
                        <div>
                            <button onClick={() => prevPage()} type='button' className='w-14 h-14 border rounded-full text-white text-sm'>PREV</button>
                        </div>
                }


            </div>
        </>
    )
}

export default PreSection;