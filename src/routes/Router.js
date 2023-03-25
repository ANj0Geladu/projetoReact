import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '../components/header/Header'
import { AddRecipePage } from '../pages/add-recipe/AddRecipePage'
import { DetailsPage } from '../pages/details/DetailsPage'
import { FeedPage } from '../pages/feed/FeedPage'
import { LoginPage } from '../pages/login/LoginPage'
import { SignupPage } from '../pages/signup/SignupPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/' element={<FeedPage />} />
                <Route path='/recipe/:id' element={<DetailsPage />} />
                <Route path='/add-recipe' element={<AddRecipePage />} />
            </Routes>
        </BrowserRouter>
    )
}