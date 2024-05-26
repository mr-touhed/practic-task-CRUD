import swal from 'sweetalert';

export const checkConfirm = (callback,obj={}) =>{

    const {title,text} = obj
    swal({
        title: title || 'Are you sure?',
        text: text || 'Are you sure that you want to leave this page?',
        icon: "warning",
        dangerMode: true,
      })
      .then(willDelete => {
        if (willDelete) {
            
         
          callback()
          swal("success!", "Your Work has been saved!", "success");
        }
      });
}