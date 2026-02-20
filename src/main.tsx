import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ThemeProvider } from './components/ThemeProvider.tsx';
import { LanguageProvider } from './context/LanguageProvider.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);
