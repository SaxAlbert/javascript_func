const szam=2;
function valami(){

    console.log('');
}
valami();

function valami2(){
    return console.log(szam)
}

valami2();
/**
 * Deklarál lokális változót
 */
function valami3(){
    const num=23;
    return console.log(num)
}
valami3();

/**
 * 
 * @param {number} para 
 * @returns {number}
 */
function valami4(para){
    const x=22;
    const a=x+para
    return a
}

const r=valami4(1941)
console.log(r)