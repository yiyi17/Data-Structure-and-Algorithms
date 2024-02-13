
// await async 模拟
function myAsync(generatorFn) {
    return new Promise((resolve, reject) => {
        const gen = generatorFn()
        function step(nextFn) {
            let next;
            try {
                next = nextFn()
            } catch (error) {
                return reject(error)
            }
            const {value, done} = next
            if(done) {
                return resolve(value)
            }else{
                Promise.resolve().then(value=> {
                    step(() => gen.next())
                }, err => {
                    step => gen.throw(err)
                })
            }
        }
        step(() => gen.next())
    })
}