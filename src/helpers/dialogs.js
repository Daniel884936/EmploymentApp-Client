import Swal from 'sweetalert2'


export function stopLoadingDialog(){
    Swal.hideLoading();
}

export function startLoading(){
    Swal.showLoading();
}

export function infoDialog(title, text){
    Swal.fire({
        title,
        text,
        icon: 'info',
        allowOutsideClick: false
    })        
}

export function errorDialodg(title, text){
    Swal.fire({
        title,
        text,
        icon: 'error',
        allowOutsideClick: false
    })    
}

export function errorFromServerDialog(title, text,response){

    if(response.status === 409){
         Swal.fire({
        title: 'Error',
        text:response.data.errors[0],
        icon: 'error',
        allowOutsideClick: false
    })
    }
    else{
        errorDialodg(title, text)
    }   
}

export function successDialog(title, text){
    Swal.fire({
        title,
        text,
        icon: 'success',
        allowOutsideClick: false
    })       
}