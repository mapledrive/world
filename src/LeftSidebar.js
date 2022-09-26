import CubeIcon from './CubeIcon';
import {
  OverlayTopMenuSidebar,
  LeftMenu,
  BaseButtonSidebar,
  LoadingContentWrapper,
  ContentWrapper,
  BaseIcon,
  SettingsIcon,
} from './style';

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
    <OverlayTopMenuSidebar>
      <LeftMenu>
        {sidebarData.map(data => (
          <BaseButtonSidebar
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
          </BaseButtonSidebar>
        ))}
      </LeftMenu>
    </OverlayTopMenuSidebar>
  );
};
