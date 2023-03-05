import React from 'react'

interface Props {
    onClick: () => void,
    isOpen: boolean,
    delete?: boolean
}

const Overlay: React.FC<Props> = (props) => {
    const clickHandler = () => {
        props.onClick()
    }
    return (
        <div className={`fixed left-0 bottom-0 w-full h-full bg-black/80 lg:left-[5.5rem] ${props.delete ? 'lg:left-0 z-40' : 'z-30'} ${props.isOpen ? 'fixed' : 'hidden'}`} onClick={clickHandler}></div>
    )
}

export default Overlay