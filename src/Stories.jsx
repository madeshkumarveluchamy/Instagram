import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Stories = () => {
  const [stories, setStories] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/story")
      .then((data) => data.json())
      .then((data) => setStories(data))
      .catch((err) => console.log(err));
    console.log(stories);
  }, []);
  let tot = stories.length

  return (
    <div className="story d-flex gap-3">
      {stories.length > 0 ? (
        stories.map((story) => (
          <div key={story.id} className="my-4" onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>

            <div className="gradient-border">
            <img
              src={story.user.profile_pic}
              alt="dp"
              className="story-dp rounded-circle"
            />

            </div>
            <p className="text-truncate" style={{ width: "50px" }}>
              {story.user.username}
            </p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Stories;
