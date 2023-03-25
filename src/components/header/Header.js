import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { goToFeedPage, goToLoginPage } from "../../routes/coordinator"
import { HeaderStyled } from "./styled"

export const Header = () => {
    const navigate = useNavigate()

    const token = localStorage.getItem("token")

    const logout = () => {
        localStorage.removeItem("token")
        goToLoginPage(navigate)
    }

    return (
        <HeaderStyled>
            <Button
                colorScheme="orange"
                variant="outline"
                onClick={() => goToFeedPage(navigate)}
            >
                Cookenu
            </Button>
            {token ?
                <Button
                    colorScheme="orange"
                    variant="outline"
                    onClick={logout}
                >
                    Logout
                </Button>
                :
                <Button
                    colorScheme="orange"
                    variant="outline"
                    onClick={() => goToLoginPage(navigate)}
                >
                    Login
                </Button>
            }
        </HeaderStyled>
    )
}