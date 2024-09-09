/* @refresh reload */
import './counter';
import { html, render } from 'lit-html';

const root = document.getElementById('root');

if (root) { render(html`<solid-counter></solid-counter>`, root); }
