import styled from "styled-components";

export const SearchDownSectionWrapper = styled.div`
    .infos-list{
        display:flex;
        justify-content:center;
        align-items:center;
        width: 850px;
        height: 66px;
        border-radius: 32px;
        border: 1px solid #ddd;
        background-color: #fff;
        box-sizing:border-box;
        .infos-item{
            flex:1;
            border-radius: 32px;
            display:flex;
            align-items:center;
            .item-info{
                flex:1;
                display:flex;
                flex-direction:column;
                justify-content:center;
                padding:0 30px;
                height:66px;
                .title{
                    font-size: 12px;
                    font-weight: 800;
                    color: #222;
                }
                .desc {
                    font-size: 14px;
                    color: #666;
                } 
            }
            &:hover {
                background-color: #eee;
            }  
            .divider {
                height: 32px;
                width: 1px;
                background-color: #ddd;
            } 
        }
        
    }
`