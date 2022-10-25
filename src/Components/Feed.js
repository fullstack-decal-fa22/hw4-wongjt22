import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
    const [posts, setPosts] = useState([]) // TODO: edit this variable
    const updatePosts = (newPost) => {
        const newPosts = [...posts];
        newPosts.push(newPost);
        setPosts(newPosts);
    }

    return (
        <div>
            <Menu updatePosts={updatePosts}></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts.map((p) => (
                <Block color={p.color} caption={p.caption}/>
            ))}
        </div>
    );
}

export default Feed;