import React from 'react'
import { useEffect } from 'react'

function Popular() {
  const varA = 3;
  useEffect(() => {
    getPopular()
  }, [varA])

  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&exclude-tags=dairy`)
    const data = await api.json();
    console.log(data);
  }

  return (
    <div>Popular</div>
  )
}

export default Popular