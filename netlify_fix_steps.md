# How to Fix Netlify Build Failure (Vite Migration)

The build is failing because Netlify has the **Next.js Runtime** plugin installed via the Netlify Dashboard (UI). Because it was installed in the UI, Netlify runs it automatically even though we deleted it from `netlify.toml`.

Follow these simple steps to uninstall it:

### Step 1: Log in to Netlify
1. Go to the [Netlify Dashboard](https://app.netlify.com/).
2. Select your portfolio website project.

### Step 2: Go to Plugins Settings
1. Click on **Site configuration** (or **Site settings**) in the left navigation sidebar.
2. Scroll down and click on **Build & deploy**.
3. Under the *Build & deploy* submenu, click on **Plugins** (or look for the **Plugins** section in the main layout).

### Step 3: Uninstall Next.js Runtime
1. In the **Plugins** list, look for **Next.js Runtime** (package: `@netlify/plugin-nextjs`).
2. Click the **Options** dropdown (the three dots button next to the plugin status) and select **Uninstall** (or click **Disable** / **Remove**).

### Step 4: Trigger a New Deploy
1. Go to the **Deploys** tab in the top navigation of the site dashboard.
2. Click on the **Trigger deploy** dropdown button and select **Deploy site** (or trigger a new build on the `migrate/netlify-vite` branch).

---

Once the Next.js plugin is uninstalled, Netlify will build the project using Vite and deploy the site successfully from the `dist` folder.
