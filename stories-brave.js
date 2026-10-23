/* Social Ace: confidence and bullying stories.
   Loaded after stories.js, so ava(), leo(), ben(), adult(), star() already exist. */

STORIES.push(

/* ---------- Feeling brave ---------- */
{
  id: 'standtall', cat: 'brave', pic: '🦸', title: 'Standing tall', where: 'Going into class', place: 'school', extra: adult('happy', 500),
  steps: [
    { type: 'tell', mood: 'wobbly', say: 'Finn is going into class. His head is down, his shoulders are droopy, and his voice is very quiet.' },
    { type: 'choose', mood: 'calm', react: 'finn', say: 'Which way of standing looks brave?', options: [
      { pic: '🦸', text: 'Head up, shoulders back, a smile', good: true, reply: 'Yes! Standing tall makes you look brave. And it can help you feel brave too.' },
      { pic: '🫣', text: 'Head down, looking at the floor', reply: 'That\'s how Finn stands when he feels wobbly. Let\'s try standing tall.' }
    ]},
    { type: 'lights', mood: 'happy', say: 'Here is the brave body recipe. Stand up and try it! Tap each one.', items: [
      { cls: 'step', pic: '⬆️', title: 'Head up', sub: 'Look forward, not at the floor' },
      { cls: 'step', pic: '💪', title: 'Shoulders back', sub: 'Like a superhero' },
      { cls: 'step', pic: '🗣️', title: 'Strong voice', sub: 'Not too quiet, not shouting' }
    ]},
    { type: 'practise', mood: 'big', words: 'Good morning, Mrs Hill!', say: 'Stand tall and use your strong voice: Good morning, Mrs Hill!' },
    { type: 'tell', mood: 'big', extra: adult('laugh', 500), say: 'Mrs Hill smiles. Good morning, Finn! What a great strong voice!' },
    star('Standing tall is a brave superpower.')
  ]
},
{
  id: 'thoughts', cat: 'brave', pic: '💭', title: 'Wobbly thoughts', where: 'Before a new club', place: 'club', extra: '',
  steps: [
    { type: 'tell', mood: 'wobbly', say: 'Finn is about to go into drama club for the first time. He thinks: Nobody will like me. I\'ll do it all wrong.' },
    { type: 'choose', mood: 'wobbly', react: 'finn', say: 'Do you ever have thoughts like that?', options: [
      { pic: '🙋', text: 'Yes, lots', good: true, finn: 'happy', reply: 'Lots of people do. Here\'s a secret: wobbly thoughts are often not true.' },
      { pic: '🤏', text: 'Sometimes', good: true, finn: 'happy', reply: 'Lots of people do. Here\'s a secret: wobbly thoughts are often not true.' },
      { pic: '🙂', text: 'Not really', good: true, finn: 'happy', reply: 'Great! This trick still helps if a wobbly thought ever pops up.' }
    ]},
    { type: 'choose', mood: 'wobbly', react: 'finn', say: 'Finn can swap his wobbly thought for a brave one. Which thought is brave?', options: [
      { pic: '💪', text: 'I can try. Trying is brave.', good: true, reply: 'Yes! That\'s a brave thought. It helps Finn feel stronger.' },
      { pic: '😰', text: 'Everyone will laugh at me.', reply: 'That\'s another wobbly thought. Let\'s find a brave one.' },
      { pic: '🏠', text: 'I should just go home.', reply: 'That\'s a wobbly thought too. Let\'s find a brave one.' }
    ]},
    { type: 'lights', mood: 'happy', say: 'Here is the thought swap. Tap each one.', items: [
      { cls: 'step', pic: '🛑', title: 'Notice it', sub: 'That\'s a wobbly thought' },
      { cls: 'step', pic: '🔍', title: 'Check it', sub: 'Is it really true?' },
      { cls: 'step', pic: '💪', title: 'Swap it', sub: 'I can try. Trying is brave.' }
    ]},
    { type: 'practise', mood: 'big', words: 'I can try. Trying is brave.', say: 'Say the brave thought with Finn: I can try. Trying is brave.' },
    { type: 'tell', mood: 'big', extra: leo('laugh', 480), say: 'Finn goes in. A boy says: Hi! Want to be in my group? The wobbly thought was wrong!' },
    star('You can swap wobbly thoughts for brave ones.')
  ]
},
{
  id: 'mistakes', cat: 'brave', pic: '✏️', title: 'Making mistakes', where: 'In class', place: 'school', extra: ava('laugh', 450) + leo('laugh', 545),
  steps: [
    { type: 'tell', mood: 'happy', say: 'Mrs Hill asks a question. Finn puts his hand up and answers. Oops, it\'s wrong! Some children giggle.' },
    { type: 'tell', mood: 'sad', say: 'Finn\'s face goes hot. He wants to hide under the table.' },
    { type: 'choose', mood: 'sad', react: 'finn', say: 'What could Finn think?', options: [
      { pic: '🧠', text: 'Everyone makes mistakes. That\'s how we learn.', good: true, reply: 'Yes! Even grown-ups make mistakes every day.' },
      { pic: '😞', text: 'I\'m stupid.', reply: 'That\'s a wobbly thought, and it isn\'t true. Let\'s find a kinder one.' },
      { pic: '🙅', text: 'I\'ll never put my hand up again.', reply: 'Then Finn would miss out on learning. Let\'s find a braver thought.' }
    ]},
    { type: 'choose', mood: 'happy', say: 'What could Finn say?', options: [
      { pic: '😅', text: 'Oops! I\'ll try again.', good: true, face: 'happy', reply: 'Perfect! Laughing it off and trying again is really confident.' },
      { pic: '😡', text: 'Shout: Stop laughing!', face: 'meh', finn: 'cross', reply: 'That might make a bigger fuss. Let\'s try a calm answer.' }
    ]},
    { type: 'practise', mood: 'big', words: 'Oops! I\'ll try again.', say: 'Say it with a smile: Oops! I\'ll try again.' },
    { type: 'tell', mood: 'big', extra: adult('laugh', 500), say: 'Mrs Hill says: Great try, Finn! Mistakes help our brains grow.' },
    star('Mistakes mean you\'re learning.')
  ]
},
{
  id: 'goodat', cat: 'brave', pic: '🌟', title: 'Things I\'m good at', where: 'At home', place: 'home', extra: adult('happy', 500),
  steps: [
    { type: 'tell', mood: 'sad', say: 'Finn is feeling a bit down today. Mum says: Let\'s think about the things you\'re good at.' },
    { type: 'choose', mood: 'happy', say: 'What are YOU good at? Pick one.', options: [
      { pic: '🧱', text: 'Building Lego', set: 'building Lego', key: 'good', good: true, reply: 'Brilliant! Building takes lots of clever thinking.' },
      { pic: '💙', text: 'Being kind', set: 'being kind', key: 'good', good: true, reply: 'Brilliant! Kindness is one of the best things to be good at.' },
      { pic: '🎨', text: 'Drawing', set: 'drawing', key: 'good', good: true, reply: 'Brilliant! Drawing is a great talent.' },
      { pic: '🦖', text: 'Knowing facts', set: 'knowing facts', key: 'good', good: true, reply: 'Brilliant! Knowing lots of facts is amazing.' },
      { pic: '🏃', text: 'Running fast', set: 'running fast', key: 'good', good: true, reply: 'Brilliant! Zoom!' }
    ]},
    { type: 'practise', mood: 'big', words: 'I\'m good at {good}!', say: 'Stand tall and say it proudly: I\'m good at {good}!' },
    { type: 'lights', mood: 'big', say: 'Here are some confidence boosters. Tap each one.', items: [
      { cls: 'step', pic: '🌟', title: 'Remember', sub: 'I\'m good at {good}' },
      { cls: 'step', pic: '💬', title: 'Be kind to yourself', sub: 'I can do hard things' },
      { cls: 'step', pic: '🤗', title: 'Think of your people', sub: 'Who loves and likes me?' }
    ]},
    { type: 'tell', mood: 'big', extra: adult('laugh', 500), say: 'Everyone is good at different things. When you feel wobbly, remember what you\'re good at.' },
    star('You\'re good at lots of things.')
  ]
},

/* ---------- Dealing with bullies ---------- */
{
  id: 'names', cat: 'bully', pic: '🗯️', title: 'Name calling', where: 'At break', place: 'park', extra: ben('laugh'),
  steps: [
    { type: 'tell', mood: 'sad', say: 'Ben keeps calling Finn names. Every day he says: Baby Finn!' },
    { type: 'feel', say: 'How do you think Finn feels?',
      reply: 'Being called names hurts. It is not Finn\'s fault, and he doesn\'t have to put up with it.' },
    { type: 'choose', mood: 'sad', say: 'What could Finn do?', options: [
      { pic: '💪', text: 'Stand tall and say: Stop. I don\'t like that.', good: true, face: 'meh', finn: 'big', reply: 'Yes! A strong, calm voice shows Ben that Finn isn\'t scared.' },
      { pic: '🗯️', text: 'Call Ben a name back', face: 'laugh', finn: 'cross', reply: 'That gives Ben what he wants, and Finn could get into trouble too. Let\'s try another way.' },
      { pic: '🤐', text: 'Keep it a secret', face: 'laugh', finn: 'sad', reply: 'Secrets like this feel heavy. Let\'s find a better way.' }
    ]},
    { type: 'lights', mood: 'big', say: 'Here is the stop it toolkit. Tap each one.', items: [
      { cls: 'step', pic: '🦸', title: 'Stand tall', sub: 'Head up, shoulders back' },
      { cls: 'step', pic: '🗣️', title: 'Strong voice', sub: 'Stop. I don\'t like that.' },
      { cls: 'step', pic: '🚶', title: 'Walk away and tell', sub: 'Go to friends or a grown-up' }
    ]},
    { type: 'practise', mood: 'big', words: 'Stop. I don\'t like that.', say: 'Stand tall and say it in your strong voice: Stop. I don\'t like that.' },
    { type: 'tell', mood: 'happy', extra: leo('laugh', 470), say: 'Finn walks over to Leo. Then he tells Mrs Hill. She says: Thank you for telling me. I will help.' },
    star('Strong voice, walk away, tell. Brilliant!')
  ]
},
{
  id: 'telling', cat: 'bully', pic: '🧑‍🏫', title: 'Telling a grown-up', where: 'At school', place: 'school', extra: adult('happy', 500),
  steps: [
    { type: 'tell', mood: 'wobbly', say: 'Ben has been mean to Finn all week. Finn worries: If I tell, is that telling tales?' },
    { type: 'choose', mood: 'wobbly', react: 'finn', say: 'Is it OK to tell a grown-up about bullying?', options: [
      { pic: '✅', text: 'Yes! Telling to stay safe is brave', good: true, reply: 'Yes! Telling tales is trying to get someone into trouble. Telling about bullying is asking for help. That is always OK.' },
      { pic: '❌', text: 'No, it\'s telling tales', reply: 'It isn\'t! When someone keeps being unkind to you, telling a grown-up is the right thing to do.' }
    ]},
    { type: 'choose', mood: 'happy', say: 'Who could Finn tell?', options: [
      { pic: '🧑‍🏫', text: 'His teacher', good: true, reply: 'Yes! And if one grown-up doesn\'t help, tell another one.' },
      { pic: '🏠', text: 'Mum or Dad', good: true, reply: 'Yes! And if one grown-up doesn\'t help, tell another one.' },
      { pic: '🦺', text: 'A dinner lady or playground helper', good: true, reply: 'Yes! And if one grown-up doesn\'t help, tell another one.' }
    ]},
    { type: 'lights', mood: 'happy', say: 'Here is how to tell. Tap each one.', items: [
      { cls: 'step', pic: '🧑‍🏫', title: 'Find a grown-up', sub: 'One you trust' },
      { cls: 'step', pic: '💬', title: 'Say who and what', sub: 'Ben keeps calling me names' },
      { cls: 'step', pic: '🔁', title: 'Keep telling', sub: 'If it doesn\'t stop, tell again' }
    ]},
    { type: 'practise', mood: 'big', words: 'Mrs Hill, Ben keeps being unkind to me. Can you help?', say: 'Say it with Finn: Mrs Hill, Ben keeps being unkind to me. Can you help?' },
    { type: 'tell', mood: 'big', extra: adult('laugh', 500), say: 'Mrs Hill says: Thank you for telling me, Finn. That was really brave. I\'ll sort it out.' },
    star('Telling a grown-up is brave and smart.')
  ]
},
{
  id: 'pushed', cat: 'bully', pic: '✋', title: 'If someone pushes', where: 'In the line', place: 'school', extra: ben('cross'),
  steps: [
    { type: 'tell', mood: 'wobbly', say: 'In the line, Ben pushes Finn hard. Finn nearly falls over!' },
    { type: 'choose', mood: 'wobbly', say: 'What should Finn do?', options: [
      { pic: '✋', text: 'Say STOP loudly, move away and tell a grown-up', good: true, face: 'meh', finn: 'big', reply: 'Yes! Hurting is never OK, so tell a grown-up straight away.' },
      { pic: '👊', text: 'Push Ben back harder', face: 'cross', finn: 'cross', reply: 'Then Finn could get hurt or get into trouble too. Let\'s try another way.' },
      { pic: '😶', text: 'Say nothing and stay next to Ben', face: 'laugh', finn: 'sad', reply: 'Finn might get pushed again. Let\'s keep safe.' }
    ]},
    { type: 'lights', mood: 'big', say: 'Here is the keep safe plan. Tap each one.', items: [
      { cls: 'step', pic: '✋', title: 'Say STOP', sub: 'Loud and clear' },
      { cls: 'step', pic: '🚶', title: 'Move away', sub: 'Go somewhere safe' },
      { cls: 'step', pic: '🧑‍🏫', title: 'Tell straight away', sub: 'Hurting is never OK' }
    ]},
    { type: 'practise', mood: 'big', words: 'Stop! Don\'t push me!', say: 'Use your loud, strong voice: Stop! Don\'t push me!' },
    { type: 'tell', mood: 'happy', extra: adult('happy', 500), say: 'The teacher says: Well done for telling me straight away, Finn. I\'ll talk to Ben.' },
    star('Stop, move away, tell. You know how to keep safe.')
  ]
},
{
  id: 'shrug', cat: 'bully', pic: '🤷', title: 'Shrug it off', where: 'At break', place: 'park', extra: ben('laugh'),
  steps: [
    { type: 'tell', mood: 'calm', say: 'Ben says: Your trainers are rubbish! He wants Finn to get upset.' },
    { type: 'choose', mood: 'calm', say: 'What could Finn say?', options: [
      { pic: '🤷', text: 'Shrug and say: OK! I like them.', good: true, face: 'meh', finn: 'happy', reply: 'Perfect! A calm, short answer takes the fun out of it for Ben.' },
      { pic: '😢', text: 'Get really upset', face: 'laugh', finn: 'sad', reply: 'That\'s what Ben wanted. Let\'s try a calm answer.' },
      { pic: '😡', text: 'Shout something mean back', face: 'laugh', finn: 'cross', reply: 'Ben is getting a big reaction. Let\'s try a calm answer.' }
    ]},
    { type: 'lights', mood: 'happy', say: 'Here are some calm comebacks. Tap each one.', items: [
      { cls: 'step', pic: '🤷', title: 'OK!', sub: 'Then walk away' },
      { cls: 'step', pic: '😐', title: 'That\'s your opinion.', sub: 'Calm and bored' },
      { cls: 'step', pic: '🙂', title: 'I like them.', sub: 'Proud of your stuff' }
    ]},
    { type: 'practise', mood: 'happy', words: 'OK! I like them.', say: 'Say it calmly, with a shrug: OK! I like them.' },
    { type: 'tell', mood: 'big', extra: ben('meh'), say: 'Ben shrugs and walks off. It wasn\'t fun for him when Finn stayed calm. If he keeps doing it, Finn will tell a grown-up.' },
    star('Calm, short answers are a teasing shield.')
  ]
},
{
  id: 'upstander', cat: 'bully', pic: '🤝', title: 'Helping a friend', where: 'In the playground', place: 'park', extra: leo('sad', 440) + ben('laugh', 545),
  steps: [
    { type: 'tell', mood: 'calm', say: 'Ben is laughing at Leo and has taken his hat. Leo looks upset.' },
    { type: 'choose', mood: 'wobbly', react: 'finn', say: 'What could Finn do?', options: [
      { pic: '🤝', text: 'Stand next to Leo and say: Come and play with us', good: true, reply: 'Yes! Standing with Leo shows he isn\'t alone.' },
      { pic: '🧑‍🏫', text: 'Tell a grown-up', good: true, reply: 'Yes! Telling a grown-up helps Leo stay safe.' },
      { pic: '😆', text: 'Join in laughing', finn: 'wobbly', reply: 'That would make Leo feel even worse. Let\'s try something kind.' },
      { pic: '🚶', text: 'Walk away', finn: 'wobbly', reply: 'Leo might feel all alone. Let\'s try helping.' }
    ]},
    { type: 'practise', mood: 'big', words: 'Come and play with us, Leo.', say: 'Say it in a kind, strong voice: Come and play with us, Leo.' },
    { type: 'tell', mood: 'big', extra: leo('laugh', 440) + ben('meh', 545), say: 'Leo smiles. Ben gives the hat back and walks off. Finn tells a teacher, just in case.' },
    star('Standing up for a friend is very brave.')
  ]
}

);
