function sendMail(e){
    e.preventDefault()
    console.log("aaaaaa");
    
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    }

const serviceID="service_tfzrgmc";
const templateID="template_p8arc2j";
emailjs.send(serviceID,templateID,params)
.then(
res =>{
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
    console.log(res);
    alert("your message sent successfully")
})
.catch(err=>console.log(err));

}