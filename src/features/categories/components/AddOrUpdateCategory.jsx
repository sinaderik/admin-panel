import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { httpInterceptedService } from '../../../core/http-service'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useCategoryContext } from '../CategoryContext'


export default function AddOrUpdateCategory({ setShowAddCategory }) {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm()
    const { category, setCategory } = useCategoryContext()
    const navigate = useNavigate();

    useEffect(() => {
        setValue('name', category.name)
        setValue('id', category.id)
    }, [category])

    const onClose=()=>{
        setShowAddCategory(false)
        setCategory(null)
    }

    const onSubmit = (data) => {
        // setShowAddCategory(false)
        const response = httpInterceptedService.post(`/CourseCategory/`, data)
        toast.promise(response, {
            pending: "در حال ذخیره اطلاعات...",
            success: {
                render() {
                    const url = new URL(window.location.href)
                    navigate(url.pathname + url.search)
                    setCategory(null)
                    reset()
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
                            onClick={onClose}
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
