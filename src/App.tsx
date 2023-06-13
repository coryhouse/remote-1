import { Box } from "@chakra-ui/react";
import CounterAppOne from "./components/CounterAppOne";

export function App() {
  return (
    <Box margin="1.2rem">
      <Box>APP-1</Box>
      <Box>
        <CounterAppOne />
      </Box>
    </Box>
  );
}
