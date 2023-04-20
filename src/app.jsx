import React, { useState } from 'react'
import api from '../src/api'
import { Users } from '../src/components/users'
import { SearchStatus } from './components/searchStatus'


export const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    const handleDelete = (userId) => {
        const filtered = users.filter(user => user._id !== userId)
        setUsers(filtered)
    }

    const handleToggleBookmark = (id) => {
        setUsers((prevUsers) => {
            return prevUsers.map((user) => {
              if (user._id === id) {
                return { ...user, bookmarked: !user.bookmarked };
              }
              return user;
            });
          });
    }

    return (
        <>
            <SearchStatus length={users.length} />
            {users.length > 0 && (
                <>
                    <Users users={users} onDelete={handleDelete} onToggle={ handleToggleBookmark} />
                </>
        )}
    </>    
    )
    
    

}