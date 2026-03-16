// const bar = document.getElementsById('bar');
const bar=document.querySelector("#bar")
const nav =  document.getElementById("sidebar");
const closebtn = document.getElementById('close')


    bar.addEventListener("click" ,() => {
       console.log("hello")
       nav.style.display="block"
    //    bar.style.display="none"
    })

    
    closebtn.addEventListener("click" , () =>{
      nav.style.remove('hidden');
    })
