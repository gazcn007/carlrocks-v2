import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { TreeChart } from '@patternize/components'

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


export const PersonalChart = () => {
  const tree = {
    "name": "👨🏻‍💻",
    "children": [{
      "name": "Software Engineer 💻",
      "children": [
        {
          "name": "Tableau Software 📈",
          "children": [{
            "name": "Salesforce ☁️", "children": [{
              "name": "Airbnb 🏡",
              "children": [{ "name": "Presence 🎮" }]
            }]
          }]
        }
      ]}
    , {
      "name": "Hobby",
      "children": [
        {
          "name": "Workout 🏋🏻",
          "children": [{ "name": "Soccer ⚽️" }, { "name": "Running 🏃🏻‍♀️" }, { "name": "Gym 😅" }]
        },
        {
          "name": "Music 🎵",
          "children": [{
            "name": "Guitar 🎸"
          },{
            "name": "Favorites ❤️", "children": [{"name": "The Beatles"}, {"name": "Mozart"}, {"name": "Schumann"}, {"name": "Prokofiev"}]
          }]
        },
        {
          "name": "Photography 📷",
          "children": [{
            "name": "Sony A73",
            "children": [{
              "name": "Travel Photography"
            }]
          }]
        }
      ]
    }
    ],
  };
  return <>{typeof window !== 'undefined' && <TreeChart data={tree} />}</>
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div> */}
        <PersonalChart />
      </div>
    </section>
  );
}
