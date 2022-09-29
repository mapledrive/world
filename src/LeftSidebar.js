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

export const LeftSidebar = ({ sidebarData, showModal }) => {
  return (
    <OverlayTopMenuSidebar>
      <LeftMenu>
        {sidebarData.map(data => (
          <BaseButtonSidebar
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
          </BaseButtonSidebar>
        ))}
      </LeftMenu>
    </OverlayTopMenuSidebar>
  );
};
