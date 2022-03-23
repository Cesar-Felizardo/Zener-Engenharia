
function linkWhats() {

    const yesNo = confirm("Você será redirecionado para o nosso whatsapp da Zener Engenharia.")
    if(yesNo == true) {
        
    } else {
       const ancora = document.getElementById("ancora")
       ancora.setAttribute("href","#")
       ancora.setAttribute("target","_self")
    }
}