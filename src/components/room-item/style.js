import styled from "styled-components";

export const RoomItmeWrapper = styled.div`

    box-sizing:border-box;
    width:${props => props.$infowidth};
    overflow:hidden;
    padding:8px;
    border-radius:5px;
    user-select: none; 
    flex:0 0 auto;
    ${props => props.theme.mixin.boxShadow}
    &:hover{
        background-color:rgba(250,250,250,.9);
    }
    .inner{
        width:100%;
        .cover{
            position:relative;
            padding-top:66.6666%;
            overflow:hidden;
            border-radius: 5px;
            img{
                object-fit:cover;
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
            }
        }
        .swiper{
            position:relative;
            .control{
                position:absolute;
                top:0;
                left:0;
                height:100%;
                width:100%;
                display:flex;
                
                justify-content:space-between;
                .btn{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    height:100%;
                    width:13%;
                    transition:background-color 200ms ease;
                    color:white;
                    &:hover{
                        background-color: rgba(0,0,0,.6);
                    }
                    &.left{

                    }
                    &.right{

                    }
                }
            }
            .indicator{
                position:absolute;
                left:0;
                right:0;
                bottom:10px;
                width:30%;
                margin:0 auto;
                .indicator-item{
                    display:flex;
                    width: 14.29%;
                    height:15px;
                    justify-content:center;
                    align-items:center;
                    .dot{
                        width: 5px;
                        height: 5px;
                        background-color: #fff;
                        border-radius: 50%;
                        transition:all 100ms ease;
                        &.active {
                            width: 10px;
                            height: 10px;
                        }
                        &.active12{
                            width: 7px;
                            height: 7px;
                        }
                    }
                }
            }
        }
        
        .msg{
            margin: 10px 0 5px;
            font-size: 12px;
            font-weight: 700;
            color:#767676;
        }
        .name{
            font-size: 16px;
            font-weight: 700;
            overflow: hidden;  
            text-overflow: ellipsis; 
            display: -webkit-box; 
            -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical;
        }
        .price {
            margin: 8px 0;
        }
        .bottom-info{
            display:flex;
            align-items:center;
            .count {
                margin: 0 2px 0 4px;
            }
        }
        
    }
`