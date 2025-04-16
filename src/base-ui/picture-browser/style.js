import styled from "styled-components";

export const PictureBrowserWrapper = styled.div`
    position:fixed;
    width:100%;
    height:100vh;
    min-height:350px;
    bottom:0;
    top:0;
    right:0;
    left:0;
    box-sizing:border-box;
    user-select:none;
    z-index:999;
    .pic-browser{
        width:100%;
        height:100%;
        background-color: rgba(30,30,30,.9);
        display:flex;
        flex-direction:column;
        box-sizing:border-box;
        .top{
            flex:0 0 5%;
            display:flex;
            align-items:center;
            justify-content:end;
            .top-close-btn{
                display:flex;
                align-items:center;
                justify-content:center;
                color:white;
                vertical-align: top;
                width:50px;
                height:50px;
                font-size:50px;
                font-weight:800;
                border:4px solid white; 
                padding-bottom:5px;
                cursor:pointer;
                transition:box-shadow 200ms ease;
                margin-right:50px;
                &:hover{
                    box-shadow:0 0 5px 2px white;
                }
            }
        }
        .center{
            position:relative;
            width:100%;
            flex:1 1 auto;
            overflow:hidden;
            display:flex;
            justify-content:center;
            align-items:center;
            padding:0 0 10px 0;
            .center-pic-view{
                position:relative;
                height: 100%;
                width: 100%;
                overflow: hidden;
                max-width: 105vh;
                min-width:150px;
                img{
                    position:absolute;
                    top:0;
                    left:0;
                    right:0;
                    height:100%;
                    margin:0 auto;
                    user-select: none;
                }
                .pictransition-enter{
                    transform:translateX(${props=>props.$isNext?'100%':"-100%"}) ;
                    opacity:0;
                }
                .pictransition-enter-active{
                    transform:translateX(0);
                    opacity:1;
                    transition:all 200ms ease;
                }
                .pictransition-exit{
                    transform:translateX(0);
                    opacity:1;
                }
                .pictransition-exit-active{
                    transform:translateX(${props=>props.$isNext?"-100%":'100%'});
                    opacity:0;
                    transition: all 200ms ease;
                }
            }
            .center-ctrl{
                position:absolute;
                top: 0;
                bottom: 0;
                width:100%;
                height:100%;
                display:flex;
                justify-content:space-between;
                align-items:center;
                .ctrl{
                    color:white;
                    cursor: pointer;
                }
            }
        }
        .bottom{
            box-sizing:border-box;
            background-color: #000;
            box-shadow:0 0 5px 2px rgba(200,200,200,.5);
            display:flex;
            justify-content:center;
            height:100px;
            transition: height 300ms ease;
                    height:${props=>props.$showIndicator?'100px':'33px'};
            .info{
                position:absolute;
                bottom:10px;
                max-width:105vh;
                min-width:400px;
                color:white;
                .desc{
                    display:flex;
                    justify-content:space-between;
                    .count{

                    }
                    .show-btn{
                        cursor: pointer;
                    }
                }
                .bottom-indicator{
                    overflow:hidden;
                    height:67px;
                    transition: height 300ms ease;
                    height:${props=>props.$showIndicator?'67px':'0'};
                    .indicator-item{
                        margin-right:15px;
                        cursor: pointer;
                        img{
                            height:67px;
                            opacity:.5;
                            transition:opacity 300ms ease; 
                        }
                        &.active{
                            img{
                                opacity:1;
                            }
                        }
                    }

                }
            }
            
        }
        
    }
`