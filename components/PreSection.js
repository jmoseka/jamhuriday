import { useState } from "react";

import PreCard from '@/components/PreCard'

function PreSection() {

    const [currentPage, setCurrentPage] = useState(1);

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
                <article className='md:self-end section-body-content '>

                    <PreCard
                        order={i % 2 === 0 ? '2' : ''}
                        title={`Social Structures ${i}`}
                        desc='Several indigenous societies and kingdoms flourished, such as the Kikuyu, Kamba, Luo, Maasai, and many others. They had had well-defined social structures. Evidence of chiefs, elders, and councils for decision-making and conflict resolution can be found in historical accounts and oral traditions.'
                    />
                </article>
            );
        }
        return cardsToShow;
    }

    return (
        <>
            <div className="font-nunito section-body flex flex-col gap-20 md:gap-20 rounded-2xl ">
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