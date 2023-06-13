import { Box } from "@chakra-ui/react";
import RemoteOne from "./components/RemoteOne";
import { useNavigate } from "react-router-dom";

// This component merely exists to run the remote in isolation
export function App() {
  const navigate = useNavigate();

  return (
    <Box margin="1.2rem">
      <Box>REMOTE-1</Box>
      <Box>
        {/* Hard coding these props for local dev of this remote in isolation. These props are provided by the shell in the production app. */}
        <RemoteOne parentCount={0} nav={navigate} />
      </Box>
    </Box>
  );
}
