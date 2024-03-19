document.getElementById('image-upload').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function() {
        const img = new Image();
        img.src = reader.result;
        img.onload = function() {
          const color = analyzeColor(img);
          displayColor(color);
        }
      }
      reader.readAsDataURL(file);
    }
  });
  
  function analyzeColor(img) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    const color = {
      red: pixels[0],
      green: pixels[1],
      blue: pixels[2]
    };
  
    return color;
  }
  
  function displayColor(color) {
    const colorResultDiv = document.getElementById('color-result');
    colorResultDiv.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;
  }