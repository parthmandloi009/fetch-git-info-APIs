import { useState } from "react";
import { fetchUser } from "../services";
import styles from "../styles/App.module.css";
import Card from "./Card";

export default function UserComponent() {
  const [handle, setHandle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [userData, setData] = useState(null);
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      if (!handle) return;

      setIsLoading(true);

      const data = await fetchUser(handle);
      setIsLoading(false);
      setData(data);
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
          placeholder="Github Handle"
          type={"text"}
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
      {userData && (
        <Card
          userName={userData.name}
          followers={userData.stars}
          following={userData.stars}
          numberOfRepos={userData.count}
          memberSince="1998"
          html_url={userData.url}
        />
      )}
    </>
  );
}
