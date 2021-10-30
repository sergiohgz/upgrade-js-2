const rootElement = document.getElementById('root');

const printFuitsInHtml = (fruits) => fruits.map((fruta) => `<li>${fruta}</li>`);
const frutas = ['Manzana', 'Pera', 'Kiwi'];

const x = 1;

rootElement.innerHTML = `<div>
  <h1>Hola mundo</h1>
  <p>Este es un texto</p>
  <ul>
    ${printFuitsInHtml(frutas).join('')}
    ${printFuitsInHtml(['Super Mario', 'Mandarinas']).join('')}
    <li>${3+2+x}</li>
  </ul>
</div>`;

// rootElement.innerHTML = '<div><h1>Hola mundo</h1><p>Este es un texto</p><ul><li>Manzana</li><li>Pera</li></ul></div>';
