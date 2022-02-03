export default (date) => {
  const values = date.split('-');
  let day = values[2].split('');
  day.splice(2);
  day = day.join('');
  const month = values[1];
  const year = values[0];
  return `${day}/${month}/${year}`;
};
