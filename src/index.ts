interface IncludeFragment extends HTMLElement {
  src: string;
}

let isIncludeFragmentFound = false;
let isFilterButtonFound = false;

const observer = new MutationObserver((_, observer) => {
  const includeFragment = document.querySelector<IncludeFragment>(
    '[data-target="feed-container.content"] > include-fragment',
  );
  if (includeFragment) {
    includeFragment.src = "/dashboard-feed";
    isIncludeFragmentFound = true;
  }
  const filterButton = document.querySelector(
    '[data-target="feed-container.feedTitle"] + div',
  );
  if (filterButton) {
    filterButton.remove();
    isFilterButtonFound = true;
  }
  if (isIncludeFragmentFound && isFilterButtonFound) {
    observer.disconnect();
  }
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true,
});

document.addEventListener("DOMContentLoaded", () => {
  observer.disconnect();
});
