# KubeJS Server Script Layout

KubeJS loads all `.js` files under `kubejs/server_scripts` automatically, including subfolders.
You do not need an import/index file for recipe scripts.

Recommended organization for this pack:

- One folder per mod or system (`Applied`, `Create`, `Mekanism`, `MysticalAgriculture`, etc.)
- One file per feature/recipe group (for example `megatorch.js`, `processor.js`, `infinite_storage_part.js`)
- Avoid one-file-per-single-recipe because it becomes hard to manage at scale
- Keep recipe IDs unique across the whole pack

Debug/test recipes are isolated in `kubejs/server_scripts/Debug`.
