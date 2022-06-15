import { Alert } from "bootstrap"
import React from "react"
import { ToastContainer } from "react-toastify"

const MailSendingAlert = ({
  isShowSendingAlert,
  setIsShowSendingAlert,
  isSuccessfullySent,
}) => {
  return (
    <div>
      {isShowSendingAlert && (
        <div>
          {isSuccessfullySent ? (
            <div class="alert alert-success alert-dismissible" role="alert">
              Успешно отправлено
            </div>
          ) : (
            <div>Ошибка при оправке</div>
          )}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <ToastContainer />
        </div>
      )}
    </div>
  )
}

export default MailSendingAlert
