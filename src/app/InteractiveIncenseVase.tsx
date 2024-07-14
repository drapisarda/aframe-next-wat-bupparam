'use client'

import ChoiceBox from './ChoiceBox'
import IncenseVase from './IncenseVase'
import IncenseStick, { IncenseStickProps } from './IncenseStick'
import { useState } from 'react'

const InteractiveIncenseVase = (props: {position: string}) => {
  const {position} = props
  const demoManage = (e: React.MouseEvent<HTMLElement>, m: string) =>
    console.log('message: ', m, e)
  const [incenseSticks, updateIncenseSticks] = useState<IncenseStickProps[]>([])

  const getRandomCoordinateXZ = () =>
    Math.round((Math.random() * 20 - 10) * 100) / 100
  const getRandomCoordinateY = () =>
    Math.round((Math.random() * (122 - 107) + 107) * 100) / 100
  const getRandomRotation = () =>
    Math.round((Math.random() * (10 + 10) - 10) * 100) / 100

  const addIncense = () => {
    const newIncensePosition: string = `${getRandomCoordinateXZ()} ${getRandomCoordinateY()} ${getRandomCoordinateXZ()}`
    const newRotation: string = `${getRandomRotation()} ${getRandomRotation()} ${getRandomRotation()}`
    updateIncenseSticks([
      ...incenseSticks,
      { position: newIncensePosition, rotation: newRotation },
    ])
  }

  return (
    <ChoiceBox
    position={position}
    onYes={addIncense}
    onNo={(e: React.MouseEvent<HTMLElement>) => demoManage(e, 'no')}
  >
    {incenseSticks.map((stick, index) => {
      return (
        <IncenseStick
          key={index}
          position={stick.position}
          rotation={stick.rotation}
        />
      )
    })}
    <IncenseVase />
  </ChoiceBox>
  )
}


export default InteractiveIncenseVase