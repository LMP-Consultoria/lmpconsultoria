function changeNotification(type){
    let formNot = document.getElementById("form-notification");
    let formNotTxt = document.getElementById("form-notification-text");

    if(type == 0){
        // ocultar
        formNot.className = "form-notification";
        formNotTxt.innerText = "";
    } else if(type == 1){
        // enviando
        formNot.className = "form-notification form-notification-show form-notification-sending";
        formNotTxt.innerText = "Enviando formulário...";
    } else if(type == 2){
        // sucesso
        formNot.className = "form-notification form-notification-show form-notification-success";
        formNotTxt.innerText = "Formulário enviado!";
    } else if(type == 3){
        // error
        formNot.className = "form-notification form-notification-show form-notification-error";
        formNotTxt.innerText = "Ocorreu um erro ao enviar o formulário!";
    }
}

let contactForm = document.getElementById("contact-form");
console.log(contactForm);

let submiting = false;
contactForm.onsubmit = (ev) => {
    if(submiting == false){

        try{
            changeNotification(1);
            submiting = true;
            let fnome = document.getElementById("fnome").value;
            let fcpf = document.getElementById("fcpf").value;
            let ftelefone = document.getElementById("ftelefone").value;
            let femail = document.getElementById("femail").value;
            let fmensagem = document.getElementById("fmensagem").value;
        
            var xhr = new XMLHttpRequest();
            //https://back.lmpconsultoria.tk/internalform.php
            xhr.open('POST', 'https://lmp-consultoria.000webhostapp.com/internalform.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onload = function () {
                // do something to response
                let returned = this.responseText;
                console.log(returned);
                if(returned.includes('success')){
                    changeNotification(2);
                } else {
                    changeNotification(3);
                    submiting = false;                
                }
            };
            let finalStr = "";
            finalStr += 'fnome=' + fnome + '&';
            finalStr += 'fcpf=' + fcpf + '&';
            finalStr += 'ftelefone=' + ftelefone + '&';
            finalStr += 'femail=' + femail + '&';
            finalStr += 'fmensagem=' + fmensagem;
            xhr.send(finalStr);
        } catch(ex) {
            console.log(ex);
            submiting = false;
            changeNotification(0);
        }
    }

    return false;
}