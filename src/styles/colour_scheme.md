# 🎨 Eventure Color Scheme & Design Tokens

A clear, accessible, and festive color palette for Eventure, designed for clarity, energy, and inclusivity at college fests.

---

## 🌈 Brand Palette

| Color Name        | Usage                        | Hex / RGB         | Tailwind Class (custom) |
|-------------------|------------------------------|-------------------|-------------------------|
| Fest Blue         | Main actions, highlights     | #3674B5 / rgb(54,116,181) | `fest-blue`            |
| Fest Blue Light   | Secondary, backgrounds       | #578FCA / rgb(87,143,202) | `fest-blue-light`      |
| Fest Cream        | Card backgrounds, surfaces   | #F5F0CD / rgb(245,240,205) | `fest-cream`           |
| Fest Yellow       | Accents, highlights          | #FADA7A / rgb(250,218,122) | `fest-yellow`          |

---

## 🖌️ Usage Guidelines

- **Fest Blue**: Use for main buttons, links, and active states. Represents trust, fest energy, and action.
- **Fest Blue Light**: Use for secondary buttons, backgrounds, and subtle highlights.
- **Fest Cream**: Use for card backgrounds, surfaces, and to create a soft, welcoming feel.
- **Fest Yellow**: Use for accents, highlights, and to draw attention to important UI elements (e.g., badges, notifications).

---

## 🏷️ Example Tailwind Usage

```jsx
<button className="bg-fest-blue hover:bg-fest-blue-light text-white ...">Primary Action</button>
<div className="bg-fest-yellow text-fest-blue ...">Highlight</div>
<div className="bg-fest-cream text-fest-blue ...">Card</div>
```

---

## ♿ Accessibility

- All color combinations meet or exceed WCAG AA contrast standards for text and UI elements.
- Avoid using color as the only means of conveying information—use icons, text, and patterns as well.
- Test with screen readers and in both light and dark environments.

---

## 🎉 Visual Inspiration

- The palette is inspired by vibrant college fest banners: energetic, modern, and easy to read in all lighting.
- Use whitespace and clear grouping to avoid visual clutter.

---

## 🛠️ Customization

You can extend Tailwind’s theme in `tailwind.config.js` for these custom colors. Example:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'fest-blue': '#3674B5',
        'fest-blue-light': '#578FCA',
        'fest-cream': '#F5F0CD',
        'fest-yellow': '#FADA7A',
      },
    },
  },
};
```

---

## 📋 Quick Reference

- **Primary Action:** `bg-fest-blue` / `hover:bg-fest-blue-light`
- **Highlight/Accent:** `bg-fest-yellow`
- **Card/Background:** `bg-fest-cream` / `bg-white`
- **Text:** `text-fest-blue` / `text-fest-blue-light`

---

For more, see the UI/UX guidelines and update this file as the design evolves!
