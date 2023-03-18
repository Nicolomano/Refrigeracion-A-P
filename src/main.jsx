import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDccUSAlb8qo3RYAOaLppOrys23SZvzQw8",
  authDomain: "refrigeracion-ap.firebaseapp.com",
  projectId: "refrigeracion-ap",
  storageBucket: "refrigeracion-ap.appspot.com",
  messagingSenderId: "239321044256",
  appId: "1:239321044256:web:e234be660b45ab599b3345"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
  </ChakraProvider>
  </React.StrictMode>,
)
