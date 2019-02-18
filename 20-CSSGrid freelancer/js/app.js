document.addEventListener('DOMContentLoaded', () => {
  loadedPortfolio();
});

function loadedPortfolio () {
  fetch('data.json')
    .then(response => {
      return response.json();
    })
    .then(data => {
      let html = '';

      data.portfolio.forEach(portfolio => {
        // Create template
        console.log(html)
        html += `
          <div class="element">
            <img src="img/${portfolio.id}.jpg">
            <div>
              <h3>${portfolio.name}</h3>
              <p>${portfolio.desc}</p>
            </div>
          </div>
        `;
      });

      // After creating the template inject to html
      document.querySelector('#list').innerHTML = html;
    })
}