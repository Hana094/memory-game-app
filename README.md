# Memory Game

This is a memory game built with **React** and **Vite**. The goal of the game is to match pairs of cards by flipping them over two at a time. Follow the instructions below to test the project locally or deploy it using GitHub Pages.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Steps to Run Locally](#steps-to-run-locally)
3. [Deployment](#deployment)
   - [Deploying to GitHub Pages](#deploying-to-github-pages)
4. [Deployment Method](#deployment-method)

---

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v7 or higher)

---

## Steps to Run Locally

Follow these steps to test the project on your local machine:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/memory-game-app.git

   ```

2. **Navigate to the project directory**:

   ```bash
   cd memory-game-app #repo name

   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run the development server**:

   ```bash
   npm start

   ```

5. **Open the app in your browser**:
   The app should automatically open in your default browser at http://localhost:5173. If it doesn't, manually navigate to that URL.

## Deployment

This project is deployed using GitHub Pages. Follow the steps below to deploy it yourself.

### Deploying to GitHub Pages

1. **Install the gh-pages package**:

   ```bash
   npm install gh-pages --save-dev

   ```

2. **Add the following scripts to your package.json**:

   ```json
   "scripts": {
   "dev": "vite",
   "build": "vite build",
   "preview": "vite preview",
   "predeploy": "npm run build", // Build the app before deploying
   "deploy": "gh-pages -d dist"  // Deploy the 'dist' folder to GitHub Pages
   }
   ```

3. **Add the homepage field to your package.json**:
   Replace your-username and your-repo-name with your GitHub username and repository name.

   ```json
   "homepage": "https://your-username.github.io/your-repo-name"

   ```

4. **Deploy the app**:

   ```bash
   npm run deploy
   Access the deployed app:
   The app will be available at https://your-username.github.io/your-repo-name.
   ```

## Deployment Method

This project was deployed using GitHub Pages. The gh-pages package was used to automate the deployment process. GitHub Pages is a free hosting service provided by GitHub for static websites, making it an ideal choice for deploying React applications built with Vite.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

If you have any questions or feedback, feel free to reach out:

GitHub: hana094

Email: hanavc094@gmail.com

Enjoy the game! 🎮

```

```
