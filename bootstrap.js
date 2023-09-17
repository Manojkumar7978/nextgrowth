let links=document.querySelector(".links")
var menu=['features','enterprise','support','pricing']

//handel navbar
menu.map((el,id)=>{
    let a=document.createElement('a')
    a.innerText=el[0].toUpperCase()+el.substring(1)
    a.setAttribute('href','#')
    if(id===3){
      
        a.setAttribute('class','pricing')
    }
    links.append(a)   
    
})

//handel modal function
var modal=document.getElementById("modal")
var pricing=document.querySelector(".pricing")
var modalclosebtn=document.querySelector(".modal_close_button")

function openModal() {
    modal.style.display = 'block';
}
function closeModal() {
    modal.style.display = 'none';
}
console.log(pricing)
pricing.addEventListener("click",openModal)
modalclosebtn.addEventListener('click',closeModal)

//handel form submission
let form=document.querySelector('#details')

function submit(e){
    let fullname=document.querySelector('.name')
let email=document.querySelector('.email')
let comment=document.querySelector('.comments')
    let details={
            name:null,
            email:null,
            comment:null
        }

        details.name=fullname.value
        details.email=email.value
        details.comment=comment.value
        console.log(details)
        fullname.value=""
        email.value=""
        comment.value=""

}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    submit(e)
})






