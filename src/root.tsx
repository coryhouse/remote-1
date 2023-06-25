import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RemoteOne from "./components/RemoteOne";

// This root is used for running the remote by itself.
// The shell wraps all remotes in a BrowserRouter, so we must do the same here.
// The shell also passes props to the remotes, so we must do the same here.
createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <RemoteOne
      baseUrl=""
      parentCount={0}
      user={{ id: 2, name: "Bobby" }}
      urls={{ about: "/about", home: "/" }}
    />
  </BrowserRouter>
);
