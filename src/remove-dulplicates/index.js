function removeDuplicates(obj) {
    const newObj = {
        ...obj
    }
    const keys = Object.keys(newObj).sort((a, b) => b - a);
    for(let key of keys){
        newObj[key] = Array(...new Set(newObj[key]));
    }
    const filter = new Set();
    for(let key of keys){
        const input = [];
        for(let j = 0; j < newObj[key].length; j++){
            let test = newObj[key][j];
            if(!filter.has(newObj[key][j])){
                input.push(newObj[key][j]);
            }
            filter.add(newObj[key][j])
        }
        newObj[key] = input;
    }
    return newObj
}

module.exports = removeDuplicates;