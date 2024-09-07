import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import { Application } from 'app';

const root = document.createElement('div');
const shadowRoot = root.attachShadow({ mode: 'open' });
const reactRoot = createRoot(shadowRoot);
reactRoot.render(createElement(Application));
document.body.append(root);
