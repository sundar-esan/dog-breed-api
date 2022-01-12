async function breedlist(){

    try{
        let res=await fetch('https://dog.ceo/api/breeds/list/all');
        let result=await res.json();
        console.log(result);
        console.log(result.message);
        console.log(Object.keys(result.message));

        let arr= Object.keys(result.message);
        let select=document.getElementById('dogbreed');
        arr.map(element=>{
            let option= document.createElement('option')
            option.value = element;
            option.innerHTML=element;
            select.appendChild(option);
        }

        )
    }
    catch(error){
        console.log(error);
    }
}
breedlist();
async function getdata(){

    try{

        let image = document.getElementById("img");
        image.innerHTML=' ';

          let dog=document.getElementById("dogbreed").value;
          console.log(dog);
          let res= await fetch(`https://dog.ceo/api/breed/${dog}/images/random`);
          let result=await res.json();
          console.log(result);
          let img=result.message;
          console.log(result.message);
          let dogimage=document.createElement('img');
          dogimage.setAttribute('src',img);
       
          image.appendChild( dogimage);

    }
    catch(error){
        console.log(error);
    }
}
