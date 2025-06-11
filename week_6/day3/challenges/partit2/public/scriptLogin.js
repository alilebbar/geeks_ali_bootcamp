document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const button = form.querySelector("button");

  form.addEventListener("input", () => {
    const filled = [...form.elements].every(el => {
      return el.type === "submit" || el.value.trim() !== "";
    });
    button.disabled = !filled;
  });
});
