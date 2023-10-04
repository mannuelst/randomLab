const btn = document.querySelector('.btn')
btn.addEventListener('click', ()=>{
    let jX = document.querySelector('#jogadorX').value;
    let jO = document.querySelector('#jogadorO').value;

      let se=document.querySelector('#saida')
    if (jX.valu != ""&& jO.value != ""){
        se.textContent = "Tem"
    }
    else{
         se.textContent = "Pr";
    }
})