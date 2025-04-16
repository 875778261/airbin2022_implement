import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
    position:relative;
    .control{
        position:absolute;
        top:50%;
        transform:translate(0,-50%);
        width:30px;
        height:30px;
        background-color: #fff;
        border:2px solid #fff;
        border-radius: 50%;
        display:flex;
        align-items:center;
        justify-content:center;
        z-index:9;
        box-shadow:  0 0 3px 1px rgba(0, 0, 0, .2);
        transition:all .2s ease;
        &:hover{
            
        }
        &.right{
            right:-20px;
        }
        &.left{
            left:-20px;
        }
    }
    
    .scroll{
        overflow:hidden;
        padding:4px 0;
        .content{
            display:flex;
            transition:transform 200ms ease;
        }
    }
    
`