export default class Chat {
  init() {
    this.onClick = this.onClick.bind(this);
    this.btn = document.querySelector('.chat_btn');
    this.btn.addEventListener('click', this.onClick);
    this.chat = document.querySelector('.chat_window');

    document.querySelector('.exit').addEventListener('click', () => {
      this.chat.style.animation = 'chat_close 0.3s linear 0s forwards';
      this.chat.addEventListener('animationend', this.onChatAnimEnd());
    });
  }

  onClick(e) {
    e.preventDefault();
    this.chat.style.display = 'block';
    this.chat.style.animation = 'chat_open 0.3s linear 0s forwards';
    this.btn.style.animation = 'chat_close 0.3s linear 0s forwards';
  }

  onChatAnimEnd() {
    this.btn.style.animation = 'chat_open 0.3s linear 0s forwards';
  }
}
