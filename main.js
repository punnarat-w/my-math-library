function sum(a, b){
    if(Array.isArray(a)){
        let total = 0
        // for(let i= 0; i<a.length ;i++){
        //     total += a[i]
            
        // }
        a.forEach((i)=>(total+=i))
        return total
    }
    return a+b
}



module.exports = {
    sum,
}