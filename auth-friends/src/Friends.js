import React, { useState, useEffect } from "react";
import api from "./api";
import FriendInfo from "./FriendInfo";

const Friends = props => {
    const [friendList, setFriendList] = useState([]);

    useEffect(() => {
        api()
            .get('http://localhost:5000/api/friends', {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then(res => {
                setFriendList(res.data)
                console.log(res.data)
            })

            .catch(err => {
                console.log(err.response)
            })
    }, [])

    return (
        <div>
        <h2>My Friends</h2>
        {friendList.map(friend => {
            return <FriendInfo key={friend.id} friend={friend} />
        })}
    </div>
    )
}

export default Friends;