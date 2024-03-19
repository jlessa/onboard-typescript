import { Box, Button, CircularProgress, TextField } from "@mui/material"
import { useAuthContext } from "../../shared/contexts"
import { useState } from "react";
import * as yup from 'yup';

const loginSchema = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().required().min(3)
});

export const LoginPage: React.FC = () => {
    const { login } = useAuthContext();

    const [isLoading, setIsLoading] = useState(false);

    const [username, setUsername] = useState("c10oficioni@hotmail.com");
    const [password, setPassword] = useState("igu1");

    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const handleSubmit = () => {
        setIsLoading(true);
        loginSchema
            .validate({ username, password }, { abortEarly: false })
            .then(validated => {
                login(validated.username, validated.password).then(() => {
                    setIsLoading(false);
                })
            })
            .catch((errors: yup.ValidationError) => {
                setIsLoading(false);
                errors.inner.forEach(error => {
                    if (error.path === 'email') {
                        setUsernameError(error.message);
                    } else if (error.path === 'password') {
                        setPasswordError(error.message);
                    }
                })
            })

    }

    return (
        <Box height='100vh' width='100vw' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Box display='flex' flexDirection="column" gap={2}>
                <TextField
                    fullWidth
                    label="username"
                    placeholder="Digite o usuário"
                    value={username}
                    error={!!usernameError}
                    disabled={isLoading}
                    onChange={e => setUsername(e.target.value)}
                    onKeyDown={() => setUsernameError('')}
                />
                <TextField
                    fullWidth
                    label="password"
                    placeholder="Digite a senha"
                    type="password"
                    value={password}
                    error={!!passwordError}
                    disabled={isLoading}
                    onChange={e => setPassword(e.target.value)}
                    onKeyDown={() => setPasswordError('')}
                />

                <Button
                    variant='contained'
                    onClick={handleSubmit}
                    disabled={isLoading}
                    endIcon={isLoading ? <CircularProgress variant="indeterminate" color="inherit" size={20} /> : undefined}
                >
                    Entrar
                </Button>
            </Box>

        </Box>
    )
}