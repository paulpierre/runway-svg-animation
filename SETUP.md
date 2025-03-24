# Setup Guide for GitHub Pages

This document will guide you through the process of pushing this project to GitHub and setting up GitHub Pages for hosting.

## Step 1: Initialize Git Repository

First, initialize a git repository in this directory:

```bash
# Navigate to the project directory
cd /path/to/animejs-demo

# Initialize git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: Anime.js SVG path animation"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in.
2. Click on the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., "runway-path")
4. Leave the repository as public
5. Do NOT initialize with a README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 3: Connect and Push to GitHub

GitHub will show commands to push an existing repository. Use the commands:

```bash
# Add the remote repository
git remote add origin https://github.com/yourusername/runway-path.git

# Push to GitHub
git push -u origin main
```

Note: If your default branch is "master" instead of "main", use:

```bash
git push -u origin master
```

Or rename your branch to "main" first:

```bash
git branch -M main
git push -u origin main
```

## Step 4: Set Up GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section or click on "Pages" in the sidebar
4. Under "Source", select "main" branch
5. Click "Save"

GitHub will provide a URL where your site is published (usually https://yourusername.github.io/runway-path/).

## Step 5: Update Links (Optional)

Once your site is live, you may want to update the following links in your project:

1. In `README.md`: Update the demo link to your actual GitHub Pages URL
2. In `index.html`: Update the GitHub repository link to your actual repository URL

## Troubleshooting

- If GitHub Pages doesn't deploy automatically, check the "Actions" tab to see if the workflow is running
- If you see 404 errors, ensure your repository's GitHub Pages settings are correctly configured
- If your CSS or JavaScript isn't loading, check the paths in your HTML files

## Next Steps

- Consider adding a custom domain
- Add more examples or variations of the animation
- Share your project on social media or developer communities