/* ============================================================
   CADENCE — storefront logic (mock data, no backend)
   Shop · cart · quiz · newsletter  +  CADENCE PREVIEW STUDIO
   ============================================================ */
'use strict';

/* ---- gradients: 8 categories + cover themes (used via data-grad too) ---- */
const GRAD = {
  'Fitness & Wellness'   : 'linear-gradient(160deg,#4F7A63,#8AA68C 58%,#E7D9A8)',
  'Meals & Weight Loss'  : 'linear-gradient(160deg,#9C4F2E,#C77E5A 55%,#EAC889)',
  'Students & Teachers'  : 'linear-gradient(160deg,#4E6E80,#7FA0AE 55%,#CFE0E6)',
  'Family Command Center': 'linear-gradient(160deg,#B5762F,#D8A24A 55%,#F0D6A0)',
  'Budget & Money'       : 'linear-gradient(160deg,#3F5D49,#6E8F6A 58%,#C9D8A8)',
  'ADHD & Focus'         : 'linear-gradient(160deg,#8E5A6E,#C77E5A 60%,#E7B3A3)',
  'Business & Creators'  : 'linear-gradient(160deg,#1C1B26,#2E3B47 60%,#6E92A1)',
  'Habits & Goals'       : 'linear-gradient(160deg,#9C5A3C,#C9826A 52%,#E0B25C)',
  'Soft Minimal'  : 'linear-gradient(160deg,#EFE7D8,#F7F2E9)',
  'Garden Warmth' : 'linear-gradient(160deg,#5E7E62,#8AA68C 58%,#EAC889)',
  'Midnight Focus': 'linear-gradient(160deg,#1C1B26,#2E3B47 60%,#6E92A1)',
  'Coastal Calm'  : 'linear-gradient(160deg,#6E92A1,#A9C2CE 55%,#F2D3C8)',
  'Bold Momentum' : 'linear-gradient(160deg,#9C4F2E,#C77E5A 55%,#D8A24A)'
};

/* ---- 16 products ---- */
const PRODUCTS = [
  { id:1, name:'Custom Life Rhythm Planner', price:52, type:'hybrid', category:'Habits & Goals', rating:4.9, reviews:3120, featured:true,
    desc:'Your whole life, in one customizable system — paper to plan on, digital to carry everywhere.',
    benefits:['Choose layout, cover, and start month','Add habit, budget, or meal pages','Physical planner + matching digital twin'],
    incl:['Premium lay-flat planner','Digital companion (PDF + GoodNotes)','One sticker ritual sheet'] },
  { id:2, name:'Digital Fitness Calendar', price:18, type:'digital', category:'Fitness & Wellness', rating:4.8, reviews:1740, featured:true,
    desc:'A movement plan you will actually keep — built for GoodNotes, iPad, and print.',
    benefits:['Hyperlinked workout & rest-day tracking','Progress views that reward showing up','Instant download, yours forever'],
    incl:['GoodNotes / PDF files','Letter, A4 & A5 sizes','Free monthly resets for a year'] },
  { id:3, name:'90-Day Weight Loss Cadence', price:68, compareAt:96, type:'hybrid', category:'Meals & Weight Loss', rating:4.9, reviews:3418, featured:true,
    desc:'Not a diet — a 90-day rhythm designed for the days you fall off, so one slip never ends your streak.',
    benefits:['Built-in grace days and a comeback ritual','Tracks the 4 signals that keep weight off','Paper planner + digital habit dashboard'],
    incl:['90-day physical planner','Digital companion + dashboard','Meal & movement tracker pages'] },
  { id:4, name:'ADHD Weekly Focus System', price:44, type:'physical', category:'ADHD & Focus', rating:4.9, reviews:2056, featured:true,
    desc:'Low-friction structure for busy brains — one page, one focus, zero overwhelm.',
    benefits:['Brain-dump and one-thing-today spreads','Visual time-blocking that fits','Forgiving design — no broken-streak shame'],
    incl:['Undated weekly focus planner','Brain-dump + priority pages','Sticker cue set'] },
  { id:5, name:'Student Semester Planner', price:38, type:'physical', category:'Students & Teachers', rating:4.8, reviews:1294,
    desc:'From syllabus to finals — turn a chaotic semester into a clear, repeatable rhythm.',
    benefits:['Assignment + exam countdown views','Weekly study blocks and grade tracker','Add your name to the cover'],
    incl:['Semester-dated planner','Exam + assignment trackers','Campus-ready cover'] },
  { id:6, name:'Family Command Center Calendar', price:46, type:'physical', category:'Family Command Center', rating:4.9, reviews:2480, featured:true,
    desc:'One calendar that finally gets the whole household on the same page.',
    benefits:['Color-coded columns for everyone','Meal plan + chores + activities','Big format the whole family can see'],
    incl:['Large wall planner','Meal + chore pages','Weekly family sync sheet'] },
  { id:7, name:'Budget Reset Calendar', price:16, type:'digital', category:'Budget & Money', rating:4.7, reviews:1012,
    desc:'A gentle 30-day money reset — see where it goes, then decide where it should.',
    benefits:['No-shame spending & savings tracker','Bill calendar and sinking funds','Print or use on any device'],
    incl:['Printable + digital budget pack','Bill & sinking-fund trackers','Monthly reset template'] },
  { id:8, name:'Executive Deep Work Planner', price:58, type:'physical', category:'Business & Creators', rating:4.8, reviews:806,
    desc:'For the calendar that runs your life — protect deep work and lead on purpose.',
    benefits:['Quarterly goals to daily priorities','Time-block & meeting-debrief pages','Heavyweight paper, executive finish'],
    incl:['Quarterly executive planner','Deep-work time-block pages','Goal-review spreads'] },
  { id:9, name:'Meal Prep Rhythm Calendar', price:15, type:'digital', category:'Meals & Weight Loss', rating:4.7, reviews:1188,
    desc:'Plan the week of meals in minutes — then shop, prep, and eat without the daily scramble.',
    benefits:['Weekly menu + auto grocery list','Prep-day checklists','Print-friendly and iPad-ready'],
    incl:['Digital meal-planning pack','Grocery + prep checklists','Recipe rotation pages'] },
  { id:10, name:'Habit Streak Calendar', price:12, type:'digital', category:'Habits & Goals', rating:4.9, reviews:2890, featured:true,
    desc:'A beautiful streak tracker that celebrates consistency — and forgives the off days.',
    benefits:['Visual streaks with built-in grace days','Track up to 8 habits at once','Instant download, print or digital'],
    incl:['Digital streak dashboard','Printable monthly trackers','Grace-day system'] },
  { id:11, name:'Content Creator Cadence', price:34, type:'hybrid', category:'Business & Creators', rating:4.8, reviews:642,
    desc:'Plan, batch, and publish without burnout — a rhythm built for people who post for a living.',
    benefits:['Content pillars + posting schedule','Batch-day and idea-bank pages','Works in Notion, GoodNotes, or print'],
    incl:['Physical content planner','Notion + GoodNotes templates','Idea-bank & batch pages'] },
  { id:12, name:'Teacher Lesson Rhythm Planner', price:46, type:'physical', category:'Students & Teachers', rating:4.9, reviews:1512,
    desc:'Lesson plans, grades, and a hundred small things — held in one calm, capable place.',
    benefits:['Week-at-a-glance lesson layouts','Gradebook and seating pages','Durable cover for a long year'],
    incl:['Academic-year planner','Gradebook + seating charts','Sticker + tab set'] },
  { id:13, name:'Minimal Wall Calendar', price:28, type:'physical', category:'Family Command Center', rating:4.7, reviews:864,
    desc:'A year of mornings on your wall — warm, minimal, and impossible to ignore.',
    benefits:['Large, write-on monthly grid','Premium matte art print','Ships flat in a protective tube'],
    incl:['12-month wall calendar','Matte art print','Hanging hardware'] },
  { id:14, name:'Desk Planner', price:32, type:'physical', category:'Business & Creators', rating:4.8, reviews:1066,
    desc:'A daily anchor for your desk — plan today without opening a single tab.',
    benefits:['Tear-off daily + weekly views','Sturdy lay-flat base','Space for your top 3 priorities'],
    incl:['Tear-off desk pad','Daily + weekly layouts','Priority + notes sections'] },
  { id:15, name:'Sticker Ritual Pack', price:9, type:'accessories', category:'Habits & Goals', rating:4.9, reviews:3360,
    desc:'The small dose of delight that makes you want to return to your planner.',
    benefits:['120+ functional & decorative stickers','Matte, no-glare finish','Mixes with any Cadence layout'],
    incl:['6 sticker sheets (120+)','Functional + decorative mix','Matte finish'] },
  { id:16, name:'Planner Accessories Bundle', price:24, type:'accessories', category:'Habits & Goals', rating:4.8, reviews:1204,
    desc:'Everything that makes the ritual feel good — pens, tabs, bands, and stickers in one box.',
    benefits:['Premium pen + highlighter set','Page tabs and elastic band','Sticker sheet + pocket folder'],
    incl:['Pen + highlighter set','Tabs + elastic band','Sticker sheet + pocket'] }
];

/* ---- category blurbs (cards) ---- */
const CAT_META = {
  'Fitness & Wellness'   : 'Move, rest, repeat',
  'Meals & Weight Loss'  : 'Eat with intention',
  'Students & Teachers'  : 'Syllabus to finals',
  'Family Command Center': 'Everyone in sync',
  'Budget & Money'       : 'Tell your money where to go',
  'ADHD & Focus'         : 'One page, one focus',
  'Business & Creators'  : 'Ship your best work',
  'Habits & Goals'       : 'Small wins, daily'
};
const CAT_ORDER = ['Fitness & Wellness','Meals & Weight Loss','Students & Teachers','Family Command Center','Budget & Money','ADHD & Focus','Business & Creators','Habits & Goals'];

/* ---- quiz recommendations (keyed by Q1 chaos) ---- */
const QUIZ_REC = {
  family: { lead:6, title:'The Family Rhythm System', parts:['Family Command Center','Meal Prep Rhythm','Habit Streak pages'] },
  health: { lead:3, title:'The 90-Day Reset System',  parts:['90-Day Weight Loss Cadence','Meal Prep Rhythm','Fitness pages'] },
  focus:  { lead:4, title:'The Focus System',          parts:['ADHD Weekly Focus System','Habit Streak Calendar','Notes pages'] },
  money:  { lead:7, title:'The Money Reset System',    parts:['Budget Reset Calendar','Goal-review pages','Habit Streak Calendar'] },
  work:   { lead:8, title:'The Deep Work System',      parts:['Executive Deep Work Planner','Content Creator Cadence','Goal-review pages'] },
  habits: { lead:1, title:'The Daily Rhythm System',   parts:['Custom Life Rhythm Planner','Habit Streak Calendar','Goal-review pages'] }
};
const CHAOS_LABEL = { family:"your family's week", health:'your health and eating', focus:'your focus and follow-through', money:'your money', work:'your work and projects', habits:'your daily habits' };
const FORMAT_WORD = { physical:'physical', digital:'digital', hybrid:'hybrid (paper + digital)' };
const STRUCT_WORD = { light:'light, flexible', balanced:'balanced', high:'highly structured' };

/* ---- state ---- */
const state = { cart:[], type:'all', cat:'all', sort:'featured', search:'' };

/* ---- helpers ---- */
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const money = n => '$' + (Number.isInteger(n) ? n : n.toFixed(2));
const byId  = id => PRODUCTS.find(p => p.id === id);
const cap   = s => s.charAt(0).toUpperCase() + s.slice(1);
const esc   = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const badgeText = { physical:'Physical', digital:'Digital', hybrid:'Hybrid', accessories:'Accessory' };
const typeNote  = { physical:'Ships free over $50', digital:'Instant download', hybrid:'Paper + digital twin', accessories:'Add-on' };

/* ============================================================ RENDER: categories */
function renderCategories(){
  $('#catGrid').innerHTML = CAT_ORDER.map(cat => {
    const count = PRODUCTS.filter(p => p.category === cat).length;
    return `
      <div class="cat-card" data-action="cat" data-cat="${cat}" role="button" tabindex="0" aria-label="Shop ${cat}">
        <div class="cc-bg" style="background:${GRAD[cat]}"></div>
        <div class="cc-strip"><i></i><i></i><i></i><i></i></div>
        <div class="cc-text"><b>${cat}</b><span>${CAT_META[cat]} · ${count} styles</span></div>
      </div>`;
  }).join('');
}

/* ============================================================ RENDER: best sellers */
function renderBest(){ $('#bestGrid').innerHTML = PRODUCTS.filter(p => p.featured).map(productCard).join(''); }

/* ============================================================ RENDER: shop grid */
function renderProducts(){
  let list = PRODUCTS.slice();
  if(state.type !== 'all') list = list.filter(p => p.type === state.type);
  if(state.cat  !== 'all') list = list.filter(p => p.category === state.cat);
  if(state.search){
    const q = state.search.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }
  switch(state.sort){
    case 'price-asc':  list.sort((a,b)=>a.price-b.price); break;
    case 'price-desc': list.sort((a,b)=>b.price-a.price); break;
    case 'rating':     list.sort((a,b)=>b.rating-a.rating); break;
    default:           list.sort((a,b)=> (b.featured?1:0)-(a.featured?1:0));
  }
  $('#productGrid').innerHTML = list.map(productCard).join('');
  $('#emptyState').hidden = list.length !== 0;
  $('#resultCount').textContent =
    `${list.length} ${list.length === 1 ? 'rhythm' : 'rhythms'}` +
    (state.cat !== 'all' ? ` in ${state.cat}` : '') +
    (state.type !== 'all' ? ` · ${state.type}` : '');
}

function buildCatSelect(){
  const sel = $('#catSelect');
  CAT_ORDER.forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = c; sel.appendChild(o); });
}

/* ============================================================ CART */
function cartAdd(item){
  const found = state.cart.find(i => i.key === item.key);
  if(found) found.qty += (item.qty || 1);
  else state.cart.push({ qty:1, ...item });
  renderCart(); bumpCount();
}
function cartRemove(key){ state.cart = state.cart.filter(i => i.key !== key); renderCart(); bumpCount(); }
function cartQty(key, d){
  const it = state.cart.find(i => i.key === key); if(!it) return;
  it.qty += d; if(it.qty <= 0) state.cart = state.cart.filter(i => i.key !== key);
  renderCart(); bumpCount();
}
function cartSubtotal(){ return state.cart.reduce((s,i)=> s + i.price * i.qty, 0); }
function renderCart(){
  const wrap = $('#cartItems'), empty = $('#cartEmpty'), foot = $('#cartFoot');
  if(state.cart.length === 0){
    wrap.innerHTML = ''; wrap.style.display = 'none'; empty.style.display = 'flex'; foot.style.display = 'none'; return;
  }
  wrap.style.display = 'block'; empty.style.display = 'none'; foot.style.display = 'block';
  wrap.innerHTML = state.cart.map(i => `
    <div class="cart-item">
      <div class="ci-cover" style="background:${i.gradient}"><div class="ci-strip"><i></i><i></i><i></i></div></div>
      <div class="ci-info">
        <div class="ci-name">${i.name}</div>
        <div class="ci-meta">${i.meta || ''}</div>
        <div class="ci-controls">
          <div class="qty-pill">
            <button data-action="qminus" data-key="${i.key}" aria-label="Decrease quantity">–</button>
            <span>${i.qty}</span>
            <button data-action="qplus" data-key="${i.key}" aria-label="Increase quantity">+</button>
          </div>
          <span class="ci-price">${money(i.price * i.qty)}</span>
        </div>
        <button class="ci-remove" data-action="remove" data-key="${i.key}">Remove</button>
      </div>
    </div>`).join('');
  $('#cartSubtotal').textContent = money(cartSubtotal());
}
function openCart(){ $('#cartDrawer').classList.add('open'); $('#overlay').classList.add('show'); $('#cartDrawer').setAttribute('aria-hidden','false'); }
function closeCart(){ $('#cartDrawer').classList.remove('open'); $('#overlay').classList.remove('show'); $('#cartDrawer').setAttribute('aria-hidden','true'); }

function closeModal(){ $('#modal').classList.remove('open'); $('#modal').setAttribute('aria-hidden','true'); document.body.classList.remove('no-scroll'); }

/* ============================================================================
   CADENCE PREVIEW STUDIO — data
   ============================================================================ */
const PALETTE = {
  'Soft Minimal'  : { cover:'linear-gradient(160deg,#EFE7D8,#F7F2E9)',                accent:'#B79A6E', accent2:'#EFE6D4', dark:false },
  'Garden Warmth' : { cover:'linear-gradient(160deg,#5E7E62,#8AA68C 58%,#EAC889)',    accent:'#5E7E62', accent2:'#E4EAD6', dark:false },
  'Midnight Focus': { cover:'linear-gradient(160deg,#1C1B26,#2E3B47 60%,#6E92A1)',    accent:'#6E92A1', accent2:'#DCE6EB', dark:true  },
  'Coastal Calm'  : { cover:'linear-gradient(160deg,#6E92A1,#A9C2CE 55%,#F2D3C8)',    accent:'#5C8595', accent2:'#DCEAEF', dark:false },
  'Bold Momentum' : { cover:'linear-gradient(160deg,#9C4F2E,#C77E5A 55%,#D8A24A)',    accent:'#A85F3C', accent2:'#F0DCC6', dark:true  },
  'Blush Routine' : { cover:'linear-gradient(160deg,#E7B3A3,#F3D6CB 60%,#F7EDE6)',    accent:'#C77E5A', accent2:'#F7E2DA', dark:false },
  'Sage Reset'    : { cover:'linear-gradient(160deg,#5E7E62,#8AA68C 55%,#D8E2CC)',    accent:'#5E7E62', accent2:'#E2EAD8', dark:false },
  'Ink & Gold'    : { cover:'linear-gradient(160deg,#1C1B26,#2E2C36 60%,#3A3730)',    accent:'#C99A3F', accent2:'#F0E2C4', dark:true  }
};
const FONT = {
  serif:     { name:'Elegant Serif',    stack:"'Newsreader',Georgia,serif" },
  sans:      { name:'Clean Sans',       stack:"system-ui,-apple-system,'Segoe UI',Roboto,sans-serif" },
  rounded:   { name:'Friendly Rounded', stack:"'Nunito',ui-rounded,'Varela Round',system-ui,sans-serif" },
  editorial: { name:'Editorial',        stack:"'Newsreader','Iowan Old Style','Palatino Linotype',Georgia,serif" },
  hand:      { name:'Handwritten',      stack:"'Caveat','Segoe Script',cursive" }
};
const FMT_BASE = { physical:48, digital:20, hybrid:64, wall:28, desk:32 };
const FMT_NAME = { physical:'Physical Planner', digital:'Digital Planner', hybrid:'Hybrid Planner', wall:'Wall Calendar', desk:'Desk Planner' };
const LAYOUT_NAME = { vertical:'Weekly Vertical', horizontal:'Weekly Horizontal', dashboard:'Dashboard', daily:'Daily Focus', minimal:'Minimal Grid', family:'Family Columns', timeblock:'Time Blocked' };
const THUMB_LABEL = { cover:'cover', month:'monthly', week:'weekly', day:'daily', habit:'habit tracker', meal:'meal planner', budget:'budget tracker', fitness:'fitness tracker', notes:'notes' };
const ADDON_COLOR = {
  'Habit Tracker':'var(--sage)','Meal Planning':'var(--clay)','Budget Pages':'var(--sage-deep)','Fitness Pages':'var(--clay-deep)',
  'Family Schedule':'var(--gold)','Assignment Tracker':'var(--mist-deep)','Prayer / Reflection':'var(--blush)','Business Goals':'var(--ink-soft)',
  'Social Media Calendar':'var(--mist)','Notes Pages':'var(--muted)','Stickers':'var(--gold-soft)','Digital Companion':'var(--mist-deep)'
};
/* add-ons that unlock / jump to a page view */
const ADDON_VIEW = {
  'Habit Tracker':'habit','Meal Planning':'meal','Budget Pages':'budget','Fitness Pages':'fitness',
  'Notes Pages':'notes','Family Schedule':'week','Assignment Tracker':'notes','Business Goals':'day','Social Media Calendar':'month'
};
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

/* ---- example ("filled-in") sample content ---- */
const SAMPLE = {
  weekly: { Mon:['Team sync 9a','Gym 6p'], Tue:['Dentist 11a','Reading'], Wed:['Project block','Walk 30m'],
            Thu:['1:1 · Sam','Meal prep'], Fri:['Ship update','Date night'], Sat:['Long run','Groceries'], Sun:['Plan week','Rest'] },
  family: { 'Parent 1':['Work 9–5','Soccer run'], 'Parent 2':['Gym 6a','School pickup'], 'Kids':['Soccer 4p','Homework'],
            'Meals':['Tacos','Pasta','Stir-fry'], 'Chores':['Trash','Laundry','Vacuum'] },
  day:    ['Strength training','Walk 30 min','Inbox to zero'],
  habits: ['Move my body','Drink water','Read 10 min','Sleep by 11','No phone AM','Journal','Stretch'],
  meals:  { Mon:['Oats','Salad','Tacos'], Tue:['Eggs','Wrap','Pasta'], Wed:['Smoothie','Soup','Stir-fry'], Thu:['Yogurt','Bowl','Curry'], Fri:['Toast','Leftovers','Pizza'] },
  grocery:['Chicken','Spinach','Rice','Greek yogurt','Berries','Olive oil'],
  budget: { bills:[['1','Mortgage'],['5','Utilities'],['15','Car'],['22','Internet']], cats:[['Groceries',72],['Dining',40],['Transport',55],['Fun',30]],
            goal:'Savings transfer · $1,200 / $3,000', sinking:['Holidays','Car repair','Gifts'] },
  fitness:{ week:[['Mon','Strength'],['Tue','Run 3mi'],['Wed','Rest'],['Thu','Pull'],['Fri','Legs'],['Sat','Hike'],['Sun','Mobility']], meas:[['172','Weigh-in'],['38"','Waist'],['+5','Streak']] },
  student:['Paper due Fri','Exam review','Reading block','Office hours']
};

/* ---- per-product preload for "Customize this system" + modal mini-previews ---- */
const PRELOAD = {
  1 :{format:'hybrid',  layout:'dashboard', addons:['Habit Tracker','Notes Pages'],            view:'month',   palette:'Soft Minimal',   sample:true },
  2 :{format:'digital', layout:'vertical',  addons:['Fitness Pages','Habit Tracker'],          view:'fitness', palette:'Sage Reset',     sample:true },
  3 :{format:'hybrid',  layout:'vertical',  addons:['Meal Planning','Fitness Pages','Habit Tracker'], view:'fitness', palette:'Bold Momentum', sample:true },
  4 :{format:'physical',layout:'timeblock', addons:['Habit Tracker','Notes Pages'],            view:'week',    palette:'Coastal Calm',   sample:true },
  5 :{format:'physical',layout:'vertical',  addons:['Assignment Tracker','Notes Pages'],       view:'week',    palette:'Coastal Calm',   sample:true },
  6 :{format:'physical',layout:'family',    addons:['Meal Planning','Family Schedule'],        view:'week',    palette:'Garden Warmth',  sample:true },
  7 :{format:'digital', layout:'dashboard', addons:['Budget Pages'],                           view:'budget',  palette:'Sage Reset',     sample:true },
  8 :{format:'physical',layout:'timeblock', addons:['Business Goals','Notes Pages'],           view:'week',    palette:'Ink & Gold',     sample:true },
  9 :{format:'digital', layout:'vertical',  addons:['Meal Planning'],                          view:'meal',    palette:'Garden Warmth',  sample:true },
  10:{format:'digital', layout:'minimal',   addons:['Habit Tracker'],                          view:'habit',   palette:'Blush Routine',  sample:true },
  11:{format:'hybrid',  layout:'dashboard', addons:['Social Media Calendar','Business Goals'], view:'month',   palette:'Midnight Focus', sample:true },
  12:{format:'physical',layout:'horizontal',addons:['Assignment Tracker','Notes Pages'],       view:'week',    palette:'Coastal Calm',   sample:true },
  13:{format:'wall',    layout:'minimal',   addons:[],                                         view:'month',   palette:'Soft Minimal',   sample:false},
  14:{format:'desk',    layout:'daily',     addons:['Notes Pages'],                            view:'day',     palette:'Soft Minimal',   sample:true },
  15:{format:'physical',layout:'vertical',  addons:['Stickers'],                               view:'week',    palette:'Blush Routine',  sample:true },
  16:{format:'physical',layout:'vertical',  addons:['Stickers','Notes Pages'],                 view:'month',   palette:'Soft Minimal',   sample:false}
};

/* ---- previewState ---- */
const PV = { format:'hybrid', view:'month', layout:'vertical', month:'January', palette:'Soft Minimal', font:'serif', name:'', title:'', addons:[], mode:'blank', sample:false, price:0 };

/* ============================================================================
   PREVIEW STUDIO — page renderers (return INNER sheet markup)
   ============================================================================ */
const lines = n => Array.from({length:n}, (_,i)=>`<div class="pv-ph ${i%2?'s':'m'}"></div>`).join('');
const top3  = () => [0,1,2].map(i=>`<div class="t"><i></i>${PV.sample ? (SAMPLE.day[i]||'') : ''}</div>`).join('');
const strip = n => Array.from({length:n}, (_,i)=>`<i class="${PV.sample && i%3!==2 ? 'on':''}"></i>`).join('');

function coverHTML(mini){
  const title = esc(PV.title || 'Life Rhythm');
  const name  = esc(PV.name || 'Your name');
  return `<div class="pv-cover ${mini?'mini':''}">
    <div class="pv-cover-strip"><i></i><i></i><i></i><i></i><i></i><i></i></div>
    <div class="pv-cover-brand">Cadence</div>
    <div class="pv-cover-title">${title}</div>
    <div class="pv-cover-name">${name}</div>
    <div class="pv-cover-foot">Starts ${PV.month} · 2026</div>
  </div>`;
}

function monthHTML(){
  const m = MONTHS.indexOf(PV.month);
  const first = new Date(2026, m, 1).getDay();
  const dim = new Date(2026, m+1, 0).getDate();
  const prevDim = new Date(2026, m, 0).getDate();
  const cells = [];
  for(let i=0;i<first;i++) cells.push({n:prevDim-first+1+i, out:true});
  for(let d=1;d<=dim;d++) cells.push({n:d, out:false});
  while(cells.length % 7) cells.push({n:cells.length%7 || 1, out:true});
  const hl = PV.sample ? [4,9,12,18,25] : [];
  const ev = PV.sample ? [2,7,15,21] : [];
  const dow = ['S','M','T','W','T','F','S'];
  const grid = cells.map(c=>{
    let cls = 'pv-m-cell' + (c.out?' out':'');
    if(!c.out && hl.includes(c.n)) cls += ' hl';
    const dot = (!c.out && ev.includes(c.n)) ? '<span class="ev"></span>' : '';
    return `<div class="${cls}">${c.n}${dot}</div>`;
  }).join('');
  const note = PV.sample
    ? '<div class="pv-line a"></div><div class="pv-line"></div><div class="pv-line"></div>'
    : '<div class="pv-line"></div><div class="pv-line"></div><div class="pv-line"></div>';
  const hOn = PV.sample ? [1,1,0,1,1,0,1] : [0,0,0,0,0,0,0];
  return `<div class="pv-month">
    <div class="pv-m-main">
      <div class="pv-mtabs">${MONTHS.map((mm,i)=>`<i class="${i===m?'on':''}">${mm.slice(0,1)}</i>`).join('')}</div>
      <div class="pv-m-head"><b>${PV.month}</b><span>2026 · Cadence</span></div>
      <div class="pv-m-dow">${dow.map(d=>`<span>${d}</span>`).join('')}</div>
      <div class="pv-m-grid">${grid}</div>
    </div>
    <div class="pv-m-side">
      <div class="pv-card"><h6><i class="pv-ico">🎯</i>Goals</h6>${note}</div>
      <div class="pv-card"><h6><i class="pv-ico">✎</i>Notes</h6>${note}</div>
      <div class="pv-card" style="grid-column:1/-1"><h6>Habit rhythm</h6><div class="pv-habit-strip">${hOn.map(o=>`<i class="${o?'on':''}"></i>`).join('')}${'<i></i>'.repeat(7)}</div></div>
    </div>
    <div class="pv-pageno">p. ${m*4+2}</div>
  </div>`;
}

function weekHTML(){
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const L = PV.layout;
  if(L === 'horizontal'){
    const rows = days.map(d=>{
      const c = PV.sample ? (SAMPLE.weekly[d]||[]).map(e=>`<span class="pv-chip">${e}</span>`).join('') : '<div class="pv-ph m"></div>';
      return `<div class="row"><div class="rl">${d}</div><div class="rc">${c}</div></div>`;
    }).join('');
    return `<div class="pv-wk-title"><b>This week</b><span>Weekly horizontal</span></div><div class="pv-wk horizontal">${rows}</div>
      <div class="pv-card" style="margin-top:6px"><h6>Weekly focus</h6>${PV.sample?'<span class="pv-chip">Ship the launch</span><span class="pv-chip">Move 4×</span>':'<div class="pv-ph m"></div>'}</div>`;
  }
  if(L === 'dashboard'){
    return `<div class="pv-wk-title"><b>This week</b><span>Dashboard</span></div><div class="pv-dash">
      <div class="blk span"><h6>This week’s focus</h6>${PV.sample?'<span class="pv-chip">Launch prep</span><span class="pv-chip">Family weekend</span>':'<div class="pv-ph m"></div>'}</div>
      <div class="blk"><h6>Top 3</h6><div class="pv-top3">${top3()}</div></div>
      <div class="blk"><h6>Appointments</h6>${PV.sample?'<div class="pv-ev">Dentist Tue 11a</div><div class="pv-ev">1:1 Thu 2p</div>':lines(2)}</div>
      <div class="blk"><h6>Habits</h6><div class="pv-habit-strip">${strip(8)}</div></div>
      <div class="blk"><h6>Meal plan</h6>${PV.sample?'<span class="pv-chip">Tacos</span><span class="pv-chip">Stir-fry</span>':lines(2)}</div>
      <div class="blk span"><h6>Reset ritual</h6>${PV.sample?'<span class="pv-chip">Plan Sunday</span><span class="pv-chip">Tidy desk</span><span class="pv-chip">Review goals</span>':lines(1)}</div>
    </div>`;
  }
  if(L === 'family'){
    const cols = ['Parent 1','Parent 2','Kids','Meals','Chores'].map(k=>{
      const body = PV.sample ? (SAMPLE.family[k]||[]).map(e=>`<div class="pv-ev">${e}</div>`).join('') : '<div class="pv-ev line"></div><div class="pv-ev line"></div>';
      return `<div class="col"><div class="ch">${k}</div><div class="cb">${body}</div></div>`;
    }).join('');
    return `<div class="pv-wk-title"><b>Household week</b><span>Family columns</span></div><div class="pv-fam">${cols}</div>`;
  }
  if(L === 'timeblock'){
    const hours = ['7','8','9','10','11','12','1','2','3','4','5','6'];
    const evns = PV.sample ? {'9':'Deep work','12':'Lunch + walk','2':'Meetings','6':'Evening reset'} : {};
    const slots = hours.map(h=>`<div class="slot"><div class="hr">${h}:00</div><div class="bar">${evns[h]?`<div class="ev2" style="width:${(h==='9'||h==='2')?'72%':'48%'}">${evns[h]}</div>`:''}</div></div>`).join('');
    return `<div class="pv-wk-title"><b>Today, time-blocked</b><span>Time blocked</span></div><div class="pv-tb">${slots}</div>`;
  }
  if(L === 'minimal'){
    const cells = days.map(d=>`<div class="cell"><b>${d}</b>${PV.sample?`<div class="pv-ev">${(SAMPLE.weekly[d]||[''])[0]}</div>`:'<div class="pv-ph s"></div>'}</div>`).join('');
    return `<div class="pv-wk-title"><b>This week</b><span>Minimal grid</span></div><div class="pv-min">${cells}</div>`;
  }
  if(L === 'daily'){
    return `<div class="pv-wk-title"><b>Today</b><span>Daily focus</span></div><div class="pv-focus">
      <div class="pv-card"><h6>Today’s focus</h6>${PV.sample?'<span class="pv-chip">Finish the proposal</span>':'<div class="pv-ph m"></div>'}<h6 style="margin-top:8px">Top 3</h6><div class="pv-top3">${top3()}</div></div>
      <div class="pv-card"><h6>Schedule</h6>${PV.sample?'<div class="pv-ev">9a Gym</div><div class="pv-ev">1p Calls</div><div class="pv-ev">6p Dinner</div>':lines(3)}</div>
    </div>`;
  }
  /* vertical (default) */
  const cols = days.map(d=>{
    const evs = PV.sample ? (SAMPLE.weekly[d]||[]).map(e=>`<div class="pv-ev">${e}</div>`).join('') : '<div class="pv-ev line"></div><div class="pv-ev line"></div>';
    return `<div class="col"><div class="ch">${d}</div><div class="cb">${evs}</div></div>`;
  }).join('');
  return `<div class="pv-wk-title"><b>This week</b><span>Weekly vertical</span></div><div class="pv-wk vertical">${cols}</div>
    <div class="pv-wk-foot">
      <div class="pv-card"><h6>Top priorities</h6><div class="pv-top3">${top3()}</div></div>
      <div class="pv-card"><h6>Habits</h6><div class="pv-habit-strip">${strip(7)}</div></div>
      <div class="pv-card"><h6>Meals</h6>${PV.sample?'<span class="pv-chip">Prep Sun</span><span class="pv-chip">Tacos Tue</span>':lines(2)}</div>
    </div>`;
}

function dayHTML(){
  return `<div class="pv-day">
    <div class="pv-day-h"><b>Today</b><span>${PV.month} · Daily focus</span></div>
    <div>
      <div class="pv-card"><h6>Top 3</h6><div class="pv-top3">${top3()}</div></div>
      <div class="pv-card" style="margin-top:6px"><h6>Schedule</h6>${PV.sample?'<div class="pv-ev">7a Walk 30 min</div><div class="pv-ev">9a Strength training</div><div class="pv-ev">2p Project block</div>':lines(3)}</div>
      <div class="pv-card" style="margin-top:6px"><h6>Notes</h6>${PV.sample?'<div class="pv-note-hand hand">Call Mom · gift idea 🎁</div>':lines(2)}</div>
    </div>
    <div>
      <div class="pv-card"><h6><i class="pv-ico">🍽</i>Meals</h6>${PV.sample?'<div class="pv-ev">B · Oats</div><div class="pv-ev">L · Salad</div><div class="pv-ev">D · Tacos</div>':lines(3)}</div>
      <div class="pv-card" style="margin-top:6px"><h6><i class="pv-ico">💧</i>Water</h6><div class="pv-track">${Array.from({length:8},(_,i)=>`<span class="pv-drop ${PV.sample&&i<5?'':'empty'}"></span>`).join('')}</div></div>
      <div class="pv-card" style="margin-top:6px"><h6><i class="pv-ico">👟</i>Movement</h6>${PV.sample?'<span class="pv-chip">Walk 6,200 steps</span>':'<div class="pv-ph s"></div>'}</div>
      <div class="pv-card" style="margin-top:6px"><h6><i class="pv-ico">✦</i>Reflection</h6>${PV.sample?'<div class="pv-note-hand hand">Felt good to move early.</div>':lines(1)}</div>
    </div>
  </div>`;
}

function habitHTML(){
  const habits = PV.sample ? SAMPLE.habits : ['Habit one','Habit two','Habit three','Habit four','Habit five'];
  const rows = habits.slice(0,7).map((h,ri)=>{
    const cells = Array.from({length:15},(_,i)=>{
      let cls='';
      if(PV.sample){ const grace=(i===5 && ri===1); cls = grace ? 'grace' : ((i*7+ri)%3!==0 ? 'on':''); }
      return `<i class="${cls}"></i>`;
    }).join('');
    return `<div class="pv-habit-row"><span class="nm">${h}</span><div class="pv-habit-cells">${cells}</div></div>`;
  }).join('');
  return `<div class="pv-habit-h"><b>Habit tracker</b><span class="score">${PV.sample?'Consistency 86%':'30-day grid'}</span></div>${rows}
    <div class="pv-habit-legend">
      <span><i class="on" style="background:var(--pv-accent)"></i>Done</span>
      <span><i style="background:repeating-linear-gradient(45deg,var(--gold-soft) 0 2px,#fff 2px 4px)"></i>Grace day</span>
      <span><i style="background:var(--cream-2)"></i>Open</span>
    </div>`;
}

function mealHTML(){
  const d5 = ['Mon','Tue','Wed','Thu','Fri'];
  const rows = d5.map(d=>{
    const m = PV.sample ? SAMPLE.meals[d] : ['','',''];
    return `<div class="pv-meal-row"><span class="d">${d}</span><span class="m">${m[0]||''}</span><span class="m">${m[1]||''}</span><span class="m">${m[2]||''}</span></div>`;
  }).join('');
  const grocery = (PV.sample?SAMPLE.grocery:['','','','']).map(g=>`<div class="pv-check"><i class="${PV.sample?'on':''}"></i>${g?g:'<span class="pv-ph s" style="flex:1"></span>'}</div>`).join('');
  return `<div class="pv-grid2">
    <div>
      <div class="pv-meal-row head"><span class="d"></span><span class="m">Breakfast</span><span class="m">Lunch</span><span class="m">Dinner</span></div>
      ${rows}
    </div>
    <div>
      <div class="pv-card"><h6>Grocery list</h6>${grocery}</div>
      <div class="pv-card" style="margin-top:6px"><h6>Prep day</h6>${PV.sample?'<div class="pv-check"><i class="on"></i>Batch grains</div><div class="pv-check"><i></i>Chop veg</div>':lines(2)}</div>
    </div>
  </div>`;
}

function budgetHTML(){
  const bills = PV.sample ? SAMPLE.budget.bills : [];
  const cal = Array.from({length:28},(_,i)=>{ const d=i+1; const b=bills.find(x=>+x[0]===d); return `<i class="${b?'bill':''}">${d}</i>`; }).join('');
  const cats = (PV.sample?SAMPLE.budget.cats:[['Groceries',0],['Dining',0],['Transport',0],['Fun',0]]).map(c=>`<div class="pv-bar"><div class="bl"><span>${c[0]}</span><span>${PV.sample?c[1]+'%':''}</span></div><div class="track"><div class="fill" style="width:${c[1]}%"></div></div></div>`).join('');
  const sink = (PV.sample?SAMPLE.budget.sinking:['·····','·····','·····']).map(s=>`<span class="pv-chip">${s}</span>`).join('');
  return `<div class="pv-grid2">
    <div>
      <div class="pv-card"><h6>Bills calendar</h6><div class="pv-bud-cal">${cal}</div></div>
      <div class="pv-card" style="margin-top:6px"><h6>Sinking funds</h6>${sink}</div>
    </div>
    <div>
      <div class="pv-card"><h6>Spending</h6>${cats}</div>
      <div class="pv-goal" style="margin-top:6px">${PV.sample?SAMPLE.budget.goal:'Savings goal'}</div>
      <div class="pv-check" style="margin-top:6px"><i class="${PV.sample?'on':''}"></i>No-spend day</div>
    </div>
  </div>`;
}

function fitnessHTML(){
  const week = (PV.sample?SAMPLE.fitness.week:[['Mon',''],['Tue',''],['Wed',''],['Thu',''],['Fri',''],['Sat',''],['Sun','']]).map(w=>`<div class="d ${/rest/i.test(w[1])?'rest':''}"><b>${w[0]}</b><div class="w">${w[1]||'—'}</div></div>`).join('');
  const meas = (PV.sample?SAMPLE.fitness.meas:[['—','Weight'],['—','Waist'],['—','Streak']]).map(m=>`<div class="x"><b>${m[0]}</b><span>${m[1]}</span></div>`).join('');
  return `<div class="pv-wk-title"><b>Fitness rhythm</b><span>${PV.month}</span></div>
    <div class="pv-fit-week">${week}</div>
    <div class="pv-grid2">
      <div class="pv-card"><h6>Measurements</h6><div class="pv-meas">${meas}</div></div>
      <div class="pv-card"><h6>Weekly progress</h6>${PV.sample?'<div class="pv-bar"><div class="bl"><span>Workouts</span><span>4/5</span></div><div class="track"><div class="fill" style="width:80%"></div></div></div><div class="pv-check"><i class="on"></i>Recovery day taken</div>':lines(2)}</div>
    </div>`;
}

function notesHTML(){
  return `<div class="pv-notes">
    <div class="np lined"><h6>Lined</h6>${PV.sample?'<div class="pv-note-hand hand">Meeting notes — ship Friday, follow up w/ Sam.</div>':''}</div>
    <div class="np dot"><h6>Dot grid</h6>${PV.sample?'<div class="pv-note-hand hand">Sketch the week ▢▢▢</div><div class="pv-sticky hand">Batch content Sunday ✦</div>':''}</div>
    <div class="np"><h6>Blank</h6>${PV.sample?'<div class="pv-note-hand hand">Ideas: gift for Mom 🎁, call dentist.</div>':''}</div>
  </div>`;
}

function pageContent(v){
  switch(v){
    case 'month':   return monthHTML();
    case 'week':    return weekHTML();
    case 'day':     return dayHTML();
    case 'habit':   return habitHTML();
    case 'meal':    return mealHTML();
    case 'budget':  return budgetHTML();
    case 'fitness': return fitnessHTML();
    case 'notes':   return notesHTML();
    default:        return monthHTML();
  }
}

/* section tabs (physical formats) */
function tabsHTML(){
  const list = PV.addons.slice(0,6);
  if(!list.length) return '';
  return `<div class="pv-tabs">${list.map(a=>`<div class="pv-tab" style="background:${ADDON_COLOR[a]||'var(--clay)'}" title="${a}"></div>`).join('')}</div>`;
}

/* wrap a sheet in the chosen format frame */
function frameHTML(fmt, sheet){
  const tabs = tabsHTML();
  const status = `<div class="pv-statusbar"><span>9:41</span><b>Cadence</b><span class="dots"><b></b><b></b><b></b></span></div>`;
  if(fmt === 'digital') return `<div class="pv-frame tablet"><div class="pv-tablet"><div class="pv-screen">${status}${sheet}</div></div></div>`;
  if(fmt === 'hybrid')  return `<div class="pv-frame hybrid"><div class="pv-hybrid"><div class="pv-book"><div class="pv-rings"><i></i><i></i><i></i></div>${sheet}${tabs}</div><div class="pv-mini-tablet"><div class="pv-screen">${coverHTML(true)}</div></div></div></div>`;
  if(fmt === 'wall')    return `<div class="pv-frame wall"><div class="pv-wall"><div class="pv-wall-top"><b>${PV.month}</b><span>Cadence · 2026</span></div><div class="pv-pad">${sheet}</div></div></div>`;
  if(fmt === 'desk')    return `<div class="pv-frame desk"><div class="pv-desk"><div class="pv-pad">${sheet}</div><div class="pv-desk-base"></div></div></div>`;
  return `<div class="pv-frame book"><div class="pv-book"><div class="pv-rings"><i></i><i></i><i></i></div><div class="pv-holes"><i></i><i></i><i></i><i></i><i></i></div>${sheet}${tabs}</div></div>`;
}

/* ============================================================================
   PREVIEW STUDIO — render orchestration
   ============================================================================ */
const THUMBS = [['cover','Cover'],['month','Month'],['week','Week'],['day','Day'],['habit','Habits'],['meal','Meals'],['budget','Budget'],['fitness','Fitness'],['notes','Notes']];
const VIEW_ADDON = { habit:'Habit Tracker', meal:'Meal Planning', budget:'Budget Pages', fitness:'Fitness Pages', notes:'Notes Pages' };

function calculatePreviewPrice(){ PV.price = FMT_BASE[PV.format] + PV.addons.length * 4; return PV.price; }

function renderPageThumbnails(){
  $('#stThumbs').innerHTML = THUMBS.map(([v,label])=>{
    const inc = VIEW_ADDON[v] && PV.addons.includes(VIEW_ADDON[v]);
    const tc  = v==='cover'?'tc-cover':v==='month'?'tc-month':v==='week'?'tc-week':'';
    return `<div class="st-thumb ${PV.view===v?'active':''} ${inc?'included':''}" data-action="pv-view" data-val="${v}" role="button" tabindex="0" aria-label="Preview ${label}">
      <div class="st-thumb-ic ${tc}"></div><span>${label}</span></div>`;
  }).join('');
}

function renderSummary(){
  const badges = PV.addons.length
    ? PV.addons.map(a=>`<span class="st-badge">${a}</span>`).join('')
    : '<span class="st-badge" style="background:var(--cream-2);color:var(--muted)">No add-ons yet</span>';
  $('#stSummary').innerHTML = `
    <div class="st-sum-grid">
      <div class="st-sum-row"><span>Format</span><b>${FMT_NAME[PV.format]}</b></div>
      <div class="st-sum-row"><span>Layout</span><b>${LAYOUT_NAME[PV.layout]}</b></div>
      <div class="st-sum-row"><span>Starts</span><b>${PV.month}</b></div>
      <div class="st-sum-row"><span>Palette</span><b>${PV.palette}</b></div>
      <div class="st-sum-row"><span>Font</span><b>${FONT[PV.font].name}</b></div>
      <div class="st-sum-row"><span>Pages</span><b>${PV.mode==='compare'?'Before / After':PV.mode==='example'?'Example':'Blank'}</b></div>
    </div>
    <div class="st-sum-badges">${badges}</div>
    ${confidenceHTML()}
    <div class="st-sum-foot">
      <div class="st-price-wrap"><span class="st-price-label">Your design</span><span class="st-price">${money(PV.price)}</span></div>
      <button class="btn btn-primary" data-action="pv-add">Add this design to cart</button>
    </div>`;
}

function updatePreviewMessage(msg){
  const t = $('#stMsgText'); if(!t) return;
  t.textContent = msg;
  const bar = $('#stMsg');
  if(bar){ bar.classList.remove('flash'); void bar.offsetWidth; bar.classList.add('flash'); }
  const dot = $('.st-msg-dot'); if(dot){ dot.style.transform='scale(1.4)'; setTimeout(()=>dot.style.transform='scale(1)',180); }
}

function renderPreviewStudio(){ calculatePreviewPrice(); renderMainPreview(); renderPageThumbnails(); renderSummary(); renderWhyThisFits(); renderUseCaseSummary(); updateAccordionSummaries(); }

/* ---- mini previews for the product modal (snapshot/restore PV) ---- */
function miniPreviews(id){
  const snap = { ...PV, addons:[...PV.addons] };
  const c = PRELOAD[id] || {};
  const p = byId(id);
  Object.assign(PV, { format:'physical', view:'month', layout:'vertical', month:'January', palette:'Soft Minimal', font:'serif', name:'', title:(p?p.name:''), addons:[], sample:true, mode:'example' }, c);
  PV.sample = true;
  const pal = PALETTE[PV.palette];
  const vars = `--pv-accent:${pal.accent};--pv-accent-2:${pal.accent2};--pv-font:${FONT[PV.font].stack}`;
  PV.view = 'month'; const month = `<div class="pv-sheet" style="position:relative">${monthHTML()}</div>`;
  PV.view = 'week';  const week  = `<div class="pv-sheet" style="position:relative">${weekHTML()}</div>`;
  const av = (c.addons && c.addons.length && ADDON_VIEW[c.addons[0]]) ? ADDON_VIEW[c.addons[0]] : 'habit';
  PV.view = av;      const addon = `<div class="pv-sheet" style="position:relative">${pageContent(av)}</div>`;
  const compView = ['habit','budget','fitness','meal','month','day','notes'].includes(av) ? av : 'week';
  const companion = `<div class="pv-screen" style="border-radius:10px;overflow:hidden">${companionHTML(compView)}</div>`;
  const cap = { habit:'Habit tracker', meal:'Meal planner', budget:'Budget tracker', fitness:'Fitness tracker', notes:'Notes', week:'Weekly', month:'Monthly' }[av] || 'Add-on';
  Object.assign(PV, snap);
  return { vars, month, week, addon, companion, cap, copy:previewCopy(id) };
}

/* ---- control sync helpers ---- */
function setActiveOpt(group, val){ $$(`#studio [data-group="${group}"] .st-opt`).forEach(b=> b.classList.toggle('active', b.dataset.val === val)); }
function setActiveSw(group, val){ $$(`#studio [data-group="${group}"] .st-sw`).forEach(b=> b.classList.toggle('active', b.dataset.val === val)); }
function syncViewButtons(){ setActiveOpt('view', PV.view); }
function syncAllControls(){
  setActiveOpt('format', PV.format);
  setActiveOpt('view', PV.view);
  setActiveOpt('layout', PV.layout);
  setActiveOpt('font', PV.font);
  setActiveOpt('mode', PV.mode);
  setActiveSw('palette', PV.palette);
  $('#stMonth').value = PV.month;
  $('#stName').value = PV.name;
  $('#stTitle').value = PV.title;
  $('#stPaletteName').textContent = PV.palette;
  $$('#studio [data-group="addons"] .st-add').forEach(b=> b.classList.toggle('active', PV.addons.includes(b.dataset.val)));
}

/* ---- wire all studio controls ---- */
function singleSelect(group, cb){
  $$(`#studio [data-group="${group}"] .st-opt`).forEach(b=> b.addEventListener('click', ()=>{
    setActiveOpt(group, b.dataset.val); cb(b.dataset.val);
  }));
}
function setupStudio(){
  singleSelect('format', v => { PV.format = v; updatePreviewMessage(`Now previewing the ${FMT_NAME[v]}.`); renderPreviewStudio(); });
  singleSelect('view',   v => { PV.view = v; updatePreviewMessage(`Showing your ${THUMB_LABEL[v]} page.`); renderPreviewStudio(); });
  singleSelect('layout', v => { PV.layout = v; PV.view = 'week'; syncViewButtons(); updatePreviewMessage(`Your weekly layout is now ${LAYOUT_NAME[v].toLowerCase()}.`); renderPreviewStudio(); });
  singleSelect('font',   v => { PV.font = v; updatePreviewMessage(`${FONT[v].name} applied to your name, headings, and notes.`); renderPreviewStudio(); });
  singleSelect('mode', v => {
    PV.mode = v; PV.sample = (v !== 'blank');
    const msg = v === 'compare' ? 'Before / After — see the same week with and without a Cadence system.'
              : v === 'example' ? 'Example entries added so you can see how this works in real life.'
              : 'Switched to blank pages.';
    updatePreviewMessage(msg); renderPreviewStudio();
  });

  $$('#studio [data-group="palette"] .st-sw').forEach(b=> b.addEventListener('click', ()=>{
    setActiveSw('palette', b.dataset.val); PV.palette = b.dataset.val;
    $('#stPaletteName').textContent = PV.palette;
    updatePreviewMessage(`${PV.palette} applied to cover, tabs, and page accents.`);
    renderPreviewStudio();
  }));

  $('#stMonth').addEventListener('change', e => { PV.month = e.target.value; updatePreviewMessage(`Your planner now starts in ${PV.month}.`); renderPreviewStudio(); });
  $('#stName').addEventListener('input', e => { PV.name = e.target.value; updatePreviewMessage(PV.name.trim() ? 'The moment you see your name on it, it stops feeling generic.' : 'Add your name to the cover.'); renderMainPreview(); });
  $('#stTitle').addEventListener('input', e => { PV.title = e.target.value; updatePreviewMessage(`Title set to “${PV.title.trim() || '…'}”.`); renderMainPreview(); });

  $$('#studio [data-group="addons"] .st-add').forEach(b=> b.addEventListener('click', ()=>{
    const v = b.dataset.val, on = !PV.addons.includes(v);
    if(on){ PV.addons.push(v); b.classList.add('active'); } else { PV.addons = PV.addons.filter(x=>x!==v); b.classList.remove('active'); }
    if(on && ADDON_VIEW[v]){ PV.view = ADDON_VIEW[v]; syncViewButtons(); }
    updatePreviewMessage(on ? `${v} added to your system — tab, page, and price updated.` : `${v} removed.`);
    renderPreviewStudio();
  }));

  renderPreviewStudio();
}

/* ============================================================ BUILD MY SYSTEM (quiz) */
const quizState = { 1:null, 2:null, 3:null, 4:null };
function setupQuiz(){
  $$('.quiz-opt').forEach(b => b.addEventListener('click', () => {
    const q = b.dataset.q;
    $$(`.quiz-opt[data-q="${q}"]`).forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    quizState[q] = b.dataset.val;
    $('#quizNote').textContent = 'Pick one from each question.';
  }));
  $('#quizSubmit').addEventListener('click', () => {
    if(!quizState[1] || !quizState[2] || !quizState[3] || !quizState[4]){
      const note = $('#quizNote'); note.textContent = 'Almost — answer all four questions first.'; note.style.color = 'var(--clay-deep)'; return;
    }
    const rec = QUIZ_REC[quizState[1]] || QUIZ_REC.habits;
    const lead = byId(rec.lead);
    $('#qrTitle').textContent = rec.title;
    $('#qrBlurb').textContent = `A ${STRUCT_WORD[quizState[4]]} ${FORMAT_WORD[quizState[3]]} system, built around ${CHAOS_LABEL[quizState[1]]}. Start any month — adjust as life shifts.`;
    $('#qrParts').innerHTML = rec.parts.map(p=>`<span class="qr-part">${p}</span>`).join('');
    const result = $('#quizResult'); result.hidden = false;
    result.scrollIntoView({ behavior:'smooth', block:'center' });
    $('#quizAddBtn').onclick = () => {
      cartAdd({ key:'p'+lead.id, name:lead.name, price:lead.price, meta:`${lead.category} · recommended system`, gradient:GRAD[lead.category] });
      toast(rec.title + ' added — built around you'); openCart();
    };
  });
}

/* ============================================================ TOAST */
let toastTimer;
function toast(msg){
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(()=> t.classList.remove('show'), 2400);
}

/* ============================================================ FILTER UI SYNC */
function applyTypeUI(){ $$('#typeChips .chip').forEach(c => c.classList.toggle('active', c.dataset.type === state.type)); }

/* ============================================================ INIT */
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderBest();
  buildCatSelect();
  renderProducts();
  renderCart();
  setupStudio();
  setupQuiz();
  setupAccordions();
  setupGuided();
  setupSaveShare();
  restorePreviewState();

  $('#searchInput').addEventListener('input', e => { state.search = e.target.value; renderProducts(); });
  $$('#typeChips .chip').forEach(c => c.addEventListener('click', () => { state.type = c.dataset.type; applyTypeUI(); renderProducts(); }));
  $('#catSelect').addEventListener('change', e => { state.cat = e.target.value; renderProducts(); });
  $('#sortSelect').addEventListener('change', e => { state.sort = e.target.value; renderProducts(); });
  $('#searchBtn').addEventListener('click', () => { gotoShop(); setTimeout(()=> $('#searchInput').focus(), 400); });

  $('#cartBtn').addEventListener('click', openCart);
  $('#cartClose').addEventListener('click', closeCart);
  $('#overlay').addEventListener('click', closeCart);
  $('#cartCheckout').addEventListener('click', () => toast('This is a mock store — checkout is for demo only ♪'));
  $('#ceShop').addEventListener('click', () => { closeCart(); gotoShop(); });

  $('#modalClose').addEventListener('click', closeModal);
  $('#modalOverlay').addEventListener('click', closeModal);

  const menuBtn = $('#menuBtn'), mobileMenu = $('#mobileMenu');
  menuBtn.addEventListener('click', () => { const open = mobileMenu.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', open?'true':'false'); });
  $$('#mobileMenu a').forEach(a => a.addEventListener('click', () => { mobileMenu.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false'); }));

  $('#newsletterForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = $('#nlEmail').value.trim(), msg = $('#newsletterMsg');
    if(!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ msg.style.color = 'var(--clay-deep)'; msg.textContent = 'Please enter a valid email so we can send your reset.'; return; }
    msg.style.color = 'var(--sage-deep)'; msg.textContent = '♪ On its way — check your inbox for the 7-Day Rhythm Reset.'; $('#nlEmail').value = '';
  });

  /* delegated clicks */
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-action]'); if(!t) return;
    const a = t.dataset.action;
    if(a === 'add'){
      const p = byId(+t.dataset.id);
      if(p){ cartAdd({ key:'p'+p.id, name:p.name, price:p.price, meta:`${p.category} · ${badgeText[p.type]}`, gradient:GRAD[p.category] }); toast(p.name + ' added to cart'); openCart(); }
    }
    else if(a === 'view'){ openModal(+t.dataset.id); }
    else if(a === 'buy'){
      cartAdd({ key:'buy-'+t.dataset.name, name:t.dataset.name, price:+t.dataset.price, meta:t.dataset.meta || '', gradient:GRAD[t.dataset.grad] || GRAD['Habits & Goals'] });
      toast(t.dataset.name + ' added'); openCart();
    }
    else if(a === 'qplus'){ cartQty(t.dataset.key, +1); }
    else if(a === 'qminus'){ cartQty(t.dataset.key, -1); }
    else if(a === 'remove'){ cartRemove(t.dataset.key); }
    else if(a === 'cat'){ state.cat = t.dataset.cat; $('#catSelect').value = t.dataset.cat; renderProducts(); gotoShop(); }
    else if(a === 'pv-view'){ PV.view = t.dataset.val; syncViewButtons(); updatePreviewMessage(`Showing your ${THUMB_LABEL[t.dataset.val]} page.`); renderPreviewStudio(); }
    else if(a === 'pv-add'){
      calculatePreviewPrice();
      const meta = `${FMT_NAME[PV.format]} · ${PV.palette} · ${LAYOUT_NAME[PV.layout]} · ${PV.month} start` +
        (PV.name.trim() ? ` · “${PV.name.trim()}”` : '') + (PV.addons.length ? ` · +${PV.addons.length} section${PV.addons.length>1?'s':''}` : '');
      cartAdd({ key:'design-'+Date.now(), name:(PV.title.trim() ? PV.title.trim() + ' — custom' : `Custom ${FMT_NAME[PV.format]}`), price:PV.price, meta, gradient:PALETTE[PV.palette].cover });
      toast('Your custom design is in the cart'); openCart();
    }
    else if(a === 'pv-load'){ customizeFrom(+t.dataset.id); }
    else if(a === 'mb-tab'){
      const tab = t.dataset.tab;
      $$('.mb-tab').forEach(x => x.classList.toggle('active', x.dataset.tab === tab));
      $$('.mb-pane').forEach(x => x.classList.toggle('active', x.dataset.pane === tab));
    }
    else if(a === 'mb-mini-tab'){
      const mt = t.dataset.mtab;
      $$('.mb-mtab').forEach(x => x.classList.toggle('active', x.dataset.mtab === mt));
      $$('.mb-mpane').forEach(x => x.classList.toggle('active', x.dataset.mpane === mt));
    }
  });

  document.addEventListener('keydown', e => {
    const el = document.activeElement;
    if((e.key === 'Enter' || e.key === ' ') && el && (el.dataset?.action === 'cat' || el.dataset?.action === 'pv-view')){ e.preventDefault(); el.click(); }
    if(e.key === 'Escape'){ closeModal(); closeCart(); }
  });

  /* anchor links that also set a format filter */
  $$('a[data-type]').forEach(link => link.addEventListener('click', () => {
    state.type = link.dataset.type; applyTypeUI(); renderProducts();
  }));
});

/* ============================================================================
   PREVIEW STUDIO v2 — comparison, hybrid companion, panels, save/share, guided
   ============================================================================ */

/* ---- "before Cadence" messy page ---- */
const BEFORE = {
  fitness: ['workout???','“eat better”','missed weigh-in','protein? idk','skipped mon + tue'],
  budget:  ['pay bills?','where did $ go??','−$240 ???','forgot a subscription','“save more”'],
  meal:    ['dinner?? again','takeout x3','no groceries','“eat healthy”','wilted spinach'],
  family:  ['soccer @ ??','school thing fri?','grocery list (lost)','dentist someday','who has the car'],
  student: ['paper due??','read ch 4–7','exam soon?','email prof','it’s all late'],
  generic: ['stuff to do','“get organized”','call back?','that thing','half-done list ✗']
};
function beforeContext(){
  if(PV.view==='fitness' || PV.addons.includes('Fitness Pages')) return 'fitness';
  if(PV.view==='budget'  || PV.addons.includes('Budget Pages'))  return 'budget';
  if(PV.view==='meal'    || PV.addons.includes('Meal Planning'))  return 'meal';
  if(PV.layout==='family'|| PV.addons.includes('Family Schedule'))return 'family';
  if(PV.addons.includes('Assignment Tracker'))                    return 'student';
  return 'generic';
}
function beforeHTML(){
  const items = BEFORE[beforeContext()];
  const rot = [-4,3,-2,5,-3];
  const notes = items.map((t,i)=>`<div class="pv-mess-note" style="--r:${rot[i%rot.length]}deg;--t:${6+i*15}%;--l:${(i%2?50:6)+(i%3)*7}%">${t}</div>`).join('');
  return `<div class="pv-mess"><div class="pv-mess-scribble"></div>${notes}<div class="pv-mess-watermark">no system</div></div>`;
}

/* ---- before / after comparison ---- */
function renderComparisonPreview(){
  const after  = `<div class="pv-sheet" style="position:relative">${pageContent(PV.view)}</div>`;
  const before = `<div class="pv-sheet" style="position:relative">${beforeHTML()}</div>`;
  return `<div class="pv-compare">
    <div class="pv-cmp-col">
      <div class="pv-cmp-tag before">Before Cadence</div>
      <div class="pv-frame book book-sm"><div class="pv-book">${before}</div></div>
    </div>
    <div class="pv-cmp-arrow" aria-hidden="true">→</div>
    <div class="pv-cmp-col">
      <div class="pv-cmp-tag after">After Cadence</div>
      <div class="pv-frame book book-sm"><div class="pv-book"><div class="pv-rings"><i></i><i></i><i></i></div>${after}${tabsHTML()}</div></div>
    </div>
  </div>`;
}

/* ---- rich hybrid: paper page + digital companion of the SAME page ---- */
function renderHybridPreview(){
  const sheet = `<div class="pv-sheet" style="position:relative">${pageContent(PV.view)}</div>`;
  const comp  = companionHTML(PV.view);
  return `<div class="pv-frame hybrid hybrid-rich">
    <div class="pv-hy-col">
      <div class="pv-book"><div class="pv-rings"><i></i><i></i><i></i></div><div class="pv-holes"><i></i><i></i><i></i><i></i><i></i></div>${sheet}${tabsHTML()}</div>
      <div class="pv-hy-cap">On paper</div>
    </div>
    <div class="pv-hy-link" aria-hidden="true"><span>↔</span><small>Write it down.<br>Carry it forward.</small></div>
    <div class="pv-hy-col">
      <div class="pv-tablet pv-tablet-lg"><div class="pv-screen">${comp}</div></div>
      <div class="pv-hy-cap">On tablet</div>
    </div>
  </div>`;
}

/* ---- digital companion (app dashboard) for the current page ---- */
function companionHTML(view){
  const S = PV.sample;
  const ring = (pct,lab,sub)=>`<div class="pv-dash-ring" style="background:conic-gradient(var(--pv-accent) ${pct}%, var(--pv-accent-2) 0)"><div class="hole"><b>${lab}</b><span>${sub||''}</span></div></div>`;
  const head = t=>`<div class="pv-app-head"><b>${t}</b><span class="pv-app-sync">⟳ Synced</span></div>`;
  switch(view){
    case 'habit': return `${head('Streak dashboard')}<div class="pv-app-row">${ring(S?86:4,S?'24':'0',S?'day streak':'days')}<div class="pv-app-stats"><div class="s"><b>${S?'6/7':'0/7'}</b><span>this week</span></div><div class="s"><b>${S?'92%':'—'}</b><span>consistency</span></div></div></div><div class="pv-app-bars">${[40,70,55,90,60,80,100,45,75,85,50,95,65,80].map(h=>`<i style="height:${S?h:8}%"></i>`).join('')}</div>`;
    case 'budget': return `${head('Spending summary')}<div class="pv-app-row">${ring(S?64:4,S?'$640':'$0',S?'of $1,000':'spent')}<div class="pv-app-stats"><div class="s"><b>${S?'$360':'—'}</b><span>remaining</span></div><div class="s"><b>${S?'4':'0'}</b><span>no-spend days</span></div></div></div>${[['Groceries','$280'],['Dining','$140'],['Transport','$120']].map(c=>`<div class="pv-app-line"><span>${c[0]}</span><span class="pv-app-amt">${S?c[1]:'—'}</span></div>`).join('')}`;
    case 'fitness': return `${head('Progress dashboard')}<div class="pv-app-row">${ring(S?80:4,S?'4/5':'0/5',S?'workouts':'this week')}<div class="pv-app-stats"><div class="s"><b>${S?'172':'—'}</b><span>weigh-in</span></div><div class="s"><b>${S?'+5':'0'}</b><span>day streak</span></div></div></div><div class="pv-app-spark">${[60,55,58,50,52,48,50,45,47,42].map(h=>`<i style="height:${S?h:10}%"></i>`).join('')}</div>`;
    case 'meal': return `${head("Today’s meals")}${[['Breakfast','Oats'],['Lunch','Salad'],['Dinner','Tacos']].map(m=>`<div class="pv-app-toggle"><span>${m[0]}</span><b>${S?m[1]:'—'}</b></div>`).join('')}<div class="pv-app-line"><span>Grocery list</span><span class="pv-app-amt">${S?'6 items':'0'}</span></div>`;
    case 'month': return `${head(PV.month)}<div class="pv-app-mini-cal">${Array.from({length:21},(_,i)=>`<i class="${S&&[3,8,11,17].includes(i)?'on':''}"></i>`).join('')}</div><div class="pv-app-line"><span>Next up</span><span class="pv-app-amt">${S?'Dentist · Tue':'—'}</span></div>`;
    case 'day': return `${head('Today')}${(S?SAMPLE.day:['—','—','—']).map(d=>`<div class="pv-app-check"><i class="${S?'on':''}"></i>${d}</div>`).join('')}<div class="pv-app-line"><span>Focus</span><span class="pv-app-amt">${S?'1 task':'—'}</span></div>`;
    case 'notes': return `${head('Notes')}${(S?['Ship Friday','Gift for Mom 🎁','Batch content Sun']:['·····','·····','·····']).map(n=>`<div class="pv-app-note">${n}</div>`).join('')}`;
    default: return `${head('This week')}${['Mon','Tue','Wed','Thu','Fri'].map(d=>`<div class="pv-app-check"><i class="${S?'on':''}"></i>${d}: ${S?(SAMPLE.weekly[d]||[''])[0]:'—'}</div>`).join('')}<div class="pv-app-prog"><div class="pv-app-prog-fill" style="width:${S?70:0}%"></div></div>`;
  }
}

/* ---- "why this rhythm fits" ---- */
function whyText(){
  const a = PV.addons, fam = PV.layout==='family' || a.includes('Family Schedule');
  if(fam) return `Your week has several people moving at once, so Cadence gives you ${PV.layout==='family'?'family columns, ':''}shared schedule space${a.includes('Meal Planning')?', and meal planning':''}. It stays useful on the wall, at the kitchen counter, and during a weekly family reset.`;
  if(a.includes('Habit Tracker') && (PV.layout==='daily' || PV.view==='day')) return `This setup reduces decision friction. Instead of showing every task at once, it gives you one daily focus, visible cues, and a forgiving habit rhythm — so an off day never ends the streak.`;
  if(a.includes('Budget Pages') || PV.view==='budget') return `This gives your money a calendar, not just a list. Bills, no-spend days, savings transfers, and sinking funds become visible before the month happens, instead of after.`;
  if(a.includes('Fitness Pages') || PV.view==='fitness') return `Built around movement that lasts: workouts and recovery days, weigh-ins, and weekly progress — with grace days so one missed session doesn’t undo the rhythm.`;
  if(a.includes('Assignment Tracker') || PV.view==='notes') return `This keeps a busy term in one calm place — assignments, study blocks, and notes — so deadlines stop arriving by surprise.`;
  if(PV.format==='hybrid') return `Hybrid gives you the ritual of paper with the convenience of digital access. Plan deeply on paper, then carry your rhythm on your tablet wherever the week takes you.`;
  if(PV.format==='digital') return `A digital rhythm you can carry everywhere — plan on your tablet, check it on your phone, and print any page when you want it on paper.`;
  if(PV.format==='wall') return `A wall format keeps the whole month visible where life actually happens — the kitchen, the hallway, the shared wall everyone passes.`;
  if(PV.format==='desk') return `A desk format keeps today in front of you — plan the day without opening a single tab, then close the page and get to work.`;
  return `A ${LAYOUT_NAME[PV.layout].toLowerCase()} layout gives your week a clear, repeatable shape — enough structure to follow through, with room to adjust as life shifts.`;
}
function renderWhyThisFits(){
  $('#stWhy').innerHTML = `<div class="st-why-card"><div class="st-why-h"><span class="st-why-ic">✦</span> Why this rhythm fits</div><p>${whyText()}</p></div>`;
}

/* ---- "what you'll use this for" ---- */
function useCaseTail(){
  const a = PV.addons;
  if(PV.layout==='family' || a.includes('Family Schedule')) return `weekly household coordination — meals, appointments, chores, school events, and the small details that usually live in someone’s head.`;
  if(a.includes('Budget Pages') || PV.view==='budget') return `seeing your money before the month happens — bills, no-spend days, savings, and sinking funds in one place.`;
  if(a.includes('Fitness Pages') || PV.view==='fitness') return `consistent movement — workouts, recovery, and progress you can actually see, without all-or-nothing pressure.`;
  if((a.includes('Habit Tracker') && (PV.layout==='daily'||PV.view==='day'))) return `low-friction follow-through — one clear focus, visible wins, and space to recover without abandoning the planner.`;
  if(a.includes('Assignment Tracker')) return `staying ahead of a busy term — assignments, study blocks, and exam countdowns mapped before they pile up.`;
  return `a calmer, more repeatable week — your priorities, time, and habits in one place you’ll actually return to.`;
}
function useCaseText(){
  const parts = [`a ${PV.month} start`, `${LAYOUT_NAME[PV.layout]} layout`];
  if(PV.addons.length) parts.push(`${PV.addons.slice(0,3).join(', ')} pages`);
  return `With ${parts.join(', ')}, this system is built for ${useCaseTail()}`;
}
function renderUseCaseSummary(){
  $('#stUseCase').innerHTML = `<b>What you’ll use this for</b><p>${useCaseText()}</p>`;
}

/* ---- confidence builders (by format) ---- */
const CONFIDENCE = {
  base:     ['Starts any month','Edit before checkout','No guessing — preview every page'],
  physical: ['Printed & shipped','Personalized cover','Gift-ready'],
  digital:  ['Instant download','Use with iPad / GoodNotes','Print-friendly PDFs'],
  hybrid:   ['Physical planner + digital companion','Best of paper & tablet','Save / share your design'],
  wall:     ['Large wall format','Printed & shipped','Gift-ready'],
  desk:     ['Tear-off desk pad','Printed & shipped','Personalized']
};
function confidenceHTML(){
  const list = [...(CONFIDENCE[PV.format]||[]), ...CONFIDENCE.base].slice(0,5);
  return `<div class="st-confidence">${list.map(c=>`<span class="st-conf"><i>✓</i>${c}</span>`).join('')}</div>`;
}

/* ---- product-modal preview copy ---- */
const PREVIEW_COPY = {
  3:  { month:'See your weigh-ins, workouts, and reset points.', week:'Plan meals and movement without making the week feel rigid.', addon:'Habit and fitness pages help you recover after off days.', companion:'Track your streaks and progress from anywhere.' },
  6:  { month:'Everyone’s events visible in one place.', week:'Meals, kids, chores, appointments, and resets.', addon:'Family Schedule and Meal Planning pages included.', companion:'Share the rhythm beyond the kitchen wall.' },
  4:  { month:'A calm month view with no wall of tasks.', week:'One daily focus and forgiving cues — built for busy brains.', addon:'Habit and notes pages keep momentum after an off day.', companion:'Check today’s one thing from your phone.' },
  7:  { month:'Bills, paydays, and no-spend days on a calendar.', week:'A weekly money check-in that takes two minutes.', addon:'Budget pages with sinking funds and savings goals.', companion:'See spending and what’s left from anywhere.' },
  1:  { month:'Your whole life on one month view.', week:'Priorities, habits, and meals in one weekly rhythm.', addon:'Add the exact pages your season needs.', companion:'Carry your full system on your tablet.' },
  10: { month:'Track consistency across the month.', week:'A simple weekly streak you’ll actually keep.', addon:'Habit pages with built-in grace days.', companion:'Your streak dashboard, synced everywhere.' }
};
function previewCopy(id){
  if(PREVIEW_COPY[id]) return PREVIEW_COPY[id];
  const p = byId(id), cat = p ? p.category.toLowerCase() : 'your life';
  return {
    month:`See your ${cat} month at a glance.`,
    week:`Plan the week the way ${p?p.name:'this system'} is built for.`,
    addon:`Add-on pages tuned for ${cat}.`,
    companion:`Carry it on your tablet — synced wherever you go.`
  };
}

/* ---- accordion summaries ---- */
function updateAccordionSummaries(){
  const f=$('#accFormat'); if(f) f.textContent = FMT_NAME[PV.format];
  const s=$('#accStyle');  if(s) s.textContent = PV.palette;
  const a=$('#accAddons'); if(a) a.textContent = PV.addons.length ? `${PV.addons.length} added` : 'None';
}

/* ---- save / share / restore ---- */
function encodePreviewState(){
  const s = { f:PV.format, v:PV.view, l:PV.layout, m:PV.month, p:PV.palette, ft:PV.font, n:PV.name, t:PV.title, a:PV.addons, md:PV.mode };
  return btoa(encodeURIComponent(JSON.stringify(s)));
}
function decodePreviewState(str){ try { return JSON.parse(decodeURIComponent(atob(str))); } catch(e){ return null; } }
function applyDecoded(s){
  if(!s) return false;
  if(s.f)  PV.format = s.f;  if(s.v) PV.view = s.v;   if(s.l) PV.layout = s.l;  if(s.m) PV.month = s.m;
  if(s.p)  PV.palette = s.p; if(s.ft) PV.font = s.ft;
  PV.name = s.n || ''; PV.title = s.t || ''; PV.addons = Array.isArray(s.a) ? s.a : [];
  PV.mode = s.md || 'blank'; PV.sample = PV.mode !== 'blank';
  return true;
}
function savePreviewState(){ try { localStorage.setItem('cadence_design', encodePreviewState()); } catch(e){} }
function restorePreviewState(){
  let applied = false;
  const h = (location.hash || '').match(/design=([^&]+)/);
  if(h) applied = applyDecoded(decodePreviewState(h[1]));
  if(!applied){ try { const v = localStorage.getItem('cadence_design'); if(v) applied = applyDecoded(decodePreviewState(v)); } catch(e){} }
  if(applied){
    syncAllControls();
    $$('#studio [data-group="mode"] .st-opt').forEach(b => b.classList.toggle('active', b.dataset.val === PV.mode));
    renderPreviewStudio();
    updatePreviewMessage('Welcome back — your saved rhythm is loaded.');
  }
}
function showSaveMsg(m){ const el=$('#stSaveMsg'); if(!el) return; el.textContent=m; el.classList.add('show'); clearTimeout(showSaveMsg._t); showSaveMsg._t=setTimeout(()=>el.classList.remove('show'),4200); }
function setupSaveShare(){
  $('#saveDesign').addEventListener('click', ()=>{
    savePreviewState();
    showSaveMsg('Your rhythm is saved. You can come back to this design anytime on this device.');
    toast('Design saved on this device ♥');
  });
  $('#shareDesign').addEventListener('click', async ()=>{
    const code = encodePreviewState();
    const url = location.origin + location.pathname + '#/studio?design=' + code;
    let ok = false;
    try { await navigator.clipboard.writeText(url); ok = true; } catch(e){
      try { const ta=document.createElement('textarea'); ta.value=url; ta.style.position='fixed'; ta.style.opacity='0'; document.body.appendChild(ta); ta.select(); ok=document.execCommand('copy'); ta.remove(); } catch(_){}
    }
    try { history.replaceState(null,'', '#/studio?design='+code); } catch(_){}
    showSaveMsg(ok ? 'Share link copied. Anyone with this link can open this design.' : 'Share link is in your address bar — copy it to share this design.');
    toast(ok ? 'Share link copied' : 'Share link ready in the address bar');
  });
}

/* ---- guided "help me choose" (configures the studio directly) ---- */
const GUIDED_REC = {
  family: { view:'week',    layout:'family',    addons:['Meal Planning','Family Schedule'], palette:'Garden Warmth',  title:'Family Rhythm' },
  health: { view:'fitness', layout:'vertical',  addons:['Fitness Pages','Meal Planning','Habit Tracker'], palette:'Sage Reset', title:'Health Reset' },
  money:  { view:'budget',  layout:'dashboard', addons:['Budget Pages'],                     palette:'Sage Reset',     title:'Money Reset' },
  work:   { view:'week',    layout:'timeblock', addons:['Business Goals','Notes Pages'],      palette:'Ink & Gold',     title:'Work Rhythm' },
  focus:  { view:'day',     layout:'daily',     addons:['Habit Tracker','Notes Pages'],       palette:'Coastal Calm',   title:'Focus Rhythm' },
  habits: { view:'habit',   layout:'minimal',   addons:['Habit Tracker'],                     palette:'Blush Routine',  title:'Habit Rhythm' }
};
const guided = { goal:null, prefer:null, structure:null };
function applyGuidedRecommendation(g){
  const rec = GUIDED_REC[g.goal] || GUIDED_REC.habits;
  PV.format = g.prefer || 'hybrid';
  PV.view = rec.view; PV.layout = rec.layout; PV.palette = rec.palette; PV.title = rec.title;
  let ad = [...rec.addons];
  if(g.structure === 'light') ad = ad.slice(0,1);
  if(g.structure === 'high' && !ad.includes('Notes Pages')) ad.push('Notes Pages');
  PV.addons = ad; PV.mode = 'example'; PV.sample = true;
  syncAllControls();
  $$('#studio [data-group="mode"] .st-opt').forEach(b => b.classList.toggle('active', b.dataset.val === PV.mode));
  renderPreviewStudio();
}
function setupGuided(){
  $('#helpChoose').addEventListener('click', ()=>{
    const g = $('#stGuided'); g.hidden = !g.hidden;
    if(!g.hidden) g.scrollIntoView({ behavior:'smooth', block:'nearest' });
  });
  $$('#stGuided .gq-opts button').forEach(b => b.addEventListener('click', ()=>{
    const q = b.closest('.gq').dataset.gq;
    $$(`#stGuided .gq[data-gq="${q}"] button`).forEach(x => x.classList.remove('active'));
    b.classList.add('active'); guided[q] = b.dataset.val;
  }));
  $('#guidedApply').addEventListener('click', ()=>{
    if(!guided.goal || !guided.prefer || !guided.structure){ $('#guidedNote').textContent = 'Pick one from each — then we’ll set it up.'; return; }
    applyGuidedRecommendation(guided);
    $('#guidedNote').textContent = 'Here’s the rhythm we’d start with — tweak anything.';
    updatePreviewMessage('We set up a starting rhythm for you. Make it yours.');
    $('#stStage').scrollIntoView({ behavior:'smooth', block:'center' });
  });
}

/* ---- accordions (collapsible on mobile, always open on desktop) ---- */
function setupAccordions(){
  $$('#stControls .st-acc-head').forEach(h => h.addEventListener('click', ()=>{
    if(window.innerWidth >= 920) return;
    const acc = h.parentElement, willOpen = !acc.classList.contains('open');
    $$('#stControls .st-acc').forEach(x => x.classList.remove('open'));
    if(willOpen) acc.classList.add('open');
  }));
}

/* ============================================================================
   v3 PREMIUM PLANNER ENGINE — product templates, two-page spread, product viewer
   (function declarations below intentionally override earlier render fns)
   ============================================================================ */
const PRODUCT_TEMPLATES = {
  'Custom Life Rhythm Planner':    { defaultFormat:'hybrid',   defaultPalette:'Soft Minimal',   defaultFont:'serif',     defaultLayout:'dashboard', defaultStartMonth:'January',   includedAddons:['Habit Tracker','Notes Pages'],                        sampleContentType:'habits',  pageSequence:['cover','month','week','day','habit','notes','companion'] },
  'Digital Fitness Calendar':      { defaultFormat:'digital',  defaultPalette:'Sage Reset',     defaultFont:'rounded',   defaultLayout:'vertical',  defaultStartMonth:'January',   includedAddons:['Fitness Pages','Habit Tracker'],                      sampleContentType:'fitness', pageSequence:['cover','month','week','fitness','habit','companion'] },
  '90-Day Weight Loss Cadence':    { defaultFormat:'hybrid',   defaultPalette:'Bold Momentum',  defaultFont:'serif',     defaultLayout:'vertical',  defaultStartMonth:'January',   includedAddons:['Meal Planning','Fitness Pages','Habit Tracker'],      sampleContentType:'fitness', pageSequence:['cover','month','week','meal','fitness','habit','notes','companion'] },
  'ADHD Weekly Focus System':      { defaultFormat:'physical', defaultPalette:'Coastal Calm',   defaultFont:'rounded',   defaultLayout:'daily',     defaultStartMonth:'January',   includedAddons:['Habit Tracker','Notes Pages'],                        sampleContentType:'generic', pageSequence:['cover','week','day','habit','notes'] },
  'Student Semester Planner':      { defaultFormat:'physical', defaultPalette:'Coastal Calm',   defaultFont:'sans',      defaultLayout:'vertical',  defaultStartMonth:'September', includedAddons:['Assignment Tracker','Notes Pages'],                   sampleContentType:'student', pageSequence:['cover','month','week','day','notes'] },
  'Family Command Center Calendar':{ defaultFormat:'physical', defaultPalette:'Garden Warmth',  defaultFont:'rounded',   defaultLayout:'family',    defaultStartMonth:'January',   includedAddons:['Meal Planning','Family Schedule','Notes Pages'],      sampleContentType:'family',  pageSequence:['cover','month','week','meal','notes'] },
  'Budget Reset Calendar':         { defaultFormat:'digital',  defaultPalette:'Sage Reset',     defaultFont:'rounded',   defaultLayout:'dashboard', defaultStartMonth:'January',   includedAddons:['Budget Pages','Notes Pages'],                         sampleContentType:'budget',  pageSequence:['cover','month','budget','notes','companion'] },
  'Executive Deep Work Planner':   { defaultFormat:'physical', defaultPalette:'Ink & Gold',     defaultFont:'editorial', defaultLayout:'timeblock', defaultStartMonth:'January',   includedAddons:['Business Goals','Notes Pages'],                       sampleContentType:'generic', pageSequence:['cover','month','week','day','notes'] },
  'Meal Prep Rhythm Calendar':     { defaultFormat:'digital',  defaultPalette:'Garden Warmth',  defaultFont:'rounded',   defaultLayout:'vertical',  defaultStartMonth:'January',   includedAddons:['Meal Planning'],                                     sampleContentType:'meal',    pageSequence:['cover','week','meal','notes','companion'] },
  'Habit Streak Calendar':         { defaultFormat:'digital',  defaultPalette:'Blush Routine',  defaultFont:'rounded',   defaultLayout:'minimal',   defaultStartMonth:'January',   includedAddons:['Habit Tracker'],                                     sampleContentType:'habits',  pageSequence:['cover','month','habit','notes','companion'] },
  'Content Creator Cadence':       { defaultFormat:'hybrid',   defaultPalette:'Midnight Focus', defaultFont:'sans',      defaultLayout:'dashboard', defaultStartMonth:'January',   includedAddons:['Social Media Calendar','Business Goals','Notes Pages'],sampleContentType:'generic', pageSequence:['cover','month','week','notes','companion'] },
  'Teacher Lesson Rhythm Planner': { defaultFormat:'physical', defaultPalette:'Coastal Calm',   defaultFont:'sans',      defaultLayout:'horizontal',defaultStartMonth:'August',    includedAddons:['Assignment Tracker','Notes Pages'],                   sampleContentType:'student', pageSequence:['cover','month','week','notes'] },
  'Minimal Wall Calendar':         { defaultFormat:'wall',     defaultPalette:'Soft Minimal',   defaultFont:'serif',     defaultLayout:'minimal',   defaultStartMonth:'January',   includedAddons:[],                                                    sampleContentType:'family',  pageSequence:['cover','month','notes'] },
  'Desk Planner':                  { defaultFormat:'desk',     defaultPalette:'Soft Minimal',   defaultFont:'sans',      defaultLayout:'daily',     defaultStartMonth:'January',   includedAddons:['Notes Pages'],                                       sampleContentType:'generic', pageSequence:['cover','week','day','notes'] },
  'Sticker Ritual Pack':           { defaultFormat:'physical', defaultPalette:'Blush Routine',  defaultFont:'rounded',   defaultLayout:'vertical',  defaultStartMonth:'January',   includedAddons:['Stickers'],                                          sampleContentType:'habits',  pageSequence:['cover','week','habit','notes'] },
  'Planner Accessories Bundle':    { defaultFormat:'physical', defaultPalette:'Soft Minimal',   defaultFont:'serif',     defaultLayout:'vertical',  defaultStartMonth:'January',   includedAddons:['Stickers','Notes Pages'],                            sampleContentType:'generic', pageSequence:['cover','month','week','notes'] }
};

/* ---- engine helpers ---- */
const MON_L = ['J','F','M','A','M','J','J','A','S','O','N','D'];
const DOW_L = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const PAGE_NAME = { cover:'Cover', month:'Monthly', week:'Weekly', day:'Daily', habit:'Habit tracker', meal:'Meal planner', budget:'Budget', fitness:'Fitness', notes:'Notes', companion:'Digital companion' };
function _li(n,c){ return Array.from({length:n},()=>`<i class="${c||''}"></i>`).join(''); }
function _rl(n,dot){ return `<div class="pp-lines">${_li(n,dot?'dot':'')}</div>`; }
function _blank(){ return '<span style="flex:1;height:1px;background:var(--pv-line);align-self:center"></span>'; }
function _t3(S){ return [0,1,2].map(i=>`<div class="pp-chk"><i class="${S?'on':''}"></i>${S?(SAMPLE.day[i]||''):_blank()}</div>`).join(''); }
function _strip(S,n){ return Array.from({length:n},(_,i)=>`<i class="${S&&i%3!==2?'on':''}"></i>`).join(''); }
function pageName(pt){ return PAGE_NAME[pt]||'Page'; }

/* ---------- COVER ---------- */
function ppCover(cfg){
  const title = esc(cfg.title || 'Life Rhythm'), name = esc(cfg.name || '');
  return `<div class="pv-cover">
    <div class="pv-cover-strip"><i></i><i></i><i></i><i></i><i></i><i></i></div>
    <div class="pv-cover-brand">Cadence</div>
    <div class="pv-cover-title">${title}</div>
    ${name ? `<div class="pv-cover-name">${name}</div>` : ''}
    <div class="pv-cover-foot">Starts ${cfg.month} · 2026</div>
  </div>`;
}

/* ---------- MONTH ---------- */
function ppMonth(cfg){
  const S = cfg.sample, m = MONTHS.indexOf(cfg.month);
  const first = new Date(2026,m,1).getDay(), dim = new Date(2026,m+1,0).getDate(), pdim = new Date(2026,m,0).getDate();
  const cells = [];
  for(let i=0;i<first;i++) cells.push({n:pdim-first+1+i,out:true});
  for(let d=1;d<=dim;d++) cells.push({n:d,out:false});
  while(cells.length%7) cells.push({n:(cells.length%7)||1,out:true});
  const hl = S?[4,9,12,18,25]:[], ev = S?[2,7,15,21]:[];
  const grid = cells.map(c=>{
    const cls='pp-cell'+(c.out?' out':'')+(!c.out&&hl.includes(c.n)?' hl':'');
    const dot = (!c.out&&ev.includes(c.n))?'<span class="evd"></span>':'';
    return `<div class="${cls}">${c.n}${dot}</div>`;
  }).join('');
  const l = `<div class="pp-h"><b>${cfg.month}</b><span class="eb">2026 · Cadence</span></div>
    <div class="pp-mtabs">${MON_L.map((x,i)=>`<i class="${i===m?'on':''}">${x}</i>`).join('')}</div>
    <div class="pp-dow">${['S','M','T','W','T','F','S'].map(d=>`<span>${d}</span>`).join('')}</div>
    <div class="pp-grid">${grid}</div>`;
  const dates = S ? '<span class="pp-chip">3 · Dentist</span><span class="pp-chip">12 · Review</span><span class="pp-chip">25 · Trip</span>' : _rl(3);
  const goals = S ? '<span class="pp-chip">Move 4×/wk</span><span class="pp-chip">Read 2 books</span>' : _rl(3);
  const r = `<div class="pp-h"><b>${cfg.month} focus</b><span class="eb">Goals · notes</span></div>
    <div class="pp-card tint"><div class="pp-card-h"><i class="pp-ico">🎯</i>Monthly goals</div><div class="pp-tags">${goals}</div></div>
    <div class="pp-card"><div class="pp-card-h"><i class="pp-ico">📌</i>Important dates</div><div class="pp-tags">${dates}</div></div>
    <div class="pp-card"><div class="pp-card-h"><i class="pp-ico">✎</i>Notes</div>${_rl(3)}</div>
    <div class="pp-card"><div class="pp-card-h">Habit rhythm</div><div class="pv-habit-strip">${_strip(S,12)}</div></div>`;
  return { l, r };
}

/* ---------- WEEK (7 layouts) ---------- */
function _vcol(d,wknd,S){
  const body = S
    ? (SAMPLE.weekly[d]||[]).map(e=>`<div class="pp-ev">${e}</div>`).join('') + '<div class="pp-ev line"></div>'
    : '<div class="pp-seg">AM</div><div class="pp-ev line"></div><div class="pp-seg">PM</div><div class="pp-ev line"></div><div class="pp-seg">EVE</div><div class="pp-ev line"></div>';
  return `<div class="pp-col"><div class="ch ${wknd?'wknd':''}">${d}</div><div class="cb">${body}</div></div>`;
}
function ppWeek(cfg){
  const S = cfg.sample, L = cfg.layout;
  if(L==='horizontal'){
    const row = d => `<div class="pp-card" style="display:flex;gap:8px;align-items:center;padding:5px 8px;margin-bottom:4px"><b style="font-size:8px;color:var(--pv-accent);width:30px;flex:0 0 auto">${d}</b><div style="flex:1">${S?`<span class="pp-chip">${(SAMPLE.weekly[d]||[''])[0]}</span>`:'<div class="pp-ev line"></div>'}</div></div>`;
    const l = `<div class="pp-h"><b>This week</b><span class="eb">Weekly horizontal</span></div>${DOW_L.map(row).join('')}`;
    const r = `<div class="pp-h"><b>Weekly dashboard</b><span class="eb">Plan · track</span></div>
      <div class="pp-card tint"><div class="pp-card-h">This week's focus</div>${S?'<span class="pp-chip">Ship the launch</span>':_rl(1)}</div>
      <div class="pp-card"><div class="pp-card-h">Top 3</div>${_t3(S)}</div>
      <div class="pp-card"><div class="pp-card-h">Habits</div><div class="pv-habit-strip">${_strip(S,7)}</div></div>
      <div class="pp-np lined" style="min-height:44px"><div class="pp-np-h">Notes</div>${S?'<div class="pp-hand">Call back · Sam re: deck</div>':''}</div>`;
    return { l, r };
  }
  if(L==='dashboard'){
    const l = `<div class="pp-h"><b>This week</b><span class="eb">Command center</span></div>
      <div class="pp-dash">
        <div class="blk span"><div class="pp-card-h">This week's focus</div>${S?'<span class="pp-chip">Launch prep</span><span class="pp-chip">Family weekend</span>':_rl(1)}</div>
        <div class="blk"><div class="pp-card-h">Top 3</div>${_t3(S)}</div>
        <div class="blk"><div class="pp-card-h">Appointments</div>${S?'<div class="pp-ev">Tue 11a · Dentist</div><div class="pp-ev">Thu 2p · 1:1</div>':_rl(2)}</div>
      </div>`;
    const r = `<div class="pp-h"><b>At a glance</b><span class="eb">Habits · meals</span></div>
      <div class="pp-dash">
        <div class="blk"><div class="pp-card-h">Habits</div><div class="pv-habit-strip">${_strip(S,8)}</div></div>
        <div class="blk"><div class="pp-card-h"><i class="pp-ico">🍽</i>Meals</div>${S?'<span class="pp-chip">Tacos</span><span class="pp-chip">Stir-fry</span>':_rl(2)}</div>
        <div class="blk span"><div class="pp-card-h">Weekly reset</div>${S?'<span class="pp-chip">Plan Sunday</span><span class="pp-chip">Tidy desk</span><span class="pp-chip">Review goals</span>':_rl(2)}</div>
      </div>`;
    return { l, r };
  }
  if(L==='family'){
    const col = (k,list)=>`<div class="pp-col"><div class="ch">${k}</div><div class="cb">${S?(list||[]).map(e=>`<div class="pp-ev">${e}</div>`).join(''):'<div class="pp-ev line"></div><div class="pp-ev line"></div>'}</div></div>`;
    const l = `<div class="pp-h"><b>Household week</b><span class="eb">Who's doing what</span></div>
      <div class="pp-cols" style="grid-template-columns:repeat(3,1fr)">${col('Parent 1',SAMPLE.family['Parent 1'])}${col('Parent 2',SAMPLE.family['Parent 2'])}${col('Kids',SAMPLE.family['Kids'])}</div>`;
    const r = `<div class="pp-h"><b>Meals · chores · dates</b><span class="eb">Shared</span></div>
      <div class="pp-cols" style="grid-template-columns:repeat(3,1fr)">${col('Meals',SAMPLE.family['Meals'])}${col('Chores',SAMPLE.family['Chores'])}${col('Dates',['Soccer 4p','Dentist Tue'])}</div>`;
    return { l, r };
  }
  if(L==='timeblock'){
    const slot = (h,ev,w)=>`<div class="slot"><div class="hr">${h}:00</div><div class="bar">${ev?`<div class="ev2" style="width:${w}%">${ev}</div>`:''}</div></div>`;
    const lh = [['7'],['8','Deep work',72],['9','Deep work',72],['10'],['11'],['12','Lunch + walk',46]];
    const rh = [['1'],['2','Meetings',60],['3','Meetings',60],['4'],['5'],['6','Evening reset',40]];
    const l = `<div class="pp-h"><b>Today, time-blocked</b><span class="eb">Morning</span></div><div class="pp-tb">${lh.map(s=>slot(s[0],S?s[1]:'',s[2])).join('')}</div>`;
    const r = `<div class="pp-h"><b>Afternoon + evening</b><span class="eb">Focus</span></div><div class="pp-tb">${rh.map(s=>slot(s[0],S?s[1]:'',s[2])).join('')}</div>
      <div class="pp-card" style="margin-top:6px"><div class="pp-card-h">Top priorities</div>${_t3(S)}</div>
      <div class="pp-np dot" style="min-height:42px"><div class="pp-np-h">Brain dump</div></div>`;
    return { l, r };
  }
  if(L==='minimal'){
    const cell = (d,wk)=>`<div class="pp-col" style="min-height:64px"><div class="ch ${wk?'wknd':''}">${d}</div><div class="cb">${S?`<div class="pp-ev">${(SAMPLE.weekly[d]||[''])[0]}</div>`:'<div class="pp-ev line"></div>'}</div></div>`;
    const l = `<div class="pp-h"><b>This week</b><span class="eb">Minimal grid</span></div><div class="pp-cols" style="grid-template-columns:1fr 1fr">${['Mon','Tue','Wed','Thu'].map(d=>cell(d,false)).join('')}</div>`;
    const r = `<div class="pp-h"><b>Weekend</b><span class="eb">Fri – Sun</span></div><div class="pp-cols" style="grid-template-columns:1fr 1fr">${cell('Fri',false)}${cell('Sat',true)}${cell('Sun',true)}<div class="pp-col" style="min-height:64px"><div class="ch" style="background:var(--cream-2);color:var(--pv-ink)">Notes</div><div class="cb">${_rl(2)}</div></div></div>`;
    return { l, r };
  }
  if(L==='daily'){
    const l = `<div class="pp-h"><b>Today</b><span class="eb">Daily focus</span></div>
      <div class="pp-card tint"><div class="pp-card-h"><i class="pp-ico">⊙</i>One focus</div>${S?'<div class="pp-hand">Finish the proposal</div>':'<div class="pp-ev line"></div>'}</div>
      <div class="pp-sub">Top 3</div>${_t3(S)}
      <div class="pp-card" style="margin-top:6px"><div class="pp-card-h">Schedule</div>${S?'<div class="pp-ev">9a Gym</div><div class="pp-ev">1p Calls</div><div class="pp-ev">6p Dinner</div>':_rl(3)}</div>`;
    const r = `<div class="pp-h"><b>Habits + notes</b><span class="eb">Follow-through</span></div>
      <div class="pp-card"><div class="pp-card-h">Today's habits</div><div class="pv-habit-strip">${_strip(S,6)}</div></div>
      <div class="pp-np lined" style="min-height:60px"><div class="pp-np-h">Notes</div>${S?'<div class="pp-hand">Low-friction. One thing at a time.</div>':''}</div>`;
    return { l, r };
  }
  /* vertical (default) */
  const l = `<div class="pp-h"><b>This week</b><span class="eb">Weekly vertical</span></div>
    <div class="pp-cols" style="grid-template-columns:repeat(4,1fr)">${_vcol('Mon',false,S)}${_vcol('Tue',false,S)}${_vcol('Wed',false,S)}${_vcol('Thu',false,S)}</div>`;
  const r = `<div class="pp-h"><b>Weekend + focus</b><span class="eb">Fri – Sun</span></div>
    <div class="pp-cols" style="grid-template-columns:repeat(3,1fr)">${_vcol('Fri',false,S)}${_vcol('Sat',true,S)}${_vcol('Sun',true,S)}</div>
    <div class="pp-sub">This week</div>
    <div class="pp-card"><div class="pp-card-h">Top priorities</div>${_t3(S)}</div>
    <div class="pp-card"><div class="pp-card-h">Habits</div><div class="pv-habit-strip">${_strip(S,7)}</div></div>
    <div class="pp-card"><div class="pp-card-h"><i class="pp-ico">🍽</i>Meals</div>${S?'<span class="pp-chip">Prep Sun</span><span class="pp-chip">Tacos Tue</span>':_rl(2)}</div>`;
  return { l, r };
}

/* ---------- DAY ---------- */
function ppDay(cfg){
  const S = cfg.sample;
  const slot = (h,ev,w)=>`<div class="slot"><div class="hr">${h}</div><div class="bar">${ev?`<div class="ev2" style="width:${w}%">${ev}</div>`:''}</div></div>`;
  const hours = [['7a','Walk 30 min',46],['8a'],['9a','Strength training',64],['10a'],['12p','Lunch',40],['2p','Project block',60],['6p','Dinner + reset',46]];
  const l = `<div class="pp-h"><b>Today</b><span class="eb">${cfg.month} · Daily</span></div>
    <div class="pp-card tint"><div class="pp-card-h"><i class="pp-ico">⊙</i>Today's focus</div>${S?'<div class="pp-hand">Finish the proposal</div>':'<div class="pp-ev line"></div>'}</div>
    <div class="pp-sub">Top 3</div>${_t3(S)}
    <div class="pp-sub">Schedule</div><div class="pp-tb">${hours.map(s=>slot(s[0],S?s[1]:'',s[2])).join('')}</div>`;
  const drops = Array.from({length:8},(_,i)=>`<span class="pv-drop ${S&&i<5?'':'empty'}"></span>`).join('');
  const r = `<div class="pp-h"><b>Wellness</b><span class="eb">Body · mind</span></div>
    <div class="pp-card"><div class="pp-card-h"><i class="pp-ico">🍽</i>Meals</div>${S?'<div class="pp-ev">B · Oats</div><div class="pp-ev">L · Salad</div><div class="pp-ev">D · Tacos</div>':_rl(3)}</div>
    <div class="pp-card"><div class="pp-card-h"><i class="pp-ico">💧</i>Water</div><div class="pv-track">${drops}</div></div>
    <div class="pp-card"><div class="pp-card-h"><i class="pp-ico">👟</i>Movement</div>${S?'<span class="pp-chip">Walk 6,200 steps</span>':'<div class="pp-ev line"></div>'}</div>
    <div class="pp-card"><div class="pp-card-h"><i class="pp-ico">✦</i>Reflection &amp; gratitude</div>${S?'<div class="pp-hand">Grateful for an early start.</div>':_rl(2)}</div>`;
  return { l, r };
}

/* ---------- HABIT ---------- */
function _hbRow(name,start,count,S,ri){
  const cells = Array.from({length:count},(_,i)=>{
    let cls=''; if(S){ const d=start+i; const grace=(ri===1 && d===6); cls = grace?'grace':(((d*7+ri)%3!==0)?'on':''); }
    return `<i class="${cls}"></i>`;
  }).join('');
  return `<div class="pp-hb-row"><span class="pp-hb-name">${name}</span><div class="pp-hb-cells" style="grid-template-columns:repeat(${count},1fr)">${cells}</div></div>`;
}
function ppHabit(cfg){
  const S = cfg.sample;
  const habits = (S ? SAMPLE.habits : ['Habit one','Habit two','Habit three','Habit four','Habit five','Habit six']).slice(0,7);
  const numsL = Array.from({length:16},(_,i)=>`<i>${i+1}</i>`).join('');
  const numsR = Array.from({length:15},(_,i)=>`<i>${i+17}</i>`).join('');
  const l = `<div class="pp-h"><b>Habit tracker</b><span class="eb">${cfg.month} · 1–16</span></div>
    <div class="pp-hb-head"><span></span><div class="pp-hb-nums" style="grid-template-columns:repeat(16,1fr)">${numsL}</div></div>
    ${habits.map((h,ri)=>_hbRow(h,1,16,S,ri)).join('')}`;
  const r = `<div class="pp-h"><b>17 – 31</b><span class="eb">Streak · score</span></div>
    <div class="pp-hb-head"><span></span><div class="pp-hb-nums" style="grid-template-columns:repeat(15,1fr)">${numsR}</div></div>
    ${habits.map((h,ri)=>_hbRow('&nbsp;',17,15,S,ri)).join('')}
    <div class="pp-score"><b>${S?'86%':'—'}</b><span>Monthly consistency<br>${S?'18 / 21 days':'track daily'}</span></div>
    <div class="pp-legend"><span><i style="background:var(--pv-accent)"></i>Done</span><span><i style="background:repeating-linear-gradient(45deg,var(--pv-accent-2) 0 2px,#fff 2px 4px)"></i>Grace day</span><span><i style="background:var(--cream-2)"></i>Open</span></div>
    <div class="pp-card" style="margin-top:6px"><div class="pp-card-h">Reflection</div>${S?'<div class="pp-hand">Mornings are working.</div>':_rl(2)}</div>`;
  return { l, r };
}

/* ---------- MEAL ---------- */
function ppMeal(cfg){
  const S = cfg.sample;
  const days5 = ['Mon','Tue','Wed','Thu','Fri'];
  const row = d => { const mm = S?SAMPLE.meals[d]:['','','']; return `<div class="pp-meal-row"><span class="d">${d}</span><span class="m">${mm[0]||''}</span><span class="m">${mm[1]||''}</span><span class="m">${mm[2]||''}</span></div>`; };
  const l = `<div class="pp-h"><b>This week's menu</b><span class="eb">Eat with intention</span></div>
    <div class="pp-meal-row head"><span class="d"></span><span class="m">Breakfast</span><span class="m">Lunch</span><span class="m">Dinner</span></div>
    ${days5.map(row).join('')}
    <div class="pp-meal-row snack" style="margin-top:3px"><span class="d">Snack</span><span class="m">${S?'Greek yogurt · fruit':''}</span></div>
    <div class="pp-bar"><div class="bl"><span>Water</span><b>${S?'6 / 8':''}</b></div><div class="track"><div class="fill" style="width:${S?75:0}%"></div></div></div>`;
  const cats = [['Produce',['Spinach','Berries']],['Protein',['Chicken','Greek yogurt']],['Pantry',['Rice','Olive oil']]];
  const grocery = cats.map(c=>`<div class="pp-card-h" style="margin-top:4px">${c[0]}</div>` + (S?c[1].map(x=>`<div class="pp-chk"><i class="on"></i>${x}</div>`).join(''):`<div class="pp-chk"><i></i>${_blank()}</div>`)).join('');
  const r = `<div class="pp-h"><b>Shopping + prep</b><span class="eb">By category</span></div>
    <div class="pp-card"><div class="pp-card-h"><i class="pp-ico">🛒</i>Grocery list</div>${grocery}</div>
    <div class="pp-card"><div class="pp-card-h">Prep day</div>${S?'<div class="pp-chk"><i class="on"></i>Batch grains</div><div class="pp-chk"><i></i>Chop veg</div>':_rl(2)}</div>
    <div class="pp-card"><div class="pp-card-h">Recipe rotation</div><div class="pp-tags">${S?'<span class="pp-chip">Tacos</span><span class="pp-chip">Stir-fry</span><span class="pp-chip">Curry</span>':_rl(1)}</div></div>
    <div class="pp-card"><div class="pp-card-h">Leftovers</div>${S?'<div class="pp-hand">Double the soup → Thu lunch</div>':'<div class="pp-ev line"></div>'}</div>`;
  return { l, r };
}

/* ---------- BUDGET ---------- */
function ppBudget(cfg){
  const S = cfg.sample, m = MONTHS.indexOf(cfg.month);
  const bills = S?[1,5,15,22]:[];
  const dim = new Date(2026,m+1,0).getDate();
  const cal = Array.from({length:Math.min(dim,28)},(_,i)=>{ const d=i+1; const b=bills.includes(d); return `<i class="${b?'mark':''}">${b?'$':d}</i>`; }).join('');
  const fixed = S?[['Mortgage','$1,450'],['Utilities','$220'],['Car','$310']]:[['','']];
  const l = `<div class="pp-h"><b>${cfg.month} budget</b><span class="eb">Bills · income</span></div>
    <div class="pp-card tint"><div class="pp-card-h"><i class="pp-ico">💵</i>Income</div><div class="pp-bar"><div class="bl"><span>Paychecks</span><b>${S?'$4,200':''}</b></div></div></div>
    <div class="pp-card"><div class="pp-card-h">Bills calendar</div><div class="pp-mini-cal">${cal}</div></div>
    <div class="pp-card"><div class="pp-card-h">Fixed expenses</div>${fixed.map(f=>`<div class="pp-chk" style="justify-content:space-between"><span>${f[0]||_blank()}</span><b style="color:var(--pv-accent);font-size:8.5px">${f[1]}</b></div>`).join('')}</div>`;
  const cats = S?[['Groceries',72],['Dining',40],['Transport',55],['Fun',30]]:[['Groceries',0],['Dining',0],['Transport',0]];
  const bars = cats.map(c=>`<div class="pp-bar"><div class="bl"><span>${c[0]}</span>${S?`<b>${c[1]}%</b>`:''}</div><div class="track"><div class="fill" style="width:${c[1]}%"></div></div></div>`).join('');
  const r = `<div class="pp-h"><b>Spending + savings</b><span class="eb">Where it goes</span></div>
    <div class="pp-card"><div class="pp-card-h">Variable spending</div>${bars}</div>
    <div class="pp-card"><div class="pp-card-h">Sinking funds</div><div class="pp-tags">${S?'<span class="pp-chip">Holidays</span><span class="pp-chip">Car repair</span><span class="pp-chip">Gifts</span>':_rl(1)}</div></div>
    <div class="pp-card"><div class="pp-card-h">Savings goal</div><div class="pp-bar"><div class="bl"><span>Emergency fund</span>${S?'<b>$1,200 / $3,000</b>':''}</div><div class="track"><div class="fill" style="width:${S?40:0}%"></div></div></div></div>
    <div class="pp-card"><div class="pp-card-h">Debt payoff</div><div class="pp-bar"><div class="bl"><span>Card</span>${S?'<b>62%</b>':''}</div><div class="track"><div class="fill" style="width:${S?62:0}%"></div></div></div></div>
    <div class="pp-chk"><i class="${S?'on':''}"></i>No-spend day &nbsp;·&nbsp; End-of-month review</div>`;
  return { l, r };
}

/* ---------- FITNESS ---------- */
function ppFitness(cfg){
  const S = cfg.sample;
  const wk = (S?SAMPLE.fitness.week:[['Mon',''],['Tue',''],['Wed',''],['Thu',''],['Fri',''],['Sat',''],['Sun','']]).map(w=>`<div class="d ${/rest/i.test(w[1])?'rest':''}"><b>${w[0]}</b><div class="w">${w[1]||'—'}</div></div>`).join('');
  const l = `<div class="pp-h"><b>Fitness rhythm</b><span class="eb">${cfg.month}</span></div>
    <div class="pp-sub">Weekly schedule</div><div class="pp-fit">${wk}</div>
    <div class="pp-card"><div class="pp-card-h">Recovery</div>${S?'<span class="pp-chip">Wed rest</span><span class="pp-chip">Sleep 8h</span><span class="pp-chip">Mobility</span>':_rl(1)}</div>`;
  const meas = (S?SAMPLE.fitness.meas:[['—','Weight'],['—','Waist'],['0','Streak']]).map(x=>`<div class="x"><b>${x[0]}</b><span>${x[1]}</span></div>`).join('');
  const r = `<div class="pp-h"><b>Progress</b><span class="eb">Measure · reflect</span></div>
    <div class="pp-sub">Measurements</div><div class="pp-stat">${meas}</div>
    <div class="pp-card" style="margin-top:6px"><div class="pp-card-h">This week</div>
      <div class="pp-bar"><div class="bl"><span>Workouts</span>${S?'<b>4 / 5</b>':''}</div><div class="track"><div class="fill" style="width:${S?80:0}%"></div></div></div>
      <div class="pp-bar"><div class="bl"><span>Steps</span>${S?'<b>52k</b>':''}</div><div class="track"><div class="fill" style="width:${S?70:0}%"></div></div></div>
      <div class="pp-bar"><div class="bl"><span>Protein</span>${S?'<b>6 / 7 days</b>':''}</div><div class="track"><div class="fill" style="width:${S?86:0}%"></div></div></div>
    </div>
    <div class="pp-card"><div class="pp-card-h">Weekly reflection</div>${S?'<div class="pp-hand">Felt strong. Add one walk.</div>':_rl(2)}</div>`;
  return { l, r };
}

/* ---------- NOTES (selectable styles) ---------- */
function ppNotes(cfg){
  const S = cfg.sample;
  const l = `<div class="pp-h"><b>Notes</b><span class="eb">Cornell</span></div>
    <div class="pp-cornell">
      <div class="cue">${S?'<div class="pp-hand">Q: ship date?</div><div class="pp-hand">→ Fri</div>':'<div class="pp-np-h">Cues</div>'}</div>
      <div class="main">${S?'<div class="pp-hand">Launch review — finalize copy, QA, send Friday.</div>':''}</div>
      <div class="sum">${S?'Summary: on track for Friday ship.':'Summary'}</div>
    </div>
    <div class="pp-np lined" style="min-height:50px"><div class="pp-np-h">Meeting notes</div>${S?'<div class="pp-hand">Sync w/ Sam · follow up Mon</div>':''}</div>`;
  const r = `<div class="pp-h"><b>Pages</b><span class="eb">Dot · blank</span></div>
    <div class="pp-np dot" style="min-height:78px"><div class="pp-np-h">Brain dump</div>${S?'<div class="pp-hand">ideas: gift for Mom 🎁 · call dentist · batch content</div>':''}</div>
    <div class="pp-np grid" style="min-height:62px"><div class="pp-np-h">Reflection</div>${S?'<div class="pp-hand">This week I felt most myself when…</div>':''}</div>`;
  return { l, r };
}

/* ---------- DIGITAL COMPANION (app dashboard) ---------- */
function companionView(pt){ return ['habit','budget','fitness','meal','month','day','notes'].includes(pt) ? pt : 'week'; }
function ppCompanion(cfg, view){
  const S = cfg.sample;
  const ring = (pct,lab,sub)=>`<div class="pv-dash-ring" style="background:conic-gradient(var(--pv-accent) ${pct}%, var(--pv-accent-2) 0)"><div class="hole"><b>${lab}</b><span>${sub||''}</span></div></div>`;
  const head = t=>`<div class="pv-app-head"><b>${t}</b><span class="pv-app-sync">⟳ Synced</span></div>`;
  switch(view){
    case 'habit':  return `${head('Streak dashboard')}<div class="pv-app-row">${ring(S?86:4,S?'24':'0',S?'day streak':'days')}<div class="pv-app-stats"><div class="s"><b>${S?'6/7':'0/7'}</b><span>this week</span></div><div class="s"><b>${S?'92%':'—'}</b><span>consistency</span></div></div></div><div class="pv-app-bars">${[40,70,55,90,60,80,100,45,75,85,50,95,65,80].map(h=>`<i style="height:${S?h:8}%"></i>`).join('')}</div>`;
    case 'budget': return `${head('Spending summary')}<div class="pv-app-row">${ring(S?64:4,S?'$640':'$0',S?'of $1,000':'spent')}<div class="pv-app-stats"><div class="s"><b>${S?'$360':'—'}</b><span>remaining</span></div><div class="s"><b>${S?'4':'0'}</b><span>no-spend</span></div></div></div>${[['Groceries','$280'],['Dining','$140'],['Transport','$120']].map(c=>`<div class="pv-app-line"><span>${c[0]}</span><span class="pv-app-amt">${S?c[1]:'—'}</span></div>`).join('')}`;
    case 'fitness':return `${head('Progress dashboard')}<div class="pv-app-row">${ring(S?80:4,S?'4/5':'0/5',S?'workouts':'this week')}<div class="pv-app-stats"><div class="s"><b>${S?'172':'—'}</b><span>weigh-in</span></div><div class="s"><b>${S?'+5':'0'}</b><span>streak</span></div></div></div><div class="pv-app-spark">${[60,55,58,50,52,48,50,45,47,42].map(h=>`<i style="height:${S?h:10}%"></i>`).join('')}</div>`;
    case 'meal':   return `${head('Today’s meals')}${[['Breakfast','Oats'],['Lunch','Salad'],['Dinner','Tacos']].map(m=>`<div class="pv-app-toggle"><span>${m[0]}</span><b>${S?m[1]:'—'}</b></div>`).join('')}<div class="pv-app-line"><span>Grocery list</span><span class="pv-app-amt">${S?'6 items':'0'}</span></div>`;
    case 'month':  return `${head(cfg.month)}<div class="pv-app-mini-cal">${Array.from({length:21},(_,i)=>`<i class="${S&&[3,8,11,17].includes(i)?'on':''}"></i>`).join('')}</div><div class="pv-app-line"><span>Next up</span><span class="pv-app-amt">${S?'Dentist · Tue':'—'}</span></div>`;
    case 'day':    return `${head('Today')}${(S?SAMPLE.day:['—','—','—']).map(d=>`<div class="pv-app-check"><i class="${S?'on':''}"></i>${d}</div>`).join('')}<div class="pv-app-line"><span>Focus</span><span class="pv-app-amt">${S?'1 task':'—'}</span></div>`;
    case 'notes':  return `${head('Notes')}${(S?['Ship Friday','Gift for Mom 🎁','Batch content']:['·····','·····','·····']).map(n=>`<div class="pv-app-note">${n}</div>`).join('')}`;
    default:       return `${head('This week')}${['Mon','Tue','Wed','Thu','Fri'].map(d=>`<div class="pv-app-check"><i class="${S?'on':''}"></i>${d}: ${S?(SAMPLE.weekly[d]||[''])[0]:'—'}</div>`).join('')}<div class="pv-app-prog"><div class="pv-app-prog-fill" style="width:${S?70:0}%"></div></div>`;
  }
}

/* ---------- BEFORE (messy two-page spread for compare) ---------- */
function beforeCtxCfg(cfg){
  if(cfg.pageType==='fitness'||cfg.addons.includes('Fitness Pages')) return 'fitness';
  if(cfg.pageType==='budget'||cfg.addons.includes('Budget Pages')) return 'budget';
  if(cfg.pageType==='meal'||cfg.addons.includes('Meal Planning')) return 'meal';
  if(cfg.layout==='family'||cfg.addons.includes('Family Schedule')) return 'family';
  if(cfg.addons.includes('Assignment Tracker')) return 'student';
  return 'generic';
}
function beforeBody(cfg){
  const items = BEFORE[beforeCtxCfg(cfg)];
  const rot = [-4,3,-2,5,-3];
  const note = (t,i)=>`<div class="pv-mess-note" style="--r:${rot[i%rot.length]}deg;--t:${8+(i%3)*26}%;--l:${(i%2?46:8)}%">${t}</div>`;
  const l = `<div class="pv-mess">${items.slice(0,3).map((t,i)=>note(t,i)).join('')}<div class="pv-mess-watermark">no system</div></div>`;
  const r = `<div class="pv-mess">${items.slice(3).map((t,i)=>note(t,i+3)).join('')}<div class="pv-mess-scribble"></div></div>`;
  return { l, r };
}

/* ---------- page-body dispatch + frames ---------- */
function ppBody(cfg){
  switch(cfg.pageType){
    case 'week':    return ppWeek(cfg);
    case 'day':     return ppDay(cfg);
    case 'habit':   return ppHabit(cfg);
    case 'meal':    return ppMeal(cfg);
    case 'budget':  return ppBudget(cfg);
    case 'fitness': return ppFitness(cfg);
    case 'notes':   return ppNotes(cfg);
    case 'month':
    default:        return ppMonth(cfg);
  }
}

/* FRAME — physical two-page spread (binding lives in the gutter column) */
function frameSpread(cfg, body){
  const holes = '<i></i>'.repeat(6), coil = '<i></i>'.repeat(9);
  return `<div class="pp-book ${cfg.flat?'flat':''}">
    <div class="pp-spread">
      <div class="pp-page l">${body.l}<div class="pp-holes l">${holes}</div><div class="pp-pageno">2</div></div>
      <div class="pp-gutter"><div class="pp-coil">${coil}</div></div>
      <div class="pp-page r">${body.r}<div class="pp-holes r">${holes}</div><div class="pp-pageno">3</div></div>
    </div></div>`;
}

/* FRAME — digital tablet (GoodNotes-style: side nav, toolbar, bookmarks) */
function frameTablet(cfg, body){
  const navs = [['Cal','month'],['Wk','week'],['Day','day'],['Hab','habit'],['Notes','notes']];
  const nav = navs.map(n=>`<i class="${cfg.pageType===n[1]?'on':''}">${n[0]}</i>`).join('');
  const bk = ['var(--sage)','var(--clay)','var(--gold)'].map(c=>`<i style="background:${c}"></i>`).join('');
  const stick = cfg.sample ? '<span class="pp-sticker" style="top:6px;right:16px">✦</span>' : '';
  return `<div class="fr-tablet"><div class="scr">
    <div class="pp-toolbar"><span class="tdot"></span><span class="tt">Cadence · ${pageName(cfg.pageType)}</span><span class="tsp"></span><span class="tt">✎ ▢ ⌫</span></div>
    <div class="pp-tab-grid">
      <div class="pp-navtabs">${nav}</div>
      <div class="pp-tab-page">${body}<div class="pp-bookmarks">${bk}</div>${stick}</div>
    </div></div></div>`;
}

/* FRAME — wall calendar (hanging product) */
function frameWall(cfg){
  const m = MONTHS.indexOf(cfg.month), S = cfg.sample;
  if(cfg.pageType==='month' || cfg.pageType==='cover'){
    const first = new Date(2026,m,1).getDay(), dim = new Date(2026,m+1,0).getDate();
    const cells = [];
    for(let i=0;i<first;i++) cells.push('<div class="pp-cell out"></div>');
    for(let d=1;d<=dim;d++){ const hl=S&&[6,14,21].includes(d); const ev=S&&[3,11,19].includes(d); cells.push(`<div class="pp-cell ${hl?'hl':''}">${d}${ev?'<span class="ev"></span>':''}</div>`); }
    while(cells.length%7) cells.push('<div class="pp-cell out"></div>');
    return `<div class="fr-wall"><div class="hang"><i></i><i></i></div>
      <div class="pp-wall-head"><b>${cfg.month}</b><span>Cadence · 2026</span></div>
      <div class="pp-wall-body">
        <div><div class="pp-dow">${['S','M','T','W','T','F','S'].map(d=>`<span>${d}</span>`).join('')}</div><div class="pp-grid pp-wide-grid">${cells.join('')}</div></div>
        <div class="pp-wall-notes"><div class="pp-card-h">Notes</div>${_rl(5)}<div class="pp-sub">Family</div><div class="pp-tags"><span class="pp-chip">Mom</span><span class="pp-chip">Dad</span><span class="pp-chip">Kids</span></div></div>
      </div></div>`;
  }
  const b = ppBody(cfg);
  return `<div class="fr-wall"><div class="hang"><i></i><i></i></div>
    <div class="pp-wall-head"><b>${pageName(cfg.pageType)}</b><span>Cadence · Wall</span></div>
    <div style="padding:12px">${b.l}<div class="pp-rule"></div>${b.r}</div></div>`;
}

/* FRAME — desk pad (wide tear-off) */
function frameDesk(cfg){
  const S = cfg.sample;
  if(cfg.pageType==='week' || cfg.pageType==='day'){
    const zone = (t,items)=>`<div class="pp-zone"><div class="zh">${t}</div><div class="zb">${S?items.map(x=>`<div class="pp-chk"><i class="${x[1]?'on':''}"></i>${x[0]}</div>`).join(''):'<div class="pp-ev line"></div><div class="pp-ev line"></div><div class="pp-ev line"></div>'}</div></div>`;
    return `<div class="fr-desk"><div class="glue"></div><div class="pp-desk-body">
      <div class="pp-h"><b>Week of ${cfg.month} 6</b><span class="eb">Desk pad</span></div>
      <div class="pp-desk-zones">${zone('Today',[['Ship update',1],['Gym 6p',0],['Call Sam',0]])}${zone('Tomorrow',[['Dentist 11a',0],['Groceries',0]])}${zone('Later',[['Plan Q3',0],['Book trip',0]])}</div>
      <div class="pp-dash" style="margin-top:7px"><div class="blk"><div class="pp-card-h">Top priorities</div>${_t3(S)}</div><div class="blk"><div class="pp-card-h">Notes</div>${_rl(2)}</div></div>
    </div></div>`;
  }
  const b = ppBody(cfg);
  return `<div class="fr-desk"><div class="glue"></div><div class="pp-desk-body"><div class="pp-h"><b>${pageName(cfg.pageType)}</b><span class="eb">Desk pad</span></div>${b.l}<div class="pp-rule"></div>${b.r}</div></div>`;
}

function pvWrap(cfg, inner){
  const pal = PALETTE[cfg.palette] || PALETTE['Soft Minimal'], f = FONT[cfg.font] || FONT.serif;
  const vars = `--pv-cover:${pal.cover};--pv-accent:${pal.accent};--pv-accent-2:${pal.accent2};--pv-font:${f.stack}`;
  return `<div class="pv ${pal.dark?'dark-cover':''} ${cfg.font==='editorial'?'f-editorial':''}" style="${vars}">${inner}</div>`;
}
function renderPlannerPage(cfg){ return pvWrap(cfg, pageInner(cfg)); }
function cfgFromPV(){ return { pageType:PV.view, format:PV.format, layout:PV.layout, palette:PV.palette, font:PV.font, month:PV.month, title:PV.title, name:PV.name, addons:PV.addons.slice(), sample:PV.sample }; }

/* ---------- hybrid + comparison (use the shared engine) ---------- */
function hybridInner(cfg){
  const spread = frameSpread(Object.assign({}, cfg, {flat:true}), ppBody(cfg));
  const comp = `<div class="fr-tablet" style="max-width:198px"><div class="scr">${ppCompanion(cfg, companionView(cfg.pageType))}</div></div>`;
  return `<div class="hybrid-rich">
    <div class="pv-hy-col">${spread}<div class="pv-hy-cap">On paper</div></div>
    <div class="pv-hy-link" aria-hidden="true"><span>↔</span><small>Write it down.<br>Carry it forward.</small></div>
    <div class="pv-hy-col">${comp}<div class="pv-hy-cap">On tablet</div></div>
  </div>`;
}
function compareInner(cfg){
  const after  = frameSpread(Object.assign({}, cfg, {flat:true, sample:true}), ppBody(Object.assign({}, cfg, {sample:true})));
  const before = frameSpread(Object.assign({}, cfg, {flat:true}), beforeBody(cfg));
  return `<div class="pv-compare">
    <div class="pv-cmp-col"><div class="pv-cmp-tag before">Before Cadence</div>${before}</div>
    <div class="pv-cmp-arrow" aria-hidden="true">→</div>
    <div class="pv-cmp-col"><div class="pv-cmp-tag after">After Cadence</div>${after}</div>
  </div>`;
}

/* OVERRIDE — studio main preview now uses the premium engine */
function renderMainPreview(){
  const cfg = cfgFromPV();
  let inner;
  if(PV.mode==='compare' && PV.view!=='cover') inner = compareInner(cfg);
  else if(PV.format==='hybrid' && PV.view!=='cover') inner = hybridInner(cfg);
  else inner = pageInner(cfg);
  $('#stStage').innerHTML = pvWrap(cfg, inner);
}

/* OVERRIDE — product card with three actions: View system / Customize / Add */
function productCard(p){
  const cls = p.type === 'digital' ? ' digital' : p.type === 'hybrid' ? ' hybrid' : '';
  const price = p.compareAt
    ? `<span class="pprice"><s>${money(p.compareAt)}</s>${money(p.price)}</span>`
    : `<span class="pprice">${money(p.price)}</span>`;
  return `
    <article class="pcard">
      <div class="pcover" data-action="view-system" data-id="${p.id}">
        <div class="pc-band" style="background:${GRAD[p.category]}"></div>
        <div class="pc-strip"><i></i><i></i><i></i><i></i><i></i><i></i></div>
        <span class="pbadge${cls}">${badgeText[p.type]}</span>
        <div class="pc-title"><span>Cadence</span><b>${p.name}</b></div>
      </div>
      <div class="pbody">
        <div class="pcat">${p.category}</div>
        <h3 class="pname">${p.name}</h3>
        <p class="pdesc">${p.desc}</p>
        <div class="prating"><span class="rs">★★★★★</span> ${p.rating} · ${p.reviews.toLocaleString()} reviews</div>
        <div class="pfoot" style="display:block">
          <div style="margin-bottom:9px">${price}</div>
          <div class="pc-actions">
            <button class="pc-primary" data-action="view-system" data-id="${p.id}"><span>View system</span><small>Flip through what’s included</small></button>
            <div class="pc-secondary">
              <button class="pc-ghost" data-action="customize-system" data-id="${p.id}" title="Start with this design and personalize it">Customize</button>
              <button class="pc-buy" data-action="add" data-id="${p.id}" title="Buy this system as-is">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </article>`;
}

/* ============================================================================
   PRODUCT VIEWER — "View current system" (flip + thumbnails) vs "Customize"
   ============================================================================ */
let pvwState = { id:null, seq:[], idx:0, tab:'overview' };
const REVIEW_BANK = [
  ['Maya R.','Being able to see every page before buying is the whole reason I finally committed.'],
  ['Daniel K.','The layout actually fits how my brain works — no more abandoned planners.'],
  ['Priya S.','Beautiful, calm, and genuinely useful. The pages feel like a real product.'],
  ['Jordan T.','Set it up in minutes and I’ve stuck with it for months.'],
  ['Sam W.','The paper + digital companion combo is exactly why I bought it.']
];

/* product-specific selling copy: who it's for + the problem it solves */
const PRODUCT_COPY = {
  'Custom Life Rhythm Planner':    { best:'Anyone juggling work, home, health, and goals who wants one calm system.', pitch:'A fully personalized planner that bends to your real life — choose your format, layout, pages, and start month, then keep every part of your week in one place.' },
  'Digital Fitness Calendar':      { best:'Gym-goers, runners, and home-workout fans who plan on a tablet or phone.', pitch:'A tap-friendly training calendar that tracks workouts, habits, and progress so you can watch your consistency build week over week.' },
  '90-Day Weight Loss Cadence':    { best:'Anyone starting a focused 90-day reset who wants structure without shame.', pitch:'A 90-day system that pairs meal planning, movement, and habit tracking with weekly check-ins — built around grace days, not broken streaks.' },
  'ADHD Weekly Focus System':      { best:'Busy ADHD brains who need one clear focus and low-friction structure.', pitch:'A daily-first layout that surfaces a single focus, a short top-three, and visible habits — designed to cut overwhelm and decision fatigue.' },
  'Student Semester Planner':      { best:'High-school and college students tracking classes, assignments, and exams.', pitch:'A semester-long planner with academic monthly views, weekly class planning, and an assignment tracker so nothing slips before finals.' },
  'Family Command Center Calendar':{ best:'Parents coordinating kids, meals, chores, and appointments in one place.', pitch:'A shared household hub with per-person columns, meal planning, and a chore rhythm so the whole family stays in sync on one page.' },
  'Budget Reset Calendar':         { best:'Anyone resetting their money habits and tracking bills and savings.', pitch:'A modular money system with a bills calendar, category spending, sinking funds, and savings goals so you can see exactly where it goes.' },
  'Executive Deep Work Planner':   { best:'Leaders and makers protecting time for focused, high-leverage work.', pitch:'A time-blocked planner built for deep work — daily priorities, meeting capture, and goal pages that keep your calendar aligned to what matters.' },
  'Meal Prep Rhythm Calendar':     { best:'Home cooks and meal-preppers who plan the week’s food in advance.', pitch:'A weekly menu with a categorized grocery list, prep-day checklist, and recipe rotation so shopping and cooking finally feel effortless.' },
  'Habit Streak Calendar':         { best:'Habit-builders who want a simple, motivating consistency tracker.', pitch:'A clean monthly habit grid with streaks, a consistency score, and grace days — the gentle nudge that keeps good habits going.' },
  'Content Creator Cadence':       { best:'Creators planning posts, shoots, and launches across platforms.', pitch:'A content system with a social calendar, weekly planning, and goal pages so your ideas turn into a consistent publishing rhythm.' },
  'Teacher Lesson Rhythm Planner': { best:'Teachers, tutors, homeschool instructors, and classroom planners.', pitch:'Built for teachers who need lesson plans, grade tracking, classroom routines, and notes in one calm place — organized around the school year.' },
  'Minimal Wall Calendar':         { best:'Households and desks that want an at-a-glance month on the wall.', pitch:'A large, beautiful write-in month you can hang anywhere — minimal design with plenty of room for the whole family’s plans.' },
  'Desk Planner':                  { best:'Anyone who plans at a desk and likes a tear-off daily/weekly pad.', pitch:'A wide desk pad with Today / Tomorrow / Later zones and room for priorities and notes — your day, always in view.' },
  'Sticker Ritual Pack':           { best:'Planner fans who personalize spreads and mark their wins.', pitch:'A tactile sticker set for habits, milestones, and rituals — make your planner yours and celebrate the small, consistent wins.' },
  'Planner Accessories Bundle':    { best:'New planners who want the essentials to get started in style.', pitch:'A curated bundle of accessories and notes pages to round out your system and keep everything tidy from day one.' }
};

function productSequence(id){
  const p = byId(id), T = PRODUCT_TEMPLATES[p ? p.name : ''] || {};
  return (T.pageSequence && T.pageSequence.length) ? T.pageSequence.slice() : ['cover','month','week','notes'];
}
function viewerPageHTML(id, pt){
  const cfg = templateCfg(id, pt==='companion' ? 'week' : pt);
  if(pt==='companion') return pvWrap(cfg, `<div class="fr-tablet"><div class="scr">${ppCompanion(cfg, companionView(cfg.pageType))}</div></div>`);
  return renderPlannerPage(cfg);
}
function reviewsHTML(p){
  return REVIEW_BANK.slice(0,3).map(r=>`<div class="pm-review"><div class="rh"><span class="rn">${r[0]}</span><span class="rs">★★★★★</span></div><p>${r[1]}</p></div>`).join('')
    + `<p class="pm-review-foot">${p.rating} average · ${p.reviews.toLocaleString()} verified reviews</p>`;
}

/* ---- PRODUCT MODAL — dedicated ecommerce product-page overlay ---- */
function pvwShell(p){
  const T = PRODUCT_TEMPLATES[p.name] || {}, C = PRODUCT_COPY[p.name] || {};
  const priceHTML = p.compareAt
    ? `<span class="pm-price"><s>${money(p.compareAt)}</s>${money(p.price)}</span>`
    : `<span class="pm-price">${money(p.price)}</span>`;
  const fmtTag = p.type==='hybrid'?'Paper + digital':p.type==='digital'?'Instant download':p.type==='accessories'?'Add-on':'Ships free over $50';
  const pages = productSequence(p.id).map(pageName).filter((v,i,a)=>a.indexOf(v)===i);
  const pageList = pages.map(x=>`<li>${x}</li>`).join('');
  const inclList = pageList + (T.includedAddons||[]).map(x=>`<li>${x}</li>`).join('');
  const tab = pvwState.tab, on = t => tab===t ? ' on' : '';
  return `<div class="pm">
    <div class="pm-mhead"><div><div class="pm-mhead-cat">${p.category}</div><b>${p.name}</b></div>${priceHTML}</div>
    <div class="pm-grid">
      <div class="pm-info">
        <div class="pm-info-scroll">
          <div class="pm-cat">${p.category}</div>
          <h2 class="pm-name">${p.name}</h2>
          <div class="pm-rating"><span class="pm-stars">★★★★★</span><span>${p.rating} · ${p.reviews.toLocaleString()} reviews</span></div>
          <div class="pm-meta"><span class="pm-chip">${badgeText[p.type]}</span><span class="pm-chip">Starts ${T.defaultStartMonth||'any month'}</span><span class="pm-chip">${fmtTag}</span></div>
          <p class="pm-pitch">${C.pitch || p.desc}</p>
          ${C.best ? `<div class="pm-bestfor"><b>Best for</b>${C.best}</div>` : ''}
          <div class="pm-tabs" role="tablist">
            <button class="pm-tab${on('overview')}" data-action="vw-tab" data-tab="overview" type="button">Overview</button>
            <button class="pm-tab${on('pages')}" data-action="vw-tab" data-tab="pages" type="button">View pages</button>
            <button class="pm-tab${on('incl')}" data-action="vw-tab" data-tab="incl" type="button">What’s included</button>
            <button class="pm-tab${on('reviews')}" data-action="vw-tab" data-tab="reviews" type="button">Reviews</button>
          </div>
          <div class="pm-pane${on('overview')}" data-pane="overview">
            <div class="pm-h">Why it works</div>
            <ul class="pm-benefits">${p.benefits.map(b=>`<li>${b}</li>`).join('')}</ul>
            <div class="pm-howto">
              <div class="pm-howto-row"><span class="pm-howto-k">View current system</span><span>Flip through the exact planner as sold.</span></div>
              <div class="pm-howto-row"><span class="pm-howto-k">Customize current system</span><span>Start with this planner, then change layout, colors, pages, name, and start month.</span></div>
            </div>
          </div>
          <div class="pm-pane${on('pages')}" data-pane="pages">
            <div class="pm-h">${pages.length} pages in this system</div>
            <p class="pm-muted">Flip through each one in the live viewer — use the arrows or tap a thumbnail.</p>
            <ul class="pm-pagelist">${pageList}</ul>
          </div>
          <div class="pm-pane${on('incl')}" data-pane="incl">
            <div class="pm-h">Included in this system</div>
            <ul class="pm-incl">${inclList}</ul>
            <div class="pm-h" style="margin-top:16px">In the box</div>
            <ul class="pm-incl">${p.incl.map(x=>`<li>${x}</li>`).join('')}</ul>
          </div>
          <div class="pm-pane${on('reviews')}" data-pane="reviews">${reviewsHTML(p)}</div>
        </div>
      </div>
      <div class="pm-viewer">
        <div class="pm-stage-wrap"><div id="pvwStage" class="pm-stage"></div></div>
        <div class="pm-nav">
          <button class="pm-arrow" id="pvwPrev" data-action="vw-prev" type="button" aria-label="Previous page">‹</button>
          <div class="pm-label" id="pvwLabel"></div>
          <button class="pm-arrow" id="pvwNext" data-action="vw-next" type="button" aria-label="Next page">›</button>
        </div>
        <div class="pm-thumbs" id="pvwThumbs"></div>
        <button class="view-larger" data-action="fs-viewer" type="button">⤢ View full page</button>
      </div>
    </div>
    <div class="pm-cta">
      <div class="pm-cta-price">${priceHTML}</div>
      <div class="pm-cta-actions">
        <button class="pm-btn pm-btn-ghost" data-action="customize-current" type="button"><b>Customize</b><small>Start with this design</small></button>
        <button class="pm-btn pm-btn-buy" data-action="add-system" type="button"><b>Add — ${money(p.price)}</b><small>Buy as-is</small></button>
      </div>
    </div>
  </div>`;
}
function pvwRenderStage(){
  const { id, seq, idx } = pvwState, pt = seq[idx];
  const stage = $('#pvwStage'); if(!stage) return;
  stage.innerHTML = viewerPageHTML(id, pt);
  const lab = $('#pvwLabel'); if(lab) lab.innerHTML = `<b>${pageName(pt)}</b><span>Page ${idx+1} of ${seq.length}</span>`;
  const prev = $('#pvwPrev'), next = $('#pvwNext');
  if(prev) prev.disabled = idx===0;
  if(next) next.disabled = idx===seq.length-1;
  const th = $('#pvwThumbs');
  if(th) th.innerHTML = seq.map((pp,i)=>`<button class="pm-thumb ${i===idx?'on':''}" data-action="vw-thumb" data-i="${i}" type="button" aria-label="Page ${i+1}: ${pageName(pp)}"><span class="pm-mini">${viewerPageHTML(id,pp)}</span><span class="pm-thumb-l">${pageName(pp)}</span></button>`).join('');
}
function pvwGo(d){ pvwState.idx = Math.max(0, Math.min(pvwState.seq.length-1, pvwState.idx + d)); pvwRenderStage(); }
function pvwThumb(i){ pvwState.idx = i; pvwRenderStage(); }
function pvwTab(name){
  pvwState.tab = name;
  $$('#modalBody .pm-tab').forEach(x => x.classList.toggle('on', x.dataset.tab === name));
  $$('#modalBody .pm-pane').forEach(x => x.classList.toggle('on', x.dataset.pane === name));
}

/* product modal — viewer is always visible (never hidden inside a tab) */
function openModal(id, tab){
  const p = byId(id); if(!p) return;
  pvwState = { id, tab: tab || 'overview', seq: productSequence(id), idx:0 };
  $('#modalBody').innerHTML = pvwShell(p);
  pvwRenderStage();
  const m = $('#modal'); m.classList.add('open'); m.setAttribute('aria-hidden','false');
  document.body.classList.add('no-scroll');
}

/* ---- wiring for the new product-viewer + card actions ---- */
document.addEventListener('DOMContentLoaded', () => {
  if($('#stStage')) renderPreviewStudio();           /* ensure premium engine is showing */
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-action]'); if(!t) return;
    const a = t.dataset.action;
    if(a === 'view-system'){ openModal(+t.dataset.id); }
    else if(a === 'customize-system'){ customizeFrom(+t.dataset.id); }
    else if(a === 'customize-current'){ if(pvwState.id) customizeFrom(pvwState.id); }
    else if(a === 'vw-prev'){ pvwGo(-1); }
    else if(a === 'vw-next'){ pvwGo(1); }
    else if(a === 'vw-thumb'){ pvwThumb(+t.dataset.i); }
    else if(a === 'vw-tab'){ pvwTab(t.dataset.tab); }
    else if(a === 'add-system'){
      const p = byId(pvwState.id);
      if(p){ cartAdd({ key:'p'+p.id, name:p.name, price:p.price, meta:`${p.category} · ${badgeText[p.type]} · as sold`, gradient:GRAD[p.category] }); toast(p.name + ' added to cart'); openCart(); }
    }
  });
  document.addEventListener('keydown', e => {
    const el = document.activeElement;
    if((e.key==='Enter'||e.key===' ') && el && el.dataset && el.dataset.action==='vw-thumb'){ e.preventDefault(); el.click(); }
  });
});

/* ============================================================================
   v4 — HASH ROUTER, full-screen preview, mobile behaviors
   ============================================================================ */
const ROUTE_TITLES = {
  home:'Cadence — Find your rhythm', shop:'Shop — Cadence', studio:'Preview Studio — Cadence',
  club:'Cadence Club — Cadence', gifts:'Gifts — Cadence', reviews:'Reviews — Cadence'
};
function setActiveNav(r){ $$('[data-route]').forEach(a => a.classList.toggle('rt-active', a.dataset.route === r)); }
function navigate(hash){ if(location.hash === hash){ route(); } else { location.hash = hash; } }
window.addEventListener('hashchange', () => route());

/* OVERRIDE — update the cart badge */
function bumpCount(){
  const n = state.cart.reduce((s,i)=> s + i.qty, 0);
  $$('.cart-count').forEach(el => { el.textContent = n; el.style.transform = 'scale(1.3)'; setTimeout(()=> el.style.transform = 'scale(1)', 160); });
}
/* OVERRIDE — shop is now its own route */
function gotoShop(){ navigate('#/shop'); }

/* OVERRIDE — Customize routes to the Studio page, preloads, scrolls to top */
function customizeFrom(id){
  const p = byId(id), T = PRODUCT_TEMPLATES[p ? p.name : ''] || {}, c = PRELOAD[id] || {};
  const seq = T.pageSequence || [];
  Object.assign(PV, {
    format: T.defaultFormat || c.format || 'hybrid',
    view:   (seq[1] || c.view || 'month'),
    layout: T.defaultLayout || c.layout || 'vertical',
    month:  T.defaultStartMonth || 'January',
    palette:T.defaultPalette || c.palette || 'Soft Minimal',
    font:   T.defaultFont || 'serif',
    name:'', addons:(T.includedAddons || c.addons || []).slice(), sample:false, mode:'blank'
  });
  PV.title = p ? p.name : PV.title;
  syncAllControls();
  $$('#studio [data-group="mode"] .st-opt').forEach(b => b.classList.toggle('active', b.dataset.val === PV.mode));
  renderPreviewStudio();
  closeModal();
  navigate('#/studio');
  window.scrollTo(0, 0);
  setTimeout(()=> updatePreviewMessage(`Loaded ${p?p.name:'your pick'} — customize anything you like.`), 350);
  toast('Customizing ' + (p?p.name:'system'));
}

/* ---- full-screen planner preview (mobile "View larger") ---- */
function openFsPreview(html, title){
  const fs = $('#fsPreview'); if(!fs) return;
  $('#fsStage').innerHTML = html || '';
  $('#fsTitle').textContent = title || 'Preview';
  fs.classList.add('open'); fs.setAttribute('aria-hidden','false');
  document.body.classList.add('no-scroll');
}
function closeFsPreview(){
  const fs = $('#fsPreview'); if(!fs) return;
  fs.classList.remove('open'); fs.setAttribute('aria-hidden','true');
  document.body.classList.remove('no-scroll'); $('#fsStage').innerHTML = '';
}

/* ---- wire router + mobile behaviors ---- */
document.addEventListener('DOMContentLoaded', () => {
  route({ noscroll:true });                         /* initial route from hash (deep links) */


  /* shop filters drawer (mobile) */
  const ft = $('#filtersToggle'), sf = $('#shopFilters');
  if(ft && sf) ft.addEventListener('click', () => {
    const open = sf.classList.toggle('open'); ft.setAttribute('aria-expanded', open ? 'true':'false'); ft.classList.toggle('open', open);
  });

  /* inject "View larger" into the studio preview */
  const stStage = $('#stStage');
  if(stStage && !$('#viewLargerStudio')){
    const b = document.createElement('button');
    b.id = 'viewLargerStudio'; b.className = 'view-larger'; b.type = 'button';
    b.setAttribute('data-action','fs-studio'); b.textContent = '⤢ View larger';
    stStage.parentNode.insertBefore(b, stStage.nextSibling);
  }

  /* delegated: full-screen + route links that also scroll */
  document.addEventListener('click', e => {
    const fsBtn = e.target.closest('[data-action]');
    if(fsBtn){
      const a = fsBtn.dataset.action;
      if(a === 'fs-studio'){ openFsPreview($('#stStage').innerHTML, 'Your design'); return; }
      if(a === 'fs-viewer'){ const lab = $('#pvwLabel'); openFsPreview($('#pvwStage').innerHTML, lab ? lab.textContent : 'Preview'); return; }
    }
    const link = e.target.closest('a[data-route]');
    if(link && link.dataset.scroll){
      e.preventDefault();
      const hash = link.getAttribute('href');
      if(location.hash === hash) route(); else location.hash = hash;
      const sc = link.dataset.scroll;
      setTimeout(()=>{ const el = $('#'+sc); if(el) el.scrollIntoView({ behavior:'smooth', block:'start' }); }, 140);
    }
  });

  const fsClose = $('#fsClose'); if(fsClose) fsClose.addEventListener('click', closeFsPreview);
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeFsPreview(); });
});

/* ============================================================================
   v4 — premium COVER product-shot + balanced cover (overrides)
   ============================================================================ */
function ppCoverShot(cfg){
  const cov = ppCover(cfg);
  const fmt = FMT_NAME[cfg.format] || 'Planner';
  const pages = (cfg.seqNames && cfg.seqNames.length) ? `${cfg.seqNames.length} pages`
              : (cfg.addons && cfg.addons.length) ? `${cfg.addons.length} add-on sections` : 'Customizable';
  const chipSrc = (cfg.seqNames && cfg.seqNames.length) ? cfg.seqNames.slice(1,5) : (cfg.addons||[]).slice(0,3);
  const chips = chipSrc.map(x=>`<span class="pp-chip">${x}</span>`).join('') || '<span class="pp-chip">Monthly</span><span class="pp-chip">Weekly</span><span class="pp-chip">Notes</span>';
  const piece = (cfg.format==='digital')
    ? `<div class="fr-tablet" style="max-width:190px"><div class="scr"><div class="pp-toolbar"><span class="tdot"></span><span class="tt">Cadence</span><span class="tsp"></span><span class="tt">✎</span></div><div style="padding:14px;background:#fff">${cov}</div></div></div>`
    : `<div class="shot-stack"><span class="shot-pages"></span><span class="shot-pages two"></span><div class="shot-cover">${cov}</div></div>`;
  return `<div class="shot">
    <div class="shot-surface" aria-hidden="true"></div>
    <div class="shot-piece">${piece}</div>
    <div class="shot-card">
      <div class="shot-card-h">In this system</div>
      <div class="shot-row"><span>Format</span><b>${fmt}</b></div>
      <div class="shot-row"><span>Starts</span><b>${cfg.month}</b></div>
      <div class="shot-row"><span>Pages</span><b>${pages}</b></div>
      <div class="shot-chips">${chips}</div>
    </div>
  </div>`;
}

/* OVERRIDE — cover now renders as a real product shot (no floating cover) */
function pageInner(cfg){
  if(cfg.pageType==='cover') return `<div class="cover-wrap">${ppCoverShot(cfg)}</div>`;
  if(cfg.format==='digital'){ const b = ppBody(cfg); return frameTablet(cfg, `${b.l}<div class="pp-rule"></div>${b.r}`); }
  if(cfg.format==='wall') return frameWall(cfg);
  if(cfg.format==='desk') return frameDesk(cfg);
  return frameSpread(cfg, ppBody(cfg));
}

/* OVERRIDE — templateCfg carries the page sequence names for the cover detail card */
function templateCfg(id, pageType){
  const p = byId(id), T = PRODUCT_TEMPLATES[p ? p.name : ''] || {};
  const seq = (T.pageSequence||[]).map(pageName).filter((v,i,a)=>a.indexOf(v)===i);
  return { pageType, format:T.defaultFormat||'physical', layout:T.defaultLayout||'vertical', palette:T.defaultPalette||'Soft Minimal',
           font:T.defaultFont||'serif', month:T.defaultStartMonth||'January', title:p?p.name:'', name:'', addons:(T.includedAddons||[]).slice(), sample:true, seqNames:seq };
}

/* ============================================================================
   v4.1 — HARDENED ROUTER (overrides earlier route/currentRoute)
   Guarantees: valid-or-home, URL normalized to #/home when missing/invalid,
   and a page is ALWAYS active (never a blank screen).
   ============================================================================ */
const VALID_ROUTES = ['home','shop','studio','club','gifts','reviews'];
function currentRoute(){
  const raw = (location.hash || '').replace(/^#\/?/, '').split(/[?&]/)[0];
  return VALID_ROUTES.includes(raw) ? raw : 'home';
}
function route(opts){
  const raw = (location.hash || '').replace(/^#\/?/, '').split(/[?&]/)[0];
  const r = VALID_ROUTES.includes(raw) ? raw : 'home';
  if(!location.hash || !VALID_ROUTES.includes(raw)){
    try { history.replaceState(null, '', '#/home'); } catch(_){}
  }
  let any = false;
  document.querySelectorAll('.page-view').forEach(p => {
    const on = p.dataset.page === r; p.classList.toggle('active', on); if(on) any = true;
  });
  if(!any){ const home = document.querySelector('.page-view[data-page="home"]'); if(home) home.classList.add('active'); }
  document.querySelectorAll('[data-route]').forEach(a => a.classList.toggle('rt-active', a.dataset.route === r));
  document.title = (typeof ROUTE_TITLES !== 'undefined' && ROUTE_TITLES[r]) ? ROUTE_TITLES[r] : 'Cadence';
  const mm = document.getElementById('mobileMenu'); if(mm) mm.classList.remove('open');
  const mb = document.getElementById('menuBtn'); if(mb) mb.setAttribute('aria-expanded','false');
  if(!(opts && opts.noscroll) && typeof window.scrollTo === 'function'){ try { window.scrollTo(0, 0); } catch(_){} }
}
window.addEventListener('hashchange', () => route());
/* belt-and-suspenders: render the route now if the DOM is already parsed,
   and again on DOMContentLoaded — so the homepage is never blank on load */
if(document.readyState !== 'loading'){ route({ noscroll:true }); }
document.addEventListener('DOMContentLoaded', () => route({ noscroll:true }));
