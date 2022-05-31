const EMAIL_STORAGE_KEY = "savedUserEmail";
const DATE_STORAGE_KEY = "selectedDate";

export function getEmail() {
  return localStorage.getItem(EMAIL_STORAGE_KEY);
}

export function setEmail(email) {
  localStorage.setItem(EMAIL_STORAGE_KEY, email);
}

export function getMeal() {}

export function setMeal() {}

export function getDate() {
  return new Date(localStorage.getItem(DATE_STORAGE_KEY));
}

export function setDate(visitDate) {
  localStorage.setItem(DATE_STORAGE_KEY, visitDate.toISOString());
}
