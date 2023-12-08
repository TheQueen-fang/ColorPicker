document.addEventListener('DOMContentLoaded', function () {
  const colorPicker = document.getElementById('colorPicker');
  const selectedColor = document.getElementById('selectedColor');

  colorPicker.addEventListener('input', function () {
    const color = colorPicker.value;
    selectedColor.textContent = color;
    selectedColor.style.color = color;
    chrome.scripting.executeScript({
      target: {tabId: 0},
      function: setPageBackgroundColor,
      args: [color]
    });
  });

  function setPageBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
});
