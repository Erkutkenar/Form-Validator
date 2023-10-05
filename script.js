const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// Show input error message
function showError(input,message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
    
}


//Show success outlime

function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid


//First Code down below but we need to change it 
// function isValidEmail(email) {
//     const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
//     return re.test(String(email).toLowerCase());
// }

function checkEmail(input) {
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(re.test(input.value.trim()) ) {
        showSuccess(input);
    }else {
        showError(input,`Email is not valid`)
    }
}



// Chehck required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        // console.log(input.value);
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}

// Chehck input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} charecters`);
    } else if (input.value.length > max){
        showError(input `${getFieldName(input)} must be at less than ${max} charecters`);
    }else{
        showSuccess(input)
    }
}

// Chehck password match
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, `Password do not match`);
    }
}




// //Get field name
function getFieldName(input) {
    // return input.id;
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



// Event Listeners
form.addEventListener('submit',function(e){
    e.preventDefault();

    // For the code down below which is commented intead of we created another function cheking each section Check required fields
    checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordsMatch(password,password2);

    // console.log(username.value);

    // if(username.value == ''){
    //     showError(username,'Username is required');
    // }else {
    //     showSuccess(username);
    // }


    // if(email.value == ''){
    //     showError(email,'Email is required');
    // } else if (!isValidEmail(email.value)){
    //     showError(email,'Email is not valid');
    // } else {
    //     showSuccess(email);
    // }

    
    

    // if(password.value == ''){
    //     showError(password,'Password is required');
    // }else {
    //     showSuccess(password);
    // }


    // if(password2.value == ''){
    //     showError(password,'Password 2 is required');
    // }else {
    //     showSuccess(password2);
    // }
});







