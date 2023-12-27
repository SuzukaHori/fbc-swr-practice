import "./App.css";
import useSWR from "swr";

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };

  const fetcher = (url) =>
    fetch(url, { headers })
      .then((res) => res.json())
      .then((json) => json.description);

  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <p>Failed to load.</p>;
  if (isLoading) return <p>Loading...</p>;

  return <>{data && <p>Status : {data}</p>}</>;
}

export default App;
