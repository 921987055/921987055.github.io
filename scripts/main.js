let myImage = document.querySelector('img');
myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image2.jpg'){
        myImage.setAttribute('src', 'https://media.giphy.com/media/3o6ozhxFlr4Ung40RG/giphy.gif');
    } else {
        myImage.setAttribute('src', 'images/image2.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入密码:');
    if(!myName || myName === '' || myName !== 'xihuan') {
        setUserName();
    }
    //localStorage.setItem('name', myName);
    myHeading.textContent = '小顾喜欢小丁同学!!!!超级喜欢的那种!!!';
}
setUserName();
myButton.onclick = function() {
    setUserName();
 }
 