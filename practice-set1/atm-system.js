let balance=1000;

function bankDetails(option, amount=0){
    switch(option){
        case "check":
            return `your blance is ${balance}`
        
        case "deposit":
            if(amount <=0){
                return "invalid amount"
            }
            else{
                balance+=amount
                return balance
            }
        case "withdraw":
        if (amount>balance){
            return "insuffiecient balance"
        }
        else{
            balance-=amount;
            return 'current balace after withdraw of money ${balance}'
        }

        default:
            return "invalid option";

    }
    


}
console.log(bankDetails("check"));
console.log(bankDetails("deposit", 500));
console.log(bankDetails("withdraw",2000))
console.log(bankDetails("withdraw", 500))
console.log(bankDetails("deposit", 4000));
console.log(bankDetails("abc"));