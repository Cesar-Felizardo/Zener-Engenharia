
function linkWhats() {

    const yesNo = confirm("Você será redirecionado para nosso whatsapp.")
    if(yesNo == true) {
        
    } else {
       const ancora = document.getElementById("ancora")
       ancora.setAttribute("href","index.html")
       ancora.setAttribute("target","_self")
    }
}