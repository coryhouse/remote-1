import { createRoot } from "react-dom/client";
import { ShellContext } from "./ShellContext";
import RemoteOne from "./RemoteOne";

// This root is used for running the remote by itself.
// The shell wraps all remotes in a BrowserRouter, so we must do the same here.
// The shell also passes props to the remotes, so we must do the same here.
createRoot(document.getElementById("root") as HTMLElement).render(
  <ShellContext>
    <RemoteOne
      baseUrl=""
      shellCount={0}
      account="fake-account"
      user={{ id: 2, name: "Cory" }}
      urls={{ about: "/about", home: "/" }}
    />
  </ShellContext>
);
