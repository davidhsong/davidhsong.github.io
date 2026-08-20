# assets

Drop image files in here using the names below and they show up on the site
automatically. There is no HTML to edit.

| File | Where it shows |
|---|---|
| `profile_pic.jpg` | Header, next to your name |
| `gym_pic.jpg` | Training tab |

Use the real extension. A JPEG named `.png` still renders in most browsers, but it
gets served with a content type that contradicts the file, which some hosts refuse.
Phone photos are almost always JPEG.

Any slot without a file shows a dashed placeholder labelled with the filename it wants,
so nothing looks broken while you fill them in.

## Notes

- Square crops look best. Other shapes work too, CSS crops to center.
- Photos render in full color. The rest of the page stays black and white.
- To use a different filename or extension, update the matching `src` in `index.html`.
