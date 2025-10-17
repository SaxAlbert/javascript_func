
//console.log('Írni kell valamit')
/**
 * @type {string}
 */
/*
const a='Szia!'
const b=["1","2","3"]
for(let i=0;i<b.length;i++){
    console.log(b[i])
}
for(const c of b){
    console.log(c)
}
for(const key in b){
    console.log(`${key}: ${b[key]}`);
}*/
/**
 * @type {{name:string, age:number}}
 *//*
const y={
    name:'Hans',
    age:18
}
for(const key in y){
    console.log(`${key}: ${y[key]}`)
}
*/

/**
 * @type {{name:string, kor:string, szerelmek1:string, szerelmek2:string}}
 */
const arr=[
    {
        name: 'Balassi Bálint',
        kor: 'reformáció',
        szerelmek1: 'Losonczy Anna',
        szerelmek2: 'Dobó Krisztina'
    },
    {
        name: 'Csokonai Vitéz Mihály',
        kor: 'felvilágosodás',
        szerelmek1: 'Vajda Juliána'
    },
    {
        name: 'Petőfi Sándor',
        kor: 'magyar romantika',
        szerelmek1: 'Mednyánszky Berta',
        szerelmek2: 'Szendrey Júlia'
    },
    {
        name: 'Ady Endre',
        kor: '20.század',
        szerelmek1: 'Léda',
        szerelmek2: 'Csinszka'
    },
]
const table=document.createElement('table')
document.body.appendChild(table)

const thead=document.createElement('thead')
table.appendChild(thead)

const tr=document.createElement('tr')
thead.appendChild(tr)

const th1=document.createElement('th')
const th2=document.createElement('th')
const th3=document.createElement('th')

th1.innerText='Szerző neve'
th2.innerText='Korszak'
th3.innerText='Szerelmek'
th3.colSpan=2

tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)

const tbody=document.createElement('tbody')
table.appendChild(tbody)

for(const key of arr){
    const tr=document.createElement('tr')
    tbody.appendChild(tr)

    const td1=document.createElement('td')
    const td2=document.createElement('td')
    const td3=document.createElement('td')
    const td4=document.createElement('td')

    td1.innerText=key.name
    td2.innerText=key.kor
    td3.innerText=key.szerelmek1

    if(key.szerelmek2===undefined){
        td3.colSpan=2
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
    }
    else{
        td4.innerText=key.szerelmek2

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
    }
}
/**
 * 
 * @param {string} celltype 
 * @param {string} cellcontent 
 * @param {HTMLTableRowElement} parentrow 
 */
function createCell(celltype,cellcontent,parentrow){
    const a=document.createElement(celltype)
    a.innerText=cellcontent
    parentrow.appendChild(a)
}