import React, { Suspense, useState } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { httpInterceptedService } from '../core/http-service'
import CategoryList from '../features/categories/components/CategoryList';
import Modal from "../components/Modal"
export default function CourseCategories() {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
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
            {(loadedCategories) => <CategoryList categories={loadedCategories} setShowDeleteModal={setShowDeleteModal} />}
          </Await>
        </Suspense>
      </div>
      <Modal isOpen={showDeleteModal} open={setShowDeleteModal} title="حذف" body="آیا از حذف این دسته اطمینان دارید ؟">
        <button
          className='btn btn-secondary fw-bolder'
          onClick={() => setShowDeleteModal(false)}
        >انصراف</button>
        
        <button className='btn btn-primary fw-bolder'>حذف</button>
      </Modal>
    </div>
  )
}

export async function categoriesLoader({ request }) {
  return defer({
    categories: loadCategories(request)
  })
}

export async function loadCategories(request) {

  // because we cannot use searchParams hook here to have accesss to query parameters 
  // we used this alternative method 
  const page = new URL(request.url).searchParams.get("page") || 1
  const pageSize = import.meta.env.VITE_PAGE_SIZE;
  let url = "/CourseCategory/sieve";
  url += `?page=${page}&pageSize=${pageSize}`;
  const response = await httpInterceptedService.get(url)
  return response.data

}