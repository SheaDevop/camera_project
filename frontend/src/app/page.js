
import Head from 'next/head';
import CameraList from './cameras/page';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Camera App</title>
        <meta name="description" content="Camera Application with Django and Next.js" />
      </Head>
      <main>
        <h1>Welcome to the Camera App</h1>
        <CameraList />
      </main>
    </div>
  );
}
