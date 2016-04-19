function textarea (type, label, id, options) {
  return `
  <div class="fieldBox">
    <textarea placeholder="${label}"></textarea>
  </div>
    `;
}

export default textarea;
