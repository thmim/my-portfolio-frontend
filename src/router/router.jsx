import React from 'react';
import {
    createBrowserRouter

} from "react-router";

import ProjectDetails from '../components/projectDetails';
import MainLayout from '../components/MainLayout';
import Home from '../components/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
            children:[
                {
                  index:true,  
                  Component:Home
                },
                {
                    path: "/projects/:id",
                    Component:ProjectDetails
                }
            ]
        

    },
]);

export default router;