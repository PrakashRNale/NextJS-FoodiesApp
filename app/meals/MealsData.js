import MealsGrid from '@/components/meals/MealsGrid'
import { getMeals } from '@/lib/meals'
import React from 'react'

const MealsData = async () => {
  const mealsData = await getMeals();
  return  <MealsGrid meals={mealsData} />
}

export default MealsData
