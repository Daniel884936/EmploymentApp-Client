import Swal from "sweetalert2";

const ERROR_ICON ="error"
const SUCCESS_ICON ="success"

const Toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

export function fireSuccessToast(title){    

      Toast.fire({
        icon: SUCCESS_ICON,
        title: title
      })
}

export function fireErrorToast(title){
    Toast.fire({
        icon: ERROR_ICON,
        title: title
      })
}