import React, { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { httpInterceptedService } from '../core/http-service'
import CategoryList from '../features/categories/components/CategoryList';

export default function CourseCategories() {
  const data = useLoaderData();

  return (
    <div className='row'>
      <div className='col-12'>
        <div className='d-flex align-items-center justify-content-between mb-5'>
          <a className='btn btn-primary fw-bolder mt-n1' href="#">
            افزودن دسته جدید +
          </a>
        </div>
        <Suspense fallback={<p className='text-info'>در حال دریافت اطلاعات...</p>}>
          <Await resolve={data.categories}>
            {(loadedCategories) => <CategoryList categories={loadedCategories} />}
          </Await>
        </Suspense>
      </div>
    </div>
  )
}

export async function categoriesLoader({ request }) {
  return defer({
    categories: loadCategories(request)
  })
}

export async function loadCategories(request) {

  const page = new URL(request.url).searchParams.get("page") || 1
  console.log(new URL(request.url))
  const pageSize = 3;
  let url = "/CourseCategory/sieve";
  url += `?page=${page}&pageSize=${pageSize}`;
  const response = await httpInterceptedService.get(url)
  
  return response.data
}