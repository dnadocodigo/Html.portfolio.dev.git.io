export default class SoftScroll {
  constructor(links, options) {
    const classActive = "active";
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }
    this.softScrollSection = this.softScrollSection.bind(this);
  }

  softScrollSection(event) {
    event.preventDefault();
    const hrefs = event.currentTarget.getAttribute("href");
    const sectionsHref = document.querySelector(hrefs);
    sectionsHref.scrollIntoView(this.options);
  }
  softScroll;
  addLinksEvents() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.softScrollSection);
    });
  }
  init() {
    if (this.linksInternos.length) {
      this.addLinksEvents();
    }
    return this;
  }
}
