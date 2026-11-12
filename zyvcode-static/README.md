# ZyvCode — Static Website

A frontend-only website built with HTML, CSS and vanilla JavaScript. There is **no backend, database, login or admin panel**. All content is edited directly in `data.js`.

## Edit the content

Open `data.js`:

- `jobs`: edit the 10 job/internship cards. Keep 10 objects to display exactly 10 cards.
- `news`: edit the technology news cards.
- `profileImage`: add your photo path, for example `assets/vaibhav.jpg`.
- `youtubeUrl`: add your real ZyvCode YouTube channel URL.
- `applyUrl`: each job's application link.
- `image` in news: optional image path, e.g. `assets/ai-news.jpg`.

To add images, place the files in the `assets` folder and use their relative paths in `data.js`.

## Deploy free with GitHub Pages

1. Create a new public GitHub repository, e.g. `zyvcode`.
2. Upload `index.html`, `style.css`, `script.js`, `data.js`, `README.md` and the `assets` folder.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait for GitHub Pages to publish. Your URL will be `https://YOUR-USERNAME.github.io/zyvcode/`.

For a user/organization site repository named `YOUR-USERNAME.github.io`, the URL is `https://YOUR-USERNAME.github.io/`.

## Important

- This is a static website. Changes made to `data.js` locally will appear online only after you commit/push the updated file to GitHub.
- Do not put passwords, API keys or private information in this repository.
- Replace sample placeholder jobs/news before publishing. Only the first job is populated from the example details; the other entries are sample placeholders.
- GitHub Pages is free for public repositories, subject to GitHub Pages usage limits and terms.
