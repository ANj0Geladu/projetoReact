import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../constants/url"
import { GlobalContext } from "./GlobalContext"

export const GlobalState = (props) => {
    const [recipes, setRecipes] = useState([])

    const getRecipes = () => {
        axios.get(`${BASE_URL}/recipe/all`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((res) => {
                setRecipes(res.data)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    const data = {
        recipes,
        setRecipes,
        getRecipes
    }
    return (
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    )
}