import React, { useEffect, useState } from 'react'
import CourseList from '../features/courses/components/courseList/CourseList'
import { httpInterceptedService } from '../core/http-service'
import { useNavigate } from 'react-router-dom'


export default function Courses() {


  return (
    <div className='row'>
      <div className='col-12'>
        <div className='d-flex align-items-center justify-content-between mb-5'>
          <a className='btn btn-primary fw-bolder mt-n1' href="#">
            افزودن دوره جدید +
          </a>
        </div>
        <CourseList />
      </div>
    </div>
  )
}
export async function coursesLoader() {
  const response = await httpInterceptedService.get('/Course/list');
  return response.data;

}
