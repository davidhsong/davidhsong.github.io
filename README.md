# davidhsong.github.io

Personal portfolio, live at https://davidhsong.github.io

Plain HTML, CSS, and JavaScript. No framework, no build step, no dependencies. Push to
`main` and it goes live in about a minute.

```
index.html      content and all eight tab panels
styles.css      styles
main.js         tab routing, keyboard nav, photo fallback
assets/         profile photo and other images
davidsong_resume.pdf
```

## Running locally

```
python -m http.server 8000
```

Open http://localhost:8000 and refresh after any edit. There is nothing to rebuild.

## Photos

In place: `profile_pic.jpg` (header) and `gym_pic.jpg` (Training). Still empty:
`fish-01.jpg` through `fish-04.jpg` (Fishing). Drop files into `assets/` with those
names and they appear on their own. Empty slots show a dashed placeholder labelled with
the filename they want. See [assets/README.md](assets/README.md).

## Editing content

All text is in `index.html`. Search for `TODO:` to find anything still outstanding.
Everything else is written.

## Spotify playlists

In Spotify: open the playlist, `...` menu, Share, Copy link. That gives you something like

```
https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M?si=abc123
```

Take the ID (`37i9dQZF1DXcBWIGoYBM5M`) and paste it into the matching `<iframe src>` in the
Music panel, after `/embed/playlist/`. Albums and artists work the same way, just swap
`playlist` for `album` or `artist`.

The three in the file now are placeholders.

To strip the color out of the players, uncomment the two `filter: grayscale(1)` rules near
the bottom of `styles.css`.

## Notes

- Tabs use hash routing (`/#music`, `/#fishing`), so links are shareable and survive a hard
  refresh without needing a `404.html` redirect.
- Dark mode follows the operating system. There is no toggle.
- With JavaScript off the page still reads fine. All panels render stacked.
- Phone number is left off the Contact tab on purpose. It's commented out in `index.html`.

## Deploying

Settings, Pages, Source: Deploy from a branch, branch `main`, folder `/ (root)`. After that
every push to `main` publishes.
