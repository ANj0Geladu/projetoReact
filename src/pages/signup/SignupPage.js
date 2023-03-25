import { Button, Input } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CenterPageContainer, FormContainer } from "../../components/styled-containers/styled"
import { BASE_URL } from "../../constants/url"
import { goToFeedPage, goToLoginPage } from "../../routes/coordinator"

export const SignupPage = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeInputs = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        console.log(form)
        try {
            const res = await axios.post(`${BASE_URL}/user/signup`, form)

            localStorage.setItem("token", res.data.token)
            goToFeedPage(navigate)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <CenterPageContainer>
            <FormContainer onSubmit={onSubmit}>
                <Input
                    name="name"
                    value={form.name}
                    onChange={onChangeInputs}
                    placeholder="Nome"
                    type="text"
                    minLength={3}
                    required
                />
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
                    Faça cadastro
                </Button>
                <Button
                    type="button"
                    colorScheme="orange"
                    variant="ghost"
                    size="xs"
                    onClick={() => goToLoginPage(navigate)}
                >
                    Já possui conta? Faça login
                </Button>
            </FormContainer>
        </CenterPageContainer>
    )
}