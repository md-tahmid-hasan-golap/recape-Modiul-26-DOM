// document.getElementById("btn_your_name").addEventListener("click", function(){

//      const heading = document.getElementById("heading_title");
//      heading.innerText = "My Name Is Button"
// })

document.getElementById("click_btn").addEventListener("click", function(){

      const inputFild = document.getElementById("input_fild");
      const name = inputFild.value;
      const setElement = document.getElementById("set_element");

      setElement.innerHTML = name
      

})