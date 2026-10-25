function genPass(len, upper,special,nums){
    const lower ="abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%^&*()_+:<>?|{}[]/";
    const numChars= "1234567890";
    let chars = lower;
    if(upper) chars +=upperChars;
    if(nums) chars +=numChars;
    if(special) chars +=specialChars;

    let pass = " ";
    for(let i=0; i<len; i++){
        const randIdx =
        Math.floor(Math.random()* chars.length);
        pass +=chars[randIdx];
    }

    return pass;
}

function generate(){
    const len =
    parseInt (document.getElementById("len").value);
    const upper =document.getElementById("upper").checked;
    const nums =document.getElementById("nums").checked;
    const special =document.getElementById("Special").checked;

    const pass = genPass(len,upper,special, nums);
    document.getElementById("passout").textContent = pass;

}
function reset(){
    document.getElementById("len").value =12;
    document.getElementById("nums").checked =true;
    document.getElementById("Special").checked =true;
    
    
    document.getElementById("upper").checked=true;
    document.getElementById("passout").textContent = "Your Password Will Appear Here";
}

