export const _ = {
  createElementWithClasses: (tag_name, ...classes) => {
    let element = document.createElement(tag_name);
    element.classList.add(classes);
    return element;
  }
};
