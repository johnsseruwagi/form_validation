

const getData = async() =>{
   try{
       const response = await fetch('https://api.github.com/users/manishmshiva',{
           method:"GET",
           headers:{"Content-type":"application/json;charset=UTF-8"},

       });
       console.log(response);
       if(response.status !== 200){
           return;
       }
       const data = await response.json();
       console.log(data);
   } catch (e) {
       console.log(e.message);
   }

}

window.addEventListener("load",getData)


