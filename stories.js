/* Social Ace: extra stories.
   Loaded after index.html's main script, so kid(), sam(), ball and STORIES already exist.
   Step types: tell, feel, choose, lights (tap-through recipe), practise (say it out loud), done. */

const ava  = (m = 'happy', x = 450) => kid(x, '#e76f51', '#a0522d', m);
const leo  = (m = 'happy', x = 540) => kid(x, '#7a4fd1', '#e8b545', m);
const raj  = (m = 'happy', x = 470) => kid(x, '#e0533d', '#1c1c1c', m);
const mia  = (m = 'happy', x = 480) => kid(x, '#f2a541', '#5a3a22', m);
const ben  = (m = 'laugh', x = 480) => kid(x, '#3a7bd5', '#c98a3a', m);
const adult = (m = 'happy', x = 500) => kid(x, '#3c6e91', '#6b4a2b', m, 1.3);
const star = say => ({ type: 'done', mood: 'big', say: say + ' You earned a star!' });

STORIES.push(

/* ---------- Saying hi ---------- */
{
  id: 'grownup', cat: 'hi', pic: '🧑', title: 'When grown-ups ask', where: 'A visitor at home', place: 'home', extra: adult('happy'),
  steps: [
    { type: 'tell', mood: 'calm', say: 'Mum\'s friend comes to visit. She smiles and asks: Hello! How old are you?' },
    { type: 'tell', mood: 'wobbly', extra: adult('meh'), say: 'Finn looks at the floor and mumbles. The grown-up cannot hear him.' },
    { type: 'lights', mood: 'happy', say: 'Here is the answering recipe. Tap each one.', items: [
      { cls: 'step', pic: '👀', title: 'Look up', sub: 'At their eyebrows is fine' },
      { cls: 'step', pic: '🗣️', title: 'Answer clearly', sub: 'I\'m seven.' },
      { cls: 'step', pic: '❓', title: 'Super brave: ask one back', sub: 'What\'s your name?' }
    ]},
    { type: 'practise', mood: 'happy', words: 'I\'m seven.', say: 'Try it. Look up and say it clearly: I am seven.' },
    { type: 'tell', mood: 'big', extra: adult('laugh'), say: 'The grown-up says: Wow, seven! Thank you for telling me.' },
    star('Look up and answer clearly. Well done!')
  ]
},
{
  id: 'help', cat: 'hi', pic: '🙋', title: 'Asking for help', where: 'In the dinner hall', place: 'lunch', extra: adult('happy'),
  steps: [
    { type: 'tell', mood: 'wobbly', say: 'Oh no! Finn has dropped his yogurt. It is all over the floor. He does not know what to do.' },
    { type: 'choose', mood: 'wobbly', say: 'What could Finn do?', options: [
      { pic: '🙋', text: 'Go to a grown-up and ask for help', good: true, reply: 'Yes! Grown-ups at school are there to help.' },
      { pic: '🤫', text: 'Leave it and say nothing', reply: 'Someone might slip on it. Let us try asking for help.' },
      { pic: '😢', text: 'Cry and hide', reply: 'It is OK to feel upset. A grown-up can help fix it. Let us try asking.' }
    ]},
    { type: 'lights', mood: 'calm', say: 'Here is the asking for help recipe. Tap each one.', items: [
      { cls: 'step', pic: '🚶', title: 'Go to a grown-up', sub: 'Walk over, don\'t shout' },
      { cls: 'step', pic: '⏸️', title: 'Say excuse me', sub: 'Wait for them to look at you' },
      { cls: 'step', pic: '💬', title: 'Say what\'s wrong', sub: 'I dropped my yogurt' }
    ]},
    { type: 'practise', mood: 'happy', words: 'Excuse me, I need some help please.', say: 'Say it with Finn: Excuse me, I need some help please.' },
    { type: 'tell', mood: 'big', extra: adult('laugh'), say: 'Mrs Patel says: No problem! Let us get a cloth. Accidents happen.' },
    star('Asking for help is brave and clever.')
  ]
},

/* ---------- Joining in ---------- */
{
  id: 'group', cat: 'join', pic: '💬', title: 'Joining a chat', where: 'In the playground', place: 'park', extra: ava('laugh') + leo('happy'),
  steps: [
    { type: 'tell', mood: 'calm', say: 'Ava and Leo are chatting about a new film. Finn wants to join in.' },
    { type: 'choose', mood: 'wobbly', say: 'What could Finn do first?', options: [
      { pic: '👂', text: 'Stand nearby and listen', good: true, reply: 'Yes! Listening first helps Finn know what they are talking about.' },
      { pic: '📢', text: 'Shout: What are you doing?', reply: 'That might make them jump. Let us try a quieter way.' },
      { pic: '🫥', text: 'Wait far away and hope they notice', reply: 'They might not see Finn. Let us try getting closer.' }
    ]},
    { type: 'lights', mood: 'happy', say: 'Here is the joining in recipe. Tap each one.', items: [
      { cls: 'step', pic: '👂', title: 'Listen', sub: 'What are they talking about?' },
      { cls: 'step', pic: '⏸️', title: 'Wait for a gap', sub: 'When nobody is talking' },
      { cls: 'step', pic: '💬', title: 'Say something about it', sub: 'I saw that film too!' }
    ]},
    { type: 'practise', mood: 'happy', words: 'I saw that film too!', say: 'Finn waits for a gap. Then he says: I saw that film too! Can you say it?' },
    { type: 'tell', mood: 'big', extra: ava('laugh') + leo('laugh'), say: 'Leo says: Cool! What was your favourite bit? Finn is in the chat!' },
    star('Listen, wait, then join in. You did it!')
  ]
},
{
  id: 'party', cat: 'join', pic: '🎂', title: 'Birthday party', where: 'At a party hall', place: 'party', extra: raj('laugh', 430) + leo('happy', 540),
  steps: [
    { type: 'tell', mood: 'wobbly', say: 'Finn arrives at Raj\'s party. There are lots of children he does not know. It is noisy!' },
    { type: 'feel', say: 'How might Finn feel?',
      reply: 'Parties can feel big and noisy at first. That is OK. The wobbly feeling usually gets smaller after a few minutes.' },
    { type: 'lights', mood: 'calm', say: 'Here is the party plan for the first five minutes. Tap each one.', items: [
      { cls: 'step', pic: '🎁', title: 'Find the birthday child', sub: 'Happy birthday, Raj!' },
      { cls: 'step', pic: '🔍', title: 'Pick one thing to do', sub: 'Crafts, games or snacks' },
      { cls: 'step', pic: '🙋', title: 'Join one child there', sub: 'Can I have a go too?' }
    ]},
    { type: 'practise', mood: 'happy', words: 'Happy birthday, Raj!', say: 'Say it with Finn: Happy birthday, Raj!' },
    { type: 'choose', mood: 'happy', extra: leo('happy', 500), say: 'Finn sees a boy at the crafts table making a mask. What could Finn say?', options: [
      { pic: '🎭', text: 'Can I make one too?', good: true, reply: 'Perfect! Doing the same thing is an easy way to make a friend.' },
      { pic: '🫥', text: 'Stand behind him and say nothing', reply: 'The boy might not know Finn wants to join. Let us try saying something.' }
    ]},
    star('Finn had fun at the party.')
  ]
},
{
  id: 'club', cat: 'join', pic: '🥋', title: 'First day at a club', where: 'At judo', place: 'club', extra: adult('happy', 520),
  steps: [
    { type: 'tell', mood: 'wobbly', say: 'It is Finn\'s first day at judo. The coach says: Hello! What is your name?' },
    { type: 'choose', mood: 'wobbly', say: 'What could Finn say?', options: [
      { pic: '👀', text: 'Look up and say: I\'m Finn', good: true, reply: 'Yes! Now the coach knows your name.' },
      { pic: '🙈', text: 'Hide behind Mum', reply: 'That is OK for a moment. When you feel ready, try saying your name.' }
    ]},
    { type: 'practise', mood: 'happy', words: 'I\'m Finn.', say: 'Look up and say it clearly: I am Finn. Now try it with your own name.' },
    { type: 'tell', mood: 'calm', extra: leo('meh', 500), say: 'Finn is partners with Leo. Leo looks a bit shy too.' },
    { type: 'choose', mood: 'happy', extra: leo('meh', 500), say: 'What could Finn say to Leo?', options: [
      { pic: '👋', text: 'Hi, I\'m Finn. What\'s your name?', good: true, reply: 'Yes! Saying hi first helps you both feel less shy.' },
      { pic: '🤐', text: 'Say nothing', reply: 'Leo might feel shy too. Saying hi first helps you both.' }
    ]},
    { type: 'tell', mood: 'big', extra: leo('laugh', 500), say: 'Leo smiles: I\'m Leo! It\'s my first day too.' },
    star('New clubs are brave. Finn made a new friend.')
  ]
},

/* ---------- Reading faces ---------- */
{
  id: 'tooclose', cat: 'faces', pic: '📏', title: 'Too close', where: 'In the line', place: 'school', extra: ava('happy', 420),
  steps: [
    { type: 'tell', mood: 'big', say: 'Finn is excited to tell Ava about his weekend. He stands really close to her face.' },
    { type: 'choose', mood: 'happy', extra: ava('cross', 500), say: 'Ava steps back. What does that mean?', options: [
      { pic: '📏', text: 'Finn is too close', good: true, reply: 'Well spotted! When someone steps back, they need more space.' },
      { pic: '➡️', text: 'Ava wants Finn to come closer', reply: 'Look again. Stepping back means: give me more space please.' }
    ]},
    { type: 'lights', mood: 'calm', extra: ava('meh', 500), say: 'Here is the space check. Tap each one.', items: [
      { cls: 'step', pic: '💪', title: 'Arm\'s length', sub: 'Stretch your arm out. That is a good gap.' },
      { cls: 'step', pic: '🖐️', title: 'Hands to yourself', sub: 'Keep them by your side' },
      { cls: 'step', pic: '👣', title: 'Watch their feet', sub: 'Stepping back means: more space' }
    ]},
    { type: 'tell', mood: 'happy', extra: ava('laugh', 500), say: 'Finn steps back to arm\'s length. Ava smiles and listens to his story.' },
    star('An arm\'s length of space helps everyone feel comfy.')
  ]
},
{
  id: 'gap', cat: 'faces', pic: '⏸️', title: 'Waiting for a gap', where: 'In the classroom', place: 'school', extra: ava('laugh') + leo('happy'),
  steps: [
    { type: 'tell', mood: 'big', say: 'Ava is telling Leo about her new puppy. Finn has something exciting to say too!' },
    { type: 'choose', mood: 'wobbly', say: 'What could Finn do?', options: [
      { pic: '⏸️', text: 'Wait until Ava finishes', good: true, reply: 'Yes! Waiting shows Ava you are listening.' },
      { pic: '📢', text: 'Talk over Ava', reply: 'Ava might feel nobody is listening to her. Let us try waiting.' },
      { pic: '👉', text: 'Tap Ava lots of times', reply: 'Lots of tapping can feel annoying. Let us try waiting for a gap.' }
    ]},
    { type: 'lights', mood: 'calm', say: 'Here is the waiting trick. Tap each one.', items: [
      { cls: 'step', pic: '🤐', title: 'Lips closed', sub: 'Hold your idea in your head' },
      { cls: 'step', pic: '👂', title: 'Listen', sub: 'What is Ava saying?' },
      { cls: 'step', pic: '⏸️', title: 'Spot the gap', sub: 'When she stops, it is your turn' }
    ]},
    { type: 'choose', mood: 'happy', say: 'Ava stops talking. What could Finn say?', options: [
      { pic: '🐶', text: 'Cool puppy! I\'ve got news too...', good: true, reply: 'Brilliant! Saying something about her news first is really kind.' },
      { pic: '🙋', text: 'Anyway, MY news is...', reply: 'That skips over Ava\'s news. Try saying something about the puppy first.' }
    ]},
    star('Wait for the gap, then talk. Great listening!')
  ]
},
{
  id: 'favourite', cat: 'faces', pic: '🦖', title: 'My favourite thing', where: 'At break', place: 'park', extra: leo('happy', 480),
  steps: [
    { type: 'tell', mood: 'big', say: 'Finn loves dinosaurs. He tells Leo about T. rex. And Stegosaurus. And Triceratops. And...' },
    { type: 'tell', mood: 'big', extra: leo('meh', 480), say: 'Leo is looking around the playground. He says: mmm.' },
    { type: 'choose', mood: 'happy', extra: leo('meh', 480), say: 'Is Leo still interested?', options: [
      { pic: '🥱', text: 'No. He\'s looking away and only saying mmm', good: true, reply: 'Well spotted! Looking away can mean: I have heard enough for now.' },
      { pic: '🦖', text: 'Yes! Tell him more', reply: 'Look again. Looking away and saying mmm can mean Leo is bored now.' }
    ]},
    { type: 'lights', mood: 'calm', extra: leo('meh', 480), say: 'Here is how to share the talking. Tap each one.', items: [
      { cls: 'step', pic: '☝️', title: 'Say a little', sub: 'One or two cool facts' },
      { cls: 'step', pic: '👀', title: 'Check their face', sub: 'Still interested?' },
      { cls: 'step', pic: '❓', title: 'Ask them', sub: 'What do you like?' }
    ]},
    { type: 'practise', mood: 'happy', words: 'What do you like?', say: 'Say it with Finn: What do you like?' },
    { type: 'tell', mood: 'big', extra: leo('laugh', 480), say: 'Leo says: I like space! Finn learns about black holes. Now they both had a turn.' },
    star('Sharing the talking makes chats fun for both.')
  ]
},
{
  id: 'losing', cat: 'faces', pic: '🎲', title: 'Losing a game', where: 'Playing a board game', place: 'home', extra: ava('laugh', 480),
  steps: [
    { type: 'tell', mood: 'happy', say: 'Finn and Ava are playing a board game. Ava wins!' },
    { type: 'tell', mood: 'cross', say: 'Finn feels a big, hot, cross feeling. He wants to throw the dice!' },
    { type: 'choose', mood: 'cross', say: 'Do you ever feel like that when you lose?', options: [
      { pic: '😤', text: 'Yes, lots', good: true, reply: 'Lots of people feel cross when they lose. The feeling is OK. What we do with it is what matters.' },
      { pic: '😐', text: 'Sometimes', good: true, reply: 'Lots of people do. The feeling is OK. What we do with it is what matters.' },
      { pic: '🙂', text: 'Not really', good: true, reply: 'Great! These tricks still help when a feeling gets big.' }
    ]},
    { type: 'lights', mood: 'wobbly', say: 'Here is the cool down. Tap each one.', items: [
      { cls: 'step', pic: '🫁', title: 'Big breath', sub: 'In through your nose, out slowly' },
      { cls: 'step', pic: '✋', title: 'Hands still', sub: 'Put the dice down' },
      { cls: 'step', pic: '🤝', title: 'Say good game', sub: 'Good game, Ava!' }
    ]},
    { type: 'practise', mood: 'happy', words: 'Good game! Can we play again?', say: 'Say it with Finn: Good game! Can we play again?' },
    { type: 'tell', mood: 'big', say: 'Ava smiles: Yes! Let\'s play again! People love playing with a good loser.' },
    star('Breathe, hands still, good game. That is a winner move!')
  ]
},
{
  id: 'turns', cat: 'faces', pic: '🔁', title: 'Taking turns', where: 'On the swings', place: 'park', extra: ava('laugh', 480),
  steps: [
    { type: 'tell', mood: 'wobbly', say: 'Ava is on the swing. Finn really, really wants a go. Waiting is hard!' },
    { type: 'choose', mood: 'wobbly', say: 'What could Finn do?', options: [
      { pic: '🙂', text: 'Ask: Can I have a go after you?', good: true, reply: 'Yes! Asking is the friendly way.' },
      { pic: '✊', text: 'Pull the swing', reply: 'That could hurt Ava. Let us try asking.' },
      { pic: '📢', text: 'Shout: My turn!', reply: 'Shouting can upset people. Let us try asking.' }
    ]},
    { type: 'practise', mood: 'happy', words: 'Can I have a go after you?', say: 'Say it with Finn: Can I have a go after you?' },
    { type: 'lights', mood: 'calm', say: 'Here are some waiting tricks. Tap each one.', items: [
      { cls: 'step', pic: '🔢', title: 'Count to 20', sub: 'Slowly, in your head' },
      { cls: 'step', pic: '📣', title: 'Cheer them on', sub: 'Wow, you\'re going high!' },
      { cls: 'step', pic: '🙏', title: 'Say thanks', sub: 'When it is your turn' }
    ]},
    { type: 'tell', mood: 'big', extra: ava('happy', 520), say: 'Ava hops off. Your turn, Finn! Finn says: Thanks, Ava!' },
    star('Waiting is hard, and you did it.')
  ]
},
{
  id: 'sad', cat: 'faces', pic: '💙', title: 'Spotting someone sad', where: 'In the playground', place: 'park', extra: leo('sad', 500),
  steps: [
    { type: 'tell', mood: 'calm', say: 'At break, Finn sees Leo sitting on his own. Leo\'s head is down.' },
    { type: 'choose', mood: 'calm', say: 'How do you think Leo feels?', options: [
      { pic: '😢', text: 'Sad or lonely', good: true, reply: 'Yes! Head down and sitting alone can mean sad.' },
      { pic: '😀', text: 'Happy', reply: 'Look at his face. His head is down and he looks sad.' }
    ]},
    { type: 'choose', mood: 'happy', say: 'What could Finn do?', options: [
      { pic: '💙', text: 'Go over and ask: Are you OK?', good: true, reply: 'Yes! That is really kind.' },
      { pic: '🙈', text: 'Walk past', reply: 'That is OK if you feel shy, but Leo might feel better if someone asks. Let us try.' },
      { pic: '😆', text: 'Laugh', reply: 'That might make Leo feel worse. Let us try something kind.' }
    ]},
    { type: 'practise', mood: 'happy', words: 'Are you OK? Do you want to play?', say: 'Say it with Finn: Are you OK? Do you want to play?' },
    { type: 'tell', mood: 'big', extra: leo('laugh', 500), say: 'Leo looks up and smiles. Yes please! Finn made Leo\'s day better.' },
    star('Noticing when someone is sad is a superpower.')
  ]
},

/* ---------- Keeping friends ---------- */
{
  id: 'askback', cat: 'friends', pic: '🏓', title: 'Asking a question back', where: 'At lunch', place: 'lunch', extra: sam('happy'),
  steps: [
    { type: 'tell', mood: 'happy', say: 'Sam asks: What did you do at the weekend? Finn says: I went swimming.' },
    { type: 'tell', mood: 'calm', extra: sam('meh'), say: 'Then it goes quiet. Sam looks at his lunch.' },
    { type: 'choose', mood: 'wobbly', extra: sam('meh'), say: 'How could Finn keep the chat going?', options: [
      { pic: '🔁', text: 'Ask: What did you do?', good: true, reply: 'Yes! Asking back is like hitting the ball back in ping pong.' },
      { pic: '🤐', text: 'Say nothing', reply: 'Chats need both people asking. Let us try asking Sam something.' }
    ]},
    { type: 'lights', mood: 'happy', say: 'Here is ping pong chat. Tap each one.', items: [
      { cls: 'step', pic: '🏓', title: 'Answer', sub: 'I went swimming' },
      { cls: 'step', pic: '🔁', title: 'Ask back', sub: 'What did you do?' },
      { cls: 'step', pic: '👂', title: 'Listen', sub: 'To their answer' }
    ]},
    { type: 'practise', mood: 'happy', words: 'What did you do at the weekend?', say: 'Say it with Finn: What did you do at the weekend?' },
    { type: 'tell', mood: 'big', extra: sam('laugh'), say: 'Sam says: I went to the zoo! I saw a gorilla! Now they are both chatting.' },
    star('Answer, ask back, listen. Great chatting!')
  ]
},
{
  id: 'remember', cat: 'friends', pic: '🧠', title: 'Remembering things', where: 'Before school', place: 'school', extra: ava('happy', 480),
  steps: [
    { type: 'tell', mood: 'calm', say: 'Yesterday, Ava told Finn she was getting a new puppy.' },
    { type: 'choose', mood: 'happy', say: 'Today, Finn sees Ava. What could he say?', options: [
      { pic: '🐶', text: 'Hi Ava! Did you get your puppy?', good: true, reply: 'Yes! Remembering shows Ava you were listening. That makes people feel special.' },
      { pic: '👋', text: 'Hi Ava!', reply: 'Hi is great! Can Finn add something about the puppy?' }
    ]},
    { type: 'tell', mood: 'big', extra: ava('laugh', 480), say: 'Ava\'s face lights up. Yes! He is called Biscuit!' },
    { type: 'lights', mood: 'happy', extra: ava('laugh', 480), say: 'Here is the friend memory trick. Tap each one.', items: [
      { cls: 'step', pic: '🧠', title: 'Remember one thing', sub: 'Ava has a new puppy' },
      { cls: 'step', pic: '💬', title: 'Ask about it next time', sub: 'Did you get your puppy?' },
      { cls: 'step', pic: '👂', title: 'Listen', sub: 'To the answer' }
    ]},
    star('Remembering things makes friends feel special.')
  ]
},
{
  id: 'invite', cat: 'friends', pic: '🏠', title: 'Inviting a friend', where: 'At home time', place: 'school', extra: leo('happy', 480),
  steps: [
    { type: 'tell', mood: 'happy', say: 'Finn and Leo had fun building a den at break. Finn wants Leo to come and play at his house.' },
    { type: 'choose', mood: 'wobbly', say: 'What could Finn do?', options: [
      { pic: '🙋', text: 'Ask Leo, then ask Mum to talk to Leo\'s grown-up', good: true, reply: 'Yes! The grown-ups can sort out the day and time.' },
      { pic: '🤞', text: 'Hope Leo asks him', reply: 'Leo might be shy too. Let us try asking.' }
    ]},
    { type: 'practise', mood: 'happy', words: 'Do you want to come to my house to play?', say: 'Say it with Finn: Do you want to come to my house to play?' },
    { type: 'choose', mood: 'wobbly', extra: leo('meh', 480), say: 'Leo says: I can\'t this week. What could Finn say?', options: [
      { pic: '👍', text: 'OK! Maybe another time?', good: true, reply: 'Yes! Can\'t this week does not mean no forever.' },
      { pic: '😒', text: 'Fine, I don\'t care', reply: 'That might hurt Leo\'s feelings. Let us try a kind answer.' }
    ]},
    { type: 'tell', mood: 'big', extra: leo('laugh', 480), say: 'Leo says: Yes, next week! The grown-ups make a plan.' },
    star('Inviting someone is a big, brave step.')
  ]
},
{
  id: 'choosing', cat: 'friends', pic: '🤝', title: 'Taking turns choosing', where: 'Playing at home', place: 'home', extra: raj('happy', 480),
  steps: [
    { type: 'tell', mood: 'calm', say: 'Raj is at Finn\'s house. Finn wants to play Lego. Raj wants to play hide and seek.' },
    { type: 'choose', mood: 'wobbly', say: 'What could Finn say?', options: [
      { pic: '🤝', text: 'Let\'s play your game first, then mine', good: true, reply: 'Yes! Taking turns is fair, and Raj feels welcome.' },
      { pic: '🙅', text: 'No. My house, my game', reply: 'Raj might feel he is not welcome. Let us try sharing.' },
      { pic: '😾', text: 'Sulk until Raj gives in', reply: 'Sulking can spoil the playdate. Let us try another way.' }
    ]},
    { type: 'lights', mood: 'happy', say: 'Here is the fair play plan. Tap each one.', items: [
      { cls: 'step', pic: '👂', title: 'Listen to their idea', sub: 'What do they want to play?' },
      { cls: 'step', pic: '🔁', title: 'Take turns', sub: 'Yours first, then mine' },
      { cls: 'step', pic: '⏱️', title: 'Swap after a while', sub: 'A timer can help' }
    ]},
    { type: 'practise', mood: 'happy', words: 'Let\'s play your game first, then mine.', say: 'Say it with Finn: Let us play your game first, then mine.' },
    { type: 'tell', mood: 'big', extra: raj('laugh', 480), say: 'They play hide and seek, then Lego. Raj says: Best playdate ever!' },
    star('Taking turns makes playdates fun for both.')
  ]
},

/* ---------- Tricky moments ---------- */
{
  id: 'leftout', cat: 'tricky', pic: '🚪', title: 'Being left out', where: 'At break', place: 'park', extra: ava('meh') + leo('meh'),
  steps: [
    { type: 'tell', mood: 'wobbly', say: 'Finn asks Ava and Leo: Can I play? Leo says: No, it\'s only for two.' },
    { type: 'tell', mood: 'sad', say: 'Finn feels sad and a bit cross. That is OK. Being left out hurts.' },
    { type: 'choose', mood: 'sad', say: 'What could Finn do?', options: [
      { pic: '🔍', text: 'Find someone else to play with', good: true, reply: 'Yes! There are lots of other children to play with.' },
      { pic: '🧑‍🏫', text: 'Tell a grown-up if it keeps happening', good: true, reply: 'Yes. Grown-ups can help, especially if it happens a lot.' },
      { pic: '✊', text: 'Push Leo', reply: 'That would hurt Leo and get Finn into trouble. Let us try another way.' }
    ]},
    { type: 'lights', mood: 'calm', say: 'Here is Plan B. Tap each one.', items: [
      { cls: 'step', pic: '👀', title: 'Look around', sub: 'Who else is playing?' },
      { cls: 'step', pic: '🪑', title: 'Try somewhere new', sub: 'The buddy bench or a club' },
      { cls: 'step', pic: '🧑‍🏫', title: 'Tell a grown-up', sub: 'If it keeps happening' }
    ]},
    { type: 'tell', mood: 'big', extra: mia('laugh'), say: 'Finn sees Mia drawing with chalk. He asks: Can I draw too? Mia says: Yes!' },
    star('Finn did not give up. That is brave.')
  ]
},
{
  id: 'teased', cat: 'tricky', pic: '🛡️', title: 'When someone teases', where: 'In the playground', place: 'park', extra: ben('laugh'),
  steps: [
    { type: 'tell', mood: 'wobbly', say: 'Ben laughs at Finn and says: You\'re rubbish at football!' },
    { type: 'choose', mood: 'sad', say: 'What could Finn do?', options: [
      { pic: '😐', text: 'Say calmly: I like other things. Then walk away', good: true, reply: 'Yes! Staying calm means the teasing does not work.' },
      { pic: '✊', text: 'Shout and push Ben', reply: 'That would make things worse, and Finn could get into trouble. Let us try another way.' },
      { pic: '😢', text: 'Believe him and feel rubbish', reply: 'That is a hurt feeling. Ben\'s words are not true. Finn is good at lots of things. Let us try another way.' }
    ]},
    { type: 'lights', mood: 'calm', say: 'Here is the teasing toolkit. Tap each one.', items: [
      { cls: 'step', pic: '🫁', title: 'Stay calm', sub: 'Big breath' },
      { cls: 'step', pic: '🗣️', title: 'Say it, then go', sub: 'I like other things. Bye!' },
      { cls: 'step', pic: '🧑‍🏫', title: 'Tell a grown-up', sub: 'Especially if it keeps happening' }
    ]},
    { type: 'practise', mood: 'happy', words: 'I like other things. Bye!', say: 'Say it calmly with Finn: I like other things. Bye!' },
    { type: 'tell', mood: 'happy', extra: leo('laugh'), say: 'Finn walks away and plays with Leo. He tells his teacher at the end of break.' },
    star('Calm words and walking away. Really brave!')
  ]
},
{
  id: 'sorry', cat: 'tricky', pic: '🩹', title: 'Saying sorry', where: 'Running in the playground', place: 'park', extra: ava('happy'),
  steps: [
    { type: 'tell', mood: 'big', say: 'Finn is running fast in the playground. Bump! He knocks Ava over by accident.' },
    { type: 'choose', mood: 'wobbly', extra: ava('sad'), say: 'Ava is crying. What should Finn do?', options: [
      { pic: '🩹', text: 'Stop, check she\'s OK and say sorry', good: true, reply: 'Yes! That shows Ava it was an accident and you care.' },
      { pic: '🏃', text: 'Keep running', reply: 'Ava might think Finn did it on purpose. Let us try another way.' },
      { pic: '🙅', text: 'Say: It wasn\'t my fault!', reply: 'It was an accident, but Ava is still hurt. Saying sorry helps.' }
    ]},
    { type: 'lights', mood: 'calm', extra: ava('sad'), say: 'Here is the sorry recipe. Tap each one.', items: [
      { cls: 'step', pic: '✋', title: 'Stop', sub: 'Come back to them' },
      { cls: 'step', pic: '💬', title: 'Say sorry', sub: 'Sorry, Ava! It was an accident.' },
      { cls: 'step', pic: '🤲', title: 'Help', sub: 'Are you OK? Shall I get a grown-up?' }
    ]},
    { type: 'practise', mood: 'happy', extra: ava('sad'), words: 'Sorry, Ava! Are you OK?', say: 'Say it with Finn: Sorry, Ava! Are you OK?' },
    { type: 'tell', mood: 'happy', extra: ava('happy'), say: 'Ava stops crying. She says: It\'s OK. Finn helps her up.' },
    star('Saying sorry fixes things. Well done!')
  ]
}

);
