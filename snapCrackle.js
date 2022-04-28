function snapCrackle(maxValue){

let mensagem = ""

for ( let i = 1 ; i <= maxValue ; i++ ){
    
    if (i % 2 == 1 &&  i % 5 == 0){
        mensagem += "SnapCrackle, "
    }
    else if (i % 5 == 0){
        mensagem += "Crackle, "
    }
    else if (i % 2 == 1){
        mensagem += "Snap, "
    }
    else{
        mensagem += i + ", "
    }
    
}

return mensagem

}