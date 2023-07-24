import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  // const { siteConfig, i18n } = useDocusaurusContext();
  const { i18n } = useDocusaurusContext();

  var baseURl = "/";
  var tagLine = "가장 쉬운 대중 인지 건강 관리";
  var buttonTitle = "문서 보기";
  if (i18n.currentLocale === "ko") {
    // do nothing
  } else {
    baseURl += i18n.currentLocale + "/";
    tagLine = "The easiest public awareness healthcare";
    buttonTitle = "Get Started";
  }

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img src={`${baseURl}img/alzwin_logo_signup.png`} alt="AlzWIN logo" />
        <h1 className="hero__title">{tagLine}</h1>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/guide/introduce"
          >
            {buttonTitle}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { i18n } = useDocusaurusContext();

  var title = "알츠윈 문서에 오신 것을 환영합니다";
  var description = "알츠윈 문서";
  if (i18n.currentLocale === "ko") {
    // do nothing
  } else {
    title = "Welcome to AlzWIN Documentation";
    description = "AlzWIN Docs";
  }

  return (
    <Layout
      // title={`${siteConfig.title}에 오신 것을 환영합니다`}
      // description="알츠윈 문서"
      title={title}
      description={description}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
