# Teaser illustration style

Rules for the teaser images next to each publication and ongoing project.
Reference image: `public/images/teaser-teachtune.svg`. Match it before anything else.

## File

- Hand-written SVG, one file per paper: `public/images/teaser-<id>.svg` (`project-<id>.svg` for ongoing work).
- Root element: `viewBox="0 0 480 270" width="480" height="270"` (16:9). The site scales it with CSS; the attributes give the image an intrinsic size so browsers can tell it loaded.
- No external fonts, images, scripts, filters, gradients, or shadows. Target under 15 KB.
- Include `<title>` with one sentence describing the scene.

## Look: filled shapes with a dark outline

- Outline: `#1f2937`, `stroke-width="2.5"`, round caps and joins, on every main shape.
- Background: full-canvas `#f3f7f5` rectangle.
- "Stage" areas (a screen, a panel, a document): white, `rx="16"`, outlined.
- Corners are always rounded (`rx` 6 to 16). No sharp rectangles.

## Colour

| Role | Value | Use |
|---|---|---|
| Ink | `#1f2937` | outlines, eyes, mouths |
| Accent | `#1f6b4f` | the main actor or the paper's key idea, AI speech bubbles |
| Accent tint | `#e3f1eb` | AI/chatbot bodies, soft fills |
| White | `#ffffff` | panels, human speech bubbles, bodies |
| Blush | `#f7b9b0` | cheeks only |
| Yellow | `#f6d58a` | shirts and categories (pick in this order) |
| Coral | `#f2a48c` | |
| Sky | `#a9c8e8` | |
| Lilac | `#cdbdea` | |
| Brown | `#8a5a3c` | hair only, as an alternative to ink |
| Red | `#e0584f` | one emotional highlight per image at most (a heart) |
| Grey | `#cbd5d1` | tools, inactive things |
| Line grey | `#9ca3af` | placeholder text lines, dividers |

Use the accent for at most three kinds of things per image. Yellow, coral, sky, and lilac only distinguish people (shirts) or categories.

## Characters (drawn, not emoji fonts)

Soft, cute, hand-illustrated. Copy the shapes from the reference file rather than inventing new ones.

- Build every person in this order, back to front: long hair behind (if any), shirt, neck, ears, head, fringe, face.
- Head: white circle with the dark outline, plus a small white ear circle on each side. Faces are never colour-filled.
- Face: two small dot eyes (`r` 1.7 to 2) set close together and low on the face, a tiny mouth just below them, and pink blush circles (`#f7b9b0`, no outline) on both cheeks. No nose.
- Neck and shirt: draw the shirt as one smooth, rounded-shoulder shape with no notch. Draw the neck on top of it as a white shape whose sides curve outward at the bottom and close in a soft U; that U is the neckline. Use cubic curves, no straight rectangles or corners. Never a triangle collar, and never a gap between head and body.
- Shirt: one people colour (yellow, coral, sky, lilac), optionally with a simple white pattern (two stripes or three dots) so people differ by more than colour.
- Hair: one solid shape sitting on the head, in ink (`#1f2937`) or brown (`#8a5a3c`). Vary the hairstyle to tell people apart (long, bob, short with a tuft, flat fringe).
- Emotion comes from the mouth, the eyes (dots or closed arcs), and one prop: a raised hand, `?`, `z`.
- Teacher: larger than students, long hair, round glasses, yellow top, holding an open book. Always place a role cue behind or beside them (an accent-green chalkboard with a few white chalk marks); the outfit alone does not read as "teacher".
- Any other role (researcher, designer) also needs one clear prop or setting that says who they are (researcher: glasses and a lanyard badge).
- Do not reuse the same hairstyle and shirt colour for the main person in two different teasers.
- When the paper is about a tool, it is fine to draw the tool's interface (window, sidebar, nodes, generated screens) in this style with a small person beside it.
- AI or chatbot: clearly a machine, never a human face. Rounded-square head in accent tint, antenna with an accent dot, grey side bolts, and a dark screen (ink pill) with two light vertical bar eyes. No mouth, no blush.
- Speech bubbles: pill shapes (`rx` 8). AI bubbles are accent-filled, human bubbles are white. Put 1 or 2 short lines inside instead of words.

## Composition

- One idea per image: who does what to whom. Read left to right.
- At most about 12 objects. Leave at least 20 px margin from the canvas edge.
- Connections: accent, `stroke-width="2"`, `stroke-dasharray="4 5"`, gentle curves.
- Text: avoid. A single glyph such as `?` or `z` is fine, and so is one short label (one word, like `Rubric`) when the object would otherwise be unclear. Never write sentences or labels that must be read to understand the image.
- The image is shown about 240 px wide on the site, so nothing important should be smaller than 8 px on the canvas.

## Adding a new teaser

1. Write one sentence for the concept: "who does what to whom".
2. Draw it with the shapes and colours above, copying character shapes from the reference file.
3. Check it at 240 px wide next to the existing teasers.
