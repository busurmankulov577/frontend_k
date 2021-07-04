(function () {
    'use strict';

    // // Концепция 
    // class ploshad {

    //     constructor(width, height) {
    //         this.width = width;
    //         this.height = height;

    //     }
    //     calcPloshad() {
    //         return this.width * this.height;

    //     }
    //     calcPloshad2() {
    //         return this.width + this.height;

    //     }

    // }
    // class ploshadTExt extends ploshad{
    //     //extens  связка двух классов 

    //     constructor(width, height,text,value) {
    //         super(width, height);

    //         this.text = text;
    //         this.value = value;

    //     }
    //     showText (){
    //         console.log(`Text: ${this.text} | value: ${this.value}`);

    //     }

    // }
    // const result = new ploshadTExt(200, 10 ,"Damir","class ");
    // result.showText();
    // console.log(result.calcPloshad());




    // class User {
    //     constructor(name,surname,year){
    //         this.name = name;
    //         this.surname =surname;
    //         this.year = year;
    //     }

    //     getFullname(){
    //         console.log(`"Name: "${this.name} "| Surmane: " ${this.surname} "| Year in University" ${this.year}`);
    //     }
    // }
    // const result_area = new User("Damir","Busurmankulov",2017);
    // console.log(result_area.getFullname());

    // class Student extends User{
    //     constructor(name,surname,year,now_year){
    //         super(name,surname,year);

    //         this.name = name;
    //         this.surname = surname;
    //         this.year = year;
    //         this.now_year = now_year;
    //     }
    //     getCourse(){
    //         return this.now_year - this.year;


    //     }
    // }
    // const result_area = new Student("Damir","Busurmankulov",2017,2021);
    // console.log(`Текущий курс: ${result_area.getCourse()}`);
    // console.log(result_area);


    class cardProduct {
        constructor(tooltips,tooltipsClass, img, title, originPrice, oldPrice, innerBlock) {
            this.tooltips = tooltips;
            this.tooltipsClass = tooltipsClass;
            this.img = img;
            this.title = title;
            this.originPrice = originPrice;
            this.oldPrice = oldPrice;
            this.innerBlock = document.querySelector(innerBlock);
            this.valuta = 85;
            this.originPrice = this.convetToUsd(this.originPrice);
            this.oldPrice = this.convetToUsd(this.oldPrice);

        }
        convetToUsd(price){
            const result = price / this.valuta;
            return result.toFixed(1);
        }
        render() {
            const div = document.createElement("div");
            div.classList.add("product");
            div.innerHTML = `
                            <div class="img">
                                <div class="tooltips ${this.tooltipsClass}">
                                    <span>${this.tooltips}</span>
                                </div>

                                <img src=${this.img}>

                                <div class="desc_img">
                                    <div class="desc">
                                        <p class="title">out of stock!</p>
                                        <p><span class="coral">beatfull</span></p>
                                    </div>
                                </div>

                            </div>
                            <div class="body_product">

                                    <p class="title"><a href="#">${this.title}</a></p>
                                    <div class="block_stars">
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <div class="reviews">
                                            <span>6 review(s)</span>
                                        </div>
                                    </div>

                                    <div class="price">
                                        <span class="currency">$</span>
                                        <span class="add_price">${this.originPrice}</span>
                                        <del>$${this.oldPrice}</del>
                                    </div>
                                    <div class="btns dnone">
                                        <ul class="ul_li">
                                            <li class="add_cart">
                                                <span class="seryi_krug">
                                                    <i class="fas fa-briefcase"></i>
                                                </span>
                                            </li>

                                            <li>
                                                <span class="seryi_krug">
                                                    <i class="fas fa-balance-scale"></i>
                                                </span>
                                            </li>

                                            <li>
                                                <span class="seryi_krug">
                                                    <i class="fas fa-heart"></i>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                
                            </div>`;

            this.innerBlock.append(div);


        }

    }
    new cardProduct(
        'New',
        "bg_orange",
        '../img/img1.jpg',
        'Cardigan QA',
        1850,
        2500,
        '.list_product'
    ).render();
    new cardProduct(
        'Sale',
        "bg_green",
        '../img/img2.jpg',
        'New T-Shirt',
        1230,
        2500,
        '.list_product'
    ).render();
    new cardProduct(
        '-15%',
        "bg_red",
        '../img/img3.jpg',
        'Summer Sunrise',
        1230,
        2500,
        '.list_product'
    ).render();
    new cardProduct(
        'Sale',
        "bg_blue",
        '../img/img4.jpg',
        'Sweater',
        1230,
        2500,
        '.list_product'
    ).render();
    new cardProduct(
        '-25%',
        "bg_blue",
        '../img/img46.jpg',
        'NY LS',
        1230,
        2500,
        '.list_product'
    
    ).render();
    
    
    
    
    
    
    
    
    
    
    

    



    const Data = {
        name: "Damir",
        age: 21,
        parent: {
            parent1: "Semol",
            parent2: "Miras"
        }
    
        
        
        
    };
    console.log(Data);
    // console.log(JSON.stringify(Data));

    const newObj = JSON.parse(JSON.stringify(Data));
    newObj.parent.parent2 = "Damir";
    console.log(newObj);






    
    const   inputSom = document.querySelector("#som"),
            inputUsd = document.querySelector("#usd");

    inputSom.addEventListener('input', () => {
        
        const request = new XMLHttpRequest();

        request.open("GET", "current.json"); 
        // request.open(method(GET/POST), url , asy, login);
        request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        request.send();

        request.addEventListener('load',() =>{

            if (request.readyState === 4 && request.status === 200){
                // console.log(request.response);
                // console.log(JSON.parse(request.response));
            
            
                const currency = JSON.parse(request.response);

                const result = inputSom.value / currency.current.usd;

                inputUsd.value = (result).toFixed(2);

            } else{
                inputUsd.value = "Что-то пошло не так ";
            }
            
            
        });
         


        // status 
        // ststusText
        // respose
        // readyState
    }); 



    const   search = document.querySelector("[name='search']"),
            btnSearch = document.querySelector(".search_box button"),
            search_result = document.querySelector(".search_result");

    btnSearch.addEventListener('click', (e) => {
        e.preventDefault();


        const request_ = new XMLHttpRequest();

        request_.open("GET", "/search.php?query=" + search.value);

        // search_result.innerHTML = "Данные отправлены";

        request_.setRequestHeader("Content-type", "application/json; charset=UTF-8");

        request_.send();


        request_.addEventListener('load', () => {

            if (request_.status === 200) {

                const data = JSON.parse(request_.response);
                let creat_ul = document.createElement('ul');

                for (let i = 0; i < data.length; i++) {
                    console.log(i);
                    creat_ul.innerHTML += `<li>
        									<a href="${data[i].href}">${data[i].text}</a>
        									</li>`;

                }

                search_result.innerHTML = creat_ul.outerHTML;


            } else {
                console.log("error");
            }

        });


    });


}());


