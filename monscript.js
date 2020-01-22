(() => {
  const button = document.querySelector('.js-copytextbtn');

  button.addEventListener('click' , () => {
    const text = document.querySelector('.js-text');
    const range = document.createRange();

    range.selectNode(text);
    window.getSelection().addRange(range);
    try {
      if (document.execCommand('copy')) {
      alert('Le texte a été copié !');
    }
    } catch (error) {
      alert('Impossible de copier le text !');
    }
    
    window.getSelection().removeAllRanges();
  });
})();

  function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }


