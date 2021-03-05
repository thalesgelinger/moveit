import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";

import styles from "../../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/thalesgelinger.png" alt="Thales Gelinger" />
      <div>
        <strong>Thales Gelinger</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
