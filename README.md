# GlitchEffect

A lightweight and customizable glitch visual effect for images using pure JavaScript — no dependencies, no canvas, no WebGL. Perfect for adding modern, reactive visual noise and RGB distortion to any container.

## 🚀 Features

- Pure JavaScript, no external libraries
- Self-contained: injects styles automatically
- Customizable intensity and noise
- Namespaced CSS to avoid conflicts

## 📦 Installation

You can install via npm:

```bash
npm install glitch-effect
```

Or use it directly in the browser with a module bundler or script tag.

## 🧪 Usage

### HTML
```html
<div id="my-container" style="width: 600px; height: 400px;"></div>
```

### JavaScript (ES Module)
```js
import GlitchEffect from 'glitch-effect';

const container = document.getElementById('my-container');
const glitch = new GlitchEffect(container, 'path/to/image.jpg', {
  intensity: 1.5,
  noise: true
});
```

## 🔧 Options

| Option     | Type    | Default | Description                             |
|------------|---------|---------|-----------------------------------------|
| intensity  | Number  | 1       | How strong the RGB shift should be      |
| noise      | Boolean | true    | Whether to add pixel noise distortion   |

## 🧼 Cleanup
This class does not yet include a `destroy()` method, so for now you can clear the container manually if needed.

## 📄 License
MIT
