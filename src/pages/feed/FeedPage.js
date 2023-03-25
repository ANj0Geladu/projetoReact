import { Button } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Heading } from "@chakra-ui/layout"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { GlobalContext } from "../../contexts/GlobalContext"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { goToDetailsPage, goToAddRecipePage } from "../../routes/coordinator"
import { FeedContainerStyled, RecipeCardStyled } from "./styled"

export const FeedPage = () => {
    const navigate = useNavigate()
    useProtectedPage()
    const context = useContext(GlobalContext)
    const { recipes, getRecipes } = context

    useEffect(() => {
        getRecipes()
    }, [])


    return (
        <FeedContainerStyled>
            {recipes && recipes.map((recipe) => {
                return <RecipeCardStyled>
                    <Image
                        boxSize="xs"
                        objectFit="cover"
                        src={recipe.imageUrl}
                        alt={recipe.title}
                    />
                    <Heading
                        size="md"
                    >
                        {recipe.title}
                    </Heading>
                    <Button
                        colorScheme="orange"
                        onClick={() => goToDetailsPage(navigate, recipe.id)}
                    >
                        Ver receita
                    </Button>
                </RecipeCardStyled>
            })}
            <Button
                colorScheme="orange"
                borderRadius={50}
                position="fixed"
                bottom="5px"
                right="5px"
                onClick={() => goToAddRecipePage(navigate)}
            >
                +
            </Button>
        </FeedContainerStyled>
    )
}