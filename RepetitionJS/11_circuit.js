// function createCalcFunction(n) {
//     return function(){
//         console.log(1000 * n);
//     }
// }

// const calc = createCalcFunction(42)
// // console.log(calc);
// calc()

// function createIncrementor(n) {
//     return function (num){
//         return n + num
//     }
// }
// const addOne = createIncrementor(1)
// const addten = createIncrementor(10)


// console.log(addOne(1))
// console.log(addten(10))
// console.log(addOne(100))
// console.log(addten(1020))
// function urlGenerator(domain) {
//     return function (url){
//         return `https://${url}.${domain}`
//     }
// }

// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')

// console.log(comUrl('google'));
// console.log(comUrl('netflix'));
// console.log(ruUrl('yandex'));
// console.log(ruUrl('vkontakte'));

// function bind (context ,fn) {
//     return function(...args){
//         fn.apply(context, args)
//     }
// }
// function logPerson () {
//     console.log(`Person: ${this.name} , ${this.age}, ${this.job}`);
// }
// const person1 = {name:'Sergei',age:22,job:'Backend'}
// const person2 = {name:'Natasha',age:25,job:'target'}

// bind(person1, logPerson)()
// bind(person2, logPerson)()

