import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext, useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import routes from './routes.json';

export const AppRoutes = () => {

    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();
    const { logout } = useAuthContext();

    useEffect(() => {
        setDrawerOptions(routes);
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Button onClick={logout} variant="contained" color="primary">Logout</Button>} />
            <Route path="/notas" element={<Button onClick={toggleDrawerOpen} variant="contained" color="primary">Notas</Button>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}