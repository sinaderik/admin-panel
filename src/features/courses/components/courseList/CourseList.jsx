import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Course from '../course/Course';

export default function CourseList() {
    const loadedCourse = useLoaderData();

    return (
        <div className='row'>
           {
            loadedCourse.map((course)=>(
                <div className='col-3' key={course.id}>
                    <Course {...course}/>
                </div>
            ))
           }
        </div>
    )
}
