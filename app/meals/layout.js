import React from 'react'

// export const metadata = {
//   title: 'NextLevel Child Testing',
//   description: 'Delicious meals, shared by a food-loving community.',
// };

// IF we add above metadata here then it will be applied to these pages that are going to be rendered by this layout.js file

const MealsLayout = ( {children}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default MealsLayout
