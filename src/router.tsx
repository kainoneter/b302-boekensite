import { createBrowserRouter, Navigate } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { AuthorsPage } from './pages/authors'
import { BooksPage } from './pages/books'
import { GenresPage } from './pages/genres'
import { LoginPage } from './pages/auth/login'

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
        { index: true, element: <Navigate to="/books" replace /> },
        { path: 'books', element: <BooksPage /> },
        { path: 'authors', element: <AuthorsPage /> },
        { path: 'genres', element: <GenresPage /> },
        ],
    },
])