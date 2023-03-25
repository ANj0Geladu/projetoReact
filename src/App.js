import { Router } from "./routes/Router";
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalState } from "./contexts/GlobalState";

function App() {
  return (
    <ChakraProvider>
      <GlobalState>
        <Router />
      </GlobalState>
    </ChakraProvider>
  );
}

export default App;
