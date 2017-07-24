(function () {

  function loadData(url, cb) {
    function processRequest() {
      if (xhr.readyState === 4) {
        cb(url, JSON.parse(xhr.response));
      }
    }

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = processRequest;
  }

  const apiEndPoint = 'http://localhost:3000/en?subject=bank';

  function renderSentence(ul, sentence) {
    const li = document.createElement('li');

    li.innerHTML = '<span class="phrase">' +
      sentence.phrase +
      '</span><br /><span class="translation">' +
      sentence.translation
      + '</span';

    ul.appendChild(li);
  }

  function render(url, sentences) {
    const h1 = document.getElementById('request-url');
    h1.innerHTML = url;

    const ul = document.getElementById('content');
    ul.innerHTML = '';
    for (const sentence of sentences) {
      renderSentence(ul, sentence);
    }
  }

  loadData(apiEndPoint, render);
})();