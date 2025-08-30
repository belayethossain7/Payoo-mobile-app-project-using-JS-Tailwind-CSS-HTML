//log in button functionality

document.getElementById('btn-login').addEventListener('click', function (e){
    e.preventDefault()
    
    const mobileNumber = 123456789;
    const pinNumber = 1234;
//mobile value
    const MobileNumValue = document.getElementById('mobile-number').value ;

    const mNConvert = parseInt(MobileNumValue);

//pin value
    const pinNumValue = document.getElementById('pin-number').value ;

    const pinConvert = parseInt(pinNumValue);

    if(mobileNumber===mNConvert && pinNumber===pinConvert){
        window.location.href="./home.html";
    }

    else{
        alert("Invalid Input. Input Your mob. and pass. carefully")
    }
})