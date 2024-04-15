import React from 'react'
import { useCategoryContext } from '../CategoryContext'

export default function SearchCategory({setShowSearch}) {

    const { setSearchedItems } = useCategoryContext()

    return (
        <div className='card'>
            <div className='card-body'>
                <form className='mb-4'>
                    <div>
                        <input
                            type="text"
                            className={`form-control form-control-lg`}
                            placeholder='نام دسته مورد نظر را وارد کنید...'
                            onChange={(e) => setSearchedItems(e.target.value)}
                            autoFocus
                        />

                    </div>
                    <div className='text-start mt-3'>
                        <button
                            type='button'
                            className="btn btn-lg btn-secondary ms-2"
                            onClick={()=>setShowSearch(false)}
                        >
                            بستن
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
