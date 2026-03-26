import abbuPhoto from '../Abbu.jpeg'
import abidPhoto from '../Abid.jpeg'
import alfazPhoto from '../Alfaz.jpeg'
import ammiPhoto from '../Ammi.jpeg'
import haiderPhoto from '../Haider.jpeg'
import rashidaPhoto from '../Rashida.jpeg'
import ridaPhoto from '../Rida.jpeg'
import roshanPhoto from '../Roshan.jpeg'
import sadikPhoto from '../Sadik.jpeg'

export type NavItem = {
  label: string
  to: string
}

export type HouseholdFact = {
  value: string
  label: string
}

export type StoryChapter = {
  eyebrow: string
  title: string
  description: string
  to: string
}

export type CartoonStory = {
  name: string
  title: string
  hook: string
  story: string
  scene: string
  palette: string
  accent: string
  frameLabel: string
  imageSrc: string
  imageAlt: string
}

export type FamilyGroup = {
  title: string
  summary: string
  names: string[]
}

export type FamilyMember = {
  name: string
  age: number
  role: string
  tagline: string
  summary: string
  chapter: string
  imageSrc: string
  imageAlt: string
}

export type DailyMoment = {
  time: string
  title: string
  description: string
  details: string[]
}

export type ValueCard = {
  title: string
  description: string
}

export type BondMoment = {
  title: string
  description: string
  note: string
}

export type ImageReference = {
  title: string
  photographer: string
  href: string
  imageUrl: string
  alt: string
  note: string
}

export const siteMeta = {
  title: 'The House of Salim & Julekha',
  tagline: 'Nine hearts, one shared roof',
  storyLead:
    'This website imagines the family as a living storybook: an Indian Muslim home where the day begins in quiet devotion, fills with work and school and teasing, and settles at night around tea, dinner, and soft conversation.',
  householdLine:
    'Salim (57), Julekha (51), Roshan (31), Rashida (30), Haider (28), Sadik (25), Alfaz (24), Abid (22), and Rida (12).',
  footerNote:
    'The homepage and family page now use your real family photographs, the story portraits chapter turns them into a playful comic-style experience, and the moments page still includes a few credited reference images from Pexels for storytelling mood.',
  lastUpdated: 'March 26, 2026',
}

export const familyGroupPhoto = {
  src: '/Family%20photo.jpeg',
  alt: 'Group portrait of Salim, Julekha, and their children together as a family.',
}

export const navigation: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Family', to: '/family' },
  { label: 'Story Portraits', to: '/story-portraits' },
  { label: 'Daily Life', to: '/daily-life' },
  { label: 'Moments', to: '/moments' },
]

export const householdFacts: HouseholdFact[] = [
  { value: '9', label: 'family members' },
  { value: '7', label: 'children growing together' },
  { value: '1', label: 'home full of shared routines' },
]

export const chapterCards: StoryChapter[] = [
  {
    eyebrow: 'Chapter one',
    title: 'Meet the family',
    description:
      'See how each person brings a different tone to the house, from the parents who hold it steady to the youngest one who keeps it bright.',
    to: '/family',
  },
  {
    eyebrow: 'Chapter two',
    title: 'See the cartoon stories',
    description:
      'Watch the family step into a more playful world where each person becomes the hero of a warm illustrated chapter.',
    to: '/story-portraits',
  },
  {
    eyebrow: 'Chapter three',
    title: 'Walk through one ordinary day',
    description:
      'Follow the rhythm from Fajr to late-night quiet: tea, school bags, errands, shared meals, and the comfort of everyone returning home.',
    to: '/daily-life',
  },
  {
    eyebrow: 'Chapter four',
    title: 'Hold on to the little moments',
    description:
      'Explore sibling bonds, gentle family habits, and a moodboard of visual references that give the whole site its warmth.',
    to: '/moments',
  },
]

export const familyGroups: FamilyGroup[] = [
  {
    title: 'The foundation',
    summary:
      'The home rests on Salim and Julekha, whose patience and discipline shape the emotional weather of the house.',
    names: ['Salim', 'Julekha'],
  },
  {
    title: 'The elder circle',
    summary:
      'Roshan, Rashida, and Haider carry memory, calm, and responsibility. They set the tone for the younger ones without needing to announce it.',
    names: ['Roshan', 'Rashida', 'Haider'],
  },
  {
    title: 'The middle bridge',
    summary:
      'Sadik, Alfaz, and Abid keep the home lively, modern, and noisy in the best way, turning routines into laughter and shared stories.',
    names: ['Sadik', 'Alfaz', 'Abid'],
  },
  {
    title: 'The youngest light',
    summary:
      'Rida is the reminder that even a busy house should still leave space for wonder, schoolbooks, and sudden bursts of laughter.',
    names: ['Rida'],
  },
]

export const familyMembers: FamilyMember[] = [
  {
    name: 'Salim',
    age: 57,
    role: 'Father',
    tagline: 'The steady center',
    summary:
      'Salim rises with responsibility already in his hands. He brings quiet structure to the family and makes safety feel ordinary.',
    chapter: 'His presence is calm, disciplined, and deeply reassuring.',
    imageSrc: abbuPhoto,
    imageAlt: 'Portrait of Salim, father of the family.',
  },
  {
    name: 'Julekha',
    age: 51,
    role: 'Mother',
    tagline: 'The warmth of the home',
    summary:
      'Julekha remembers who needs tea, who forgot a shawl, and who needs one more soft word before stepping into the day.',
    chapter: 'With her, care feels practical, tender, and sacred all at once.',
    imageSrc: ammiPhoto,
    imageAlt: 'Portrait of Julekha, mother of the family.',
  },
  {
    name: 'Roshan',
    age: 31,
    role: 'Eldest sibling',
    tagline: 'The memory keeper',
    summary:
      'Roshan keeps family history close and helps hold the older responsibilities together when life starts moving too fast.',
    chapter: 'Calls get returned and dates get remembered because Roshan thinks ahead.',
    imageSrc: roshanPhoto,
    imageAlt: 'Portrait of Roshan.',
  },
  {
    name: 'Rashida',
    age: 30,
    role: 'Older sister',
    tagline: 'Soft voice, strong hands',
    summary:
      'Rashida brings calm into crowded rooms and turns ordinary chores into moments where people feel listened to and looked after.',
    chapter: 'She carries tenderness without ever making it fragile.',
    imageSrc: rashidaPhoto,
    imageAlt: 'Portrait of Rashida.',
  },
  {
    name: 'Haider',
    age: 28,
    role: 'Brother',
    tagline: 'The dependable shoulder',
    summary:
      'Haider moves through responsibility with a steady pace, whether it is an outside errand, a family need, or a creative shoot. He is also part of the Ur SmartMaker channel with Tariq Khan and appears on the channel as a model and creative presence.',
    chapter:
      'He is your brother, 28 years old, and brings both reliability at home and confidence in front of the camera.',
    imageSrc: haiderPhoto,
    imageAlt: 'Portrait of Haider.',
  },
  {
    name: 'Sadik',
    age: 25,
    role: 'Brother',
    tagline: 'The bridge between old and new',
    summary:
      'Sadik carries stories, modern ideas, family jokes, and quiet observation, often becoming the link between generations.',
    chapter: 'He notices the small details that make a house feel alive.',
    imageSrc: sadikPhoto,
    imageAlt: 'Portrait of Sadik.',
  },
  {
    name: 'Alfaz',
    age: 24,
    role: 'Brother',
    tagline: 'The hallway laughter',
    summary:
      'Alfaz brings playful energy, quick wit, and the kind of affection that hides inside teasing, banter, and sudden help.',
    chapter: 'He keeps the heavy days from settling too deeply into the walls.',
    imageSrc: alfazPhoto,
    imageAlt: 'Portrait of Alfaz.',
  },
  {
    name: 'Abid',
    age: 22,
    role: 'Brother',
    tagline: 'The youngest grown-up',
    summary:
      'Abid is old enough to take responsibility and young enough to keep the entire house feeling in motion.',
    chapter: 'He carries both adulthood and boyish brightness at the same time.',
    imageSrc: abidPhoto,
    imageAlt: 'Portrait of Abid.',
  },
  {
    name: 'Rida',
    age: 12,
    role: 'Youngest',
    tagline: 'The final spark of childhood',
    summary:
      'Rida moves through the home with schoolbooks, questions, and a brightness that softens everyone around her.',
    chapter: 'Her laughter keeps the whole family close to wonder.',
    imageSrc: ridaPhoto,
    imageAlt: 'Portrait of Rida.',
  },
]

const findMember = (name: string) => familyMembers.find((member) => member.name === name)!

export const cartoonStories: CartoonStory[] = [
  {
    name: 'Salim',
    title: 'Guardian of the Front Door',
    hook:
      'In the cartoon chapter, Salim becomes the calm protector whose presence makes every room feel secure.',
    story:
      'He is drawn like the dependable elder of the house: grounded, strong, and quietly watching over everyone else before they even notice what they need.',
    scene: 'Morning discipline and family protection',
    palette: 'Mint, sand, and deep cedar',
    accent: '#3a7d6b',
    frameLabel: 'Chapter of strength',
    imageSrc: findMember('Salim').imageSrc,
    imageAlt: findMember('Salim').imageAlt,
  },
  {
    name: 'Julekha',
    title: 'Queen of Warm Tea and Gentle Duas',
    hook:
      'Julekha becomes the heart of the storybook home, carrying softness, hospitality, and quiet prayer into every scene.',
    story:
      'Her portrait feels like comfort itself: the person who remembers, prepares, reassures, and somehow keeps the emotional balance of the whole house intact.',
    scene: 'Kitchen warmth, care, and prayerful calm',
    palette: 'Peach, gold, and soft rose',
    accent: '#d7836d',
    frameLabel: 'Chapter of comfort',
    imageSrc: findMember('Julekha').imageSrc,
    imageAlt: findMember('Julekha').imageAlt,
  },
  {
    name: 'Roshan',
    title: 'Keeper of Family Memory',
    hook:
      'Roshan becomes the one who carries the family timeline, the remembered stories, and the older responsibilities.',
    story:
      'In this illustrated version, Roshan feels like the thoughtful senior figure who connects past and present and helps everyone stay rooted while life keeps moving.',
    scene: 'Remembering, guiding, and holding the line',
    palette: 'Sky blue, walnut, and ivory',
    accent: '#5786c7',
    frameLabel: 'Chapter of memory',
    imageSrc: findMember('Roshan').imageSrc,
    imageAlt: findMember('Roshan').imageAlt,
  },
  {
    name: 'Rashida',
    title: 'Grace of the Inner Rooms',
    hook:
      'Rashida becomes the gentle grace note in the family story, making crowded spaces feel calmer and more beautiful.',
    story:
      'Her cartoon-story portrait leans into steadiness and elegance, showing someone whose care is quiet but changes the whole feeling of a room.',
    scene: 'Care, poise, and soft family strength',
    palette: 'Plum, silver, and cream',
    accent: '#7a5ea8',
    frameLabel: 'Chapter of grace',
    imageSrc: findMember('Rashida').imageSrc,
    imageAlt: findMember('Rashida').imageAlt,
  },
  {
    name: 'Haider',
    title: 'The Camera-Eyed Brother',
    hook:
      'Haider becomes the creative hero of the house, a brother who carries both family loyalty and a confident screen presence.',
    story:
      'This version frames him like a modern family character: dependable at home, composed in public, and always ready to step into a bold scene with style.',
    scene: 'Creative shoots, confidence, and brotherhood',
    palette: 'Indigo, charcoal, and sunset bronze',
    accent: '#4656a8',
    frameLabel: 'Chapter of confidence',
    imageSrc: findMember('Haider').imageSrc,
    imageAlt: findMember('Haider').imageAlt,
  },
  {
    name: 'Sadik',
    title: 'Collector of Little Stories',
    hook:
      'Sadik becomes the observer character, the one who notices the details everyone else almost misses.',
    story:
      'His story portrait feels curious and alive, like someone who stands between tradition and the present moment and turns ordinary family life into something memorable.',
    scene: 'Observation, humor, and new ideas',
    palette: 'Amber, cream, and forest green',
    accent: '#b27a2f',
    frameLabel: 'Chapter of wonder',
    imageSrc: findMember('Sadik').imageSrc,
    imageAlt: findMember('Sadik').imageAlt,
  },
  {
    name: 'Alfaz',
    title: 'Starter of Smiles',
    hook:
      'Alfaz becomes the energy in the hallway, the one whose smile and teasing keep the house bright.',
    story:
      'In the cartoon-story treatment, he reads like the character who can break tension, restart laughter, and pull everyone back into the warmth of family.',
    scene: 'Banter, laughter, and quick affection',
    palette: 'Mustard, cobalt, and warm white',
    accent: '#d59a22',
    frameLabel: 'Chapter of laughter',
    imageSrc: findMember('Alfaz').imageSrc,
    imageAlt: findMember('Alfaz').imageAlt,
  },
  {
    name: 'Abid',
    title: 'The Young Flame',
    hook:
      'Abid becomes the youthful spark of the older siblings, balancing responsibility with movement and optimism.',
    story:
      'His illustrated chapter presents him as the bright younger-brother figure who is growing into responsibility without losing his easy warmth and energy.',
    scene: 'Momentum, youth, and family pride',
    palette: 'Ivory, fern, and warm bronze',
    accent: '#4f9d6a',
    frameLabel: 'Chapter of momentum',
    imageSrc: findMember('Abid').imageSrc,
    imageAlt: findMember('Abid').imageAlt,
  },
  {
    name: 'Rida',
    title: 'Little Moon of the Home',
    hook:
      'Rida becomes the youngest star of the family story, carrying innocence, curiosity, and a soft brightness.',
    story:
      'Her story portrait is gentle and magical, built around the feeling that childhood keeps the entire house connected to wonder, hope, and tenderness.',
    scene: 'Wonder, school days, and gentle light',
    palette: 'Pistachio, pearl, and moon white',
    accent: '#8bbf6d',
    frameLabel: 'Chapter of wonder',
    imageSrc: findMember('Rida').imageSrc,
    imageAlt: findMember('Rida').imageAlt,
  },
]

export const dayMoments: DailyMoment[] = [
  {
    time: 'Before sunrise',
    title: 'The house wakes softly',
    description:
      'The first sounds are gentle: a door opening, water running, prayer beginning, a kettle warming somewhere in the kitchen.',
    details: [
      'Salim starts the day with quiet discipline.',
      'Julekha is already thinking about everyone else before breakfast is served.',
      'The home feels most sacred when it is still half asleep.',
    ],
  },
  {
    time: 'Morning',
    title: 'Work, school, and the rush of getting out',
    description:
      'By morning the stillness is gone. The home fills with shoes, lunch plans, folded clothes, quick reminders, and half-finished cups of tea.',
    details: [
      'Older siblings pick up practical responsibilities without needing a speech.',
      'Rida becomes the bright center of the school-hour chaos.',
      'No one leaves without someone else asking if they ate.',
    ],
  },
  {
    time: 'Afternoon',
    title: 'A slower rhythm returns',
    description:
      'Afternoon carries a different kind of life: open windows, softened voices, errands ending, and the house breathing again.',
    details: [
      'Messages and calls flow between siblings.',
      'The kitchen becomes both a workplace and a place to rest.',
      'Little check-ins matter as much as long conversations.',
    ],
  },
  {
    time: 'Maghrib',
    title: 'The house gathers back into itself',
    description:
      'As evening comes in, the family starts folding back toward one another. The day stops feeling separate and starts feeling shared again.',
    details: [
      'Tea, dinner, and prayer bring the rhythm back to one table.',
      'The best stories usually arrive after the serious work is done.',
      'Even playful arguments feel like another language for affection.',
    ],
  },
  {
    time: 'Night',
    title: 'The final quiet belongs to home',
    description:
      'At night the house becomes reflective. The younger one slows down, the older ones linger, and the parents close the day with gratitude and worry held together.',
    details: [
      'Some dreams are spoken out loud, others stay private.',
      'The gate closes, lights dim, and tomorrow starts being imagined.',
      'Love here is not dramatic. It is dependable.',
    ],
  },
]

export const householdValues: ValueCard[] = [
  {
    title: 'Faith woven into routine',
    description:
      'Prayer is not shown as a performance. It is part of the house rhythm, present in how the day begins, pauses, and settles.',
  },
  {
    title: 'Care shown through work',
    description:
      'In this family, affection often looks like practical service: carrying bags, pouring tea, remembering timings, and checking who has eaten.',
  },
  {
    title: 'Laughter as a survival skill',
    description:
      'Teasing, jokes, and sibling banter keep the home from becoming stiff. Humor makes responsibility easier to carry.',
  },
  {
    title: 'Respect without distance',
    description:
      'The family stays rooted in adab and respect, but warmth is never pushed aside. Reverence and closeness live in the same rooms.',
  },
]

export const bondMoments: BondMoment[] = [
  {
    title: 'Parents as the emotional center',
    description:
      'Salim and Julekha hold the house together in different ways: one with quiet firmness, the other with constant care and instinctive attention.',
    note: 'Everything else in the story grows out of that shared center.',
  },
  {
    title: 'Older siblings becoming second guardians',
    description:
      'The elder children do more than simply grow up. They become guides, buffers, and unofficial guardians for the younger ones.',
    note: 'That is how large families quietly multiply love.',
  },
  {
    title: 'Brothers turning duty into companionship',
    description:
      'Errands, market visits, fixing things, joking in the hallway, and staying up too late after dinner all become part of brotherhood.',
    note: 'Responsibility never fully loses its playfulness.',
  },
  {
    title: 'Sisters protecting softness in the home',
    description:
      'The sisters carry calm, emotional memory, and gentleness, making the house feel held even on rushed days.',
    note: 'Their care is often quiet, but it changes the whole mood of a room.',
  },
  {
    title: 'Rida keeping the family young',
    description:
      'The youngest member reminds everyone that a home should still have wonder in it, not just chores, bills, and schedules.',
    note: 'Childhood becomes a gift shared by the entire household.',
  },
  {
    title: 'Ordinary days becoming the real inheritance',
    description:
      'Festivals, weddings, and special gatherings matter, but the deepest memory is built from ordinary evenings that end with everyone under one roof.',
    note: 'That is the true beauty this website tries to hold.',
  },
]

export const imageReferences: ImageReference[] = [
  {
    title: 'Family portrait reference',
    photographer: 'Abdul Aziz',
    href: 'https://www.pexels.com/photo/happy-family-on-a-portrait-10505889/',
    imageUrl:
      'https://images.pexels.com/photos/10505889/pexels-photo-10505889.jpeg?cs=srgb&dl=pexels-abdaziz-10505889.jpg&fm=jpg',
    alt: 'Portrait reference of a Muslim family sitting together indoors.',
    note: 'A strong opening reference for the family introduction and formal storybook scenes.',
  },
  {
    title: 'Neighborhood lane reference',
    photographer: 'Farhaan Mushtaq Parimoo',
    href: 'https://www.pexels.com/photo/charming-narrow-alleyway-with-rustic-walls-28993549/',
    imageUrl:
      'https://images.pexels.com/photos/28993549/pexels-photo-28993549.jpeg?cs=srgb&dl=pexels-parimoofarhaan-28993549.jpg&fm=jpg',
    alt: 'A narrow rustic lane in Srinagar, India.',
    note: 'Useful for setting the feeling of the family neighborhood outside the front door.',
  },
  {
    title: 'Tea table reference',
    photographer: 'Charlotte May',
    href: 'https://www.pexels.com/photo/cups-of-tea-on-table-at-home-5946680/',
    imageUrl:
      'https://images.pexels.com/photos/5946680/pexels-photo-5946680.jpeg?cs=srgb&dl=pexels-charlotte-may-5946680.jpg&fm=jpg',
    alt: 'Two cups of tea resting on a floral tablecloth at home.',
    note: 'Perfect for the household pause that happens in the middle of conversation and care.',
  },
  {
    title: 'Mother and daughter lesson reference',
    photographer: 'Nour Sakina',
    href: 'https://www.pexels.com/photo/mother-and-daughter-reading-quran-in-mosque-34407214/',
    imageUrl:
      'https://images.pexels.com/photos/34407214/pexels-photo-34407214.jpeg?cs=srgb&dl=pexels-noursakina-34407214.jpg&fm=jpg',
    alt: 'A mother and daughter reading together inside a mosque.',
    note: 'A gentle visual cue for faith, guidance, and intimate teaching inside family life.',
  },
  {
    title: 'Quiet reflection reference',
    photographer: 'A. Darmel',
    href: 'https://www.pexels.com/photo/girl-reading-quran-inside-a-mosque-8164713/',
    imageUrl:
      'https://images.pexels.com/photos/8164722/pexels-photo-8164722.jpeg?cs=srgb&dl=pexels-a-darmel-8164722.jpg&fm=jpg',
    alt: 'A young girl reading quietly inside a mosque.',
    note: 'Works beautifully for reflective scenes, study corners, and the youngest chapter of the story.',
  },
]

export const featuredReferences = {
  portrait: imageReferences[0]!,
  lane: imageReferences[1]!,
  tea: imageReferences[2]!,
  lesson: imageReferences[3]!,
  reflection: imageReferences[4]!,
}
