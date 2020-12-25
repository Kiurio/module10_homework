let arr = [1,1,4,6,87,98,0]
function checkarr (item, i, list){
    return item === list[0]
}
console.log(arr.every(checkarr))