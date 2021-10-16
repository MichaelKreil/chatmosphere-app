import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

export interface DragProps {
  initPos:Point
  children:any
  currentScale:number
  panOffset:Point
  callback: (Point)=>void
}

interface Point {
  x:number,
  y:number
}

const step = 30;

const DragElement = styled.div`
  position: absolute;
`

const DragWrapper = ({initPos={x:0,y:0}, children, callback=(pos)=>null, currentScale = 1, panOffset}:DragProps) => {
  panOffset = panOffset || {x:0,y:0}
  const clickDelta:any = useRef();
  const element:any = useRef();

  const onDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (element.current !== undefined) {
      const xPos = Math.round(e.clientX / currentScale - clickDelta.current.x)
      const yPos = Math.round(e.clientY / currentScale - clickDelta.current.y)
      // element?.current?.setAttribute('style', `left:${xPos}px; top:${yPos}px`)
      element?.current?.setAttribute('style', `transform:translate(${xPos}px, ${yPos}px);`)
      callback({x:xPos, y:yPos})
    }
  }

  const onMouseUp = (e) => {
    e.preventDefault()
    document.removeEventListener("mouseup", onMouseUp)
    document.removeEventListener("mousemove", onDrag)
  }

  const onMouseDown = (e) => {
    e.preventDefault()
    const boundingRect = element.current.getBoundingClientRect()
    clickDelta.current = {
      x: (e.clientX - boundingRect.x + panOffset.x) / currentScale,
      y: (e.clientY - boundingRect.y + panOffset.y) / currentScale,
    }
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onDrag);
  }

  const onKeyDown = (e) => {
    if (!e.key.startsWith('Arrow')) return;
    if (element.current === undefined) return;

    e.preventDefault();

    const boundingRect = element.current.getBoundingClientRect()

    let xPos = (boundingRect.x - panOffset.x);
    let yPos = (boundingRect.y - panOffset.y);

    switch (e.key) {
      case 'ArrowLeft':  xPos -= step; break;
      case 'ArrowRight': xPos += step; break;
      case 'ArrowUp':    yPos -= step; break;
      case 'ArrowDown':  yPos += step; break;
    }
    xPos = Math.round(xPos / currentScale)
    yPos = Math.round(yPos / currentScale)
    

    element.current.setAttribute('style', `transform:translate(${xPos}px, ${yPos}px);`)
    callback({x:xPos, y:yPos})
  }
  

  useEffect(() => {
    element?.current?.setAttribute('style', `transform:translate(${initPos.x}px, ${initPos.y}px);`)
  },[])

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  })

  return (
    <DragElement ref={element} onMouseDown={onMouseDown} id="DragElement">
      {children}
    </DragElement>
  )
}

export default DragWrapper
