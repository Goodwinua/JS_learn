var money, time;    

function start() {
    do{
        money = +prompt( "Ваш бюджет на месяц?", "56000");
    }
    while( isNaN( money ) || money == '' || money == null);

    time = prompt("Введите дату в формате YYYY-MM-DD", "");
}
  
start();

let appData = {
        budzet: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true
    };


function chooseExpenses(){
    for (let i = 0; i < 2; ++i){

        let key = prompt( "Введите обязательную статью расходов в этом месяце", "" ),          
            vol = prompt("Во сколько обойдется?", "");
    
        if ( key != null && vol != null && key != '' && vol != '' && key.length < 50 ) {
            appData.expenses[key] = vol;
        } else {
            i--;
        }
    
    }

}

chooseExpenses();

function detectDayBudget(){

    appData.moneyPerDay = (appData.budzet/30).toFixed();
    alert("Бюджет пользователя в этом месяце в день составляет - " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel(){
    if ( appData.moneyPerDay < 100 ) {
        console.log('Минималка');
    } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
        console.log('Середняк');    
    } else if (  appData.moneyPerDay > 2000 ) {
        console.log('Достаток');    
    } else {
        console.log('Something wrong');
    }
}

detectLevel();

function checkSavings() {
    if ( appData.savings == true ) {
        let save = +prompt('Какова сумма накоплений? ', ''),
            percent = +prompt("Под какой процент?", '');

        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц с депозита: ' + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for ( let i = 1; i <= 3; ++i){
        appData.optionalExpenses[i] = prompt( 'Статья необязательных расходов?', '' );
    }
}

chooseOptExpenses();