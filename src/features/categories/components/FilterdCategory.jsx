import React from 'react'
import { useCategoryContext } from '../CategoryContext'

export default function FilterdCategory({serchedItems,data}) {
    const { setCategory} = useCategoryContext()

    const foundedItems = data.filter(category => {
        // console.log(category)
        return category.name.toLowerCase().includes(serchedItems.toLowerCase())
    })

    console.log(foundedItems)
    {
        foundedItems.map(category => {
            return (
                <tr key={category.id}>
                    <td>{category.name}</td>
                    <td className='table-action'>
                        <a href="#" onClick={() => setCategory(category)} className='ms-3'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="feather feather-edit-2 align-middle"
                            >
                                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                            </svg>
                        </a>
                        <a onClick={() => deleteCategory(category.id)} href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="feather feather-trash align-middle"
                            >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                        </a>
                    </td>
                </tr>
            )
        })
    }
}
