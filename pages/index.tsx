import Link from "next/link";

import {
  Layout,
  Navbar,
  InterDashesText,
  ColumnFlexContainer,
  MainContentContainer,
  ComputerASCII,
} from "../lib/components";

import styles from "../styles/pages/Home.module.scss";

const Page = () => {
  return (
    <>
      <Layout
        navbar={<Navbar selected="/" />}
        content={
          <ColumnFlexContainer>
            <InterDashesText>
              <p className={styles.text}>HYPERGRAPH IMPROVEMENT PROPOSALS</p>
            </InterDashesText>
            <MainContentContainer
              firstChild={<ComputerASCII />}
              secondChild={
                <div className={styles.mainTextContainer}>
                  <p className={styles.text}>
                    {`HIP stands for Hypergraph Improvement Proposal. It is a design document that describes a new feature, process or information to the community of the Constellation Hypergraph Transfer Protocol. The HIP should contain a concise technical specification of the proposed feature as well as a rationale for the feature. The author of an HIP is responsible to find a sponsor, get feedback and improve upon the proposal and to find consensus in the community. Furthermore, the author is to document the process of pro and contra arguments for their HIP on www.hypercore.org.`}
                  </p>
                  <p className={styles.link}>
                    <Link
                      target={"_blank"}
                      href={"https://www.youtube.com/watch?v=1tp1VOAFnLI"}
                      legacyBehavior
                    >{`>>  Watch Hypergraph Hour on Governance`}</Link>
                  </p>
                  <p className={styles.link}>
                    <Link
                      target={"_blank"}
                      href={"https://constellation.discourse.group/"}
                      legacyBehavior
                    >{`>>  HGTP Governance on Discourse`}</Link>
                  </p>
                </div>
              }
            />
            <InterDashesText>
              <div className={styles.hiringText}>
                <p className={styles.text}>NOW HIRING: </p>
                <p className={styles.link}>
                  <Link
                    target={"_blank"}
                    href={"https://constellationnetwork.io/jobs"}
                    legacyBehavior
                  >{`Governance Positions`}</Link>
                </p>
              </div>
            </InterDashesText>
          </ColumnFlexContainer>
        }
      />
    </>
  );
};

export default Page;
