const dayjs = require("dayjs");

export function isEighteenOrOlder(birthdate: string) {
  const year = birthdate.split("/")[2];
  const month = birthdate.split("/")[1];
  const day = birthdate.split("/")[0];

  // Parse the birthdate string to a Date object
  const birthDateObj = dayjs(year, month, day);

  if (!birthDateObj.isValid()) {
    return false;
  }

  // Calculate the current date
  const currentDate = dayjs();

  // Calculate the difference in years
  const age = currentDate.year() - birthDateObj.year();

  // Check if the birthday has occurred for this year
  const hasBirthdayOccurred =
    currentDate.month() > birthDateObj.month() ||
    (currentDate.month() === birthDateObj.month() &&
      currentDate.date() >= birthDateObj.date());

  // Check if the person is 18 years or older
  return age > 18 || (age === 18 && hasBirthdayOccurred);
}
