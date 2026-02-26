export const transformDate = (str: any) => {
  if (!str) return '';

  const date = new Date(str);

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
};
