
const startPage = new StartPage({
    el: document.querySelector('.row'),
    startTemplate: document.getElementById('start-template')
  });
  
startPage.start(this.el, this.startTemplate);

const page = new PageList({
    el: document.querySelector('.row')
  });

window.addEventListener('hashchange', (event) => {
    router(location.hash);
  });

  function router(path) {
    if (path.indexOf('phones') > -1) {

      const startPage = new StartPage({
        el: document.querySelector('.row'),
        startTemplate: document.getElementById('start-template')
      });
    
      startPage.start(this.el, this.startTemplate);
    
      const page = new PageList({
        el: document.querySelector('.row')
      });
    }
  
    else {
      const pagePhone = new PagePhone({
        el: document.querySelector('.row'),
        tmpl: document.getElementById('page-phone-tmpl'),
        id: path.slice(1),
      });
    }
  }