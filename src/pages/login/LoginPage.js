import { Button, Input } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CenterPageContainer, FormContainer } from "../../components/styled-containers/styled"
import { BASE_URL } from "../../constants/url"
import { goToFeedPage, goToSignupPage } from "../../routes/coordinator"

export const LoginPage = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const onChangeInputs = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(form)
        axios.post(`${BASE_URL}/user/login`, form)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                goToFeedPage(navigate)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    return (
        <CenterPageContainer>
            <FormContainer onSubmit={onSubmit}>
                <Input
                    name="email"
                    value={form.email}
                    onChange={onChangeInputs}
                    placeholder="Email"
                    type="email"
                    required
                />
                <Input
                    name="password"
                    value={form.password}
                    onChange={onChangeInputs}
                    placeholder="Senha"
                    type="password"
                    minLength={6}
                    required
                />
                <Button
                    type="submit"
                    colorScheme="orange"

                >
                    Login
                </Button>
                <Button
                    type="button"
                    colorScheme="orange"
                    variant="ghost"
                    size="xs"
                    onClick={() => goToSignupPage(navigate)}
                >
                    Não possui conta? Cadastre-se
                </Button>
            </FormContainer>
        </CenterPageContainer>
    )
}