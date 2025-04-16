const theme = {
    color: {
        primaryColor: "#ff385c",
        secondaryColor: "#00848A"
    },
    text: {
        primaryColor: "#484848",
        secondaryColor: "#222"
    },
    mixin: {
        boxShadow: `
            transition:all .2s ease;
            &:hover{
                box-shadow:0px 1px 2px 1px rgba(0,0,0,.2)
            }
        `
    }
}

export default theme