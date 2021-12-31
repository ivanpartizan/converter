const tabs = document.querySelectorAll(".buttons button");
const contents = document.querySelectorAll(".content div");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => tab.classList.remove("active"));
    console.log(tabs[index]);
    console.log(contents[index]);
    tabs[index].classList.add("active");
    contents[index].classList.add("active");
  });
});
