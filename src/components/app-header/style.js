import styled from "styled-components";

export const HeaderWrapper = styled.div`
    &.fixed{
        position:fixed;
        top:0;
        left:0;
        right: 0;
        z-index:99;
    }
    >.content{
        position:relative;
        z-index:9;
        background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,0)": "rgba(255,255,255,1)"};
        border-bottom: 1px solid #f2f2f2;
        border-bottom-color: ${props => props.theme.isAlpha ? "rgba(233,233,233,0)": "rgba(233,233,233,1)"};
        transition:all 300ms ease;
        .top{
            display: flex;
            align-items:center;
            height: 80px;
        }
        .search-empty-area{
            height:0;
            /* background-color: #fff; */
            transition:all 200ms ease;
            &.search-empty-area-active{
                height: 100px;
            }
        }
    }
    >.cover{
        position:fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index:1;
        background-color: rgba(0,0,0,.5);
    }
    
`;