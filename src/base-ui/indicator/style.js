import styled from "styled-components";

export const IndicatorWrapper=styled.div`
    overflow:hidden;
    
    .indicator-content{
        transition:all 200ms ease;
        display:flex;
        >*{
            flex:0 0 auto;
        }
    }
`