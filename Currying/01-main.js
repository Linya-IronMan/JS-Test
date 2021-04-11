function add(...args) {
  let innerFn = function() {
     let _args = Array.prototype.slice.call(arguments);
     args = args.concat(_args)
     return innerFn
   }

    innerFn.toString = function() {
        console.log('toString')
        let result = args.reduce((prev, curData) => {
            return prev + curData
        })
        return result;
    }
   
   return innerFn
} 

let result = add(1,2)(3)(4)
console.log(result)

/*
 * 记录
 * node 环境下 直接输出result 不会触发 toString
*/