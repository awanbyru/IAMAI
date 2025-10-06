export const parseIndonesianDate = (dateStr: string): Date => {
  const months: { [key: string]: number } = {
      'Januari': 0, 'Februari': 1, 'Maret': 2, 'April': 3, 'Mei': 4, 'Juni': 5,
      'Juli': 6, 'Agustus': 7, 'September': 8, 'Oktober': 9, 'November': 10, 'Desember': 11
  };
  const parts = dateStr.split(' ');
  if (parts.length < 3) {
      console.warn(`Could not parse date: "${dateStr}"`);
      return new Date(); // Return current date as fallback
  }
  const day = parseInt(parts[0], 10);
  const monthName = parts[1];
  const year = parseInt(parts[2], 10);
  const month = months[monthName];

  if (isNaN(day) || isNaN(year) || month === undefined) {
      console.warn(`Could not parse date: "${dateStr}"`);
      return new Date(); // Fallback
  }
  return new Date(year, month, day);
};

export const formatDateForSitemap = (date: Date): string => {
    return date.toISOString().split('T')[0];
};
