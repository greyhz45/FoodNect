import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const LikeDislike = () => {
    //allow only single like or dislike
    //(fetch likes-dislikes for a particular restaurant from db)
    const [alreadyLiked, setAlreadyLiked] = useState(false);
    const [alreadyDisliked, setAlreadyDisliked] = useState(false);
    //in React, any dynamic variable (that can change) needs to use useState() else it won't update

    const [likeCount, setLikeCount] = useState(17);
    const [dislikeCount, setDislikeCount] = useState(17);

    /*const handleLikeClick = () => {
        if(!alreadyLiked){
            setLikeCount( likeCount + 1 );
            
            setAlreadyLiked(!alreadyLiked);
        }
    }

    const handleDislikeClick = () => {
        if(!alreadyDisliked){
            setDislikeCount( dislikeCount + 1 );
            
            setAlreadyDisliked(!alreadyDisliked);
        }
    }*/

    const handleClick = (e) => {
        switch (e.target.getAttribute("action")){
            //click "like": like +1, 
            //click "like" twice: toggle like (-1)
            //click "dislike": if already liked then like -1 and dislike +1
            //click "dislike" twice: toggle dislike (-1)
            //either you like it or dislike it but not both
            case "liked":
                if(alreadyDisliked){
                    setDislikeCount(dislikeCount - 1)
                    setAlreadyDisliked(!alreadyDisliked)
                }
                if(!alreadyLiked){
                    setLikeCount(likeCount + 1)
                    setAlreadyLiked(!alreadyLiked)
                }else{
                    setLikeCount(likeCount - 1)
                    setAlreadyLiked(!alreadyLiked)
                }
                break;
            case "disliked":
                if(alreadyLiked){
                    setLikeCount(likeCount - 1)
                    setAlreadyLiked(!alreadyLiked)
                }
                if(!alreadyDisliked){
                    setDislikeCount(dislikeCount + 1)
                    setAlreadyDisliked(!alreadyDisliked)
                }else{
                    setDislikeCount(dislikeCount - 1)
                    setAlreadyDisliked(!alreadyDisliked)
                }
                break;
        }
    }

  return (
    <>
        <div className="like-dislike-wraper">
            <button className="btn btn-outline-primary" action="liked" onClick={handleClick}> {/*onClick={handleLikeClick}>*/}
                <FaThumbsUp /> ({ likeCount }) Likes
            </button>
            <button className="btn btn-outline-danger" action="disliked" onClick={handleClick}>  {/*onClick={handleDislikeClick}>*/}
                <FaThumbsDown /> ({ dislikeCount }) Dislikes
            </button>
        </div>
    </>
  )
}
export default LikeDislike;
