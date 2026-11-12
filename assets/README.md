# assets

## Persistent images

| File | Where it appears |
|---|---|
| `profile_pic.jpg` | Original header portrait |
| `profile_pic_centered.jpg` | Face-centered header portrait |
| `gym_pic.jpg` | Training tab |

## Now images

The three images in `now/` are local copies of photos used in the Now cards. Their
Unsplash source pages are linked from the visible photo credits in `index.html`.

## Conference images

- `coreweave_pics/` - Fully Connected 2026 blog post
- `pytorch_pics/` - PyTorch Conference North America 2026 blog post

Conference images are displayed in arrow-only photo decks. Adding a file to a folder
does not add it to the page automatically because GitHub Pages cannot enumerate static
directories in the browser. Add one `figure[data-slide]` for the new file in the
matching Blog article in `index.html`; `main.js` handles the arrows and count.

Use descriptive `alt` text for each new image. Keep the original extension and avoid
renaming a JPEG to `.png`.
