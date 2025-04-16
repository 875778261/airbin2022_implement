import styled from "styled-components";

export const DetailPictureWrapper = styled.div`

position:relative;
    .pic-content{
        width:100%;
        height:600px;
        display:flex;
        overflow:hidden;
        box-sizing:border-box;

        .pic{
            box-sizing:border-box;
            width:50%;
            height:100%;
            overflow:hidden;
            .cover{
                position:absolute;
                width:100%;
                height:100%;
                left:0;
                right:0;
                top:0;
                bottom:0;
                background-color: rgba(0,0,0,.4);
                opacity:1;
                transition:all 250ms ease;
            }
            &.pic-left{
                .img-left{
                    position:relative;
                    width:100%;
                    height:100%;
                    box-sizing:border-box;
                    overflow:hidden;
                    img{
                        width:100%;
                        height:100%;
                        object-fit: cover;
                        transition:all 200ms ease;
                    }
                    &:hover{
                        img{
                            transform: scale(1.08);
                        }
                        .cover{
                            opacity:0;
                        }
                    }
                }
            }
            &.pic-right{
                display:flex;
                flex-wrap:wrap;
                overflow:hidden;
                .img-right{
                    position:relative;
                    width:50%;
                    height:50%;
                    box-sizing:border-box;
                    overflow:hidden;
                    img{
                        width:100%;
                        height:100%;
                        object-fit: cover;
                        transition:all 200ms ease;
                    }
                    &:hover{
                        img{
                            transform: scale(1.08);
                        }
                        .cover{
                            opacity:0;
                        }
                    }
                }
            }
           
        }
    }
    

    .show-browser-btn{
        position:absolute;
        bottom:40px;
        right:50px;
        font-size:20px;
        background-color: #fff;
        padding:5px 8px;
        box-shadow: 0 0 5px 2px black;
        border-radius:5px;
        cursor:pointer;
        transition:box-shadow 250ms ease;
        &:hover{
            box-shadow: 0 0 5px 2px white;
        }
    }
    
    
`