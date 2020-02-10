class StartPage {
    constructor (options) {
        this.el = options.el;
        this.startTemplate = options.startTemplate.innerHTML;
    }
    
    start() {
        location.hash = 'phones';
        this.el.innerHTML = this.startTemplate;
      }
}