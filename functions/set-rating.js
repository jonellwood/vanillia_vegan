function setRating(element, rating) {
  const maxStars = 5;
  const percentage = (rating / maxStars) * 100;
  element.style.width = `${percentage}%`;
}
