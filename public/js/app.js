//! VARIABLES:
const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const sidebarToggleBtn = document.querySelector(".sidebar-toggle-icon");
const sidebarCloseBtn = document.querySelector(".sidebar-close-icon");
const sidebarMenu = document.querySelector(".sidebar-menu");
const overlay = document.querySelector(".overlay");
const sidebarDropdown = document.querySelector(".dropdown");
const sidebarDropdownBtn = document.querySelector(".sidebar-dropdown-btn");
const shoppingCartToggleBtn = document.querySelector(".shopping-cart-toggle-icon");
const cartCloseBtn = document.querySelector(".cart-close-icon");
const shoppingCartSidebar = document.querySelector(".shopping-cart-sidebar");

//! THEME:
toggleThemeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

//! FUNCTIONS:
function showSidebarMenu() {
  sidebarMenu.classList.remove("-right-64");
  sidebarMenu.classList.add("right-0");

  overlay.classList.add("overlay--visible");
}

function hideSidebarMenu() {
  sidebarMenu.classList.remove("right-0");
  sidebarMenu.classList.add("-right-64");

  overlay.classList.remove("overlay--visible");
}

function showShoppingCart() {
  shoppingCartSidebar.classList.remove("-left-64");
  shoppingCartSidebar.classList.add("left-0");

  overlay.classList.add("overlay--visible");
}

function hideShoppingCart() {
  shoppingCartSidebar.classList.remove("left-0");
  shoppingCartSidebar.classList.add("-left-64");

  overlay.classList.remove("overlay--visible");
}
//! EVENTS:
//! DISPLAY SIDEBAR:
sidebarToggleBtn.addEventListener("click", showSidebarMenu);

//! CLOSE SIDEBAR:
sidebarCloseBtn.addEventListener("click", hideSidebarMenu);

//! SIDEBAR DROPDOWN MENU:
sidebarDropdownBtn.addEventListener("click", (event) => {
  const dropdownListItem = event.currentTarget.parentElement;

  dropdownListItem.classList.toggle("text-orange-300");
  sidebarDropdownBtn.classList.toggle("rotate-180");

  sidebarDropdown.classList.toggle("dropdown--open");
});

//! DISPLAY SHOPPING CART:
shoppingCartToggleBtn.addEventListener("click", showShoppingCart);
//! CLOSE SHOPPING CART:
cartCloseBtn.addEventListener("click", hideShoppingCart);

//! CLOSE SIDEBARS BY OVERLAY:
overlay.addEventListener("click", hideSidebarMenu);
overlay.addEventListener("click", hideShoppingCart);

//! BEST SELLING PRODUCTS SWIPER JS:
let swiper = new Swiper(".best-products-swiper", {
  slidesPerView: 2,
  spaceBetween: 14,
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
