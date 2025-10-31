
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



    if(key.szerelmek2===undefined){
        createCell('td',key.name,tr)
        createCell('td',key.kor,tr)
        createCell('td',key.szerelmek1,tr).colSpan=2
        
    }
    else{
        createCell('td',key.name,tr)
        createCell('td',key.kor,tr)
        createCell('td',key.szerelmek1,tr)
        createCell('td',key.szerelmek2,tr)
    }
}
/** 
 * @param {string} celltype 
 * @param {string} cellcontent 
 * @param {HTMLTableRowElement} parentrow 
 * @returns {HTMLTableCellElement}
 */
function createCell(celltype,cellcontent,parentrow){
    const a=document.createElement(celltype)
    a.innerText=cellcontent
    parentrow.appendChild(a)

    return a
}


const form_arr=[
    {
        for: 'kolto_nev',
        text: 'Költő neve:',
        input_type: 'text',
        input_id: 'kolto_nev',
        input_nev: 'kolto_nev'
    },
    {
        for: 'korszak',
        text: 'Korszak:',
        input_type: 'text',
        input_id: 'korszak',
        input_nev: 'korszak'
    },
    {
        for: 'szerelem1',
        text: 'Szerelme:',
        input_type: 'text',
        input_id: 'szerelem1',
        input_nev: 'szerelem1'
    },
    {
        for: 'szerelem2',
        text: 'Szerelme:',
        input_type: 'text',
        input_id: 'szerelem2',
        input_nev: 'szerelem2'
    }
];
/**
 * 
 * @param {string} content1 
 * @param {string} content2 
 */
function lable_form(content1,content2){
    const b=document.createElement('label')
    b.for=content1
    b.innerText=content2
    form.appendChild(b)
}
/**
 * 
 * @param {string} type 
 * @param {string} id 
 * @param {string} nev 
 */
function input_form(type,id,nev){
    const c=document.createElement('input')
    c.type=type
    c.id=id
    c.name=nev
    form.appendChild(c)
}

function br_form(){
    const br=document.createElement('br')
    form.appendChild(br)
}

const form=document.createElement('form')
document.body.appendChild(form)
form.id='form_js';

const title=document.createElement('h2')
title.innerHTML="javascript form:"
form.appendChild(title)

for(const key of form_arr){
    lable_form(key.for,key.text)
    br_form()
    input_form(key.input_type,key.input_id,key.input_nev)
    br_form()
    br_form()
}

const button=document.createElement('button')
button.innerText='Hozzáadás';
form.appendChild(button)