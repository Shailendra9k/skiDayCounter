import React from "react";

const getPercent = decimal => {
  return decimal * 100 + "%";
};

const calcGoalProgress = (total, goal) => {
  return getPercent(total / goal);
};

const SkiDayCounter = ({ total, powder, backcountry, goal }) => {
  return (
    <div>
      <h2>SkiDay Counter</h2>
      <section>
        <div>
          <p>Total Days: {total}</p>
        </div>
        <div>
          <p>Powder Days: {powder}</p>
        </div>
        <div>
          <p>Backcountry Days: {backcountry}</p>
        </div>
        <div>
          <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
        </div>
      </section>
    </div>
  );
};

export default SkiDayCounter;
