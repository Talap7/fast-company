import React from 'react'

export const SearchStatus = ({ length }) => {
    let classes = 'badge '
    classes += length === 0 ? 'bg-danger' : 'bg-primary'
    let notification = ''
    if (length >= 5) notification = `${length} Человек тусанет с тобой сегодня`
    if (length < 5) notification = `${length} Человека тусанут с тобой сегодня`
    if (length === 1) notification = `${length} Человек тусанет с тобой сегодня`
    if (length === 0) notification = `Никто с тобой не тусанет`

    
    return (
        <h1><span className={classes}>{ notification}</span></h1>
    )
}