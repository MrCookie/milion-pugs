function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}

export const getRandomDate = (visitedDates: string[]): string => {
  // @NOTE: Taken from https://github.com/nasa/apod-api#docs- 'date' field
  const startDate = new Date(1995, 6, 17);
  const endDate = new Date();

  console.log(startDate, endDate);

  let newDate;
  // @NOTE: This can be done smarter
  const datesToCheck = [...visitedDates, newDate];
  do {
    newDate = randomDate(startDate, endDate).toISOString().split('T')[0];
  } while (datesToCheck.includes(newDate));
  return newDate;
};
