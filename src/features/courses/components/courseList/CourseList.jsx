import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function CourseList() {
    const loadedCourse = useLoaderData();

    return (
        <div className='row'>
           {
            loadedCourse.map((course)=>(
                <div className='col-3' key={course.id}>
                    course
                </div>
            ))
           }
        </div>
    )
}
