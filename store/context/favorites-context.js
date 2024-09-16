import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],

    addFavorite: (id) => {},
    removeFavorite: (id) => {},
})


export default function FavoritesContextProvider({children})
{

    const [favoritesMealId, setFavoritesMealId] = useState([])


    function addFavorite(mealId){
        setFavoritesMealId((prevFavoriteIds) => [...prevFavoriteIds, mealId])
    }

    function removeFavorite(mealId) {
        setFavoritesMealId((prevFavoriteIds) => {
            return prevFavoriteIds.filter(id => id !== mealId)
        })
        // return favoritesMealId.filter((id) => mealId !== id)
    }

    const value = {
        ids: favoritesMealId,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
}


