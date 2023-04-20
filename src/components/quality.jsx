import React from 'react'

export const Quality = ({ id, color, name}) => {
    return <span key={id} className={'badge m-2 bg-' + color}>{name}</span>
}