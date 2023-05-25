import Add from "../Pages/Add";
import Detail from "../Pages/Detail";
import Home from "../Pages/Home";
import Mainroot from "../Pages/Mainroot";

export const ROUTER = [
     {
          path:'/',
          element:<Mainroot/>,
          children:[
               {
                    path:'home',
                    element:<Home/>
               },
               {
                    path:'add',
                    element:<Add/>
               },
               {
                    path:'detail/:id',
                    element:<Detail/>
               }
          ]
     }
]