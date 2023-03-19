import React from 'react'
import style from './numStep.module.scss'
import clsx from 'clsx'
/**
 * 
 * 
 */
export default function NumStep({num, active, size}) {
  return (
    <>
        
        <div className={clsx(style.circle, {
            [style.circleActive] : active,
            [style.smallCircle] : size === 'sm'
        })}>
        {num}
        </div>
    </>
  )
}
