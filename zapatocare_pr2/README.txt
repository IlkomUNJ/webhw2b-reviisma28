ZapatoCare PR2 - Template Project
--------------------------------
This archive contains a starter AdonisJS-like project structure for your PR2,
preserving the frontend style from your PR1 (index.html and css).

IMPORTANT:
- This is a file-structure template. To run as a real AdonisJS app, open
  this folder in VSCode and follow the commands below to initialize AdonisJS:

  1. npm init adonisjs@latest (or install Adonis globally) and choose Web Starter Kit
  2. Move the files in 'resources/views' and 'public' into your Adonis project 'resources/views' and 'public'
  3. Copy controllers and routes into your Adonis project (see start/routes.ts and app/Controllers/Http)
  4. Run migrations: node ace migration:run (after creating Adonis project and configuring sqlite)
  5. Start: node ace serve --watch

What's included:
- resources/views/layouts/master.edge  (Edge master layout)
- resources/views/user/home.edge      (converted from your index.html - same style)
- resources/views/user/search.edge
- resources/views/user/product.edge
- resources/views/user/wishlist.edge
- resources/views/user/contact.edge
- resources/views/seller/list.edge
- resources/views/seller/add.edge
- start/routes.ts                     (example routes)
- app/Controllers/Http/*.ts           (example controllers)
- database/migrations/000_services.ts
- database/zapatocare.sqlite3         (empty sqlite file)
- public/css/style.css                (copied from your css if available)
- public/logo_zapato.jpg
- public/about.jpg
- README for further steps

I preserved your PR1 look (home content) inside home.edge and included your images.
If you want, I can now:
 - 1) Try to scaffold a full working Adonis project and zip it (requires running npm commands which I can't run here)
 - 2) Or give step-by-step commands to integrate these files into your local Adonis project.

Tell me which you prefer.
