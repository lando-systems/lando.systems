const OCTICONS_VERSION = '19.4.0';
const ICON_BASE_URL = `https://unpkg.com/@primer/octicons@${OCTICONS_VERSION}/build/svg/`

// const MDI_VERSION = '7.2.96';
// const ICON_BASE_URL = `https://unpkg.com/@mdi/svg@${MDI_VERSION}/svg/`

const cache = {};

async function getOrFetchSvg(id) {
  if (!cache[id]) {
    const icon = await fetch(`${ICON_BASE_URL}${id}.svg`);
    cache[id] = await icon.text();
  }
  return cache[id];
}

export async function Icon(elem) {
  // icons can't have children
  if (elem.children.length > 0) return;

  const id = elem.dataset.id;
  elem.innerHTML = await getOrFetchSvg(id);
}
