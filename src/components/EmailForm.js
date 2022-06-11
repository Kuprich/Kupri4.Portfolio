import emailjs from "@emailjs/browser"
import React from "react"
import { useRef } from "react"

const EmailForm = ({ formData, setformData }) => {
  const emailForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    setformData({ name: "", email: "", message: "" })

    emailjs
      .sendForm(
        "service_ki1***",
        "template_be92***",
        emailForm.current,
        "ZL8PuVUrXBeOsN***"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
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
          onChange={(e) => setformData({ ...formData, email: e.target.value })}
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
  )
}

export default EmailForm
