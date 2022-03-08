import { useState, createContext } from "react";
import { useContext } from "react";

//contexts start with uppercase letter by convention
//contexts can be of any data type
const LikesDislikesContext = createContext(
    {
        //likesDislikesContextObj: {}  //{ restaurantId: 123, likes: 23, dislikes: 5 }
        restaurantId: null,
        likesCount: 0,
        dislikesCount: 0
    }
)
//regular react component
const LikesDislikesContextProvider = (props) =>{
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [id, setId] = useState(null);

    setLikesDislikes()

    const context = {
        likesCount: likes,
        dislikesCount: dislikes,
        restaurantId: id
    }

    return (
        <LikesDislikesContext.Provider value={context}>
            {props.children}
        </LikesDislikesContext.Provider>
    )
}