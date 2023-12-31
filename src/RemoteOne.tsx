import { Suspense, lazy, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

const Page1 = lazy(() => import("./Page1"));
const Page2 = lazy(() => import("./Page2"));

var buildDate = process.env.BUILD_DATE;

// These props are injected by the shell app.
// TODO: Publish this type in an npm package so all remotes can reference it (or, even simpler, put remotes and shell in a monorepo)
type RemoteProps = {
  baseUrl: string;
  shellCount: number;
  account: string;
  urls: Record<"about" | "home", string>;
  user: { id: number; name: string };
  language: string;
};

export default function RemoteOne({
  baseUrl,
  urls,
  user,
  shellCount,
  account,
  language,
}: RemoteProps) {
  const [count, setCount] = useState(0);

  const location = useLocation();

  if (shellCount > 2) throw new Error("Shell count is greater than 2.");

  return (
    <>
      <h2>Remote 1</h2>

      <nav>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to={baseUrl + "/page1"}>Remote 1 page 1</Link>
          </li>
          <li>
            <Link to={baseUrl + "/page2"}>Remote 1 page 2</Link>
          </li>
          <li>
            <Link to={urls.about}>About</Link>
          </li>
          {location.pathname !== "/" && (
            <li>
              <Link to="/">Back to shell</Link>
            </li>
          )}
        </ul>
      </nav>

      <p>Build date: {buildDate}</p>
      <p>Hi {user.name}</p>
      <p>Language: {language}</p>
      <p>Account: {account}</p>
      <p>Local count: {count} </p>
      <p>Shell count: {shellCount} </p>
      <button onClick={() => setCount(count + 1)}>Increment local count</button>

      <p>
        This remote throws an error and falls back to the Shell's Error boundary
        when the shell count is greater than 2.
      </p>

      <Routes>
        <Route path="/" element={<h2>Remote 1 home</h2>} />
        <Route
          path="page1"
          element={
            <Suspense fallback={<h2>Loading page 1...</h2>}>
              <Page1 />
            </Suspense>
          }
        />
        <Route
          path="page2"
          element={
            <Suspense fallback={<h2>Loading page 2...</h2>}>
              <Page2 />
            </Suspense>
          }
        />
        <Route path="*" element={<h2>404 - Remote 1 Page Not Found</h2>} />
      </Routes>
    </>
  );
}
