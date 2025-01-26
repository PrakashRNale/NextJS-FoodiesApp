import React from 'react';
import Image from 'next/image';
import classes from './page.module.css';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

const MealsDetails = ( {params}) => {
  const meal = getMeal(params.mealsSlug);

  if(!meal){
    notFound(); // it will show closest not found page.
  }
  meal.instructions = meal.instructions.replace(/\n/g, '<br />'); // replace line breaks
  return (
   <>
    <header className={classes.header}>
      <div className={classes.image}>
        <Image src={`https://prakashrnale.s3.ap-south-1.amazonaws.com/${meal.image}`} alt={meal.title} fill />
      </div>
      <div className={classes.headerText}>
        <h1>{meal.title}</h1>
        <p className={classes.creator}>
          by <a href={`mailto:${meal.creator_email}`}> {meal.creator}</a>
        </p>
        <p className={classes.summary}>
          {meal.summary}
        </p>
      </div>
    </header>
    <mian>
      <p className={classes.instructions} dangerouslySetInnerHTML={{
        __html : meal.instructions
        }}></p>
    </mian>
   </>
  )
}

export default MealsDetails
