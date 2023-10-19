





let numberOne 
let numberTwo

numberOne = Number(prompt(`Digite o primeiro numero: `))
numberTwo = Number(prompt(`Digite o segundo numero: `))

// function sum(numberOne,numberTwo){
//   return numberOne + numberTwo
// }


let sum = numberOne + numberTwo
let subtraction = numberOne - numberTwo
let multiplication = numberOne * numberTwo
let division = (numberOne / numberTwo).toFixed(2)
let remainder = numberOne % numberTwo
// let igual = numberOne == numberTwo

alert(`A soma dos dois numeros é ${sum}`)
alert(`A subtração dos dois numeros é ${subtraction}`)
alert(`A multiplicação dos dois numeros é ${multiplication}`)
alert(`A divisão dos dois numeros é ${division}`)
alert(`A resto da divisão é ${remainder}`)
// alert(igual)

if (numberOne == numberTwo){
  alert('Numeros inseridos iguais')
}else {
  alert(`Numeros diferentes`)
}

if(sum % 2 == 0){
  alert('A soma é par')
}else{
  alert('A soma é impar')
}