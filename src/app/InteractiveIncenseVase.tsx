'use client'

import ChoiceBox from './ChoiceBox'
import IncenseVase from './IncenseVase'
import IncenseStick, { IncenseStickProps } from './IncenseStick'
import { memo, useState } from 'react'

type InteractiveIncenseVaseProps = {
  position: string
  rotation: string
}

const InteractiveIncenseVase = ({
  position,
  rotation = '0 0 0',
}: InteractiveIncenseVaseProps) => {
  const demoManage = (e: React.MouseEvent<HTMLElement>, m: string) =>
    console.log('message: ', m, e)
  const [incenseSticks, updateIncenseSticks] = useState<IncenseStickProps[]>([])

  const getRandomCoordinateXZ = () =>
    Math.round((Math.random() * (1.5 + 1.5) - 1.5) * 100) / 100
  const getRandomCoordinateY = () =>
    Math.round((Math.random() * (15 - 12) + 12) * 100) / 100
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
    <a-entity class="interactive-vase">
      <ChoiceBox
        position={position}
        onYes={addIncense}
        rotation={rotation}
        onNo={(e: React.MouseEvent<HTMLElement>) => demoManage(e, 'no')}
        height="20"
        width="13"
        depth="13"
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
    </a-entity>
  )
}

export default memo(InteractiveIncenseVase)
