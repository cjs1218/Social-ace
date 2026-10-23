/* Social Ace: Finn's den.
   Stars are earned every time a story, game, mission or adventure is finished,
   and spent here on den parts. wallet = earned - spent. */

const DEN_ITEMS = [
  { id: 'cushions', pic: '🛋️', name: 'Comfy cushions', cost: 2 },
  { id: 'flag',     pic: '🚩', name: 'Den flag', cost: 2 },
  { id: 'roof',     pic: '🏕️', name: 'Blanket roof', cost: 3 },
  { id: 'rug',      pic: '🟫', name: 'Cosy rug', cost: 3 },
  { id: 'lights',   pic: '✨', name: 'Fairy lights', cost: 4 },
  { id: 'lantern',  pic: '🏮', name: 'Lantern', cost: 4 },
  { id: 'poster',   pic: '🦖', name: 'Dinosaur poster', cost: 5 },
  { id: 'books',    pic: '📚', name: 'Bookshelf', cost: 6 },
  { id: 'chest',    pic: '🧰', name: 'Treasure chest', cost: 7 },
  { id: 'scope',    pic: '🔭', name: 'Telescope', cost: 8 },
  { id: 'cat',      pic: '🐈', name: 'Den cat', cost: 10 },
  { id: 'fire',     pic: '🔥', name: 'Campfire', cost: 10 },
  { id: 'swing',    pic: '🪢', name: 'Rope swing', cost: 12 }
];

function owned() { return store('den') || []; }
function earned() {
  let e = store('earned');
  if (e === null || e === undefined) {
    // First run after the den was added: count what has been earned so far
    const stars = store('stars') || {}, ladder = store('ladder') || [];
    e = Object.keys(stars).length + ladder.length + (store('advDone') || 0);
    store('earned', e);
  }
  return e;
}
function spent() { const o = owned(); return DEN_ITEMS.filter(i => o.includes(i.id)).reduce((a, i) => a + i.cost, 0); }
function wallet() { return Math.max(0, earned() - spent()); }

function earn(n = 1) {
  store('earned', earned() + n);
  toast(`+${n} ★`);
}

function toast(text) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.textContent = text;
  t.classList.remove('show'); void t.offsetWidth; t.classList.add('show');
}

function nextItem() {
  const o = owned();
  return DEN_ITEMS.find(i => !o.includes(i.id)) || null;
}

/* ---------- drawing the den ---------- */
function denSvg(o, fresh) {
  const has = id => o.includes(id);
  const cls = id => id === fresh ? ' class="den-new"' : '';
  const lightDots = (x1, y1, x2, y2) => Array.from({ length: 9 }, (_, k) => {
    const t = (k + 0.5) / 9, x = x1 + (x2 - x1) * t, y = y1 + (y2 - y1) * t;
    return `<circle cx="${x}" cy="${y + 4}" r="5" fill="${['#ffd45a', '#ff7ab6', '#7fd3ff', '#9cf08a'][k % 4]}"/>`;
  }).join('');
  return `<svg class="scene den" viewBox="0 0 600 320" role="img" aria-label="Finn's den">
    <rect width="600" height="320" fill="#cdeefd"/>
    <circle cx="510" cy="50" r="26" fill="#ffd45a"/>
    <rect y="250" width="600" height="70" fill="#9bd17a"/>
    <rect x="34" y="120" width="22" height="140" fill="#8a5a33"/><circle cx="45" cy="105" r="55" fill="#5fae4a"/>
    <rect x="548" y="110" width="22" height="150" fill="#8a5a33"/><path d="M548 150 h-60" stroke="#8a5a33" stroke-width="10" stroke-linecap="round"/>
    <circle cx="560" cy="95" r="55" fill="#5fae4a"/>

    ${has('rug') ? `<g${cls('rug')}><ellipse cx="300" cy="285" rx="120" ry="22" fill="#c0603e"/><ellipse cx="300" cy="285" rx="90" ry="14" fill="none" stroke="#f4c27a" stroke-width="4" stroke-dasharray="10 8"/></g>` : ''}

    <!-- stick frame -->
    <path d="M170 272 L300 86 L430 272" fill="none" stroke="#8a5a33" stroke-width="12" stroke-linecap="round"/>
    <path d="M200 272 L300 100 M400 272 L300 100" stroke="#9c6b40" stroke-width="8" stroke-linecap="round"/>
    ${has('roof')
      ? `<g${cls('roof')}><path d="M180 270 L300 96 L420 270 Z" fill="#4f86c6"/>
         <path d="M220 212 L380 212 M250 168 L350 168 M200 250 L400 250" stroke="#ffc94a" stroke-width="10"/>
         <path d="M260 270 L300 170 L340 270 Z" fill="#2b4a6b"/></g>`
      : `<path d="M260 270 L300 170 L340 270" fill="none" stroke="#9c6b40" stroke-width="6"/>`}
    ${has('lights') ? `<g${cls('lights')}>${lightDots(180, 268, 300, 96)}${lightDots(300, 96, 420, 268)}</g>` : ''}
    ${has('flag') ? `<g${cls('flag')}><path d="M300 92 V36" stroke="#5a3a22" stroke-width="5"/><path d="M302 38 h44 l-12 12 l12 12 h-44 z" fill="#e5484d"/></g>` : ''}
    ${has('cushions') ? `<g${cls('cushions')}><rect x="270" y="248" width="34" height="24" rx="10" fill="#ff7ab6"/><rect x="298" y="252" width="34" height="22" rx="10" fill="#ffd45a"/></g>` : ''}
    ${has('lantern') ? `<g${cls('lantern')}><rect x="444" y="232" width="26" height="36" rx="6" fill="#e5484d"/><rect x="450" y="240" width="14" height="20" rx="3" fill="#ffe08a"/><path d="M450 232 q7 -10 14 0" stroke="#333" stroke-width="3" fill="none"/></g>` : ''}
    ${has('poster') ? `<g${cls('poster')}><rect x="62" y="150" width="46" height="56" fill="#fff" stroke="#c7dce8" stroke-width="3"/>
       <path d="M70 196 q6 -22 18 -24 q10 -2 12 -10 l4 4 q-2 10 -10 14 l2 16 z" fill="#4fc58c"/></g>` : ''}
    ${has('books') ? `<g${cls('books')}><rect x="474" y="190" width="60" height="80" fill="#b98f6a"/><path d="M474 216 h60 M474 242 h60" stroke="#8a5a33" stroke-width="4"/>
       ${[['#e5484d', 480], ['#5aa0f0', 490], ['#ffc94a', 500], ['#4fc58c', 512]].map(([c, x]) => `<rect x="${x}" y="196" width="8" height="18" fill="${c}"/><rect x="${x + 4}" y="222" width="8" height="18" fill="${c}"/>`).join('')}</g>` : ''}
    ${has('chest') ? `<g${cls('chest')}><rect x="104" y="238" width="56" height="34" rx="4" fill="#a8652f"/><path d="M104 238 q28 -24 56 0 z" fill="#c07a3c"/>
       <rect x="126" y="242" width="12" height="12" fill="#ffd45a"/></g>` : ''}
    ${has('scope') ? `<g${cls('scope')}><path d="M380 300 l14 -34 l14 34 M394 266 v34" stroke="#555" stroke-width="4"/><rect x="372" y="246" width="56" height="14" rx="6" transform="rotate(-25 400 253)" fill="#5a6b7c"/></g>` : ''}
    ${has('cat') ? `<g${cls('cat')}><ellipse cx="236" cy="290" rx="20" ry="14" fill="#555"/><circle cx="222" cy="276" r="11" fill="#555"/>
       <path d="M214 270 l2 -10 l6 6 M230 270 l-2 -10 l-6 6" fill="#555" stroke="#555" stroke-width="2"/><path d="M256 292 q14 -4 10 -20" stroke="#555" stroke-width="5" fill="none" stroke-linecap="round"/>
       <circle cx="218" cy="275" r="2" fill="#ffd45a"/><circle cx="226" cy="275" r="2" fill="#ffd45a"/></g>` : ''}
    ${has('fire') ? `<g${cls('fire')}><path d="M130 304 l40 -8 M130 296 l40 8" stroke="#8a5a33" stroke-width="7" stroke-linecap="round"/>
       <path class="flame" d="M150 296 q-14 -16 0 -38 q4 14 10 10 q8 16 -10 28 z" fill="#ff8a1f"/><path class="flame" d="M151 294 q-6 -10 0 -20 q8 10 0 20 z" fill="#ffd45a"/></g>` : ''}
    ${has('swing') ? `<g${cls('swing')}><path class="swing" d="M500 150 v86 M530 150 v86" stroke="#c9a46a" stroke-width="4"/><rect x="494" y="234" width="42" height="9" rx="3" fill="#8a5a33"/></g>` : ''}

    <g transform="translate(258 188) scale(.42)"><g class="finn">${fox(o.length >= 8 ? 'big' : 'happy')}</g></g>
  </svg>`;
}

/* ---------- den screen ---------- */
function showDen(fresh) {
  homeBtn.hidden = false;
  clearGameTimers();
  const o = owned(), w = wallet(), nx = nextItem();
  $view.replaceChildren(el(`
    <div class="stage">${denSvg(o, fresh)}
      <div class="talk">
        <p class="say">Finn's den</p>
        <p class="wallet"><span aria-hidden="true">★</span> ${w} star${w === 1 ? '' : 's'} to spend</p>
        ${nx ? `<p class="hint">${o.length} of ${DEN_ITEMS.length} parts built. Earn stars by playing stories, games and missions.</p>`
             : '<p class="hint">You built the whole den! Amazing.</p>'}
      </div>
    </div>
    <div class="shop">
      ${DEN_ITEMS.map(i => {
        const have = o.includes(i.id), can = w >= i.cost;
        return `<button class="shop-item ${have ? 'have' : can ? 'can' : ''}" data-id="${i.id}" ${have ? 'disabled' : ''}>
          <span class="pic" aria-hidden="true">${i.pic}</span>
          <b>${i.name}</b>
          <small>${have ? '✓ In the den' : can ? `Buy for ★ ${i.cost}` : `★ ${i.cost} · need ${i.cost - w} more`}</small>
        </button>`;
      }).join('')}
    </div>`));
  speak(fresh
    ? `Wow! ${DEN_ITEMS.find(i => i.id === fresh).name}! The den looks amazing.`
    : nx ? `This is Finn's den. You have ${w} star${w === 1 ? '' : 's'} to spend.` : 'You built the whole den! Amazing.');
  $view.querySelectorAll('.shop-item').forEach(b => b.onclick = () => {
    const item = DEN_ITEMS.find(i => i.id === b.dataset.id);
    if (owned().includes(item.id)) return;
    if (wallet() < item.cost) {
      speak(`The ${item.name} costs ${item.cost} stars. You need ${item.cost - wallet()} more. Play a story or a game to earn some!`);
      return;
    }
    store('den', [...owned(), item.id]);
    showDen(item.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
