console.log('Írni kell valamit')
/**
 * @type {string}
 */
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
}
/**
 * @type {{name:string, age:number}}
 */
const y={
    name:'Hans',
    age:18
}
for(const key in y){
    console.log(`${key}: ${y[key]}`)
}