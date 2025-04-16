import styled from "styled-components";
export const LeftWrapper = styled.div`

  flex: 1;
  display: flex;
  align-items: center;
  .logo {
    svg path {
      fill:  ${props => props.theme.isAlpha ? "#fff" : props.theme.text.primaryColor};;
    }
  }
  

  `