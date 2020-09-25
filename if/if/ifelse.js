var result = prompt("who's there ?")

if( result == 'cancel'){
    console.log('cancelled')
}else if(result == 'admin'){
    console.log('welcome admin')

    var password = prompt('enter your password : ')
    if( password == 'cancel'){
        console.log('cancelled')
    }else if(password == '1234'){
        console.log('welcome admin')
    }else{
        console.log('wrong password')
    }

}else{
    console.log('seni tanımıyorum')
}

else if(password == '1234'){
        console.log('welcome admin')
    }else{
        console.log('wrong password')
    }
    
    '1234' yerine null yazsam şifreyi kendim belirliyemez miyim? 
