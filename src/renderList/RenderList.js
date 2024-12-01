import { html, LitElement } from "lit";

export class RenderListComponent extends LitElement {
  static properties = {
    listUser: {
      type: Array
    },
    number: {
        type: Number,
        attribute: 'number-value'
    }
  };

  constructor() {
    super();
    this.listUser = [];
  }

  get _tplRenderList() {
    return html`
      ${this.listUser.map((user) => {
        return html`<p>${user?.name} - ${user?.age}</p>`;
      })}
    `;
  }

  render() {
    return html`
      <p>Number: ${this.number}</p>
      ${!!this.listUser.length
        ? html`${this._tplRenderList}`
        : html`<p>No hay usuarios</p>`}
    `;
  }
}

window.customElements.define('render-list', RenderListComponent);