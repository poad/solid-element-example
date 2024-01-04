/* @refresh reload */
import './counter';
import { html, render } from 'lit-html';

render(html`<solid-counter></solid-counter>`, document.getElementById('root')!);
