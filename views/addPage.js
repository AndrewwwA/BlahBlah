const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
      <div class="form-group">
        <label for="author-name" class="col-sm-2 control-label"
          >Author Name</label
        >
        <div class="col-sm-10">
          <input
            id="author-name"
            name="author-name"
            type="text"
            class="form-control"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="author-email" class="col-sm-2 control-label"
          >Author Email</label
        >
        <div class="col-sm-10">
          <input
            id="author email"
            name="author-email"
            type="text"
            class="form-control"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="title" class="col-sm-2 control-label">Page Title</label>
        <div class="col-sm-10">
          <input id="title" name="title" type="text" class="form-control" />
        </div>
      </div>

      <div class="form-group">
        <label for="content" class="col-sm-2 control-label">Text Area</label>
        <div class="col-sm-10">
          <input id="content" name="content" type="text" class="form-control" />
        </div>
      </div>

      <div class="form-group">
        <label for="status-input" class="col-sm-2 control-label"
          >Status Input</label
        >
        <div class="col-sm-10">
          <input
            id="status-input"
            name="status-input"
            type="text"
            class="form-control"
          />
        </div>
      </div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);
