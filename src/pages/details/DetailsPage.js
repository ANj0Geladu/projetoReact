import { Image } from "@chakra-ui/image"
import { Heading, Text } from "@chakra-ui/layout"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { BASE_URL } from "../../constants/url"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { DetailContainerStyled } from "./styled"

export const DetailsPage = () => {
    useProtectedPage()
    const { id } = useParams()
    const [recipe, setRecipe] = useState()

    const getRecipe = (id) => {
        axios.get(`${BASE_URL}/recipe/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((res) => {
                setRecipe(res.data)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    useEffect(() => {
        getRecipe(id)
    })

    return recipe && (
        <DetailContainerStyled>
            <Image
                src={recipe.imageUrl}
            />
            <Heading size="md">{recipe.title}</Heading>
            <Text textAlign="center">{recipe.description}</Text>
        </DetailContainerStyled>
    )
}