import React from 'react';

export default { title: 'Welcome' };

export const Welcome = () => (
  <div>
    <h1>How to use Storybook to view components</h1>
    <ul>
      <li>
        Create a new directory `src/components/YourComponent`
      </li>
      <li>
        Create a new file with .jsx extension `YourComponent.jsx`
      </li>
      <li>Make sure you're exporting the new component</li>
      <li>
        Create a new file inside `src/stories` following the others `NUMBER-YourComponent.stories.js`
        <ul>
          <li>
          Optionally, use the `Example.stories.js` to help you.
          </li>
        </ul>
      </li>
      <li>
        Save and run `npm run storybook` on terminal to see the result
      </li>
      <li>
        If you have any questions, please read the following <a href="https://storybook.js.org/docs/basics/introduction/" target="__blank">link</a>
      </li>
    </ul>
  </div>
)