// pages/404.js

import React from "react";
import { AppRouter } from "next/router";

const NotFoundPage = () => {
    return (
        <div>
            <h1>404 Page Not Found</h1>
            <p>The page you are looking for could not be found.</p>
        </div>
    );
};

export default () => (
    <AppRouter>
        <NotFoundPage />
    </AppRouter>
);
