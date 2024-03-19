import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@emotion/react';
import { TemaPadrao } from './shared/themes';
import { Box } from '@mui/material';
import { SideMenu } from './shared/components/menu-lateral/SideMenu';
import { AuthProvider, DrawerProvider } from './shared/contexts';
import { Login } from './shared/components';

export const App = () => {

  return (
    <AuthProvider>
      <ThemeProvider theme={TemaPadrao}>
        <Login>
          <DrawerProvider>
            <Box width="100vw" height="100vh" bgcolor={TemaPadrao.palette.background.default}>
              <BrowserRouter>
                <SideMenu>
                  <AppRoutes />
                </SideMenu>
              </BrowserRouter>
            </Box>
          </DrawerProvider>
        </Login>
      </ThemeProvider>
    </AuthProvider>
  )
}


