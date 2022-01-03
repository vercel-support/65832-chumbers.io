import * as React from "react";
import { Link } from "gatsby";

// markup
const NotFoundPage = () => {
  return (
    <main id="notfound">
      <div class="notfound-bg">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="notfound">
        <div class="notfound-404">
          <h1 className="font-display">404</h1>
        </div>
        <h2 className="font-display">Page Not Found</h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link to="/">Return Home</Link>

        <p className="mt-6">Clicked on a broken link?</p>
        <Link to="/">Contact me</Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
