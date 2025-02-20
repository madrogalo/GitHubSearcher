import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { APIService } from "../utils/apiService";

function MyApp({ Component, pageProps }: AppProps) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    APIService.getUsers().then((users) => setUsers(users));
  }, []);

  return (
    <Layout>
      <Component users={users} {...pageProps} />
    </Layout>
  );
}

export default MyApp;
