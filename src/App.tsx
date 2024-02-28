import React from 'react'
import './App.css'
import {BrowserRouter} from "react-router-dom";
import Router from "@app/routes/router";
import {ToastContainer} from "react-toastify";

function App() {

    return (
        <BrowserRouter>
            <Router/>

            <ToastContainer
                autoClose={3000}
                draggable={false}
                position="top-right"
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnHover
            />
        </BrowserRouter>
    )
}

export default App
