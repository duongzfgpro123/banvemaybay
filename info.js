let signUpForm = document.getElementById("signInForm")

signUpForm.onsubmit = (e)=>{
    e.preventDefault()

    setTextErr("#emailErr", " ")
    setTextErr("#passwordErr", " ")

    let email = signUpForm.email.value
    let password = signUpForm.password.value

    let validate = true

    if(!email){
        setTextErr("#emailErr", "Email is required")
        validate = false
    }
    if(!password){
        setTextErr("#passwordErr", "Password is required")
        validate = false
    }

    if(password.length <8){
        setTextErr("#passwordErr", "Password must be at least 8 characters")
        validate = false
    }

    if (validate) alert('Signin successfully!')
}


let setTextErr = (query, content) =>{
    document.querySelector(query).innerHTML = content
}

// setTextErr("#emailErr", "Bận cần nhập email")
// setTextErr("#passwordErr", "Bận cần nhập email")