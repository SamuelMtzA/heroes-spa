import React from 'react'
import { HeroList } from '../components'

export const DCpage = () => {
  return (
    <>
      <h1 className='animate__animated animate__lightSpeedInRight'>DC Comics</h1>
      <hr/>
      <HeroList publisher={"DC Comics"} />
    </>
  )
}
