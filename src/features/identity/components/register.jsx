import React from 'react'
import logo from "@assets/images/logo.svg";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function Register() {
  const { register, watch, handleSubmit, formState: { errors } } = useForm()

  function onSubmit(formData) {
    console.log(formData)
  }

  return (
    <>

      <div className="text-center mt-4">
        <img src={logo} style={{ height: "100px" }} />
        <h1 className="h2">پلتفرم آموزش آنلاین</h1>
        <p className="lead">
          جهت استفاده از ویژگی های پلتفرم آموزشی ثبت نام کنید
        </p>
        <p className="lead">
          قبلا ثبت نام کرده اید؟
          <Link to="/login" className="me-2">وارد شوید</Link>
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">موبایل</label>
                <input
                  {...register("mobile", {
                    required: "شماره موبایل الزامی است",
                    minLength: 11,
                    maxLength: 11
                  })}
                  className={`form-control form-control-lg ${errors.mobile && "is-invalid"}`} />
                {
                  errors.mobile && errors.mobile.type === "required" && (
                    <p className='text-danger fw-bolder small mt-1'>
                      {errors.mobile?.message}
                    </p>
                  )
                }
                {
                  errors.mobile && (errors.mobile.type === "minLength" ||
                    errors.mobile.type === "maxLength") &&
                  (
                    <p className='text-danger fw-bolder small mt-1'>
                      "موبایل باید 11 رقم باشد"
                    </p>
                  )
                }
              </div>
              <div className="mb-3">
                <label className="form-label">رمز عبور</label>
                <input
                  {...register("password", {
                    minLength:6,
                    required: "پسورد الزامی است"
                  })}
                  className={`form-control form-control-lg mb-2 ${errors.password && "is-invalid"}`}
                  type="password"
                />
                 {
                  errors.password && (errors.password.type === "minLength") &&
                  (
                    <p className='text-danger fw-bolder small mt-1'>
                      پسورد حداقل باید 6 رقم باشد
                    </p>
                  )
                }
                {
                  errors.password && errors.password.type === "required" && (
                    <p className='text-danger fw-bolder small mt-1'>
                      {errors.password?.message}
                    </p>
                  )
                }
              </div>
              <div className="mb-3">
                <label className="form-label">تکرار رمز عبور</label>
                <input
                  {...register("confirmPassword", {
                    required: "تکرار پسورد الزامی است",
                    validate: value => {
                      if (watch("password") !== value) {
                        return "رمز وارد شده تطابق ندارد"
                      }
                    }
                  })}
                  className={`form-control form-control-lg mb-2 ${errors.confirmPassword && "is-invalid"}`}
                  type="password"
                />
                 {
                  errors.confirmPassword && errors.confirmPassword.type === "required" && (
                    <p className='text-danger fw-bolder small mt-1'>
                      {errors.confirmPassword?.message}
                    </p>
                  )
                }
                {
                  errors.confirmPassword && 
                  errors.confirmPassword.type==="validate" &&(
                    <p className='text-danger fw-bolder small mt-1'>
                      {errors.confirmPassword?.message}
                    </p>
                  )
                }
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-lg btn-primary">
                  ثبت نام کنید
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}
