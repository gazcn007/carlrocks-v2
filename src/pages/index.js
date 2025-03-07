import React, {useState} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Spline from "@splinetool/react-spline";
import Head from '@docusaurus/Head';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [isLoading, setIsLoading] = useState(true)
  function onLoad(spline) {
    setIsLoading(false)
  }

  return (
    <>
      <Head>
        <meta name="description" content="Carl's Tech Journal - A blog about software engineering, technology, and personal projects" />
        <meta name="keywords" content="software engineering, react, algorithms, tech blog, programming" />
        <meta property="og:title" content="Carl's Tech Journal" />
        <meta property="og:description" content="Code, Craft, Create - A software engineering blog by Carl Liu" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://carlrocks.com" />
      </Head>
      <Layout
        title={`Hello World`}
        description="Carl's Technology & Business Review">
        <HomepageHeader />
        <div style={{ height: '100%', width: '100%', pointerEvents: 'none' }}>
          {/* <HomepageFeatures /> */}
          {isLoading && <img height='100%' width='100%' style={{display: 'block'}} src={require('@site/static/img/mac.jpg').default} />}
          <Spline
            onLoad={onLoad}
            fallback={<img src={require('@site/static/img/mac.jpg').default} />}
            scene="https://prod.spline.design/JSpq-kjiQrYZYP72/scene.splinecode"
          />
        </div>
      </Layout>
    </>
  );
}
