// 1)Изучить событья кнопок
//     2)По клику на кнопку добавить в корзину товар с след параметроми:
//         1) картина 
//         2) Заголовок
//         3) доп параметры 
//         4) цена
//     3) Добавить в корзину

//  .class - docoment.getElementbyclassName 
//      вкладка 
//      (.) связка 
//      get - получить 
//      Elements - Элементы ( потому что класснов несколько)
//      by - по \ от 
//      ByclassName - название класса 

// let title = document.getElementsByClassName("title"); 

// console.log(title[0].innerText);
// console.log(title[1].innerText);
// console.log(title[2].innerText);
// console.log(title[3].innerText);
// console.log(title[4].innerText);











// Без команды вывода ничего не выведится ;


// let product = document.getElementsByClassName("product"); 
// console.log(product[0].innerText);



// var arr = ["Apple", "Orange", "Grusha"];

// arr.forEach(function(item, i, arr){
//     alert(i + ": " + item + " (массив:" + arr + ")")
// });

// var arr = [1, -1, 2, -2, 3];

// var positiveArr = arr.filter(function(number){
// 	return number > 2 ; 
// });

// alert( positiveArr);
// var names = ['HTML', 'CSS', 'JavaScript', 'Damiebk'];

// var nameLengths = names.map(function(name){
// 	return name.length;
// });

// alert (nameLengths);


// var arr = [1, -1, 2, -2, 3];

// function isPositive(number){
// 	return number > 0;
// }

// alert(arr.every(isPositive));
// alert(arr.some(isPositive));

// var arr = [1, 22, 32, 4, 5];

// var result = arr.reduce(function(sum, current){
// 	return sum + current;
// }, 0);

// alert(result);



// let product = document.querySelectorAll(".body_product > .product"); 
// Вариант вывода 1
// console.log(title);
// console.log(title[0]);
// console.log(title[1]);
// console.log(title[2]);
// console.log(title[3]);
// console.log(title[4]);

// for(let text of product){
// 	console.log(text.innerText);
// }

//с помощью цикла сделal перебор товаров
// let product = document.getElementsByClassName("product");

// 1 
// let i;
// for(i = 0; i < product.length; i++){

// 	console.log(i);
// }

// 2

// var index, len;
// for (index = 0, len = product.length; index < len; ++index) {
// 	console.log(product[index]);
// }

// 3
// for(let i of product){
// 	console.log(i);
// }


//по клику получить название товара с помощью js

var elements = document.getElementsByClassName("add_cart");
console.log(elements);

var myFunction = function () {
	var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".title");
	alert(attribute[0].innerText);
};

for (var i = 0; i < elements.length; i++){
	elements[i].addEventListener('click', myFunction, false);
}

//по клику получить цену товара с помощью js
var prelement = document.getElementsByClassName("add_price");
console.log(prelement);

var myPriceFunction = function () {
	var prattribute = this.parentNode.parentNode.parentNode.querySelectorAll(".price");
	console.log(prattribute[0].innerText);
};

for (var i = 0; i < prelement.length; i++){
	prelement[i].addEventListener('click', myPriceFunction, false);
}

//по клику получить адрес картинки с помощью js

var imgelements = document.getElementsByClassName("add_adress");
console.log(imgelements);

var myImgFunction = function () {
	var imgattribute = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".img img");
	console.log(imgattribute[0].src);
};

for (var i = 0; i < imgelements.length; i++){
	imgelements[i].addEventListener('click', myImgFunction, false);
}

//	с помощью js поменять название товара цену товара    
var preelement = document.getElementsByClassName("add_price");

preelement[0].innerHTML = 29.00;

preelement[1].innerHTML = 38.00;
preelement[2].innerHTML = 19.00;
preelement[3].innerHTML = 55.00;
preelement[4].innerHTML = 23.00;


var elem = document.getElementsByClassName("title");
elem[1].innerHTML = "Demi Jumpsuit";
elem[3].innerHTML = "Sweatshirt";

elem[5].innerHTML = "New Shirt";
elem[7].innerHTML = "Lova Dans bag";
elem[9].innerHTML = "Viena Jumper ";

console.log(elem);




// function test_fun(param) {
// 	var number = 10;
// 	var res;
// 	res = number + param;
// 	alert(res)
// }
// test_fun(1);

// const arr = {
// 	name: "Damir",
// 	age: 22,
// 	param: {
// 		color: "white",
// 		nat: "Kyrgyz"
// 	}
// };

// console.log(arr);


// for (let key in arr){

// 	if(typeof(arr[key]) === 'object'){
// 		for (let key2 in arr[key]){
// 			console.log(arr[key][key2]);
// 		}
// 	} else{
// 		console.log(arr[key])
// 	}

// };
//Сделать функцию которая вычисляет длину окружности, радиус задает пользователь.
// 		var num1 = +prompt("Введите радиус: ");

// 		var p = 2 * 3.14 * num1 ;
// 		alert(p);

// //Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b
// 		function min(a,b){
// 			if (a > b){
// 				console.log(b);
// 			} else if (a < b){
// 				console.log(a);
// 			}
// 		}
// 		min(45,44);



//Сделайте функцию которая возводить в степень числа вводимые пользователем
// function stepen(a){
// 	let result = a * a;
// 	console.log(result);
// }
// stepen(5);

// //Сделайте функцию которая находит площадь круга, радиус вводить пользователь 
// function ploshad(r){
// 	let res = 3.1415 * (r*r);
// 	console.log(res);
// }
// ploshad(5);


// // Сделайте функцию которая находит площадь прямоугольника, длину и ширину вводить пользователь. 
// function square(a, b){
// 	let result = a * b ;
// 	console.log(result);
// }
// square(5, 2);


// методы и свойства 32 строк

// let text = "         Hello How are you? ";
// console.log(text.trim());

// // методы и свойства чисел 

// let number = 120;
// number.toString();


// let x = 9.655888;
// console.log(x.toExponential(1));

// let w = 9.655888;
// console.log(w.toFixed(2));

// // пример: если пользователь  ввел 1.2, 1.2 вывод должен быть 2. 
// 		function mySumm(num1, num2){

// 			let res = num1 + num2;
// 			console.log(Math.floor(res));

// 		}

// 		mySumm(1.2, 1.2);

// 		// пример: если пользователь  ввел 2.5, 2.3 вывод должен быть 5

// 		function mySumm2(num1, num2){

// 			let res = num1 + num2;
// 			console.log(Math.ceil(res));

// 		}
// 		mySumm2(2.5, 2.3);


// // пример: если пользователь  ввел 2,5, 2.7 вывод должен быть 5. 


// 		function mySumm3(num1, num2){

// 			let res = num1 + num2;
// 			console.log(Math.floor(res));

// 		}
// 		mySumm3(2.5, 3.2);


// 		// пример: если пользователь  ввел 2,5, 3,2 вывод должен быть 6.

// 		function mySumm4(num1, num2){

// 			let res = num1 + num2;
// 			console.log(Math.ceil(res));

// 		}
// 		mySumm4(2.5, 3.2);

// добавление товара в корзину 






let class_name = document.getElementsByClassName("add_cart");
console.log(class_name);

var myFunction = function (evt) {
	evt.preventDefault();
	var title = this.parentNode.parentNode.parentNode.querySelectorAll(".title");
	var price = this.parentNode.parentNode.parentNode.querySelectorAll(".price");
	var image = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".img img");
	let creat_li = document.createElement('li');

	console.log(title[0].innerText);
	console.log(price[0].innerText);
	console.log(image[0].src);

	creat_li.innerHTML = '<div class="bag__img">\
									<a href="?search=#">\
										<img src="'+image[0].src+'" alt="">\
									</a>\
								</div>\
								<div class="bag__info">\
									<p class="info__title"> <a href="?search=#">'+title[0].innerText+'</a></p>\
									<div class="info__price">\
										<span>'+price[0].innerText+'</span>\
									</div>\
									<div class="trash">\
										<a href="?search=#"><i class="far fa-trash-alt"></i></a>\
									</div>\
								</div>';
	
								


	let block_cart = document.querySelector('#msg ul');
	block_cart.appendChild(creat_li);
	// alert("Товары успешно добавлены в корзину");

};








// 


for (var i = 0; i < class_name.length; i++) {
	class_name[i].addEventListener('click', myFunction, false);
}




// корзина

function textMsg(msg) {
	document.getElementById('msg').style.display = "block";
}


function closeMsg() {
    document.getElementById('msg').style.display = 'none';
}



