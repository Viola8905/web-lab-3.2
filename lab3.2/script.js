"use strict"

/*Задача 5. Створити функції, які переводять:
5.1)Сантиметри у дюйми;
5.2)     Дюйми у сантиметри  (1 дюйм == 2,54 см
    !!зробити стрілочну функцію!!
*/

const inch= 2.54;

//1
 let inchConverter=(cm) => cm/inch;


console.log(` It will be: ${Math.ceil(inchConverter(10))} inch`);

//2
let cmConverter=(cm) => cm*inch;

console.log(` It will be: ${Math.ceil(cmConverter(10))} cm`);




/* 
Задача 6. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців
    !!описати функцію декларативно!!

    
*/



 function T2(row,col){
    let table=document.createElement('table');
    document.body.append(table)
        
    for(let i=0;i<row;i++){
        let tr=document.createElement('tr');
       
        table.append(tr);
                
        for(let j=0;j<col;j++){
            let th=document.createElement('th');
            th.innerHTML = "Hello";
            tr.append(th);
                
                    
        }
    }
    
    
 

}
T2(3,6);


/*
Задача 7. Створити функцію, яка за номером дня тижня повертає кількість пар(згідно з розкладом).
    !!описати анонімно функцію!!

 
*/

let CountofLessons =function (num){
    let pon=1;
    let viv=2;
    let ser=3;
    let chet=4;
    let pjat=5;

    let less2=2;
    let less3=3;
    if(num==pon){
        console.log(less2);
    }
    else if(num==viv){
        console.log(less2);
    }
    else if(num==ser){
        console.log(less3);
    }
    else if(num==chet){
        console.log(less3);
    }
    else if(num==pjat){
        console.log(less2);
    }
    else{
        console.log("wrong number")
    }

}

CountofLessons(4);