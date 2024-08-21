import "react-contexify/dist/ReactContexify.css";
import { VisibilityProvider } from "./Contexts/VisibilityContext";

import theme from "./theme/theme";
import "./theme/global.css";
import store from './Store/store'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Components/Home';
function App() {
  return (
    <VisibilityProvider>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <Home />
        </Provider>
      </ChakraProvider>
    </VisibilityProvider>
  );
}

export default App;
