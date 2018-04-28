import React from 'react'
import styled from 'styled-components'

import media from 'utils/media'

const defaultProps = {
  height: 384,
}

function StyledEdge (props) {
  const { colorPrimary, colorSecondary, height } = props
  const y = Math.floor(height * 2 / 3)

  return (
    <Svg
      width="100%"
      height={height}
      viewBox={`0 0 100 ${height}`}
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="TurbulentFilter" x="-50%" width="200%" y="-50%" height="200%" >
          <feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="5" result="result" seed="3"/>
          <feDisplacementMap in2="result" in="SourceGraphic" scale="20" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <path
        d={`M0,0 l100,0 l100,${y} C50,${y + 80} 20,${y + 150} 00,${y + 140}z`}
        fill={colorSecondary}
        // filter="url(#TurbulentFilter)"
        // transform="matrix(1.15,0,0,1,-10,-8)"
      />
      <path
        d={`M0,0 l100,0 l100,${y} C50,${y - 40} 50,${y + 100} 00,${y + 100}z`}
        fill={colorPrimary}
        // filter="url(#TurbulentFilter)"
        // transform="matrix(1.15,0,0,1,-10,-8)"
      />
   </Svg>
  )
}

StyledEdge.defaultProps = defaultProps

export default StyledEdge

const Svg = styled.svg`
  display: block;
  overflow: visible !important;

  ${media.lg`
    position: absolute;
  `}
`
