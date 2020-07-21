import React, { useState } from 'react'

export default function LikeButton() {

    const [hasLike, set_hasLike] = useState("")
    const handleOnClick = () => {
        set_hasLike(!hasLike)
    }


return (
    <div>
        <button onClick={handleOnClick}>
            {hasLike ? "You've like this. Click to unlike"
            : "Like this"    
        }
        </button>
    </div>
)
}