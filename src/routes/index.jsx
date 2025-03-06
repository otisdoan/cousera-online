import AllSection from "../components/SectionIntroduction/AllSection";
import Introduction from "../pages/Introduction";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const routes = [
    {
        path: '/',
        element: <Introduction />,
        children: [
            {
                path: '/',
                element: <AllSection />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
]
