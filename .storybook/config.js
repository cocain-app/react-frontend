import { configure } from '@storybook/react';

import '../src/style/index.css';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
