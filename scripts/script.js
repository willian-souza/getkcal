
const form = document.querySelector('form')
const close = document.querySelector('#modal .content a')
const modal = document.querySelector('#modal')
let data = document.querySelector('.data')
let result = document.querySelector('.result')

function formValidation(age,height,weight) {
    
    if(age <= 0 || age > 110 ){
        alert("Idade menor ou igual 0 ou muito acima da média. Digite uma idade válida")
         return false
     }else if(weight <= 0 || weight > 250){
        alert("Peso menor ou igual a 0 ou muito acima da média. Digite um peso válido")
        return false
    }else if(height <= 0 || height > 250){
        alert("Altura menor ou igual a 0 ou muito acima da média. Digite uma altura válida")
        return false
    }else{
        return true
    }
        
}


form.addEventListener("submit", function calc(){
    
    const gender = document.querySelectorAll('input[type=radio]')
    const age = Number(document.querySelector('#age').value)
    const weight = Number(document.querySelector('#weight').value)
    const height = Number(document.querySelector('#height').value)
    const activityLevel = Number(document.querySelector('#activity-level').value)
    
    
    if(formValidation(age,weight,height)){
        let tmb, maintenance, loseWeigth, gainWeigth, genderDescription   

            if(gender[0].checked ){
                genderDescription = "Masculino"
                tmb = (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
            }else{
                genderDescription = "Feminino"
                tmb = (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
            }
    
    maintenance = Math.round(tmb * activityLevel)
    loseWeigth = maintenance - 450
    gainWeigth = maintenance + 450
            
    console.log(tmb, maintenance, loseWeigth, gainWeigth)    

    let activity = document.querySelector('#activity-level')
    let option = activity.children[activity.selectedIndex]
    let activityDescription = option.textContent
    

    const finalData = `
        <h1>Dados informados</h1>
        <ul>
            <li> Sexo: <strong> ${genderDescription} </strong> <li>
            <li> Idade: <strong> ${age} anos </strong>  <li>
            <li> Peso: <strong> ${weight} KG </strong> <li>
            <li> Altura: <strong>${height} cm </strong> <li>
            <li> Nível de atividade: <strong>${activityDescription}</strong> <li>
        </ul>
    `
    const finalResult = `
    <h1>Resultado</h1>
    <ul>
        <li> Taxa de metabolismo basal: <strong>${tmb} calorias*</strong> <li>  
        <li> Quantidade de calorias para manter seu peso: <strong>${maintenance} calorias*</strong> <li>
        <li> Quantidade de calorias para perder peso: <strong>${loseWeigth} calorias*</strong> <li>
        <li> Quantidade de calorias para ganhar peso: <strong>${gainWeigth} calorias*</strong> <li>                                     
    </ul>
    <span>*Consumo diário
    `
     
    data.innerHTML = finalData
    result.innerHTML = finalResult
    
    modal.classList.remove("hide")
    }

    
    
         
}) 

close.addEventListener("click", () =>{
    modal.classList.add("hide")
    location.reload()
})




