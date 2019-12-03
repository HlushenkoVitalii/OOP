class Controls {

  constructor(options) {
    this.el = options.el;
    this.searchEl = this.el.querySelector('[data-control="search"]');
    this.sortEl = this.el.querySelector('[data-control="sort"]');



      this.searchEl.addEventListener('input', this.onInput.bind(this));
      this.sortEl.addEventListener('change', this.onSort.bind(this));
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
    }

  onSort(event) {
    const value = event.target.value;

    const sortEvent = new CustomEvent('sort', {
      bubbles: true,
      detail: {
        value: value
      }
    });

    this.el.dispatchEvent(sortEvent);

  }
}