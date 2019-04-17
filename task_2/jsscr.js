var money, time;    

money = +prompt( "Ваш бюджет на месяц?", "56000");  
time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {budzet: money,
               timeData: time,
               expenses: {},
               optionalExpenses: {},
               income: [],
               savings: false};


for (let i = 0; i < 2; ++i){

    let key = prompt( "Введите обязательную статью расходов в этом месяце", "" ),          
        vol = prompt("Во сколько обойдется?", "");

    if ( key != null && vol != null && key != '' && vol != '' && key.length < 50 ) {
        appData.expenses[key] = vol;
    } else {
        i--;
    }

}

//   Варианты циклов:
/*
let i = 0;
do{
    let key = prompt( "Введите обязательную статью расходов в этом месяце", "" ),          
        vol = prompt("Во сколько обойдется?", "");

    if ( key != null && vol != null && key != '' && vol != '' && key.length < 50 ) {
        appData.expenses[key] = vol;
        i++;
    } 
    
}while (i < 2)
/*
-----------------------  или

let i = 0;
while ( i < 2){
    let key = prompt( "Введите обязательную статью расходов в этом месяце", "" ),          
        vol = prompt("Во сколько обойдется?", "");

    if ( key != null && vol != null && key != '' && vol != '' && key.length < 50 ) {
        appData.expenses[key] = vol;
        i++;
    } 
    
}

*/

appData.moneyPerDay = appData.budzet/30;

alert("Бюджет пользователя в этом месяце в день составляет - " + appData.moneyPerDay);

if ( appData.moneyPerDay < 100 ) {
    console.log('Минималка');
} else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
    console.log('Середняк');    
} else if (  appData.moneyPerDay > 2000 ) {
    console.log('Достаток');    
} else {
    console.log('Something wrong');
}