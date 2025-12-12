# Outcast SMP Website

Website for Outcast SMP - A modded anarchy Minecraft server for Java Edition 1.21.7

## Features

- Modern, responsive design
- Discord server integration
- Knowledge Bank section with multiple pages
- Server information and resources

## Installation

1. Install Node.js (v14 or higher recommended)
2. Install dependencies:
```bash
npm install
```

## Running the Server

Start the development server:
```bash
npm start
```

The website will be available at `http://localhost:3000`

## Project Structure

```
outcastsmp/
├── server.js              # Express server
├── package.json           # Node.js dependencies
├── public/                # Static files
│   ├── index.html        # Homepage
│   ├── styles.css        # Global styles
│   └── knowledge/        # Knowledge bank pages
│       ├── index.html
│       ├── getting-started.html
│       ├── mods.html
│       ├── anarchy.html
│       ├── faq.html
│       ├── survival.html
│       └── server-info.html
└── README.md
```

## Customization

- Edit `public/index.html` to modify the homepage
- Edit `public/styles.css` to change styling
- Add new knowledge pages in `public/knowledge/` and link them in the knowledge index
- Update Discord link in HTML files if needed

## License

MIT

