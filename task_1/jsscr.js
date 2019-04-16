var money, time;    

money = prompt( "Ваш бюджет на месяц?", "56000 грн");  
time = prompt("Введите дату в формате YYYY-MM-DD", " ");

let appData = {budzet: money, timeData: time, expenses: {}, optionalExpenses: {}, income: [], savings: false};

for (let key = " ", i = 0; i < 2; ++i){

    key = prompt( "Введите обязательную статью расходов в этом месяце", " " );          
    appData.expenses[key] = prompt("Во сколько обойдется?", " ");

}

alert("Бюджет пользователя в этом месяце в день составляет - " + appData.budzet/30);