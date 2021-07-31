{
  const formEl = document.forms.colsRows;
  const fieldEl = document.querySelector('.field');

  formEl.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const data = new FormData(ev.target);
    const rows = data.get('rows');
    const cols = data.get('cols');
    
    let html = '';
    for(let i=0; i < rows; i++) {
      html = `${html} <div></div>`;
    }
    fieldEl.innerHTML = html;
  });
};