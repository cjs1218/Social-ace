/* Social Ace: quick games.
   Loaded after index.html's main script, so kid(), kidMood(), scene(), speak(),
   store(), shuffle(), showSignals(), SIGNALS and finished() already exist. */

/* Timers for games that run on their own; cleared whenever we leave a screen */
let gameTimers = [];
function later(fn, ms) { const t = setTimeout(fn, ms); gameTimers.push(t); return t; }
function clearGameTimers() { gameTimers.forEach(clearTimeout); gameTimers = []; }

const GAMES = [
  { id: 'signals', pic: '🚦', title: 'Spot the signal', sub: 'Keep playing or stop?', start: () => showSignals(0, 0, shuffle(SIGNALS).slice(0, 6)) },
  { id: 'facematch', pic: '🙂', title: 'Face match', sub: 'Find the feeling', start: () => faceMatch(0, 0, faceRounds()) },
  { id: 'space', pic: '📏', title: 'Arm\'s length', sub: 'Not too close, not too far', start: () => armsLength(0) },
  { id: 'gap', pic: '⏸️', title: 'Wait for the gap', sub: 'Don\'t interrupt!', start: () => waitGap(0, 0) }
];

function gameOver(id, line, again) {
  clearGameTimers();
  const stars = store('stars') || {}; stars[id] = 1; store('stars', stars); earn(1);
  $view.replaceChildren(el(`
    <div class="stage">${scene('park', 'big', '')}
      <div class="talk"><p class="say">${line}</p>
      <p class="speech pop" aria-hidden="true">★</p>
      <div class="row"><button class="big alt" id="again">Play again</button><button class="big" id="home">${adventure ? 'Next ➜' : 'Back home'}</button></div></div>
    </div>`));
  speak(line + ' You earned a star!');
  $view.querySelector('#again').onclick = again;
  finishButtons();
}

function dotsFor(n, i) { return Array.from({ length: n }, (_, k) => `<i class="${k <= i ? 'on' : ''}"></i>`).join(''); }

/* ---------- Face match: tap the face that shows a feeling ---------- */
const FEELINGS = {
  happy: { word: 'happy', clue: 'a smile' },
  laugh: { word: 'excited', clue: 'a big open smile and arms up' },
  cross: { word: 'cross', clue: 'eyebrows down and arms crossed' },
  sad:   { word: 'sad', clue: 'a frown and a tear' },
  meh:   { word: 'bored', clue: 'a flat mouth' }
};
const LOOKS = [['#2a9d8f', '#1c1c1c'], ['#e76f51', '#a0522d'], ['#7a4fd1', '#e8b545'], ['#e0533d', '#4a2f1d'], ['#f2a541', '#5a3a22']];

function faceRounds() {
  return shuffle(Object.keys(FEELINGS).concat(['cross', 'sad'])).slice(0, 6).map(target => {
    const others = shuffle(Object.keys(FEELINGS).filter(m => m !== target)).slice(0, 2);
    return { target, faces: shuffle([target, ...others]), looks: shuffle(LOOKS).slice(0, 3) };
  });
}

function faceMatch(i, score, rounds) {
  homeBtn.hidden = false;
  if (i >= rounds.length) return gameOver('facematch', `You matched ${score} out of ${rounds.length} faces first time!`, () => faceMatch(0, 0, faceRounds()));
  const r = rounds[i], f = FEELINGS[r.target];
  $view.replaceChildren(el(`
    <div class="stage"><div class="talk">
      <p class="say">Tap the face that looks <b class="feel-word">${f.word}</b>.</p>
      <div class="faces">
        ${r.faces.map((m, k) => `<button class="face-btn" data-m="${m}" aria-label="Face ${k + 1}">
          <svg viewBox="-40 88 80 84">${kid(0, r.looks[k][0], r.looks[k][1], m, 1)}</svg></button>`).join('')}
      </div>
      <p class="say" id="reply" hidden></p>
      <button class="big" id="go" hidden>Next ➜</button>
      <div class="progress" aria-hidden="true">${dotsFor(rounds.length, i)}</div>
    </div></div>`));
  speak(`Tap the face that looks ${f.word}.`);
  const reply = $view.querySelector('#reply'), go = $view.querySelector('#go');
  let firstTry = true, done = false;
  $view.querySelectorAll('.face-btn').forEach(b => b.onclick = () => {
    if (done) return;
    const m = b.dataset.m;
    if (m === r.target) {
      done = true; b.classList.add('right');
      reply.textContent = `Yes! ${cap(f.word)} looks like ${f.clue}.`;
      go.hidden = false;
      go.onclick = () => faceMatch(i + 1, score + (firstTry ? 1 : 0), rounds);
    } else {
      firstTry = false; b.classList.add('wrong'); b.disabled = true;
      reply.textContent = `That one looks ${FEELINGS[m].word}. Try again!`;
    }
    reply.hidden = false; speak(reply.textContent);
  });
}
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

/* ---------- Arm's length: slide Finn to a comfy distance ---------- */
const SPACE_ROUNDS = [
  { look: LOOKS[1], start: 8, say: 'Finn wants to talk to Ava. Slide Finn closer, but not too close!' },
  { look: LOOKS[2], start: 100, say: 'Oops, Finn is right in Leo\'s face! Slide him back to a comfy gap.' },
  { look: LOOKS[0], start: 30, say: 'Now talk to Sam. Find the just-right gap.' }
];

function armsLength(i) {
  homeBtn.hidden = false;
  if (i >= SPACE_ROUNDS.length) return gameOver('space', 'You found the just-right gap every time!', () => armsLength(0));
  const r = SPACE_ROUNDS[i];
  $view.replaceChildren(el(`
    <div class="stage">${scene('park', 'happy', kid(500, r.look[0], r.look[1], 'meh'))}
      <div class="talk">
        <p class="say">${r.say}</p>
        <label class="hint" for="gapSlider">Move Finn</label>
        <input type="range" id="gapSlider" class="slider" min="0" max="100" value="${r.start}">
        <p class="say" id="reply" aria-live="polite"></p>
        <button class="big" id="check">That's just right!</button>
        <div class="progress" aria-hidden="true">${dotsFor(SPACE_ROUNDS.length, i)}</div>
      </div>
    </div>`));
  speak(r.say);
  const svg = $view.querySelector('.scene'), finnG = svg.querySelector('.finn').parentNode;
  const kidMoodG = svg.querySelector('.kid-mood');
  const slider = $view.querySelector('#gapSlider'), reply = $view.querySelector('#reply');
  let zone = '';
  const update = () => {
    const x = -40 + slider.value * 3.4;
    finnG.setAttribute('transform', `translate(${x} 56)`);
    const gap = 462 - (x + 150);
    const z = gap < 30 ? 'close' : gap > 110 ? 'far' : 'right';
    if (z !== zone) {
      zone = z;
      kidMoodG.innerHTML = kidMood(z === 'close' ? 'cross' : z === 'far' ? 'meh' : 'happy');
      reply.textContent = z === 'close' ? 'Too close! Look at that face.' : z === 'far' ? 'Too far. They can\'t hear Finn.' : 'Comfy! That looks about an arm\'s length.';
    }
  };
  slider.oninput = update; update();
  $view.querySelector('#check').onclick = () => {
    if (zone === 'right') {
      speak('Just right! An arm\'s length is a comfy gap.');
      reply.textContent = 'Just right! ★';
      later(() => armsLength(i + 1), 1600);
    } else {
      speak(zone === 'close' ? 'Not yet. That\'s too close. Look at their face.' : 'Not yet. That\'s too far away.');
    }
  };
}

/* ---------- Wait for the gap: tap "My turn!" only when Sam stops talking ---------- */
function waitGap(i, score) {
  homeBtn.hidden = false;
  clearGameTimers();
  const ROUNDS = 5;
  if (i >= ROUNDS) return gameOver('gap', `You waited for the gap ${score} out of ${ROUNDS} times!`, () => waitGap(0, 0));
  $view.replaceChildren(el(`
    <div class="stage">
      ${scene('school', 'calm', kid(470, '#2a9d8f', '#1c1c1c', 'happy') + `<g id="bubble" class="bubble">
          <rect x="400" y="4" width="150" height="50" rx="20" fill="#fff" stroke="#c7dce8" stroke-width="3"/>
          <path d="M455 52 l10 14 l6 -14" fill="#fff" stroke="#c7dce8" stroke-width="3"/>
          <circle class="d1" cx="450" cy="29" r="7" fill="#5a7186"/><circle class="d2" cx="475" cy="29" r="7" fill="#5a7186"/><circle class="d3" cx="500" cy="29" r="7" fill="#5a7186"/>
        </g>`)}
      <div class="talk">
        <p class="say" id="status">Sam is talking. Wait for the gap...</p>
        <button class="big turn-btn" id="turn">🙋 My turn!</button>
        <p class="hint">Tap when Sam stops talking.</p>
        <div class="progress" aria-hidden="true">${dotsFor(ROUNDS, i)}</div>
      </div>
    </div>`));
  if (i === 0) speak('Sam is telling a story. Tap My turn when he stops talking. Not before!');
  const svg = $view.querySelector('.scene');
  const mood = svg.querySelector('.kid-mood'), bubble = svg.querySelector('#bubble');
  const status = $view.querySelector('#status'), turn = $view.querySelector('#turn');
  let state = 'talking', mouthOpen = false, flapper = null;

  const startTalking = () => {
    state = 'talking'; bubble.style.display = '';
    status.textContent = 'Sam is talking. Wait for the gap...';
    turn.classList.remove('ready');
    const flap = () => { mouthOpen = !mouthOpen; mood.innerHTML = kidMood(mouthOpen ? 'talk' : 'happy'); flapper = later(flap, 180 + Math.random() * 120); };
    flap();
    later(startGap, 2000 + Math.random() * 3000);
  };
  const startGap = () => {
    clearTimeout(flapper);
    state = 'gap'; bubble.style.display = 'none';
    mood.innerHTML = kidMood('happy');
    status.textContent = 'Sam stopped talking!';
    turn.classList.add('ready');
    later(() => { if (state === 'gap') startTalking(); }, 1900);
  };

  turn.onclick = () => {
    if (state === 'gap') {
      state = 'won'; clearGameTimers();
      mood.innerHTML = kidMood('laugh');
      status.textContent = 'Great waiting! Your turn to talk.';
      speak('Great waiting!');
      later(() => waitGap(i + 1, score + 1), 1500);
    } else if (state === 'talking') {
      state = 'oops'; clearGameTimers();
      bubble.style.display = 'none';
      mood.innerHTML = kidMood('cross');
      status.textContent = 'Oops! Sam was still talking.';
      speak('Oops! Sam was still talking. Wait for the gap.');
      later(() => waitGap(i + 1, score), 2200);
    }
  };
  startTalking();
}
