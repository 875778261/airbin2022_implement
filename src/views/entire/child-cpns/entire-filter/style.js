import styled from "styled-components";

export const EntireFilterWrapper = styled.div`
position:fixed;
top:80px;
left: 0;
right: 0;
z-index:9;
background-color: #fff;
box-shadow: 0 5px 5px 2px rgba(200,200,200,.3);
  display: flex;
  align-items: center;
  height: auto;
  padding:10px 16px;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;
    .filter-list{
        display:flex;
        flex-wrap:wrap;
        .filter-item{
            display:flex;
            padding:3px 0 ;
            .filter-item-inner{
                flex:0 0 auto;
                margin: 0 4px 0 8px;
                padding: 6px 12px;
                border: 1px solid #dce0e0;
                border-radius: 4px;
                color: #484848;
                cursor: pointer;

                &.active {
                    background: #008489;
                    border: 1px solid #008489;
                    color: #ffffff;
                }
            }
        }
        
    }
    
`