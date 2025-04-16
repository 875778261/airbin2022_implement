import styled from "styled-components";

export const SectionFooterWrapper=styled.div`
    display:flex;
    font-size:17px;
    font-weight:700;
    margin-top:20px;

    .info{
        display:flex;
        text-align:center;
        cursor:pointer;
        
        color:${(props)=>{return props.color}};

        &:hover{
            text-decoration:underline;
            
        }
        .text{
            margin-right:8px;
        }
    }
    
    
`