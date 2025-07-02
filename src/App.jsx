import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer
        position='top-right'
        autoClose={1500}
      />
    </>
  );
}

export default App;
