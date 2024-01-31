//Sign Up

const signUpBox=document.querySelector(".signUp");
const nameInput=document.querySelector('.name');
const nameError=document.querySelector('.nameError');
const passInput=document.querySelector(".password");
const strength=document.querySelector('.strength');
const confirmPass=document.querySelector(".confirmPass");
const passMatch=document.querySelector(".passmatch");
const signUpBtn=document.getElementById('signUpBtn');

//password
//password strength
passInput.addEventListener('input',()=>{
    if(passInput.value.length<4 ){
        strength.innerHTML='Password is weak'
    }else if(passInput.value.length>4 && passInput.value.length<8){
        strength.innerHTML='Okaayyish'
    }
    else if (passInput.value.length>8){
        strength.innerHTML='Password is strong'
    }
})
//password match
confirmPass.addEventListener('input',()=>{
if(passInput.value===confirmPass.value){
passMatch.innerHTML=""
}
else{
    passMatch.innerHTML='Passwords do not match'
    
    
}
});

confirmPass.addEventListener('click',()=>{
    if(passInput.value===confirmPass.value || confirmPass.value===""){
        passMatch.innerHTML=""
        }
        else{
            passMatch.innerHTML='Passwords do not match'
        } 
})
//mail id

const idInput=document.querySelector('.mailSignUp');
const idError=document.querySelector('.mailError');







//pass to database
const signUp=document.getElementById('signUpForm')
 const array=[];
signUp.addEventListener('submit',(e)=>{
    e.preventDefault();
   
    let obj={
        id:idInput.value,
        password:passInput.value
    };

    if(passInput.value===confirmPass.value){
        array.push(obj);
   localStorage.setItem('database',JSON.stringify(array));
   console.log (array)
   signUpBox.style.display='none'
    } 
    
  const close =  document.querySelector('.close');
   close.addEventListener('click',()=>
   {
    signUpBox.style.display='none'
   })
   
})
             //sign in

const signInId=document.querySelector('.mailId');
const signInIdError=document.querySelector('.idError');
const passIn=document.querySelector('.passbox');
const passInError=document.querySelector('.passwordError');
const loginBtn=document.getElementById('login');
const signIn=document.querySelector('.signIn')



signIn.addEventListener('submit',(e)=>{
e.preventDefault();
let data=JSON.parse(localStorage.getItem('database'));
let result=data.filter(value=>value.id===`${signInId.value}`)

if(result.length<1){
    signInIdError.innerHTML="Wrong Id";
    passInError.innerHTML=""

}else{
    signInIdError.innerHTML="";
    
    if(passIn.value===result[0].password){
        window.open('/pages/signed-in.html',"_blank")
        passInError.innerHTML=''
        localStorage.setItem('loggedin',true)

    }else{
        passInError.innerHTML='Wrong Password'
    }

}


console.log(result.length)
 })

 const createAccount=document.querySelector('.newAccount');
 createAccount.addEventListener('click',()=>{
    signUpBox.style.display='block'
 })
 const close =  document.querySelector('.close');
   close.addEventListener('click',()=>
   {
    signUpBox.style.display='none'
   })
/*






let result = data.findIndex(({id})=>id===`${signInId.value}`);
if(result!== -1){
    signInIdError.innerHTML=""
    const passcheck=data[result];
    if(passIn.value===passcheck.password){
        window.open('/signed-in.html',"_blank")
        passInError.innerHTML=''
        localStorage.setItem('loggedin',true)

    }else{
        passInError.innerHTML='Wrong Password'
    }
    
}else{
    signInIdError.innerHTML="Wrong Id"
}



#2192ff;
*/
