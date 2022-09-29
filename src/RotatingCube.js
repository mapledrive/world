import React, { useState, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomNumberBetween(-120, 20));
const faceData = [
  { face: 1, angle: 'rotateY(270deg)', name: 1 },
  { face: 2, angle: 'rotateY(360deg)', name: 2 },
  { face: 3, angle: 'rotateY(90deg)', name: 3 },
  { face: 4, angle: 'rotateY(180deg)', name: 4 },
  { face: 5, angle: 'rotateX(90deg)', name: 5 },
  { face: 6, angle: 'rotateX(-90deg)', name: 6 },
];

const Cube = props => {
  const { edge, fontSize, builtin } = props; // cube side, font in cube, object { id: 1, name: 'Promise', mainColor: 'purple' }
  const [currentRotation, setCurrentRotation] = useState(45);
  const handleSpin = () => setCurrentRotation(currentRotation + 90);

  // prepare list of objects like { name: "prototype", tall: "180", up: -32 }
  const final = useMemo(() => {
    const properties = getAllPropertyNames(builtin.name);
    console.log(properties);

    return restructurization(properties);
  }, [builtin]);

  return (
    <Container>
      <Scene currentRotation={currentRotation} edge={edge}>
        <Spinner onClick={handleSpin} edge={edge}>
          {faceData.map(data => (
            <Face
              key={data.face}
              angle={data.angle}
              edge={edge}
              background={builtin.mainColor}
              fontSize={fontSize}
            >
              {data.name}
            </Face>
          ))}
          {final.map(data => (
            <RandomProperty
              key={data.name}
              tall={data.tall}
              up={data.up}
              edge={edge}
              background={builtin.mainColor}
              fontSize={fontSize}
            >
              {data.name}
            </RandomProperty>
          ))}
        </Spinner>
      </Scene>
    </Container>
  );
};

Cube.defaultProps = {
  edge: '150',
  background: 'rgba(141, 148, 249, 0.5)',
  fontSize: '50',
};

export default Cube;

/* start cube */
const Container = styled.div`
  height: 300px;
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
  opacity: 0.5;
  border: 2px solid white;
  transform: ${props => props.angle} translateZ(${props => props.edge / 2}px);
`;

const RandomProperty = styled.div`
  position: absolute;
  display: flex;
  min-width: 150px;
  height: 50px;
  font-size: 20px;
  background: ${props => props.background};
  opacity: 0.5;
  border: 2px solid white;
  transform: rotateY(${props => props.tall}deg) rotateX(90deg)
    translateZ(${props => props.up}px) translateX(${props => props.edge}px);
`;

// put built in object like Array Object Function
// returns array of property names for builtin object
function getAllPropertyNames(obj) {
  let builtinObj;
  if (obj === 'Number') {
    builtinObj = (5.3).__proto__.constructor;
  }
  if (obj === 'String') {
    builtinObj = ''.__proto__.constructor;
  }
  if (obj === 'Boolean') {
    builtinObj = true.__proto__.constructor;
  }
  if (obj === 'Object') {
    builtinObj = {}.__proto__.constructor;
  }
  if (obj === 'Array') {
    builtinObj = [].__proto__.constructor;
  }
  if (obj === 'Function') {
    builtinObj = x => x.__proto__.constructor;
  }
  if (obj === 'Date') {
    builtinObj = new Date.__proto__.constructor();
  }
  if (obj === 'RegExp') {
    builtinObj = /one/.__proto__.constructor;
  }
  if (obj === 'Error') {
    builtinObj = Error.__proto__.constructor;
  }
  if (obj === 'Promise') {
    builtinObj = new Promise.__proto__.constructor();
  }
  if (obj === 'Symbol') {
    builtinObj = Symbol().__proto__.constructor;
  }
  if (obj === 'Generator') {
    builtinObj = (function* () {})().__proto__.constructor;
  }
  if (obj === 'GeneratorF') {
    builtinObj = function* () {}.constructor;
  }
  if (obj === 'Map') {
    builtinObj = new Map().__proto__.constructor;
  }
  if (obj === 'Set') {
    builtinObj = new Set().__proto__.constructor;
  }
  if (obj === 'WeakMap') {
    builtinObj = new new WeakMap().__proto__.constructor();
  }
  if (obj === 'WeakSet') {
    builtinObj = new WeakSet().__proto__.constructor;
  }
  if (obj === 'TypedArray') {
    builtinObj = new Int8Array(8).__proto__.constructor;
  }
  if (obj === 'Reflect') {
    builtinObj = {};
  }
  if (obj === 'Proxy') {
    builtinObj = new Proxy({}, {});
  }
  if (obj === 'ArrayBuffer') {
    builtinObj = new ArrayBuffer(8).__proto__.constructor;
  }
  if (obj === 'DataView') {
    builtinObj = new DataView(new ArrayBuffer(16), 0).__proto__.constructor;
  }
  if (obj === 'SharedArrayBuffer') {
    builtinObj = {};
  }
  if (obj === 'Atomics') {
    builtinObj = {};
  }
  if (obj === 'BigInt') {
    builtinObj = 10n.__proto__.constructor;
  }
  if (obj === 'Math') {
    builtinObj = {};
  }
  if (obj === 'Intl') {
    builtinObj = Intl;
  }
  if (obj === 'JSON') {
    builtinObj = JSON;
  }
  if (obj === 'AsyncGeneratorFunction') {
    builtinObj = {};
  }
  if (obj === 'AsyncFunction') {
    builtinObj = async function () {}.constructor;
  }

  return [...new Set(Object.getOwnPropertyNames(builtinObj))];
}

function restructurization(array) {
  const newarray = array.map(function (value, index) {
    if (
      index === 0 ||
      index === 4 ||
      index === 8 ||
      index === 12 ||
      index === 16 ||
      index === 20 ||
      index === 24
    ) {
      return { name: value, tall: '180', up: getRandomNumberBetween(-120, 20) };
    }
    if (
      index === 1 ||
      index === 5 ||
      index === 9 ||
      index === 13 ||
      index === 17 ||
      index === 21 ||
      index === 25
    ) {
      return { name: value, tall: '270', up: getRandomNumberBetween(-120, 20) };
    }
    if (
      index === 2 ||
      index === 6 ||
      index === 10 ||
      index === 14 ||
      index === 18 ||
      index === 22 ||
      index === 26
    ) {
      return { name: value, tall: '360', up: getRandomNumberBetween(-120, 20) };
    }
    if (
      index === 3 ||
      index === 7 ||
      index === 11 ||
      index === 15 ||
      index === 19 ||
      index === 23 ||
      index === 27
    ) {
      return { name: value, tall: '90', up: getRandomNumberBetween(-120, 20) };
    }
    return null;
  });
  return newarray;
}
