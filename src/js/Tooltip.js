export default class Tooltip {
  init() {
    this.area = document.querySelector('.tooltip_area');
    this.onClick = this.onClick.bind(this);
    document.querySelector('.tooltip_btn').addEventListener('click', this.onClick);
  }

  onClick(e) {
    e.preventDefault();
    let tooltip = document.querySelector('.tooltip');
    if (!tooltip) {
      tooltip = Tooltip.formation();
      this.area.appendChild(tooltip);
      return;
    }
    tooltip.style.animation = 'close 0.5s linear 0s normal';
    tooltip.addEventListener('animationend', () => {
      tooltip.remove();
    });
  }

  static formation() {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = `
      <text class="tooltip_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat.</text>
      `;

    return tooltip;
  }
}
