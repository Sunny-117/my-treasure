import React from 'react'

const FancyButton = React.forwardRef((props, ref) => {
    return (
        <button ref={ref} className="FancyButton" >
            {props.children}
        </button>
    )
})


export default function Demo() {
    const ref = React.createRef();
    console.log('first')
    return (
        <div>
            <FancyButton ref={ref}>Click me!</FancyButton>;
        </div>
    )
}
