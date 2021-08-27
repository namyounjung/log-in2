const arrowBtnEl = document.querySelector("#cta");
arrowBtnEl.addEventListener("click", function(){
  this.parentElement.classList.toggle("expand");
  this.firstElementChild.classList.toggle('rotate')
  this.nextElementSibling.classList.toggle("show-hide")
});

function valid(){
  
  const userNameEl = document.querySelector("#input-username");
  const userNameValue = userNameEl.value;

  const userPasswordEl = document.querySelector("#input-password");
  const userPasswordValue = userPasswordEl.value;

  if(userNameValue === ''){
    alert('아이디를 입력해주세요.');
    return false;
  }

  if(userPasswordValue === ''){
    alert('패스워드를 입력해주세요.');
    return false;
  }
  
  return true;
}