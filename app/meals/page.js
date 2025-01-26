import React, { Suspense } from 'react';
import classes from './page.module.css';
import Link from 'next/link';
import MealsGrid from '@/components/meals/MealsGrid';
import { getMeals } from '@/lib/meals';
import MealsData from './MealsData';

const Meals = async () => {
  // const mealsData = await getMeals();
  // console.log('meals data '+ mealsData)
  return (
   <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}> by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it your self</p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>
            Share your favorite recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}> 
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
          <MealsData />
        </Suspense>
      </main>
   </>
  )
}

export default Meals
