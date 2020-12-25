let x=prompt('')
if (typeof (x) === "string"){
    alert (x + ' - строка')
}
else if (typeof (x) === "number"){
    alert (x + ' - число')
}
else if (typeof (x) === "boolean"){
    alert (x + ' - логический тип данных')
}
else{
    alert ('тип данных ' + x + ' не определен')
}