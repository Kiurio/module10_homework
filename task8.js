let massive;
massive = new Map()
massive.set('1', 'a')
massive.set('s', 'b')
massive.set(1, 'z')
let z = massive.keys()
let e = massive.values()
console.log(z, e)
for (let j=0; j<massive.size; j++){
    console.log(z[j] + ' - ключ, а ' + e[j] + ' - значение' )
}
