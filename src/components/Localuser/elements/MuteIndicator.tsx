import React from 'react';
import styled from 'styled-components';
import { useLocalStore } from './../../../store/LocalStore';
import {ReactComponent as MuteCat} from './../../../assets/muteCatSmall.svg'


const Indicator = styled.div`
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translateX(-50%);
`

export const MuteIndicator = () => {

  const {toggleMute} = useLocalStore()

  const handleClick = () => {
    toggleMute()
  } 

  return (
    <Indicator onClick={handleClick}>
      <MuteCat />
    </Indicator>
  )
}

