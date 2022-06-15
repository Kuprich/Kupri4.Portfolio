import emailjs from "@emailjs/browser"
import React, { useState } from "react"
import { useRef } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const EmailForm = ({ setShowEmailForm, formData, setformData }) => {
  const emailForm = useRef()

  const succeessSendToast = () => toast.success("Письмо успешно отправлено!")
  const erorSendToast = () => toast.error("Ошибка при отправке письма!")

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_ki1***",
        "template_be92***",
        emailForm.current,
        "ZL8PuVUrXBeOsN***"
      )
      .then(
        (result) => {
          setformData({ name: "", email: "", message: "" })
          succeessSendToast()
          setShowEmailForm(false)
        },
        (error) => {
          erorSendToast()
          setShowEmailForm(false)
        }
      )
  }
  return (
    <div>
      <form className="email-form" onSubmit={sendEmail} ref={emailForm}>
        <div className="email-form__name email-form__control">
          <label htmlFor="from_name">Ваше Имя:</label>
          <input
            type="text"
            name="from_name"
            value={formData.name}
            onChange={(e) => setformData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="email-form__email email-form__control">
          <label htmlFor="reply_to">Ваш Email адрес:</label>
          <input
            type="email"
            name="reply_to"
            value={formData.email}
            onChange={(e) =>
              setformData({ ...formData, email: e.target.value })
            }
          />
          <span className="input_descr">
            Заполняя поле "Email", вы обеспечиваете обратную связь
          </span>
        </div>
        <div className="email-form__message email-form__control">
          <label htmlFor="message">Текст сообщения:</label>
          <textarea
            type="text"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setformData({ ...formData, message: e.target.value })
            }
          ></textarea>
        </div>
        <button type="submit" className="button button_lightBkg">
          Отправить
        </button>
      </form>
    </div>
  )
}

export default EmailForm
