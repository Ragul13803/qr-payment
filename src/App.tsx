// src/App.tsx
import './App.css'
import { BrowserRouter } from 'react-router-dom'
// import AppRouter from './Router/AppRouter'
// import { Provider } from 'react-redux';
// import store from './Redux/store'; // Import the Redux store
import AppRouter from './router/AppRouter';
// import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      {/* <Provider store={store}> */}
        <AppRouter />
        {/* <ToastContainer />
      </Provider> */}
    </BrowserRouter>
  )
}

export default App