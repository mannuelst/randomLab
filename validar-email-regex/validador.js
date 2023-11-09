/*EXEMPLOS DE BI's
001668196ho032
001668196LA033
001668243LS037
 */
const padraoBI = /^0{2}\d{7}[a-zA-Z]{2}0\d{2}/

function validarBI(numBI){
    return padraoBI.test(numBI)?"Bilhete válido\n":"Bilhete inválido\n";

}

const padraoEMAIL = /^[\w.-]+@[\w-.]+\.[a-zA-Z0-9]{2,}/