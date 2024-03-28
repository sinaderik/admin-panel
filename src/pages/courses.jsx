import React, { Suspense, useEffect, useState } from 'react'
import CourseList from '../features/courses/components/courseList/CourseList'
import { httpInterceptedService } from '../core/http-service'
import { Await, defer, useLoaderData, useNavigate } from 'react-router-dom'


export default function Courses() {
  const data = useLoaderData();

  return (
    <div className='row'>
      <div className='col-12'>
        <div className='d-flex align-items-center justify-content-between mb-5'>
          <a className='btn btn-primary fw-bolder mt-n1' href="#">
            افزودن دوره جدید +
          </a>
        </div>
        <Suspense fallback={<p className='text-info'>در حال دریافت اطلاعات...</p>}>
          <Await resolve={data.courses}>
            {(loadedCourses) => <CourseList courses={loadedCourses} />}
          </Await>
        </Suspense>
      </div>
    </div>
  )
}
export async function coursesLoader() {
  return defer({
    courses: loadCourses()
  })
}
async function loadCourses() {
  const response = await httpInterceptedService.get('/Course/list');
  return response.data;
}