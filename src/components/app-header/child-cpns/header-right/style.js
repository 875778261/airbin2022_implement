import styled from "styled-components";
export const RightWrapper = styled.div`

  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > .btns{
    flex:0 0 auto;
    position:relative;
    display:flex;
    align-items:center;
    color: ${props => props.theme.isAlpha ? "#fff" : props.theme.text.primaryColor};
    > :nth-child(n):not(:last-child){
      
      margin-right:-8px;
    }
    .btn{
      padding:8px 15px;
      border-radius: 22px;
      cursor: pointer;
      ${props => (props.theme.mixin.boxShadow)}
      &:hover {
        background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,.1)": "#f5f5f5"};
      }
    }

  }
  > .profile{
    position:relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    ${props => (props.theme.mixin.boxShadow)}
    color: ${props => props.theme.isAlpha ? "#fff" : props.theme.text.primaryColor};
    &:hover {
        background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,.1)" : "#f5f5f5"};
      }
  }
  > .profile{
    > .panel{
        position:absolute;
        right:0;
        top:45px;
        width: 240px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 6px rgba(0,0,0,.2);
        color: #666;
      .top, .bottom{
          padding:10px 0;
        .item{
          height:40px;
          line-height:40px;
          padding:0 15px;
          border-radius: 10px;
          transition:all .2s ease;
          cursor: pointer;
          &:hover{
            background-color: #f5f5f5;
          }
        }
      }
      .top{
        border-bottom:1px solid #ddd;
      }
    }
  }
  `