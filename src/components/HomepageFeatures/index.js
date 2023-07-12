import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "쉬운 사용법",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>고객을 추가하고 1분내 검사 가능</>,
  },
  {
    title: "정확성",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>국내최고 치매 연구팀이 10년이상 개발한 기술에 기반</>,
  },
  {
    title: "특허",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>병원 방문없이 관리 받는 솔루션</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div
        className="text--center padding-horiz--md"
        style={{
          border: "1px solid #D9D9D9",
          margin: "20px 0px",
          padding: "80px 20px",
          borderRadius: "5px",
          boxShadow: "0px 4px 4px #D9D9D9",
        }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
