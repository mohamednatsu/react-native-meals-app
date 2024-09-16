import { View, Text } from 'react-native'
import MealDetailsItem from '../components/MealDetailsItem'
import IconButton from '../components/IconButton'
import {useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../store/redux/favorites'
// import { FavoritesContext } from '../store/context/favorites-context'

export default function MealDetailsScreen({route, navigation}) {
    const mealId = route.params.mealId
    const mealColor = route.params.mealColor


    // const FavoritesMealCtx = useContext(FavoritesContext)

    const favoritesMealIds = useSelector((state) => state.favoriteMeal.ids)

    const dispatch = useDispatch()

    const isMealFavorite = favoritesMealIds.includes(mealId)

    function changeFavoritesStatuesHandler()
    {
        if (isMealFavorite) {
            // FavoritesMealCtx.removeFavorite(mealId)
            dispatch(removeFavorite({id: mealId}))
        }
        else {
            // FavoritesMealCtx.addFavorite(mealId)
            dispatch(addFavorite({id: mealId}))
        }
    }

    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                    color={"white"}
                    name={isMealFavorite ? "heart" : "heart-outline"}
                    size={27}
                    onPress={changeFavoritesStatuesHandler}
                />
            }
        })
    }, [navigation, changeFavoritesStatuesHandler])

    return (
        <MealDetailsItem id={mealId} colorMeal={mealColor} />
    )
}