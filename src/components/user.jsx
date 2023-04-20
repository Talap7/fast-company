import React from "react";
import { searchStatus } from "./searchStatus";
import { Quality } from './quality'
import { Bookmark } from './bookmark'

export const User = (props) => {
    const { user } = props
    return ( 
        <>
            <tr key={user._id}>
                <th scope='row'>{user.name}</th>
                <td scope='row'>{user.qualities.map(quality => (<Quality key={quality._id} {...quality} />))}</td>
                <td scope='row'>{user.profession.name}</td>
                <td scope='row'>{user.completedMeetings}</td>
                <td scope='row'>{user.rate }</td>
                <td scope='row'><button onClick={() => props.onToggle(user._id)}> <Bookmark state={user.bookmarked} /></button></td>
                <td><button className='btn btn-danger btn-sm m-2' onClick={ () => props.onDelete(user._id)}>Delete</button></td>
            </tr>
        </>
    )
}