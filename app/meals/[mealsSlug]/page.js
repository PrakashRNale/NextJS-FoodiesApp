import React from 'react'

const MealsDetails = ( {params}) => {
  return (
    <div>
      <div>Meals Details</div>
      <h2>{params.mealsSlug}</h2>
    </div>
  )
}

export default MealsDetails
