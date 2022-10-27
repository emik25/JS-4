let name = 'alex'
let money = +10000
let account = 7777
let userName = prompt('What is your name?')
let userPWD = prompt('Account number')
let userMoney = +prompt('Сash out')
let m = '-'



if(userName === name && userPWD === account){
    console.log(name + money);
} else if(userName != name || userPWD != account){
    console.log('Досвидули');
} else if(m === '-' && userMoney <= 10000){
    console.log(money - userMoney, userMoney);
}else {  
    console.log('Недостаточно средств');
}
