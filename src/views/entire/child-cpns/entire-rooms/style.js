import styled from "styled-components";

export const EntireRoomsWrapper = styled.div`
margin-top:128px;
position:relative;
padding: 30px 20px;
.total-text{
    color:black;
}
.room-list {
    display:flex;
    flex-wrap:wrap;
}
>.rooms-cover{
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color: rgba(255,255,255,.8);
}
`