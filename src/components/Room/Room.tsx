import React from 'react';
import styled from 'styled-components';
import { panOptions } from '../PanWrapper/panOptions';
import background from './../../assets/background.svg';

/* fixed size won't work, because when scale is 1 there will be room to pan; but the plugin won't allow it because scale is 1. 
the fix is to set the size of the react-transform-component and react-transform-element exlusively (see App.css) */


const RoomContainer = styled.div`
  background-image:url("${background}");
  background-repeat: no-repeat;
  background-position: center center;
  Background-size: contain;
  image-rendering: pixelated;
  width:${panOptions.room.size.x}px;height:${panOptions.room.size.y}px;
  box-sizing: border-box;
  display:block;
`

// const Background = styled.div`
//   background-image:url("/build/favicon.ico");
//   opacity:0.1;
//   width:100%;
//   height:100%;
// `

export const Room:React.FC = ({children}) => {
  return (
    <RoomContainer>
      {/* <Background /> */}
      {children}
    </RoomContainer>
  )
}