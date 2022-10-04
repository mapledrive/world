import styled from 'styled-components';

export const RightSidebar = ({ rightSidebarData, handleGeneric }) => {
  return (
    <OverlayRightSidebar>
      <LeftMenu>
        {rightSidebarData.map(data => (
          <BaseButtonRightSidebar
            key={data.id}
            id={data.id}
            onClick={() => handleGeneric(data.name)}
            visible={data.visible}
          >
            <LoadingContentWrapper>
              <ContentWrapper mainColor={data.mainColor}>
                <BaseIcon>
                  <img color={data.mainColor} src={data.pics} alt=' ' />
                </BaseIcon>
                {data.name}
              </ContentWrapper>
            </LoadingContentWrapper>
          </BaseButtonRightSidebar>
        ))}
      </LeftMenu>
    </OverlayRightSidebar>
  );
};

// Right Sidebar Menu
export const OverlayRightSidebar = styled.section`
  transform: translate(-11px, -50%);
  top: 50vh;
  right: 0px;
  transition: transform 250ms;
  position: fixed;
`;

export const LeftMenu = styled.div`
  border-radius: 25px;
  background: #393939;
  display: flex;
  flex-direction: column;
  padding: 25px 0;
  position: relative;
  transition: padding 400ms;
  box-shadow: 1px 3px 6px 0 rgba(0, 0, 0, 0.2);
`;

export const BaseButtonRightSidebar = styled.button`
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
  &:hover {
    background: #2c2c2c;
  }
`;

// flex with width and centering horizontally
export const LoadingContentWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100px;
`;

// block with text
export const ContentWrapper = styled.div`
  position: relative;
  width: 100px;
  transition: all 300ms;
  margin: 0;
  padding: 33px 0 0 0;
  border: 0;
  font-size: 12px;
  color: ${props => props.mainColor};
  font-family: Roboto, sans-serif;
  overflow: hidden;

  font-weight: 500;
`;

// centering wrapper for icon - kvadratik 28x28
export const BaseIcon = styled.div`
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

// style for svg - raspiraet na ves parent
export const SettingsIcon = styled.svg`
  transition: fill 300ms;
  fill: #fff;
  display: block;
  height: 100%;
  width: 100%;
`;

const CubeIcon = props => (
  <svg
    viewBox='0 0 486 486'
    fill={props.mainColor}
    style={{
      enableBackground: 'new 0 0 486 486',
    }}
  >
    <path d='m449.733 119.163-197.9-117.5c-3.7-2.2-8.3-2.2-12-.1l-200.6 112.6c-3.7 2.1-6.1 6-6.1 10.3l-2.8 230.1c-.1 4.3 2.2 8.2 5.8 10.4l198.9 119.3c1.9 1.1 4 1.7 6.2 1.7 2 0 4-.5 5.9-1.5l200.7-112.6c3.8-2.1 6.1-6.1 6.1-10.4l1.7-231.9c0-4.3-2.2-8.3-5.9-10.4zm-218.8 334.7-176.6-105.9 2.5-201.8 174.1 102.8v204.9zm12.2-225.6-174.6-103 177-99.4 174.4 103.5-176.8 98.9zm186.8 126-175 98.2v-203.4l176.5-98.7-1.5 203.9z' />
    <path d='M162.633 299.063c2 0 4-.5 5.9-1.5 5.8-3.3 7.8-10.6 4.6-16.3-3.2-5.8-10.5-7.8-16.3-4.6-5.8 3.2-7.8 10.5-4.6 16.3 2.2 3.9 6.2 6.1 10.4 6.1zM122.533 321.663c2 0 4-.5 5.9-1.5 5.8-3.2 7.8-10.6 4.6-16.3-3.2-5.8-10.6-7.8-16.3-4.6-5.8 3.2-7.8 10.6-4.6 16.3 2.1 3.9 6.2 6.1 10.4 6.1zM202.833 276.563c2 0 4-.5 5.9-1.5 5.8-3.2 7.8-10.6 4.6-16.3-3.2-5.8-10.6-7.8-16.3-4.6-5.8 3.2-7.8 10.6-4.6 16.3 2.1 3.9 6.2 6.1 10.4 6.1zM82.433 344.163c2 0 4-.5 5.9-1.5 5.8-3.3 7.8-10.6 4.6-16.3-3.3-5.8-10.6-7.8-16.3-4.6-5.8 3.2-7.8 10.6-4.6 16.3 2.1 3.9 6.2 6.1 10.4 6.1zM355.533 322.863c1.9 1.1 4 1.7 6.1 1.7 4.1 0 8.1-2.1 10.3-5.9 3.4-5.7 1.5-13.1-4.2-16.4-5.7-3.4-13.1-1.5-16.5 4.2-3.3 5.7-1.4 13 4.3 16.4zM315.933 299.363c1.9 1.1 4 1.7 6.1 1.7 4.1 0 8.1-2.1 10.3-5.9 3.4-5.7 1.5-13.1-4.2-16.4-5.7-3.4-13.1-1.5-16.4 4.2-3.3 5.7-1.5 13 4.2 16.4zM276.433 275.863c1.9 1.1 4 1.7 6.1 1.7 4.1 0 8.1-2.1 10.3-5.9 3.4-5.7 1.5-13.1-4.2-16.4-5.7-3.4-13.1-1.5-16.4 4.2-3.4 5.7-1.5 13 4.2 16.4zM395.133 346.363c1.9 1.1 4 1.7 6.1 1.7 4.1 0 8.1-2.1 10.3-5.9 3.4-5.7 1.5-13.1-4.2-16.5s-13.1-1.5-16.4 4.2c-3.4 5.7-1.5 13.1 4.2 16.5zM244.233 138.063c-6.6-.1-12.1 5.2-12.1 11.9-.1 6.6 5.2 12.1 11.8 12.1h.2c6.6 0 11.9-5.3 12-11.9 0-6.6-5.3-12.1-11.9-12.1zM244.733 91.963c-6.6-.1-12.1 5.2-12.1 11.8-.1 6.6 5.2 12.1 11.9 12.2h.1c6.6 0 11.9-5.3 12-11.9.1-6.5-5.2-12-11.9-12.1zM245.033 69.963h.2c6.6 0 11.9-5.3 12-11.9s-5.2-12.1-11.9-12.1c-6.6-.1-12.1 5.2-12.1 11.8-.1 6.7 5.2 12.1 11.8 12.2zM243.633 184.063c-6.6-.1-12.1 5.2-12.1 11.8-.1 6.6 5.2 12.1 11.9 12.2h.1c6.6 0 11.9-5.3 12-11.9 0-6.6-5.3-12-11.9-12.1z' />
  </svg>
);

CubeIcon.defaultProps = {
  mainColor: 'transparent',
};
