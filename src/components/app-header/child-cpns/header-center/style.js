import styled from "styled-components";

export const CenterWrapper = styled.div`
  position:relative;
  display: flex;
  align-items:center;
  justify-content:center;

  .search-box{
    position:absolute;
    display:flex;
    width: 300px;
    height: 48px;
    justify-content:space-between;
    align-items:center;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    ${props=>props.theme.mixin.boxShadow}
    > input{
      box-sizing:border-box;
      flex:1;
      height: 35px;
      border:none;
      outline:none;
      padding: 0 16px;
      color: #222;
      font-weight: 600;
      background-color:rgba(0,0,0,0);
    }
    > .icon{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${props => props.theme.color.primaryColor};
    }
  }
  .search-detail{
    position:relative;
    .infos{
      position:absolute;
      top:60px;
      left:50%;
      transform:translateX(-50%)
    }
  }

  .search-bar-enter{
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }
  .search-bar-enter-active{
    transition: all 200ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }
  .search-bar-exit{
    opacity: 0;
  }
  .search-more-enter{
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }
  .search-more-enter-active{
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 200ms ease;
  }

  .search-more-exit{
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }
  .search-more-exit-active{
    transition: all 200ms ease;
    transform: scale(0.35, 0.2) translateY(-58px);
    opacity: 0;
  }

  `
 
  