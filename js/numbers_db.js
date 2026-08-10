// Paleta curada de 16 colores esports ultra-vibrantes de alto contraste
const HIGH_CONTRAST_ESPORTS_PALETTE = [
  '#FF1744', // 1: Rojo Carmín Neón
  '#00E5FF', // 2: Cian Eléctrico
  '#FFEA00', // 3: Amarillo Cyberpunk
  '#00E676', // 4: Verde Neón
  '#D500F9', // 5: Magenta Intenso
  '#FF6D00', // 6: Naranja Fuego
  '#2979FF', // 7: Azul Eléctrico
  '#FF4081', // 8: Rosa Neón
  '#76FF03', // 9: Lima Vibrante
  '#651FFF', // 10: Violeta Intenso
  '#FF9100', // 11: Ámbar Dorado
  '#1DE9B6', // 12: Turquesa Agua
  '#F50057', // 13: Rubí / Fucsia
  '#304FFE', // 14: Azul Índigo
  '#C6FF00', // 15: Verde Volt
  '#FF3D00'  // 16: Naranja Escarlata
];

const numbersDB = Array.from({ length: 101 }, (_, i) => {
  const num = i + 1;
  const color = HIGH_CONTRAST_ESPORTS_PALETTE[i % HIGH_CONTRAST_ESPORTS_PALETTE.length];
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
