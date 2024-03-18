import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import  routes  from './routes.json';

export const AppRoutes = () => {

    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

    useEffect(() => {
        setDrawerOptions(routes);
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Button onClick={toggleDrawerOpen} variant="contained" color="primary">Open</Button>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}