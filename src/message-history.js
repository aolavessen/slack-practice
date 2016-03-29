'use strict';

export default class messageHistory {
  constructor(el) {
    this.el = el;

    this.history = ``;

    this.render();
  }
}
