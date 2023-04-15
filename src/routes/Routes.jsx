import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Projects from '../Pages/Software/Projects/Projects';
import Categories from '../Pages/Software/Categories/Categories';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/category/:id',
                element: <Categories />,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },

        ]
    },
    {
        path: '/project/:id',
        element: <Projects />
    }
])