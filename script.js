document.addEventListener("DOMContentLoaded", () => {
  //nav bar functions
  const menuBtn = document.querySelector("#menu");
  const closeBtn = document.querySelector("#close");
  const sideBar = document.querySelector("#sideBar");
  menuBtn.addEventListener("click", () => {
    sideBar.style.display = "flex";
  });
  closeBtn.addEventListener("click", () => {
    sideBar.style.display = "none";
  });

  // banner function

  const counters = document.querySelectorAll(".counter .count");
  const banner = document.querySelector(".banner");
  let activated = false;

  window.addEventListener("scroll", () => {
    if (
      pageYOffset > banner.offsetTop - banner.offsetHeight - 500 &&
      activated == false
    ) {
      counters.forEach((counter) => {
        const target = Number(counter.getAttribute("data-target"));
        let count = 0;

        function update() {
          const inc = Math.ceil(target / 111);
          if (count < target) {
            count += inc;
            if (count > target) count = `${target}+`;
            counter.innerText = `${count} +`;
            setTimeout(update, 10);
          } else {
            counter.innerText = `${target}+`;
          }
        }

        update();
        activated = true;
      });
    } else if (
      (pageYOffset > banner.offsetTop - banner.offsetHeight - 500 &&
        activated == false) ||
      (pageYOffset == 0 && activated == true)
    ) {
      counters.innerText = 0;
      activated = false;
    }
  });
});
