
window.addEventListener('hashchange', (event) => 
  console.log('hash changed' + ' on ' + location.hash));

    const page = new PageList({
      el: document.getElementById('root')
    });

    const pagePhone = new PagePhone({
      el: document.getElementById('root'),
      tmpl: document.getElementById('page-phone-tmpl'),
      id: location.hash,
    });
  


