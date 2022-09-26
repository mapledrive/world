import CubeIcon from './CubeIcon';
import {
  OverlayTopMenu,
  HorizontalMenu,
  BaseButton,
  LoadingContentWrapper,
  ContentWrapper,
  BaseIcon,
  SettingsIcon,
} from './style';

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
      <HorizontalMenu>
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
      </HorizontalMenu>
    </OverlayTopMenu>
  );
};
