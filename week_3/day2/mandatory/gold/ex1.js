let numbers = [123, 8409, 100053, 333333333, 7]

for (nb in numbers){
    let div = numbers[nb]%3
    if (div===0){
        console.log(true)
    }else{
        console.log(false)
    }
}