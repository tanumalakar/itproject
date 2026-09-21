# Works & Projects — Firebase Version

This version lets you publish projects from `admin.html` without editing `works.json` or uploading images to GitHub every time.

## One-time setup

### 1. Create Firebase project
Go to Firebase Console and create a project.

### 2. Create Firestore
Firebase Console → Build → Firestore Database → Create database.

For a simple portfolio, start in test mode while setting up, then secure the rules before public production.

### 3. Create Storage
Firebase Console → Build → Storage → Get started.

### 4. Register Web App
Firebase Console → Project settings → Your apps → Web (`</>`).
Copy the `firebaseConfig` values.

### 5. Put config in `firebase-config.js`
Open `firebase-config.js` and replace every `PASTE_..._HERE` value with the values from Firebase.

### 6. GitHub upload
Upload the complete project files to your GitHub Pages repository, including:
- `firebase-config.js`
- `admin.html`
- `app.js`
- `index.html`
- `style.css`
- `works.json`
- `images/`

## Daily use

Open:
`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/admin.html`

Fill in title, category, link, description, choose image, then click **Publish Project**.

The image is uploaded to Firebase Storage and project data is saved to Firestore. The main website reads the projects from Firebase automatically.

## Important
Do not put Firebase Admin SDK private credentials in the website. The Web App config is designed for browser use; database/storage security is controlled by Firebase Security Rules.
