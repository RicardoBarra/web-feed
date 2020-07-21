import React from "react";
import Feed from './Feed'

const all_gifs = [ 
  {
    name: 'You are...',
    gif: "https://giphy.com/embed/Kan4pmEhJEuvvgGXy5"
    
  },
  {
    name: 'Huston',
    gif: "https://giphy.com/embed/xT9IgIc0lryrxvqVGM" 
    
  },
  {
    name: 'You sassy',
    gif: "https://giphy.com/embed/2yqyPZUR4mPFyRTpYi" 
  },
]

export default function Structure(props) {
  return (
    <div>
        <div className="main">
        <div className="popular_posts">a</div> 
        {all_gifs.map((gif) => (
          <div className="col-md-6 col-lg-4">
          <Feed  
              name={gif.name}     
              gif={gif.gif} 
          />
          </div>
        ))}
        <div className="advertisements">c</div>
      </div>
    </div>
  );
}


