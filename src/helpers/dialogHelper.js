import Swal from 'sweetalert2'


export function stopLoadingDialog(){
    Swal.hideLoading();
}

export function startLoading(){
    Swal.showLoading();
}

export function fireInfoDialog(title, text){
    Swal.fire({
        title,
        text,
        icon: 'info',
        allowOutsideClick: false
    })        
}

export function fireErrorDialodg(title, text){
    Swal.fire({
        title,
        text,
        icon: 'error',
        allowOutsideClick: false
    })    
}

export function fireErrorFromServerDialog(title, text,response){

    if(response.status === 409){
         Swal.fire({
        title: 'Error',
        text:response.data.errors[0],
        icon: 'error',
        allowOutsideClick: false
    })
    }
    else{
        fireErrorDialodg(title, text)
    }   
}

export function fireSuccessDialog(title, text){
    Swal.fire({
        title,
        text,
        icon: 'success',
        allowOutsideClick: false
    })       
}