let signUpForm = document.getElementById("signInForm")

signUpForm.onsubmit = (e)=>{
    e.preventDefault()

    setTextErr("#emailErr", " ")
    setTextErr("#passwordErr", " ")
    setTextErr("#confirmPasswordErr", " ")

    let email = signUpForm.email.value
    let password = signUpForm.password.value
    let confirmPassword = signUpForm.confirmPassword.value

    let validate = true

    if(!email){
        setTextErr("#emailErr", "Email is required")
        validate = false
    }
    if(!password){
        setTextErr("#passwordErr", "Password is required")
        validate = false
    }
    if(!confirmPassword){
        setTextErr("#confirmPasswordErr", "Confirm password is required")
        validate = false
    }

    if(password.length <8){
        setTextErr("#passwordErr", "Password must be at least 8 characters")
        validate = false
    }

    if(confirmPassword.length <8){
        setTextErr("#confirmPasswordErr", "Must be at least 8 characters")
        validate = false
    }
    
    if(confirmPassword !== password){
        setTextErr("#confirmPasswordErr", "Password is not match")
        validate = false
    }

    if (validate) {
        setTimeout(()=>{
            window.location.href="/idex.html"
        },3000)
        alert('Register successfully!')
        
    }
}


let setTextErr = (query, content) =>{
    document.querySelector(query).innerHTML = content
}

// setTextErr("#emailErr", "Bận cần nhập email")
// setTextErr("#passwordErr", "Bận cần nhập email")