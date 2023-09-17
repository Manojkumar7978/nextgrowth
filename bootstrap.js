let links=document.querySelector(".links")

//all data
var menu=['features','enterprise','support','pricing']
const plans=[
    {
        id:1,
        type:'free',
        amount:0,
        user:10,
        storage:2,
        support:'email',
        paid:false,
    },
    {
        id:2,
        type:'pro',
        amount:15,
        user:20,
        storage:10,
        support:'priority email',
        paid:true,
    },
    {
        id:3,
        type:'Enterprise',
        amount:29,
        user:30,
        storage:15,
        support:'phone and email',
        paid:true,
    }
]

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
pricing.addEventListener("click",openModal)
modalclosebtn.addEventListener('click',closeModal)
let html=document.querySelector('html')
window.addEventListener('click', function(event) {
    if (event.target === html) {
        closeModal();
    }
});

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


//plan cards

let container=document.querySelector('.plan-container')

plans.map((el,id)=>{
    let card=document.createElement('div')
    let type=document.createElement('div')
    let ptype=document.createElement('p')
    ptype.innerText=el.type.toUpperCase()
    ptype.setAttribute('class','plan-type')
    let price=document.createElement('p')
    price.textContent= '$ '+el.amount
    let span=document.createElement('span')
    span.textContent=' / mo'

    let desc=document.createElement('a')
    desc.textContent=`${el.user} users included ${el.storage} GB of storage ${el.support[0].toUpperCase()+el.support.substring(1)} support Help center access`

    let btn=document.createElement('button')
    btn.textContent=el.paid===true ? 'Get Started'  : 'Sign up for Free'

    price.append(span)

    type.append(ptype)
    card.append(type,price,desc,btn)
    container.append(card)
})






