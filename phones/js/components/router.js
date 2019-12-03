
location.hash = '/phones'
let startTemplate = document.querySelector('.row').innerHTML;

const page = new PageList({
    el: document.getElementById('root'),
    template: startTemplate
  });


window.addEventListener('hashchange', (event) => {
    router(location.hash);
  });

  function router(path) {
    if (path.indexOf('phones') > -1) {
        document.querySelector('.row').innerHTML = startTemplate;

      const page = new PageList({
        el: document.querySelector('.row'),
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