import React from "react";

const Blog = () => {
  return (
    <div className="container" style={{ marginTop: "120px" }}>
      <h2 className="text-center mb-2">Blog</h2>
      <div className="p-5 bg-info bg-opacity-10 border border-info rounded m-4">
        <h3>What is cors?</h3>
        <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
      </div>
      <div className="p-5 bg-info bg-opacity-10 border border-info rounded m-4">
        <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
        <p>Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</p>
        <p>The other options are to implement authentication...</p>
        <ul>
          <li>Auth0</li>
          <li>MongoDB</li>
          <li>Passport</li>
          <li>Okta</li>
          <li>Keycloak</li>
        </ul>
      </div>
      <div className="p-5 bg-info bg-opacity-10 border border-info rounded m-4">
        <h3>How does the private route work?</h3>
        <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.</p>
      </div>
      <div className="p-5 bg-info bg-opacity-10 border border-info rounded m-4">
        <h3>What is Node? How does Node work?</h3>
        <p>Node is a JavaScript runtime for building server-side or desktop applications.</p>
        <p>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
        <p>Node.js basically works on two concept</p>
        <ul>
          <li>Asynchronous</li>
          <li>Non-blocking I/O</li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
