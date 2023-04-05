import React from "react";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
function HomePage() {
  const projectId = process.env.TEST_VAR;
  console.log("TESTVAR IS", projectId);
  return (
    <div>
      <h1 className="text-4xl">Welcome to the Blog</h1>
      <p>FUCK{projectId}</p>
    </div>
  );
}

export default HomePage;
