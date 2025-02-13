import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import { TextGeneration } from '../components/text-generation';
import { Installation } from '../components/Installation/installation';
import { SpeechToText } from '../components/speech-to-text';
import { ImageProcessing } from '../components/image-processing';
import { ImageGeneration } from '../components/image-generation';

import styles from './index.module.css';

import HomepageFeatures from "@site/src/components/HomepageFeatures";

const OpenVinoSVG = require('@site/static/img/openvino.svg').default

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.banner)}>
      <div className="container">
        <Heading as="h1" className={styles.titleContainer}>
            <div className={styles.title}>
                <OpenVinoSVG role='img' /><div className={styles.genAITitle}>GenAI</div>
            </div>
        </Heading>
        <p className={styles.subTitle}>Deploy Generative AI with ease</p>
        <p className={styles.description}>
            OpenVINO™ GenAI provides developers the necessary tools to optimize
            and deploy Generative AI models
        </p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {

  return (
      <Layout
          description="Description will go into a meta tag in <head />">
          <main>
              <div className={styles.mainContainer}>
                  <HomepageHeader/>
                  <HomepageFeatures />
              </div>
          </main>
          <div className={styles.contentContainer}>
              <Installation />
              <TextGeneration />
              <ImageGeneration />
              <SpeechToText />
              <ImageProcessing/>
          </div>
      </Layout>
  );
}
