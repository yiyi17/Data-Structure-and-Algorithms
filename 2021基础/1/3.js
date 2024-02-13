function person(str) {
    return {
        wait: (time) => {
            return {
                df: (arg) => {
                    return {
                        execute: () => {
                            console.log(str);
                           setTimeout(() => {
                            console.log(arg);
                            }, time)
                        }
                    } 
                }
            }
        },
        df: (arg) => {
            return {
                execute: () => {
                    console.log(arg, str);
                }
            }
        },
        execute: ()=> {
            console.log(str);
        }
    }
}

person('abc').execute()// abc
person('abc').df('df').execute()// abc df
person('abc').wait(2000).df('df').execute()// abc, 2秒后df