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

export const BottomNavigation = ({ footerData, showModal }) => {
  return (
    <OverlayBottomMenu>
      <HorizontalMenu>
        {footerData.map(data => (
          <BaseButton
            key={data.id}
            id={data.id}
            onClick={() => showModal(data)}
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
