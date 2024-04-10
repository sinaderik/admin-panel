import React from 'react'
import _ from "lodash";
import { useSearchParams } from 'react-router-dom';

export default function Pagination({ totalRecords, pageSize = import.meta.env.VITE_PAGE_SIZE }) {

    const pages = Math.ceil(totalRecords / pageSize)
    // this hook will give us access to the query parameters in the url
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = +searchParams.get('page') || 1

    function previousPage() {
        if (currentPage > 1) {
            setSearchParams({ page: currentPage - 1 })
        }
    }

    function nextPage() {
        if (currentPage < pages) {
            setSearchParams({ page: currentPage + 1 })
        }
    }

    return (
        <nav>
            <ul className='pagination pagination-lg'>
                <li onClick={previousPage} className={`page-item ${currentPage === 1 ? 'disabled opacity-50' : ''}`}>
                    <a className='page-link'>قبلی</a>
                </li>
                {
                    _.times(pages, index => (
                        <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={`page${index + 1}`}>
                            <a
                                className='page-link'
                                onClick={() => setSearchParams({ page: index + 1 })}
                            >{index + 1}</a>
                        </li>
                    ))
                }
                <li onClick={nextPage} className={`page-item ${currentPage === pages ? 'disabled opacity-50' : ''}`}>
                    <a className='page-link'>بعدی</a>
                </li>
            </ul>
        </nav >
    )
}
