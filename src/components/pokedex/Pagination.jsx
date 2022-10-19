import React from 'react'
import './styles/pagination.css'

const Pagination = ({ page, pagesLength, setPage }) => {

    const pagesPerBlock = 8
    const currenBlock = Math.ceil(page / pagesPerBlock)
    const blockLength = Math.ceil(pagesLength / pagesPerBlock)

    const arrPages = []
    const initialPage = (currenBlock - 1) * pagesPerBlock + 1
    const limitPage = blockLength === currenBlock ? pagesLength : currenBlock * pagesPerBlock


    for (let i = initialPage; i <= limitPage; i++) {
        arrPages.push(i)
    }

    const handlePrev = () => {
        setPage(page - 1)
    }
    const handlenext = () => {
        setPage(page + 1)
    }
    const handlePage = (currenPage) => {
        setPage(currenPage)
    }

    return (
        <div className='pagination'>
            {
                page > 1 &&
                <div onClick={handlePrev} className='pagination__prev pagination__active'>&#60;</div>
            }
            <div className='pagination__prev--block'>...</div>
            <ul className='pagination__container'>
                {
                    arrPages.map(e => (
                        <li
                            onClick={() => handlePage(e)}
                            className={`pagination__page ${page === e && 'pagination__active'}`}
                            key={e}>{e}</li>
                    ))
                }
            </ul>
            <div className='pagination__next--block'>...</div>
            {
                page < pagesLength && 
                <div div onClick={handlenext} className='pagination__next pagination__active'>&#62;</div>
            }
        </div >
    )
}

export default Pagination