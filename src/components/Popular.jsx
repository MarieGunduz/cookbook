import React from 'react'
import { useEffect, useState } from 'react'

function Popular() {
  const [popular, setPopular] = useState();
  // console.log("POP", popular)
  useEffect(() => {
    getPopular()
  }, [popular])

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&exclude-tags=dairy`)
    const data = await api.json();
    setPopular(data.recipes)
   // console.log(data);
  }

  return (
    <div>Popular</div>
  )
}

export default Popular