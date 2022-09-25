import styled from 'styled-components';
import CubeIcon from './CubeIcon';

const sidebarData = [
  { id: 1, name: 'Error', mainColor: 'red' },
  { id: 2, name: 'RegExp', mainColor: 'pink' },
  { id: 3, name: 'Date', mainColor: 'blue' },
  { id: 4, name: 'Function', mainColor: 'green' },
  { id: 5, name: 'Array', mainColor: '#FFBE32' },
  { id: 6, name: 'Object', mainColor: 'white' },
  { id: 7, name: 'Boolean', mainColor: '#ed9121' },
  { id: 8, name: 'String', mainColor: 'grey' },
  { id: 9, name: 'Number', mainColor: 'black' },
];

export const LeftSidebar = ({ showModal }) => {
  return (
    <OverlayTopMenu>
      <LeftMenu>
        {sidebarData.map(data => (
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
      </LeftMenu>
    </OverlayTopMenu>
  );
};

const OverlayTopMenu = styled.section`
  transform: translate(11px, -50%);
  top: 50vh;
  left: 0px;
  transition: transform 250ms;
  position: fixed;
`;

const LeftMenu = styled.div`
  border-radius: 25px;
  background: #393939;
  display: flex;
  flex-direction: column;
  padding: 25px 0;
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
  padding: 9px 0;
  max-height: 100px;
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
