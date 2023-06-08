function recoursiveNum(n){
    if(n< 0) return
    console.log(n)
    recoursiveNum(--n)
}
recoursiveNum(10)