var arrayLength = 0;
var listId  = 0;
var checked = true;
console.log('test runiin');

//document.getElementById("getRecipeBtn").addEventListener("click", fetchData());
//document.getElementById("getRecipeBtn").onclick = checkData();

async function fetchData()
{
    
    try{

        //const foodName = document.getElementById("foodName").value.toLowerCase();
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
       // document.getElementById('getRecipeBtn').style.visibility='hidden';
        document.getElementById("recipeImg").src = data['meals'][0]['strMealThumb'];
        document.getElementById("recipeId").innerHTML = data['meals'][0]['strMeal'];
        document.getElementById("recipeInstruction").innerHTML = data['meals'][0]['strInstructions'];
        // arrayLength = data['meals'].length;
        // console.log(data);
        // if(arrayLength = 0)
        // {

        // }
        // else
        // {
        //     // for (var i = 0; i < arrayLength; i++)
        //     //     {   
        //     //         listId = 'recipe' + String(i);
        //     //         console.log(data['meals'][i]['strMeal']);
        //     //         var ul = document.getElementById("list");
        //     //         var li = document.createElement("li");
        //     //         li.appendChild(document.createTextNode(data['meals'][i]['strMeal']));
        //     //         li.setAttribute("id", listId); // added line
        //     //         ul.appendChild(li);
        
        //     //         //then img maybe
        //     //         let img = document.createElement('img');
        //     //         img.src = data['meals'][i]['strMealThumb'];
        //     //         ul.appendChild(img);
        //     //     }
        // }
 



        // const pokemonSprite = data.sprites.front_default;
        // const imgElement = document.getElementById("pokemon-img");

        // imgElement.src = pokemonSprite;
        // imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}