import React from 'react'
import { IMealData } from "../../interfaces/Meal"

interface MealProps {
    meal: IMealData
}

export const Meal:React.FC<MealProps> = ({ meal }: MealProps) => {

  const steps = meal?.strInstructions.split("\r\n")
  
  return (
    <>
      <div className='grid gap-12 xl:grid-cols-2 lg:grid-cols-1'>
                <div>
                    <ul className="list-decimal">
                        {steps?.map((item, key) =>
                            <li key={key}><p>{item}</p></li>
                        )}
                    </ul>
                </div>
                <div >
                    <ul className="list-decimal">
                        {steps?.map((item, key) =>
                            <li key={key}><p>{item}</p></li>
                        )}
                    </ul>
                </div>
            </div>
    </>
  )
}