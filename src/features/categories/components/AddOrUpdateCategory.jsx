import React from 'react'
import { useForm } from 'react-hook-form'
import { httpInterceptedService } from '../../../core/http-service'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


export default function AddOrUpdateCategory({ setShowAddCategory }) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate();

    const onSubmit = (data) => {
        setShowAddCategory(false)
        const response = httpInterceptedService.post(`/CourseCategory/`, data)
        toast.promise(response, {
            pending: "در حال ذخیره اطلاعات...",
            success: {
                render() {
                    const url = new URL(window.location.href)
                    navigate(url.pathname + url.search)
                    return 'عملیات با موفقیت انجام شد'
                }
            },
            error: {
                render() {
                    return 'عملیات با شکست مواجه شد'
                }
            }
        })
    }

    return (
        <div className='card'>
            <div className='card-body'>
                <form className='mb-4' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className='form-label'>نام</label>
                        <input
                            type="text"
                            className={`form-control form-control-lg ${errors.name && 'is-invalid'}`}
                            {...register('name', { required: true })}
                        />
                        {errors.name && errors.name.type === "required" && (
                            <p className='text-danger small fw-bolder mt-1'>
                                نام الزامی است
                            </p>
                        )}
                    </div>
                    <div className='text-start mt-3'>
                        <button
                            type='button'
                            className="btn btn-lg btn-secondary ms-2"
                            onClick={() => setShowAddCategory(false)}
                        >
                            بستن
                        </button>
                        <button
                            type='submit'
                            className="btn btn-lg btn-primary ms-2"
                        >
                            ثبت تغییرات
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
