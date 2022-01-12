import {keyframes} from "@emotion/react";

const rotate = keyframes({
    'from': {
        transform: 'rotate(0deg)'
    },
    'to': {
        transform: 'rotate(359deg)'
    }
})
export const LoaderStyle = {
    width: '50px',
    height: '50px',
    textAlign: 'center',
    animation: `${rotate} 2s infinite linear`
}