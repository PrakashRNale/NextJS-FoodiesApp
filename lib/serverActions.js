'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalid = text =>{
  // console.log(text);
  return !text || text.trim() === '';
}

export const shareMeal = async (prevState, formData) =>{
    'use server';

    const meal = {
      title : formData.get('title'), // this title here is the name of the input field in the form
      summary : formData.get('summary'),
      instructions : formData.get('instructions'),
      image : formData.get('image'),
      creator : formData.get('name'),
      creator_email : formData.get('email'),
      title : formData.get('title'),
    }

    if(
      isInvalid(meal.title) ||
      isInvalid(meal.summary) ||
      isInvalid(meal.instructions) ||
      isInvalid(meal.creator) ||
      isInvalid(meal.creator_email) ||
      !meal.creator_email.includes('@') ||
      !meal.image ||
      meal.image.size == 0
    ){
      // throw new Error('Invalid input');
      // console.log('invalid input');
      return {
        message : 'Invalid Input'
      }
    }

    // console.log(meal);
    await saveMeal(meal);
    revalidatePath("/meals");
    redirect('/meals');
  }