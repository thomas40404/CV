function affiche(num){
  let css =document.querySelectorAll('link');
  for(let i= 0; i < css.length; i++){
    css[i].disabled = true;
  }
  if(+num)css[+num].disabled=false;
}
addEventListener("DOMContentLoaded", (event) => {
  const span = document.createElement("span");
  let options= '';
  for(let i=0;i<document.querySelectorAll('link').length;i++){
    options+=`<option value=${i}>${['❌','1️⃣','2️⃣','3️⃣'][i]}</option>\<n>  </n>`;
  }
  span.innerHTML = `<select onchange="affiche(this.value)" style="background-color: whitesmoke;font-size: 2em">
                      ${options}
                    </select>`;
  span.id = "YDchoice";
  span.setAttribute("style"
                  ,`position: absolute;
                        right: .5em;
                        top: 1em;
                        box-shadow: rgba(0, 0, 0, 0.5) 0 0 0.5em;
                        font-size:0.5em;
                        padding: 0;
                        margin: 0;`);
  document.body.appendChild(span);
});
