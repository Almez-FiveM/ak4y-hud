import "react-contexify/dist/ReactContexify.css";
import { VisibilityProvider } from "./Contexts/VisibilityContext";

import theme from "./theme/theme";
import "./theme/global.css";
import { Provider } from 'react-redux'
import { store, persistor } from './Store/store'
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Components/Home';
function App() {
  return (
    <VisibilityProvider>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Home />
          </PersistGate>
        </Provider>
      </ChakraProvider>
    </VisibilityProvider >
  );
}

export default App;
