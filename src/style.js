import styled from 'styled-components';

export const OverlayTopMenuSidebar = styled.section`
  transform: translate(11px, -50%);
  top: 50vh;
  left: 0px;
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

export const BaseButtonSidebar = styled.button`
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

export const LoadingContentWrapperSidebar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 75px;
`;

export const ContentWrapperSidebar = styled.div`
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

export const BaseIconSidebar = styled.div`
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

export const SettingsIconSidebar = styled.svg`
  transition: fill 300ms;
  fill: #fff;
  display: block;
  height: 100%;
  width: 100%;
`;

export const OverlayTopMenu = styled.section`
  transform: translate(-50%, 11px);
  left: 50vw;
  top: 0px;
  transition: transform 250ms;
  position: fixed;
`;

export const HorizontalMenu = styled.div`
  border-radius: 25px;
  background: #393939;
  display: flex;
  padding: 5px 25px;
  position: relative;
  transition: padding 400ms;
  box-shadow: 1px 3px 6px 0 rgba(0, 0, 0, 0.2);
`;

export const BaseButton = styled.button`
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

export const LoadingContentWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 75px;
`;

export const ContentWrapper = styled.div`
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

export const SettingsIcon = styled.svg`
  transition: fill 300ms;
  fill: #fff;
  display: block;
  height: 100%;
  width: 100%;
`;

export const OverlayBottomMenu = styled.section`
  transform: translate(-50%, 11px);
  left: 50vw;
  bottom: 21px;
  transition: transform 250ms;
  position: fixed;
`;
