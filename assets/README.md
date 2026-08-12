# assets

Drop image files in here using the names below and they show up on the site
automatically. There is no HTML to edit.

| File | Where it shows |
|---|---|
| `profile_pic.jpg` | Header, next to your name |
| `gym_pic.jpg` | Training tab |
| `fish-01.jpg` ... `fish-04.jpg` | Fishing tab, still empty |

Use the real extension. A JPEG named `.png` still renders in most browsers, but it
gets served with a content type that contradicts the file, which some hosts refuse.
Phone photos are almost always JPEG.

Any slot without a file shows a dashed placeholder labelled with the filename it wants,
so nothing looks broken while you fill them in.

## Notes

- Square crops look best. Other shapes work too, CSS crops to center.
- Photos render in full color. The rest of the page stays black and white.
- To use a different filename or extension, update the matching `src` in `index.html`.

## Adding more photo slots

Copy one of the blocks inside `.gallery` in `index.html` and change the filename:

```html
<figure class="shot">
  <img src="assets/fish-05.jpg" alt="David Song fishing">
  <span class="shot-hint">assets/fish-05.jpg</span>
</figure>
```
