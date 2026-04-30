export const projects = [
  {
    number: '001',
    title: 'TerraMachina',
    subtitle: 'A planet, generated',
    description: 'Procedural world generation, a custom map editor, and global simulations.',
    status: 'Live',
    stack: ['C# / ASP.NET', 'Three.js', 'Azure'],
    links: [
      { label: 'Open project ↗', href: 'https://terramachina.studionex.dev/', external: true },
      { label: 'Read notes →', href: '/devlog?project=terramachina' },
    ],
  },
  {
    number: '002',
    slug: 'alchemist-workbench',
    title: 'Alchemist Workbench ',
    subtitle: 'An experimental crafting tool, in planning',
    description: 'A potion-crafting tool for tabletop alchemy. Combine ingredients, track cumulative effects, and discover what happens.',
    status: 'Drafting',
    links: [
      { label: 'Read planning notes →', href: '/projects/alchemist-workbench' },
    ],
    pitch: 'The goal is to let players genuinely experiment, combining ingredients without knowing the outcome and letting the system surface what happens. Most alchemy systems in tabletop are really just recipe lookups and a few skill checks. This one models the underlying chemistry so cumulative effects emerge from the interactions, not from a table.',
    targetStack: '',
    designNote: 'The system design is mostly settled. Engineering hasn\'t started yet, so the stack and architecture are still open.',
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}