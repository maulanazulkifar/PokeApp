const breakpoints = [576, 768, 992, 1200]
const mq = breakpoints.map(
    bp => `@media (max-width: ${bp}px)`
)
export const styles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '10px',
        boxShadow: '-5px 5px 0 0 #000',
        borderRadius: '10px',
        padding: '10px',
        textAlign: 'center',
        width: '25vw',
        backgroundColor: '#14A06F',
        '&:hover': {
            backgroundColor: 'green',
            color: 'white',
            cursor: 'pointer'
        },
        [mq[0]]: {
            width: '70vw',
        }
}
export const image = {
    width: '100px',
    height: '100px'
}
export const info = {
    color: 'white',
    flexGrow: '2'
}
export const buttonRelease = {
    display: 'flex',
    justifyContent: 'center'
}