import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <ul className={styles.statistics}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {total === 0 ? "" : positivePercentage}%</li>
    </ul>
  </>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
