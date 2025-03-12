1. Understanding the Node.js Package Manager (NPM)
   What is NPM?
   NPM is a package manager for JavaScript.
   Think of it like an "App Store" for Node.js projects.
   It allows developers to install, update, and remove third-party libraries.
   What is a Package?
   A package (or module) is a reusable piece of code that others have built.
   It can be a library, a tool, or a framework.
   Where do packages come from?
   The NPM Registry hosts thousands of open-source JavaScript packages.
2. Setting Up a Node.js Project
   🔹 Creating a project using NPM
   mkdir my-project
   cd my-project
   npm init
   This generates a package.json file, which keeps track of installed dependencies.
   🔹 Installing a package (e.g, lodash
   🔹 Why is package.json important?
   Keeps track of installed dependencies.
   Stores project metadata (name, version, author, etc.).
   Allows version control to ensure everyone on a team has the same
   dependencies.
   🔹 Checking Installed Packages
   npm list
   📌 Key Concept: package.json makes it easy to install all dependencies in a project
   by running:
   npm install
   This restores all packages listed under "dependencies" .
