import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Software Engineer. Entrepreneur. Musician. Proud Dad.</p>
        <p>
          A work in progress...
        </p>
      </section>
    </Layout>
  );
}
