function calcular(event) {
    event.preventDefault();

    let valor = document.getElementById('valor').value;
    let ptService = document.getElementById('service').value;
    let pessoas = document.getElementById('qntPessoas').value;
    if(valor == "" || ptService == 0){
        alert("Por favor, preencha os valores");
        return;
    }
    if( pessoas <=1|| pessoas == " "){
        pessoas = 1;
        document.getElementById('each').style.display = "none";  
        } else{
            document.getElementById('each').style.display = "block";
        }
    let total =((valor*ptService)/pessoas);
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML=total;
    document.getElementById('total').style.display = "block";
}
document.getElementById('total').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('gorjetaForm').addEventListener("submit", calcular);