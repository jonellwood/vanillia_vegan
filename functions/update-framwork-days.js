function updateFrameworkDays() {
  console.log("Proof of life");
  const targetDate = new Date("2025-01-04");
  console.log(targetDate);
  const today = new Date();
  const diffTime = today - targetDate;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const frameworkDaysElement = document.getElementById("framework-days");
  frameworkDaysElement.textContent = `It has been ${diffDays} days since my last Framework.`;
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(updateFrameworkDays, 100);
});
// updateFrameworkDays();
