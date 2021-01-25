import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Dashboard</h1>
      </main>
    </div>
  );
};
