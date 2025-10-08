/**
 * @type {{theme:string, time:string, scientist1:string, scientist2:string}}
 */
const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]
const table=document.createElement('table')
document.body.appendChild(table);

const thead=document.createElement('thead')
table.appendChild(thead)

const tr=document.createElement('tr')
thead.appendChild(tr)

const th1=document.createElement('th')
const th2=document.createElement('th')
const th3=document.createElement('th')

th1.innerText='Fizikai terulete'
th2.innerText='időszak'
th3.innerText='Képviselők'
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

    td1.innerText=key.theme
    td2.innerText=key.time
    td3.innerText=key.scientist1

    if(key.scientist2===undefined){
        td3.colSpan=2
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
    }
    else{
        td4.innerText=key.scientist2

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
    }

}