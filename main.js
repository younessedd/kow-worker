  function toggleMenu() {
    document.querySelector("nav").classList.toggle("active");
}
  
  // إغلاق القائمة عند الضغط على أي رابط أو زر
  const nav = document.querySelector("nav");
  const linksAndButton = nav.querySelectorAll("a, button");

  linksAndButton.forEach(el => {
    el.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
 