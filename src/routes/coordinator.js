export const goToLoginPage = (navigate) => {
    navigate('/login')
}

export const goToSignupPage = (navigate) => {
    navigate('/signup')
}

export const goToFeedPage = (navigate) => {
    navigate('/')
}

export const goToDetailsPage = (navigate, id) => {
    navigate(`/recipe/${id}`)
}

export const goToAddRecipePage = (navigate) => {
    navigate('/add-recipe')
}