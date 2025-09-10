// src/App.tsx
import './App.css'
import { BrowserRouter } from 'react-router-dom'
// import AppRouter from './Router/AppRouter'
// import { Provider } from 'react-redux';
// import store from './Redux/store'; // Import the Redux store
import AppRouter from './router/AppRouter';
// import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme"; // import the theme you just created


function App() {
  return (
    <BrowserRouter>
      {/* <Provider store={store}> */}
       <ThemeProvider theme={theme}>
      <CssBaseline /> {/* resets browser styles and applies global font */}
        <AppRouter />
            </ThemeProvider>

        {/* <ToastContainer />
      </Provider> */}
    </BrowserRouter>
  )
}

export default App