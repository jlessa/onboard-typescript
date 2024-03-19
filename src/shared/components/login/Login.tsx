import { useAuthContext } from "../../contexts";
import { LoginPage } from "../../../pages";

interface ILoginProps {
    children: React.ReactNode;
}
export const Login: React.FC<ILoginProps> = ({ children }) => {
    const { isAuthenticated } = useAuthContext();
    if (isAuthenticated) return (
        <>
            {children}
        </>
    )
    return (
        <LoginPage />
    );
}