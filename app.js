let yearOfBirth = parseInt(prompt(`what is your year of birth?`));
let cityOfUser = prompt(`what city do you live in?`);
let favoriteSport = prompt(`what is your favorite kind of sport`);
let userAge = 2024 - yearOfBirth;
if (!yearOfBirth) {
  userAge = `Жаль,что вы решили не вводить свою дату рождения(`;
} else {
  userAge = `Твой возраст: ${userAge} лет`;
}

if (cityOfUser === `киев` || cityOfUser === `Киев`) {
  cityOfUser = `Ты живешь в столице Украины`;
} else if (cityOfUser === `Лондон` || cityOfUser === `лондон`) {
  cityOfUser = `Лондон из зэ кэпитал оф Грэйт Бритен`;
} else if (cityOfUser === `Вашингтон` || cityOfUser === `вашингтон`) {
  cityOfUser = `Ты живешь в столице Америки`;
} else if (cityOfUser === null || cityOfUser === ``) {
  cityOfUser = `Жаль что ты решил не говорить название города в котором живешь`;
} else {
  cityOfUser = `Ты живешь в городе ${cityOfUser}`;
}

if (favoriteSport === `футбол` || favoriteSport === `Футбол`) {
  favoriteSport = `Круто! Хочешь стать Мэсси`;
} else if (favoriteSport === `бокс` || favoriteSport === `Бокс`) {
  favoriteSport = `Круто! Хочешь стать Усиком`;
} else if (
  favoriteSport === `хоббихорсинг` ||
  favoriteSport === `Хоббихорсинг`
) {
  favoriteSport = `Лучше бы мяч пинал или грушу бил`;
} else if (favoriteSport === null || favoriteSport === ``) {
  favoriteSport = `Жаль ,что ты решил не говорить какой у тебя любимый вид спорта`;
} else {
  favoriteSport = `${favoriteSport} -это круто ,ниче больше сказать не могу ,просили придумать 3 вида спорта`;
}

alert(`${userAge}
${cityOfUser}
${favoriteSport}`);
