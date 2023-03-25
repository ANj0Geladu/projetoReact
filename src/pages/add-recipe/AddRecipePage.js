import { Button, Heading, Input, Textarea } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { CenterPageContainer, FormContainer } from "../../components/styled-containers/styled"
import { BASE_URL } from "../../constants/url"
import { useProtectedPage } from "../../hooks/useProtectedPage"

export const AddRecipePage = () => {
    useProtectedPage()
    const [form, setForm] = useState({
        title: "",
        description: "",
        imageUrl: ""
    })

    const onChangeInputs = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post(`${BASE_URL}/recipe`, form, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })

            setForm({
                title: "",
                description: "",
                imageUrl: ""
            })

            alert("Receita criada com sucesso!")

        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <CenterPageContainer>
            <FormContainer onSubmit={onSubmit}>
                <Heading size="lg" textAlign="center">Adicionar Receita</Heading>
                <Input
                    name="title"
                    value={form.title}
                    onChange={onChangeInputs}
                    placeholder="Título"
                    type="text"
                    minLength={3}
                    required
                />
                <Textarea
                    name="description"
                    value={form.description}
                    onChange={onChangeInputs}
                    placeholder="Descrição"
                    type="text"
                    minLength={15}
                    required
                />
                <Input
                    name="imageUrl"
                    value={form.imageUrl}
                    onChange={onChangeInputs}
                    placeholder="URL da imagem"
                    type="text"
                    required
                />
                <Button
                    type="submit"
                    colorScheme="orange"

                >
                    Adicionar receita
                </Button>

            </FormContainer>
        </CenterPageContainer>
    )
}