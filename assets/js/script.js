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

let multiplicar = (numero) =>{
    let num = numero;
    let res;
    let fac =1;
    for(let i=1;i <= num;i++){
       res= i*num;
       console.log(i,"x",num,"=",res);
    }
    for (let i = num; i>=1; i--){
        fac = i * fac;
    }
        console.log("El Factorial de", num, " es :",fac);
    
}




let n1 = validar();
multiplicar(n1);
