import RemoteOne from "./components/RemoteOne";

// This component merely exists to run the remote in isolation
export function App() {
  return (
    <RemoteOne
      // Hard coding these props for local dev of this remote in isolation. These props are provided by the shell in the production app. */
      baseUrl=""
      parentCount={0}
      user={{ id: 2, name: "Bobby" }}
      urls={{ about: "/about", home: "/" }}
    />
  );
}
