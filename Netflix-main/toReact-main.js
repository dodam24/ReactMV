import React from 'react';
import './toReact-main.css';

function Main() {
  return (
    <div className="Main">
      <section>
        <h1>See What's Next.</h1>
        <p>WATCH ANYWHERE. CANCEL ANYTIME.</p>
        <button type="button" className="subscription-btn">
          <a href="/">JOIN FREE FOR A MONTH</a>
        </button>
      </section>
    </div>
  );
}

export default Main;