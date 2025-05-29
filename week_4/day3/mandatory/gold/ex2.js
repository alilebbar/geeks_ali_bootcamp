let keysAndValues = (ob={})=>{
        let key = Object.keys(ob).sort()
        console.log(key)
        let values = []
        key.forEach((e)=>{
            values.push(ob[e])
        })
        console.log(values)
        
        return [key,values]
}
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }))