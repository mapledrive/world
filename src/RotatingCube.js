import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Cube = props => {
  const { edge, background, fontSize } = props;
  const [currentRotation, setCurrentRotation] = useState(45);
  const handleSpin = () => setCurrentRotation(currentRotation + 90);

  const faceData = [
    { face: 1, angle: 'rotateY(270deg)', name: 1 },
    { face: 2, angle: 'rotateY(360deg)', name: 2 },
    { face: 3, angle: 'rotateY(90deg)', name: 3 },
    { face: 4, angle: 'rotateY(180deg)', name: 4 },
    { face: 5, angle: 'rotateX(90deg)', name: 5 },
    { face: 6, angle: 'rotateX(-90deg)', name: 6 },
  ];
  return (
    <Container>
      <Scene currentRotation={currentRotation} edge={edge}>
        <Spinner onClick={handleSpin} edge={edge}>
          {faceData.map(data => (
            <Face
              key={data.face}
              angle={data.angle}
              edge={edge}
              background={background}
              fontSize={fontSize}
            >
              {data.name}
            </Face>
          ))}
        </Spinner>
      </Scene>
    </Container>
  );
};

Cube.defaultProps = {
  edge: '100',
  background: 'rgba(141, 148, 249, 0.5)',
  fontSize: '50',
};

export default Cube;

/* start cube */
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Scene = styled.div`
  position: relative;
  width: ${props => props.edge}px;
  height: ${props => props.edge}px;
  transform-style: preserve-3d;
  transition: transform 1s ease;
  transform: rotateX(-33.5deg) rotateY(${props => props.currentRotation}deg);
`;

const spin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  `;

const Spinner = styled.div`
  position: absolute;
  display: inline-block;
  width: ${props => props.edge}px;
  height: ${props => props.edge}px;
  left: 0;
  top: 0;
  transform-style: preserve-3d;
  animation-name: ${spin};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 4s;
  animation-play-state: paused;
`;

const Face = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.edge}px;
  height: ${props => props.edge}px;
  text-align: center;
  font-size: ${props => props.fontSize}px;
  color: black;
  user-select: none;
  background: ${props => props.background};
  border: 2px solid white;
  transform: ${props => props.angle} translateZ(${props => props.edge / 2}px);
`;