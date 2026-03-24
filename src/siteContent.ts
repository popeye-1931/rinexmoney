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
    'The photographs used here are visual references from Pexels to shape the tone of the story. They are not personal family photographs.',
  lastUpdated: 'March 24, 2026',
}

export const navigation: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Family', to: '/family' },
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
    title: 'Walk through one ordinary day',
    description:
      'Follow the rhythm from Fajr to late-night quiet: tea, school bags, errands, shared meals, and the comfort of everyone returning home.',
    to: '/daily-life',
  },
  {
    eyebrow: 'Chapter three',
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
  },
  {
    name: 'Julekha',
    age: 51,
    role: 'Mother',
    tagline: 'The warmth of the home',
    summary:
      'Julekha remembers who needs tea, who forgot a shawl, and who needs one more soft word before stepping into the day.',
    chapter: 'With her, care feels practical, tender, and sacred all at once.',
  },
  {
    name: 'Roshan',
    age: 31,
    role: 'Eldest sibling',
    tagline: 'The memory keeper',
    summary:
      'Roshan keeps family history close and helps hold the older responsibilities together when life starts moving too fast.',
    chapter: 'Calls get returned and dates get remembered because Roshan thinks ahead.',
  },
  {
    name: 'Rashida',
    age: 30,
    role: 'Older sister',
    tagline: 'Soft voice, strong hands',
    summary:
      'Rashida brings calm into crowded rooms and turns ordinary chores into moments where people feel listened to and looked after.',
    chapter: 'She carries tenderness without ever making it fragile.',
  },
  {
    name: 'Haider',
    age: 28,
    role: 'Brother',
    tagline: 'The dependable shoulder',
    summary:
      'Haider moves through responsibility with a steady pace, whether it is an outside errand, a family need, or a serious conversation.',
    chapter: 'Even his silence feels useful because it comes with reliability.',
  },
  {
    name: 'Sadik',
    age: 25,
    role: 'Brother',
    tagline: 'The bridge between old and new',
    summary:
      'Sadik carries stories, modern ideas, family jokes, and quiet observation, often becoming the link between generations.',
    chapter: 'He notices the small details that make a house feel alive.',
  },
  {
    name: 'Alfaz',
    age: 24,
    role: 'Brother',
    tagline: 'The hallway laughter',
    summary:
      'Alfaz brings playful energy, quick wit, and the kind of affection that hides inside teasing, banter, and sudden help.',
    chapter: 'He keeps the heavy days from settling too deeply into the walls.',
  },
  {
    name: 'Abid',
    age: 22,
    role: 'Brother',
    tagline: 'The youngest grown-up',
    summary:
      'Abid is old enough to take responsibility and young enough to keep the entire house feeling in motion.',
    chapter: 'He carries both adulthood and boyish brightness at the same time.',
  },
  {
    name: 'Rida',
    age: 12,
    role: 'Youngest',
    tagline: 'The final spark of childhood',
    summary:
      'Rida moves through the home with schoolbooks, questions, and a brightness that softens everyone around her.',
    chapter: 'Her laughter keeps the whole family close to wonder.',
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
