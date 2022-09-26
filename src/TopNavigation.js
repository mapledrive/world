import React from 'react';
import styled from 'styled-components';
import CubeIcon from './CubeIcon';

const headerData = [
  { id: 1, name: 'Promise', mainColor: 'MediumPurple' },
  { id: 2, name: 'Symbol', mainColor: ' #f9c34b' },
  { id: 3, name: 'Generator', mainColor: '#ffe5b4' },
  { id: 4, name: 'GeneratorF', mainColor: '#35f210' },
  { id: 5, name: 'Map', mainColor: '#10c1da' },
  { id: 6, name: 'Set', mainColor: 'black' },
  { id: 7, name: 'WeakMap', mainColor: 'white' },
  { id: 8, name: 'WeakSet', mainColor: '#8dd8b9' },
  { id: 9, name: 'TypedArray', mainColor: '#ffff99' },
  { id: 10, name: 'Reflect', mainColor: '#ffa500' },
  { id: 11, name: 'Proxy', mainColor: 'LightPink' },
  { id: 12, name: 'ArrayBuffer', mainColor: 'whitesmoke' },
  { id: 13, name: 'DataView', mainColor: 'red' },
];

export const TopNavigation = ({ showModal }) => {
  return (
    <OverlayTopMenu>
      <BottomMenu>
        {headerData.map(data => (
          <BaseButton
            key={data.id}
            id={data.id}
            onClick={() => showModal(data.name)}
          >
            <LoadingContentWrapper>
              <ContentWrapper mainColor={data.mainColor}>
                <BaseIcon>
                  <SettingsIcon>
                    <CubeIcon mainColor={data.mainColor} />
                  </SettingsIcon>
                </BaseIcon>
                {data.name}
              </ContentWrapper>
            </LoadingContentWrapper>
          </BaseButton>
        ))}
      </BottomMenu>
    </OverlayTopMenu>
  );
};

const OverlayTopMenu = styled.section`
  transform: translate(-50%, 11px);
  left: 50vw;
  top: 0px;
  transition: transform 250ms;
  position: fixed;
`;

const BottomMenu = styled.div`
  border-radius: 25px;
  background: #393939;
  display: flex;
  padding: 5px 25px;
  position: relative;
  transition: padding 400ms;
  box-shadow: 1px 3px 6px 0 rgba(0, 0, 0, 0.2);
`;

const BaseButton = styled.button`
  font-size: 14px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 9px;
  max-height: 60px;
  transition: max-height 150ms, padding 300ms;
  position: relative;
  background: #393939;
  border: none;
  cursor: pointer;
  outline: 0 !important;
`;

const LoadingContentWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 75px;
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 75px;
  transition: all 300ms;
  margin: 0;
  padding: 28px 0 0 0;
  border: 0;
  font-size: 14px;
  color: ${props => props.mainColor};
  font-family: 'Open Sans', sans-serif;
  overflow: hidden;
`;

const BaseIcon = styled.div`
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  position: absolute;
  height: 28px;
  width: 28px;
  transition: all 300ms;
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
`;

const SettingsIcon = styled.svg`
  transition: fill 300ms;
  fill: #fff;
  display: block;
  height: 100%;
  width: 100%;
`;
