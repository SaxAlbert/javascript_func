/**
 * @typedef {{nemzetiseg: string,mu:string,mu2:string,szerzo:string,szerzo2:string}} CountryWriters
 * @typedef {{td|th}} Vagy
 */
const arr = [
    {
        nemzetiseg: "Orosz",
        szerzo: "Gogol",
        mu: "A köpönyeg",
        szerzo2: "Csehov",
        mu2: "A csinovnyik halála",
    },
    {
        nemzetiseg: "Cseh",
        szerzo: "Franz Kafka",
        mu: "Az átváltozás",
    },
    {
        nemzetiseg: "Magyar",
        szerzo: "Örkény István",
        mu: "Egyperces Novellák",  
        szerzo2: "József Attila",
        mu2: "Klárisok",
    },
    {
        nemzetiseg: "Svájc",
        szerzo: "Friedrich Dürrenmatt",
        mu: "A fizikusok",
    },
];

const table = document.createElement('table')
const thead = document.createElement('thead')
const tr = document.createElement('tr')
const tbody = document.createElement('tbody')

document.body.appendChild(table)
table.appendChild(thead)
thead.appendChild(tr)
table.appendChild(tbody)

const th1=document.createElement('th')
const th2=document.createElement('th')
const th3=document.createElement('th')

th1.innerText='Nemzetiség'
th2.innerText='Szerző'
th3.innerText='Mű'

tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)


renderTableBody(arr)

/**
 * @type {CountryWriters}
 */
const form=document.getElementById('htmlform')
form.addEventListener('submit',function (e){
    e.preventDefault()
    /**
     * @type {HTMLFormElement}
     */
    const v=e.target
    /**
     * @type {HTMLInputElement}
     */
    const nationality=v.querySelector('#nemzetiseg')
    /**
     * @type {HTMLInputElement}
     */
    const name1=v.querySelector('#szerzo1')
    /**
     * @type {HTMLInputElement}
     */
    const name2=v.querySelector('#szerzo2')
    /**
     * @type {HTMLInputElement}
     */
    const title1=v.querySelector('#mu1')
    /**
     * @type {HTMLInputElement}
     */
    const title2=v.querySelector('#mu2')

    const nemzetiseg=nationality.value
    const szerzo1=name1.value
    const mu1=title1.value
    const szerzo2=name2.value
    const mu2=title2.value
    /**
    *  @type {CountryWriters}
    */
    const obj={}
    obj.nemzetiseg=nemzetiseg;
    obj.szerzo=szerzo1;
    obj.mu=mu1;
    obj.szerzo2=szerzo2;
    obj.mu2=mu2;

    const tbody=document.getElementById('tbody')
    const tr = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")

    tbody.appendChild(tr)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    td1.innerText = obj.nemzetiseg
    td2.innerText = obj.szerzo
    td3.innerText = obj.mu

    if(obj.szerzo2 && obj.mu2){
        td1.rowSpan = "2"
        const tr = document.createElement('tr')
        tbody.appendChild(tr)

        const td4 = document.createElement("td")
        tr.appendChild(td4)

        td1.rowSpan = "2"
        const td5 = document.createElement("td")
        tr.appendChild(td5)
        
        td4.innerText = obj.szerzo2
        td5.innerText = obj.mu2
    }
/**
 * @type {CountryWriters}
 */
    td1.addEventListener('click', function (e){
        /**
        * @type {{target:HTMLTableCellElement}[]}
        */
        const target=e.target
        const jelolt = document.getElementById('tbody').querySelector('.marked');
        
        if(jelolt !=null){
            jelolt.classList.remove('marked');
        }
        target.classList.add('marked')
        
    })
    renderTableBody()
})
/**
 * 
 * @param {HTMLSelectElement} element1 
 * @param {Cust} element2 
 */
function renderTableRow(element1, element2){

}
/**
 * 
 * @param {*} type 
 * @param {string} content 
 * @param {HTMLTableRowElement} parentrow 
 * @returns {string}
 */
function renderTableCell(type,content,parentrow){
    const a=document.createElement(type)
    a.innerText=content
    parentrow.appendChild(a)
    return a
}