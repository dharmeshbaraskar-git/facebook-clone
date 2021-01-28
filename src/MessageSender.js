import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import db from './firebase';
import firebase from 'firebase';
import { useStateValue } from './stateProvider';
function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        //db changes
        db.collection('posts').add({
            message: input,
            image: imageUrl,
            profilePic: user.photoURL,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })


        setImageUrl("");
        setInput("");
    }
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar />
                <form>
                    <input className="messageSender_input" type="text" placeholder="What's on your Mind?"
                        value={input} onChange={(e) => setInput(e.target.value)} />

                    <input type="text" placeholder="Image URL (Optional)"
                        value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

                    <button onClick={handleSubmit} type="submit">hidden</button>
                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{ color: "Red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{ color: "Green" }} />
                    <h3>Photo\Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{ color: "Orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
}

export default MessageSender;