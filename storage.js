const EMAIL_STORAGE_KEY = "savedUserEmail";
const ENT_EMAIL_STORAGE_KEY = "enteredEmail";
const DATE_STORAGE_KEY = "selectedDate";
const MEAL_STORAGE_KEY = "selectedMeal";
const DRINK_STORAGE_KEY = "selectedDrink";
const GUEST_NUM_STORAGE_KEY = "guestCount";

export function getEmail() {
  return localStorage.getItem(EMAIL_STORAGE_KEY);
}

export function setEmail(email) {
  localStorage.setItem(EMAIL_STORAGE_KEY, email);
}

export function getEntEmail() {
  return localStorage.getItem(ENT_EMAIL_STORAGE_KEY);
}

export function setEntEmail(email) {
  localStorage.setItem(ENT_EMAIL_STORAGE_KEY, email);
}

export function getDate() {
  return new Date(localStorage.getItem(DATE_STORAGE_KEY));
}

export function setDate(visitDate) {
  localStorage.setItem(DATE_STORAGE_KEY, visitDate.toISOString());
}

export function getSavedMeal() {
  return JSON.parse(localStorage.getItem(MEAL_STORAGE_KEY));
}

export function setSavedMeal(meal) {
  localStorage.setItem(MEAL_STORAGE_KEY, JSON.stringify(meal));
}

export function getDrink() {
  return JSON.parse(localStorage.getItem(DRINK_STORAGE_KEY));
}

export function setDrink(drink) {
  localStorage.setItem(DRINK_STORAGE_KEY, JSON.stringify(drink));
}

export function getSavedGuestCount() {
  return JSON.parse(localStorage.getItem(GUEST_NUM_STORAGE_KEY));
}

export function setSavedGuestCount(num) {
  localStorage.setItem(GUEST_NUM_STORAGE_KEY, JSON.stringify(num));
}
