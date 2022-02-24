let validar = () =>{
    let num;
    let val;
    alert(`Desafio Multiplicacion`)
    do{
        num = prompt("Por favor Ingrese un numero entre 1 y 20");
        num = parseInt(num);
        if (num <1 || num >20){
            val = 0;
            alert(`Numero ingresado fuera del rango, vuelva a reingresar`)
        }else{
            val = 1;
        }
    }while (val == 0)
    return num;
    
}

let multi = ()


let n1 = validar()

console.log(validar())