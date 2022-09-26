import CubeIcon from './CubeIcon';
import {
  OverlayBottomMenu,
  HorizontalMenu,
  BaseButton,
  LoadingContentWrapper,
  ContentWrapper,
  BaseIcon,
  SettingsIcon,
} from './style';

const footerData = [
  { id: 1, name: 'SharedArBuf', mainColor: 'green' },
  { id: 2, name: 'Atomics', mainColor: 'olive' },
  { id: 3, name: 'BigInt', mainColor: 'whitesmoke' },
  { id: 4, name: 'Math', mainColor: 'whitesmoke' },
  { id: 5, name: 'Intl', mainColor: 'whitesmoke' },
  { id: 6, name: 'JSON', mainColor: 'whitesmoke' },
  { id: 7, name: 'AsyGenFunc', mainColor: 'red' },
  { id: 8, name: 'AsyncFunc', mainColor: '#ffbf00' },
];

export const BottomNavigation = ({ showModal }) => {
  return (
    <OverlayBottomMenu>
      <HorizontalMenu>
        {footerData.map(data => (
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
    </OverlayBottomMenu>
  );
};
