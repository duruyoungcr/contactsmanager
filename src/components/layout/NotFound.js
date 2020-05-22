import React from "react";

function NotFound() {
  return (
    <div>
      <h1 className="mb-4">
        <span className="text-danger">404 </span>
        <span className="text-primary">Page Not Found</span>
      </h1>
      <h4 className="text-secondary mb-4">
        The page you are looking for could not be found.
      </h4>
      <p>Kindly click on the Home Menu Button to take you Home.</p>
    </div>
  );
}
export default NotFound;
