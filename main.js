const tabs = document.querySelectorAll(".tab_header_item");
const tabItems = document.querySelectorAll(".tab_item");

tabs.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    const num = e.target.dataset.tab;
    tabItems.forEach((item) => {
      item.dataset.tab === num
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
  });
});
