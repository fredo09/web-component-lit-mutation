import { html, LitElement } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

import { RenderListComponent} from './renderList/RenderList';
import { DileInput } from 'dile-input';

import "@webcomponents/scoped-custom-element-registry";

export class MuitationComponentObLitsLit extends ScopedElementsMixin(LitElement) {
  static properties = {
    _listUsers: {
      type: Array,
      state: true,
    },
    _inputNameUser: {
      type: String,
      state: true,
    },
    _inputAgeUser: {
      type: String,
      state: true,
    },
  };

  static scopedElements = {
    "dile-input": DileInput,
    "render-list-component": RenderListComponent,
  };

  constructor() {
    super();
    this._listUsers = [{ name: "freddy", age: 10 }];
    this._number = 0;
  }

  _handleAddNewUser({ detail }) {
    if (!!detail) {
      this._listUsers = [...this._listUsers, { name: `${this._inputNameUser}`, age: this._inputAgeUser }];
      // this._listUsers[0].age = this._inputAgeUser;
      // this._listUsers[0].name = this._inputNameUser;
      // this._listUsers[0] = {
      //   name: `${this._inputNameUser}`,
      //   age: this._inputAgeUser
      // }
      this._number = this._number + 1;
    }
    //this.requestUpdate();
  }

  _handleUserName({ target }) {
    this._inputNameUser = target?.value;
  }

  _handleUserAge({target}){
    this._inputAgeUser = target?.value;
  }

  get _tplDileInput() {
    return html`
      <dile-input
        name="userName"
        label="Ingresa un nombre de Usuario"
        placeholder="Usuario name"
        @enter-pressed="${this._handleUserName}"
      ></dile-input>

      <dile-input
        name="AgeUser"
        label="Ingresa un Age de Usuario"
        placeholder="Usuario Age"
        @enter-pressed="${this._handleUserAge}"
      ></dile-input>
    `;
  }

  render() {
    return html`
      <div>
        <h1>Usando el RequestUpdate para mutacion de Arrays</h1>
        ${this._tplDileInput}

        <render-list-component
          .listUser=${this._listUsers}
          number-value=${this._number}
        ></render-list-component>

        <button @click="${this._handleAddNewUser}">
          Agrega u nuevo usuarios
        </button>
      </div>
    `;
  }
}
