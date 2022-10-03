import styled from 'styled-components';

export const RightSidebar = ({ sidebarData, handleGeneric }) => {
  return (
    <OverlayRightSidebar>
      <LeftMenu>
        {sidebarData.map(data => (
          <BaseButtonRightSidebar
            key={data.id}
            id={data.id}
            onClick={() => handleGeneric(data)}
          >
            <LoadingContentWrapper>
              <ContentWrapper mainColor={data.mainColor}>
                <BaseIcon>
                  <SettingsIcon>
                    <CubeIcon2 mainColor={data.mainColor} />
                  </SettingsIcon>
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

const CubeIcon2 = props => (
  <svg fill={props.mainColor} viewBox='0 0 215 150' {...props}>
    <path d='M70.2 6.3c-3.8 4-2.8 6.4 3.7 8.6 3.8 1.2 7.7 4.3 24.1 18.6 6.3 5.5 13.9 12.1 16.8 14.5 6.3 5.2 8 7.9 6.1 9.1-1.4.9-.7 1.2 2.1 1 .8 0 4.4 2.5 7.9 5.7 5.8 5.2 6.3 6 5.2 7.9-.9 1.9-.8 2.5 1.1 4.3 1.2 1.1 3 2 4 2 2.4 0 17.8 13.7 17.8 15.8 0 1-.7 2.8-1.6 4-1.5 2.1-1.5 2.5 0 4.1.9 1 1.6 2.2 1.6 2.8 0 .6.6 1.3 1.3 1.6 4.2 1.6-3.7 2.2-25 1.9l-24.3-.3V94H69v10.2l-3.4-2.9c-3.8-3.1-4.4-4.3-2.1-4.3 2 0 1.9-3.4-.1-5.4-.8-.9-2.6-1.9-4-2.2-1.3-.3-2.1-1-1.8-1.5 1-1.7-5.6-4.6-10.9-4.8-6.6-.1-10.7-1-10.7-2.2 0-.6-.4-.8-.8-.5-.4.2-1.4.1-2.2-.4-2.1-1.3.3-5.8 3.5-6.6 4.1-1 2.8-2.4-2.2-2.4-5.7 0-9.5.9-8.8 2 .3.5.1 1.1-.4 1.4-.5.3-.7 1.6-.3 2.9.5 1.9.3 2-1 .9-1.4-1.1-1.7-1-2.3.7C21 80.6 20 81 16.7 81c-2.5 0-3.7.4-2.9.8.7.5 5.7.6 11.2.4 6.9-.3 10-.1 10.1.7.1.6.1 2 .1 3.1 0 3.5-.2 3.7-2.7 3.7-1.4 0-2.5-.5-2.4-1.1.1-.6 0-2.2-.1-3.6-.2-1.8-.4-2-.7-.8-.4 1.8-1.8 1.9-17 2.1-1.8 0-2.3.6-2.3 2.4 0 1.6-.7 2.7-2 3-1.7.5-2 1.4-2.1 6.7-.1 3.3-.1 7.6 0 9.4.2 1.7-.2 3.2-.8 3.2-.6 0-1.1.5-1.1 1.2 0 .6.2.9.5.6.3-.2 2.6 1.5 5.1 3.9 4 3.7 5.3 4.3 9 4.3 4.3 0 4.4 0 4.4 3.4 0 1.9.3 4.1.6 5 .4 1-.2 1.7-2 2.2-4.7 1.1-2.7 2.2 5.1 2.7 6 .4 104.4.1 141.8-.4 3.3-.1 9.9.2 14.8.6 6.2.5 8.7.4 8.7-.4 0-.7 3.3-1.1 10.3-1.1 7.4-.1 9.7-.3 8.4-1.1-2.5-1.4-23.2-2.5-22.4-1.2 1.3 2.1-2.6 2.4-4.4.4-1.6-1.6-1.6-2-.3-2.5.8-.3 1.2-.1.9.4-.3.6.1.7 1 .3 2.2-.8.1-2.2-3.5-2.4-1.4 0-1.9-.3-1.2-.6 2-.8 1.4-2.6-.8-2-1.1.3-2 .1-2-.4s.5-.9 1.1-.9c.5 0 .7-.5.4-1-.9-1.5-3.8-1.2-2.9.2.5 1 .4 1-.6.1-1.9-1.8.6-4.9 2.6-3.2 1.1.9 1.4.8 1.4-.6 0-1.5.5-1.6 3.3-1 4 1 8.7 1 15.5 0 5.2-.8 6.4-.1 4 2.3-.9.9-.5 1.2 2 1.2s3.2-.4 3.2-2c0-1.1.7-2 1.5-2s1.9-1.7 2.6-4c1-3.4.9-4.6-.6-8.2-2.2-5.1-21-23.8-23.8-23.8-1 0-5 .5-8.9 1.1-8.1 1.3-8.8.8-8.8-5.3 0-4.8-1.8-5.9-2.2-1.3l-.3 3.6-7.2-6.9c-4.7-4.5-7.8-6.7-9-6.4-7.4 1.6-7.5 1.6-15.8-5.7-4.4-3.9-8.4-7.1-8.8-7.1-1 0-1.8-.7-24.7-21C82.3 14.6 79 11.4 79 9.5 79 7.6 75.5 4 73.7 4c-.8 0-2.3 1-3.5 2.3zm120.1 79.8c1.7 3 1.7 3.3 0 7.1-1.6 3.6-2 3.9-4.8 3.4-1.6-.4-3.1-1.1-3.3-1.6-.2-.6-1.2-1-2.3-1-1 0-1.9-.5-1.9-1 0-.6-.6-1-1.4-1-.8 0-1.7-.4-2.1-1-.9-1.4.5-5.7 1.8-5.7.7 0 2.6-.2 4.2-.5 1.7-.3 2.5-.3 1.9-.1-2.1.7-.3 4.3 2.2 4.3 1.7 0 2.2-.4 1.8-1.5-.7-1.7.1-4.5 1.3-4.5.4 0 1.6 1.4 2.6 3.1zm-162.7 3c.3.5-1.8.9-4.6.9-2.9 0-4.9-.4-4.5-.9.7-1.2 8.3-1.2 9.1 0zm23.1.5c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zM9 97.7c0 2.7-.4 4.3-.8 3.6-.8-1.2-.4-8.3.4-8.3.2 0 .4 2.1.4 4.7zM170.5 123c1.4 2.7 2.5 5.3 2.5 5.8 0 .8-14 2.4-14.8 1.8-.5-.6 2.1-6.6 2.9-6.6.5 0 .9-1.4.9-3 0-2.7.3-3 3-3 2.6 0 3.3.7 5.5 5zm-56.6 4.1 1 2.9-17.7.2c-17.9.1-21.3 0-21.9-.6-.2-.2.2-1.5.8-2.9l1.2-2.6 17.8.1 17.8.1 1 2.8zm23 2.1c1.2 1.6 1.1 1.8-1.3 1.8-2.4 0-2.6-.2-1.6-2.1.7-1.1 1.3-1.9 1.4-1.7.1.1.8 1.1 1.5 2zm-84.9-.8c0 .3-.4.8-1 1.1-.5.3-1 .1-1-.4 0-.6.5-1.1 1-1.1.6 0 1 .2 1 .4z' />
    <path d='M133 68.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3z' />
  </svg>
);
