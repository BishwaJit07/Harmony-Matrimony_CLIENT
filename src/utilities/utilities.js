export function calculateAge(birthdate) {
  const birthYear = birthdate.getFullYear();
  const birthMonth = birthdate.getMonth();
  const birthDay = birthdate.getDate();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  let age = currentYear - birthYear;

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }

  return age;
}

export function formatDate(date) {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const parts = date.toLocaleDateString(undefined, options).split(" ");
  const day = parts[1];
  const month = parts[0];
  const year = parts[2];
  return `${day} ${month} ${year}`;
}
