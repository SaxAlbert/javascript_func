/**
 * 
 * @param {string} type 
 * @param {string} content 
 * @param {HTMLTableRowElement} parentrow 
 */
function createCell(type,content,parentrow){
    const a=document.createElement(type)
    a.innerText=content
    parentrow.appendChild(a)
    return a
}
/**
 * 
 * @param {CountryWriters} arr 
 */
function renderTableBody(arr){
    for(const key of arr){
        const tr = document.createElement("tr")
    tbody.appendChild(tr)
    const td1 = document.createElement("td")
    tr.appendChild(td1)
    createCell('td',key.szerzo,tr)
    createCell('td',key.mu,tr)
    td1.innerText = key.nemzetiseg

    if(key.szerzo2 && key.mu2){
        td1.rowSpan = "2"
        const tr2 = document.createElement('tr')
        tbody.appendChild(tr2)
        createCell('td',key.szerzo2,tr2)
        createCell('td',key.mu2,tr2)
    }
    }
}