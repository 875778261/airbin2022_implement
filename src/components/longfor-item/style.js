import styled from "styled-components";

export const LongforItemWrapper = styled.div`
    width:20%;
    flex:0 0 auto;
    .longfor-item-inner{
        position:relative;
        padding:8px;
        .longfor-item-cover{
            border-radius:5px;
            overflow:hidden;
            .cover-img{
                width:100%;
            }
            
        }
        .longfor-item-coverbg {
            content: "";
            position: absolute;
            bottom: 8px;
            left: 8px;
            right:8px;
            border-radius:5px;
            width: 100%-16px;
            height: 100%; /* 覆盖整个父容器 */
            background: linear-gradient(
                to top, 
                rgba(0, 0, 0, 1) 0%,    /* 底部黑色不透明 */
                rgba(0, 0, 0, 0) 40%   /* 距离底部60%处（总高度40%位置）透明 */
            );
            pointer-events: none;    /* 允许穿透点击事件[7](@ref) */
        }
        .longfor-item-info{
            position:absolute;
            left:8px;
            right:8px;
            bottom:0;
            padding: 0 24px 32px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            color: #fff;
            .city {
                font-size: 18px;
                font-weight: 600;
            }    

            .price {    
                font-size: 14px;
                margin-top: 5px;
            }    
        }
    }
`