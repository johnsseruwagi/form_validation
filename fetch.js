

const getData = async() =>{
    const _data = {
        title: "foo",
        body: "bar",
        userId:1
    }
   try{
       const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
           method:"POST",
           body:JSON.stringify(_data),
           headers:{"Content-type":"application/json;charset=UTF-8"},

       });
       console.log(response);
       if(response.status !== 201){
           return;
       }
       const data = await response.json();
       console.log(data);
   } catch (e) {
       console.log(e.message);
   }

}

window.addEventListener("load",getData)


