import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function NotFound() {
  return (
    <Layout
      title="Page Not Found"
      description="Sorry, we couldn't find the page you were looking for"
    >
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1>Page Not Found</h1>
            <p>We could not find what you were looking for.</p>
            <p>
              Please try searching or check out these popular pages:
              <ul>
                <li>
                  <Link to="/docs/Technology/Algorithms/Backtracking/Introduction">
                    Algorithms
                  </Link>
                </li>
                <li>
                  <Link to="/docs/Product/Startup/ARoadmap">Startup Guide</Link>
                </li>
                <li>
                  <Link to="/blog">Blog Posts</Link>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
