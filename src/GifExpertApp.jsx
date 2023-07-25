import { useState } from "react"
import { AddCategory, GifGrid } from "./components"
export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['Star Wars: the Clone Wars'])

  const onAddCategory = (newCategory) => {
    //Valorant
    if(!categories.includes(newCategory)){
      setCategories([newCategory,...categories])
    }    
  }

  return (
    <>
        {/*titulo*/}

        <h1>GifExpertApp</h1>
        
        {/* Input */}
        <AddCategory 
            onNewCategory={(event) => onAddCategory(event)}
        />
        {/* Listado de gif */}
          {
            categories.map( (category) => 
              <GifGrid 
                category={category} 
                key={category}
              />             
            )
          }
          {/* gif Item */}
    </>
  )
}