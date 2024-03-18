import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@emotion/react';
import { TemaPadrao } from './shared/themes';
import { Box } from '@mui/material';
import { MenuLateral } from './shared/components/menu-lateral/MenuLateral';
import { DrawerProvider } from './shared/contexts';

export const App = () => {

  return (
    <ThemeProvider theme={TemaPadrao}>
      <DrawerProvider>
        <Box width="100vw" height="100vh" bgcolor={TemaPadrao.palette.background.default}>
          <BrowserRouter>
            <MenuLateral>
              <AppRoutes />
            </MenuLateral>
          </BrowserRouter>
        </Box>
      </DrawerProvider>
    </ThemeProvider>

  )
}


