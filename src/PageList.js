class PageList {

  constructor(options) {
    this.MAX_LENGTH = 2;

    this.el = options.el;
    this.phones = phones;

    this.list = new List({
      tmpl: document.getElementById('phone-item-tmpl'),
      el: document.querySelector('[data-component="phones-list"]')
      
    });

    this.controls = new Controls({
      el: this.el.querySelector('[data-component="phones-control"]'),
      sort: this.el.querySelector('[data-control="sort"]')
    });
    
    this.list.showList(this.phones);
    
    this.controls.el.addEventListener('search', this.search.bind(this));
    this.controls.el.addEventListener('sort', this.sort.bind(this));
  }
  

  search(event) {
    const value = event.detail.value;

    if (value.length >= this.MAX_LENGTH) {
      const re = new RegExp(value, 'i');

      const filteredPhones = this.phones.filter((phone) => {
        return re.test(phone.name);
      });

      this.list.showList(filteredPhones);
      

    } else {
      this.list.showList(this.phones);
    }
  }


  sort(event) {
    const value = event.detail.value;
    const age = 'age';
    const alphabetical = 'alphabetical';

      if (value === age) {
      this.phones.sort((a, b) => a.age > b.age ? 1 : -1);
      
      this.list.showList(this.phones);

    } 
    
    else {
      this.phones.sort((a, b) => a.name > b.name ? 1 : -1);

      this.list.showList(this.phones);
    }

  }
}