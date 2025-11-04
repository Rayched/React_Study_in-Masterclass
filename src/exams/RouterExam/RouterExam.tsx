import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Screens/Home";
import Abouts from "./Screens/Abouts";
import Layouts from "./components/Header";

const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Layouts />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "abouts",
                element: <Abouts />
            }
        ]
    }
]);
export default function RouterExam(){
    return (
        <div>
            <RouterProvider router={Routers} />
        </div>
    );
}