const numbersDB = Array.from({ length: 101 }, (_, i) => {
  const num = i + 1;
  const colors = ['#FACC15', '#06B6D4', '#EF4444', '#10B981', '#A855F7', '#F97316', '#3B82F6', '#EC4899'];
  const color = colors[i % colors.length];
  const filterGroup = num <= 16 ? 'top' : num <= 32 ? 'squads' : num <= 64 ? 'teams' : 'solos';
  return {
    tag: `num_${num}`,
    name: `Equipo #${num}`,
    num: num,
    color: color,
    category: num <= 32 ? 'Top Squads' : 'Equipos',
    icon: 'number',
    filters: ['all', filterGroup]
  };
});
