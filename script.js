const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener("change", save)


function add(){

    const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists){
    alert("๐ด Dia jรก incluso ๐ด")
    return
    }
    alert("โ Dia Incluido com Sucesso โ")
    nlwSetup.addDay(today)
}

function save(){
    localStorage.setItem('NLWStetup@habits', JSON.stringify(nlwSetup.data))
    
}


const data = JSON.parse(localStorage.getItem('NLWStetup@habits')) || {}
nlwSetup.setData(data) 
nlwSetup.load()
