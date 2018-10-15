class Controls {

  constructor(options) {
    this.el = options.el;
    this.searchEl = this.el.querySelector('[data-control="search"]');
    // this.sortEl = this.el.querySelector('[data-control="sort"]');


      this.searchEl.addEventListener('input', this.onInput.bind(this));
      // this.sortEl.addEventListener('select', this.sort.bind(this))
  }

  onInput(event) {
    const value = event.target.value;

      const controlEvent = new CustomEvent('search', {
        bubbles: true,
        detail: {
          value: value
        }
      });

      this.el.dispatchEvent(controlEvent);
    };

  // sort(event) {
  //   const value = event.target.value;
  //
  //   console.log(value);
  // }
}