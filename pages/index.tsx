import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SendSection from '../components/SendSection';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Disperse</title>
        <meta
          content="Saidia - copyright @znfeau"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />
        <SendSection />
        <ToastContainer
        position="top-center"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"></ToastContainer>
        

        
      </main>

      <footer className={styles.footer}>
        <a href="https://t.me/mrsaidia" rel="noopener noreferrer" target="_blank">
           Saidia
        </a>
      </footer>
      
    </div>
    
  );
};

export default Home;
