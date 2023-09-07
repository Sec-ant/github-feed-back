interface IncludeFragment extends HTMLElement {
  src: string;
}

let found = 0;

const observer = new MutationObserver((_, observer) => {
  const includeFragment = document.querySelector<IncludeFragment>(
    '[data-target="feed-container.content"] > include-fragment',
  );
  if (includeFragment) {
    includeFragment.src = "/dashboard-feed";
    ++found;
  }
  const filterButton = document.querySelector(
    '[data-target="feed-container.feedTitle"] + div',
  );
  if (filterButton) {
    filterButton.remove();
    ++found;
  }
  if (found > 1) {
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
