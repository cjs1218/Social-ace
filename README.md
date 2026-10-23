# Social Ace

A simple web prototype to help a shy 7-year-old practise social situations, designed for children who find reading hard.

- **Audio-first:** every screen is read aloud (tap the speaker to hear it again).
- **23 stories with Finn the fox**, grouped into Saying hi, Joining in, Reading faces, Keeping friends and Tricky moments. Each has gentle choices, a tap-through "recipe" and brave words to say out loud.
- **Today's adventure:** one tap gives a story, a game and a real-life mission, so there's no choosing.
- **Faces that react:** the other children (and Finn) change expression when a choice is picked.
- **Games:** Spot the signal, Face match, Arm's length and Wait for the gap (in `games.js`).
- **Finn's den:** every story, game, mission and adventure earns stars to spend on 13 den parts, from cushions to a rope swing (in `den.js`).
- **Brave ladder:** real-life missions to tick off with a grown-up.
- **For grown-ups:** tips on how to use it.

No sign-in, no ads, no chat. Progress is stored only in the browser on that device.

## Run it

It is a single file. Open `index.html` in any browser, or turn on GitHub Pages (Settings → Pages → Deploy from branch → `main`) to get a link that works on a phone or tablet.

## Adding a story

The first five stories are in `index.html`; the rest are in `stories.js`. Each story is a list of steps: `tell`, `feel`, `choose`, `practise` and `done`.
