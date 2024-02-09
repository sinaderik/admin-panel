import React, { useEffect } from 'react'
import logo from "@assets/images/logo.svg";
import { Link, useActionData, useNavigate, useNavigation, useRouteError, useSubmit } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { httpService } from '../../../core/http-service';
import { useTranslation } from 'react-i18next';


export default function Register() {

  const { register, watch, handleSubmit, formState: { errors } } = useForm();
  const submitForm = useSubmit();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle"
  const isSuccessOperation = useActionData();
  const navigate = useNavigate();
  const routeErrors = useRouteError();
  const { t } = useTranslation();

  useEffect(() => {
    if (isSuccessOperation) {
      setTimeout(() => {
        navigate("/login")
      }, 2000);
    }
  }, [isSuccessOperation])

  function onSubmit(formData) {
    const { confirmPassword, ...userData } = formData
    submitForm(userData, { method: "POST" })
  }

  return (
    <>

      <div className="text-center mt-4">
        <img src={logo} style={{ height: "100px" }} />
        <h1 className="h2">{t('register.title')}</h1>
        <p className="lead">
          {t('register.introMessage')}
        </p>
        <p className="lead">
          {t("register.alreadyRegistered")}
          <Link to="/login" className="me-2">
            {t("register.signin")}
          </Link>
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">{t("register.mobile")}</label>
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
                      {t("register.validation.mobileRequired")}
                    </p>
                  )
                }
                {
                  errors.mobile && (errors.mobile.type === "minLength" ||
                    errors.mobile.type === "maxLength") &&
                  (
                    <p className='text-danger fw-bolder small mt-1'>
                      {t("register.validation.mobileLength")}
                    </p>
                  )
                }
              </div>
              <div className="mb-3">
                <label className="form-label">{t("register.password")}</label>
                <input
                  {...register("password", {
                    minLength: 6,
                    required: "پسورد الزامی است"
                  })}
                  className={`form-control form-control-lg mb-2 ${errors.password && "is-invalid"}`}
                  type="password"
                />
                {
                  errors.password && (errors.password.type === "minLength") &&
                  (
                    <p className='text-danger fw-bolder small mt-1'>
                      {t("register.validation.passwordRequired")}
                    </p>
                  )
                }
                {
                  errors.password && errors.password.type === "required" && (
                    <p className='text-danger fw-bolder small mt-1'>
                      {t("register.validation.passwordRequired")}
                    </p>
                  )
                }
              </div>
              <div className="mb-3">
                <label className="form-label">{t("register.repeatPassword")}</label>
                <input
                  {...register("confirmPassword", {
                    required: "تکرار پسورد الزامی است",
                    validate: value => {
                      if (watch("password") !== value) {
                        return t("register.validation.notMatching");
                      }
                    }
                  })}
                  className={`form-control form-control-lg mb-2 ${errors.confirmPassword && "is-invalid"}`}
                  type="password"
                />
                {
                  errors.confirmPassword && errors.confirmPassword.type === "required" && (
                    <p className='text-danger fw-bolder small mt-1'>
                      {t("register.validation.repeatPasswordRequired")}
                    </p>
                  )
                }
                {
                  errors.confirmPassword &&
                  errors.confirmPassword.type === "validate" && (
                    <p className='text-danger fw-bolder small mt-1'>
                      {errors.confirmPassword?.message}
                    </p>
                  )
                }
              </div>
              <div className="text-center mt-3">
                <button type="submit" disabled={isSubmitting} className="btn btn-lg btn-primary">
                  {/* {isSubmitting ? "در حال انجام عملیات" : "ثبت نام کنید"} */}
                  {t('register.register')}
                </button>
              </div>
              {
                isSuccessOperation && (
                  <div className='alert alert-success text-success p-2 mt-2'>
                    {t("register.successOperation")}
                  </div>
                )
              }
              {
                routeErrors && (
                  <div className='alert alert-danger text-danger p-2 mt-2'>
                    {
                      routeErrors.response?.data.map(error => (
                        <p className='mb-0'> {t(`register.validation.${error.code}`)}</p>
                      ))
                    }
                  </div>
                )
              }
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export async function registerAction({ request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const response = await httpService.post('/Users', data)
  return response.status === 200
}


