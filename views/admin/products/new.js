const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
  return layout({
    content: `
      <form method="POST">
        <input name="title" type="text" placeholder="Title" />
        <input name="price" type="text" placeholder="Price" />
        <input name="image" type="file"  />
        <button>Submit</button>
        </form>
    `,
  });
};
