# davidhsong.github.io

Personal portfolio, live at https://davidhsong.github.io

Plain HTML, CSS, and JavaScript. No framework, build step, or dependencies. Push to
`main` and GitHub Pages publishes the site.

## Files

- `index.html` - content for all nine tab panels
- `styles.css` - responsive layout, timeline, project cards, and photo decks
- `main.js` - tab routing, keyboard navigation, fallbacks, and gallery arrows
- `assets/` - profile, training, and conference photos
- `David_Song_Full_Stack.pdf` - resume linked from Contact

## Run locally

`\`\`powershell
python -m http.server 8000
`\`\`

Open http://localhost:8000 and refresh after an edit.

## Add a blog post

Copy one `.blog-post` article in the Blog panel of `index.html` and update its date,
heading, text, and image paths. A photo deck uses this structure:

`\`\`html
<div class="photo-deck" data-photo-deck aria-label="Event photos">
  <figure class="photo-slide" data-slide>
    <img src="assets/event/photo-1.jpg" alt="Describe the photo" loading="lazy">
    <figcaption>Optional caption.</figcaption>
  </figure>
  <figure class="photo-slide" data-slide hidden>
    <img src="assets/event/photo-2.jpg" alt="Describe the photo" loading="lazy">
    <figcaption>Optional caption.</figcaption>
  </figure>
  <!-- Keep the existing previous/next buttons and counter. -->
</div>
`\`\`

The JavaScript discovers every `data-photo-deck` automatically. There are no dots or
carousel menu; visitors use the arrow buttons or the left/right keyboard keys.

## Content notes

- The Blog currently contains Fully Connected 2026 and PyTorch Conference North
  America 2026 field notes.
- The PyTorch deck currently has one uploaded image. Add more `data-slide` figures as
  more files are placed in `assets/pytorch_pics/`.
- Music and fishing content remain intentionally unchanged.
- The unofficial transcript is a private source file and is not linked from the public
  site because it contains student-identifying information.

## Deploy

GitHub repository settings should use Pages -> Deploy from a branch -> `main`
-> `/ (root)`. GitHub Pages normally publishes a new commit within a few minutes.
