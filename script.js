document.getElementById('login').addEventListener('click',function(){
    document.getElementById('login-area').style.display="none";
    document.getElementById('dashboard').style.display="block";
})

document.getElementById('depositBtn').addEventListener('click',function(){
  
    const depositNumber = getFromInput('deposit');
    

    changeSpan('currentDeposit',depositNumber);
    changeSpan('totalBalance',depositNumber);
    document.getElementById('deposit').value="";
})
function getFromInput(id){
    const amount =document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
//withdraw

document.getElementById('withdrawBtn').addEventListener('click',function(){
   
    const withdrawNumber = getFromInput('withdraw');
    changeSpan('currentWithdraw',withdrawNumber);
    changeSpan('totalBalance', -1 * withdrawNumber);
    document.getElementById('withdraw').value='';
});
function changeSpan(id,depositAmount){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalBalance = depositAmount + currentNumber;
    document.getElementById(id).innerText= totalBalance;
}