let links = document.querySelector(".links")

//all data
var menu = ['features', 'enterprise', 'support', 'pricing']
const plans = [
    {
        id: 1,
        type: 'free',
        amount: 0,
        user: 10,
        storage: 2,
        support: 'email',
        paid: false,
    },
    {
        id: 2,
        type: 'pro',
        amount: 15,
        user: 20,
        storage: 10,
        support: 'priority email',
        paid: true,
    },
    {
        id: 3,
        type: 'Enterprise',
        amount: 29,
        user: 30,
        storage: 15,
        support: 'phone and email',
        paid: true,
    }
]

const features = ['Cool stuff',
    'Random feature',
    'Team feature',
    'Stuff for developers',
    'Another one',
    'Last time']
const Resources = [
    'Resource',
    'Resource name',
    'Another resource',
    'Final resource'
]
const about = [
    'Team',
    'Locations',
    'Privacy',
    'Terms'
]

//handel navbar
menu.map((el, id) => {
    let a = document.createElement('a')
    a.innerText = el[0].toUpperCase() + el.substring(1)
    a.setAttribute('href', '#')
    if (id === 3) {

        a.setAttribute('class', 'pricing')
    }
    links.append(a)

})

//handel modal function
var modal = document.getElementById("modal")
var pricing = document.querySelector(".pricing")
var modalclosebtn = document.querySelector(".modal_close_button")

function openModal() {
    modal.style.display = 'block';
}
function closeModal() {
    modal.style.display = 'none';
}
pricing.addEventListener("click", openModal)
modalclosebtn.addEventListener('click', closeModal)
let html = document.querySelector('html')
window.addEventListener('click', function (event) {
    if (event.target === html) {
        closeModal();
    }
});

//handel form submission
let form = document.querySelector('#details')

function submit(e) {
    let fullname = document.querySelector('.name')
    let email = document.querySelector('.email')
    let comment = document.querySelector('.comments')
    let details = {
        name: null,
        email: null,
        comment: null
    }

    details.name = fullname.value
    details.email = email.value
    details.comment = comment.value
    console.log(details)
    fullname.value = ""
    email.value = ""
    comment.value = ""

}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    submit(e)
})


//plan cards

let container = document.querySelector('.plan-container')

plans.map((el, id) => {
    let card = document.createElement('div')
    card.setAttribute('class', 'card')
    let type = document.createElement('div')
    let ptype = document.createElement('p')
    ptype.innerText = el.type[0].toUpperCase() + el.type.substring(1)
    ptype.setAttribute('class', 'plan-type')
    let price = document.createElement('p')
    price.textContent = '$ ' + el.amount
    price.setAttribute('class', 'price')
    let span = document.createElement('span')
    span.textContent = ' / mo'

    let ul = document.createElement('ul')
    let li1 = document.createElement('li')
    li1.textContent = `${el.user} users included`
    let li2 = document.createElement('li')
    li2.textContent = `${el.storage} GB of storage`
    let li3 = document.createElement('li')
    li3.textContent = `${el.support[0].toUpperCase() + el.support.substring(1)} support`
    let li4 = document.createElement('li')
    li4.textContent = `Help center access`


    ul.append(li1, li2, li3, li4)

    let btn = document.createElement('button')
    btn.textContent = el.paid === true ? 'Get Started' : 'Sign up for Free'
    btn.addEventListener('click',openModal)
    price.append(span)

    type.append(ptype)
    card.append(type, price, ul, btn)
    container.append(card)
})


//footer
let footer=document.querySelector('.footerlist')
function footerset(data,heading){
    let div=document.createElement('div')
    let h=document.createElement('h1')
        h.textContent=heading
        h.setAttribute('class','footerlist-heading')
    let ul=document.createElement('ul')  
    data.map((el,id)=>{
        let li=document.createElement('li')
        let a=document.createElement('a')
        a.setAttribute('href','#')
        a.textContent=el
        li.append(a)
        ul.append(li)
    })
    div.append(h,ul)
    footer.append(div)
}

footerset(features,'Features')
footerset(Resources,'Resources')
footerset(about,'about')


//number of users select

let range=document.querySelector('.range')
let count=document.querySelector('.count')
let cards=document.querySelectorAll('.card')
range.addEventListener('change',()=>{
    let value=parseInt(range.value)
    if(value===30){
        count.innerText='30 & above'
    }else{
    count.innerText=range.value
    }
   cards.forEach((el,id)=>{
    el.classList.remove('highlighting')
    if(value>20 && id===2){
        el.classList.add('highlighting')
    }else if(value>10 && value<21 && id===1){
        el.classList.add('highlighting')
    }else{
        if(value<=10 && value>0 && id===0){
            el.classList.add('highlighting')
        }
    }

   })
 
    
})




