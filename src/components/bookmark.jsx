import React from 'react'

export const Bookmark = (props) => {
    const bookmarks = [<i className="bi bi-bookmark"></i>, <i className="bi bi-bookmark-heart-fill"></i>]

    if(props.state) {
        return(
            <>
            {bookmarks[1]}
            </>
        )
    }

    if(!props.state) {
        return(
            <>
            {bookmarks[0]}
            </>
        )
    }

}