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

export const TopNavigation = ({ headerData, showModal }) => {
  return (
    <OverlayTopMenu>
      <HorizontalMenu>
        {headerData.map(data => (
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
    </OverlayTopMenu>
  );
};
