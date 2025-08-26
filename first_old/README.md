# Research Group Website (Jekyll Version)

This directory contains a **Jekyll** implementation of the research group website.  Jekyll is a static site generator
supported by GitHub Pages that converts Markdown files and YAML data into HTML at build time.  By moving your
content out of the HTML and into Markdown and YAML, the site becomes much easier to update—no more manual
editing of HTML templates when you need to add a team member or publication.

## Why Jekyll?

Running on GitHub Pages, Jekyll allows you to define page layouts, include common components like headers and
footers, and iterate over data sources.  The group directory, publications list and news feed are now stored in
`_data/team.yml`, `_data/publications.yml` and `_data/news.yml` respectively.  When you modify these files,
Jekyll automatically regenerates the corresponding sections of the site.  Similarly, the leader profile and the
main pages are simple Markdown files with a few lines of front matter.

## File structure

```
research_group_jekyll/
├── _config.yml            # Site configuration (title, description, etc.)
├── _layouts/
│   └── default.html       # Base HTML template used by all pages
├── _includes/
│   ├── header.html        # Navigation bar (logo and menu)
│   └── footer.html        # Footer with copyright
├── _data/
│   ├── team.yml           # YAML data for team members
│   ├── publications.yml   # YAML data for publications
│   └── news.yml           # YAML data for news items
├── assets/
│   ├── css/styles.css     # Shared styling for all pages
│   └── js/script.js       # JavaScript for navigation, reveal animations, filters and back‑to‑top
├── images/                # Logos, hero background and profile photos
│   ├── hero-bg.png
│   ├── logo.png
│   ├── member1.png
│   ├── member2.png
│   └── member3.png
├── index.md               # Home page with hero and research areas
├── team.md                # Team page that loops over team.yml
├── publications.md        # Publications page with filtering
├── news.md                # News and announcements page
├── leader.md              # Dedicated profile page for the group leader
└── README.md              # This file
```

## Customising your site

- **Edit team members:**  Open `_data/team.yml` and modify the list under `members`.  Each entry accepts
  `name`, `role`, `bio`, `photo`, `email`, `linkedin`, `website` and `scholar`.  The `photo` field should
  reference an image in the `images/` folder.  For the group leader, set `website: leader` so that the globe
  icon on the team page links to the dedicated profile page.

- **Add publications:**  Update `_data/publications.yml` with entries containing `title`, `authors`,
  `source` and `type` (`journal` or `conference`).  The publications page will loop over this list and
  categorise the items for filtering.

- **Post news:**  Modify `_data/news.yml` to announce awards, events or other updates.  Each item should have
  a `title`, a `date` in `YYYY-MM-DD` format and a `content` paragraph.  The dates are automatically
  formatted to a human‑readable form on the page.

- **Leader profile:**  The file `leader.md` contains the personal page for the group leader.  Replace the
  placeholder text with the leader’s biography, research interests, education history and awards.  Update
  the contact icons with the appropriate `mailto:` link, social media profiles or Google Scholar page.

- **Research areas:**  The home page (`index.md`) includes four sample research areas.  Edit or extend this
  section directly in the Markdown file to reflect your group’s domains.  Each card uses a Font Awesome icon
  and a short description.

- **Styling:**  Global colours, fonts and spacing are defined in `assets/css/styles.css`.  At the top of the
  file you’ll find CSS variables that control the primary and secondary colours as well as text and background
  colours.  Adjust these variables to match your branding.  Additional classes are used to create cards,
  buttons, animations and responsive layouts.

- **JavaScript:**  The script at `assets/js/script.js` manages the mobile navigation, reveal‑on‑scroll
  animations, publication filtering and the back‑to‑top button.  Since content is rendered by Jekyll, the
  data‑loading functions have been removed.  If you add interactivity that requires dynamic data, you can
  expand this script or include additional scripts as needed.

## Running locally

Jekyll requires a small build step.  If you want to preview the site on your machine before pushing to
GitHub:

1. Install Ruby and Bundler (if you don’t already have them).  On many systems you can run `gem install
   bundler`.
2. Navigate into the `research_group_jekyll` directory and run:

   ```bash
   bundle init
   bundle add jekyll
   bundle exec jekyll serve
   ```

   This will start a local development server, typically at `http://localhost:4000`.  Jekyll watches for
   changes and rebuilds the site automatically.

GitHub Pages supports Jekyll out of the box.  If you push the contents of this directory to your
`<username>.github.io` repository or enable GitHub Pages on another repository, GitHub will build the
site for you.

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `yourusername/yourgroup-site`).
2. Copy all files from `research_group_jekyll/` into the root of that repository.
3. Commit and push your changes.
4. In the repository settings on GitHub, enable **GitHub Pages** and choose the branch containing your site
   (commonly `main`) as the source.  Do **not** select a `/docs` folder since this site already resides at the
   root.
5. After a short build process, your site will be available at `https://yourusername.github.io/yourgroup-site/`.

## Credits and inspiration

The original static version of this website included a leader profile page inspired by a faculty biography that
highlights previous appointments, education and awards【634441415130286†L20-L35】.  This Jekyll implementation retains the minimalist,
responsive design while making it easier for non‑technical collaborators to update content.