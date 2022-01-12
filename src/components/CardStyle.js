const breakpoints = [576, 768, 992, 1200]
const mq = breakpoints.map(
    bp => `@media (max-width: ${bp}px)`
)
export const cardStyle = {
        margin: '10px',
        border: 'green solid 2px',
        boxShadow: '-5px 5px 0 0 #000',
        borderRadius: '10px',
        padding: '10px',
        textAlign: 'center',
        width: '25vw',
        backgroundColor: 'yellowgreen',
        '&:hover': {
            backgroundColor: 'green',
            color: 'white',
            cursor: 'pointer'
        },
        [mq[0]]: {
            width: '70vw',
        }
}