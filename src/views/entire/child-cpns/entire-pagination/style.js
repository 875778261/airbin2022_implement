import styled from "styled-components";

export const EntirePaginationWrapper = styled.div`

    .pagination {
        padding:15px 0;
        ul{
            justify-content:center;
            .MuiPaginationItem-page:hover{
                background-color: rgba(0,0,0,0);
                text-decoration:underline;
            }
            .Mui-selected{
                color:white;
                background-color:black;
            }
            svg{
                font-size:30px;
            }
        }
        .pagination-desc{
            margin-top:10px;
            text-align:center;
        }
    }
    
`