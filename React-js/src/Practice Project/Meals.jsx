import {useEffect, useState } from "react"
import axios from "axios";

const Meals = () => {
    const [items, setItems] = useState([])
    useEffect(() =>{
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').then(res =>{
        setItems(res.data.meals);
    }).catch( (err) =>{
        console.log(err);
        
    })
    },[]);

const itemList = items.map(({strMeal,strMealThumb,idMeal}) =>{
    return (
        <section key={idMeal}>
            <img src={strMealThumb} alt={strMeal} />
            <p>{strMeal}</p>
            <p>#{idMeal}</p>
        </section>
    )
})
  return (
    <div>
      {itemList}
    </div>
  )
}

export default Meals
