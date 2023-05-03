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
    let myName = prompt('请输入你的名字:');
    if(!myName || myName === '') {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = '小顾喜欢小丁同学!!!!超级喜欢的那种!!! ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '小顾喜欢小丁同学!!!!超级喜欢的那种!!! ' + storedName;
  }

myButton.onclick = function() {
    setUserName();
 }
 