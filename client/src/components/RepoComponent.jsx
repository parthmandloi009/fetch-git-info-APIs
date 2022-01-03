import { useEffect, useState } from "react";
import RepoDetails from "./views/RepoDetails";
import { fetchUserRepo } from "../services";
import styles from "../styles/App.module.css";

export default function RepoComponent() {
  const [handle, setHandle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [repoData, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {}, [pageNumber, repoData]);

  const pages = new Array(totalPages).fill(null).map((v, i) => i);

  const handleSearch = async (e, i = 0) => {
    e.preventDefault();
    setPageNumber(i);
    try {
      if (!handle) return;
      setIsLoading(true);
      const repo = await fetchUserRepo(handle, i);
      setIsLoading(false);
      setData(repo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.app}>
        <input
          className={styles.search}
          id="filled-basic"
          placeholder="Search"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
        />
        {!isLoading ? (
          <button className={styles.button} onClick={handleSearch}>
            Search
          </button>
        ) : (
          <p>Loading</p>
        )}
      </div>
      {repoData.length > 0 &&
        repoData.map((e) => (
          <RepoDetails
            key={e.id}
            name={e.name}
            description={e.description || "NA"}
            stars={e.stars}
            link={e.url}
          />
        ))}
    </>
  );
}
