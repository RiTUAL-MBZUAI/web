## File structure

```
https://ritual-mbzuai.github.io/web/
├── _config.yml            # Site configuration (title, description, etc.)
├── _layouts/
│   └── default.html       # Base HTML template used by all pages
├── _includes/
│   ├── header.html        # Navigation bar (logo and menu)
│   └── footer.html        # Footer with copyright
├── _data/
│   ├── leader.yml        # YAML data for leader
|   ├── team.yml           # YAML data for team members
│   ├── publications.yml   # YAML data for publications
│   └── news.yml           # YAML data for news items
├── assets/
│   ├── css/styles.css     # Shared styling for all pages
│   └── js/script.js       # JavaScript for navigation, reveal animations, filters and back‑to‑top
├── images/                # Logos, background and profile photos
│   ├── hero-bg.png
│   ├── logo.png
│   ├── member1.png
│   ├── member2.png
│   └── member3.png
├── index.md               # Home page with logo and research areas
├── team.md                # Team page that loops over team.yml
├── publications.md        # Publications page with filtering
├── news.md                # News and announcements page
├── leader.md              # Dedicated profile page for the group leader
└── README.md              # This file
```

## To customising the site

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
- **Leader profile:**  The file `leader.md` contains the personal page for the Prof. Thamar. Update
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
