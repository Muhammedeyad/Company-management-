import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './Context/AuthContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import store from './Store/store.tsx'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<div className='text-gray-900 h-screen flex items-center justify-center'><h1 className='text-2xl hidden'>loading, please wait...</h1></div>}>
            <Provider store={store}>
              <App />
            </Provider>
            <ToastContainer />
          </Suspense>
        </QueryClientProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
