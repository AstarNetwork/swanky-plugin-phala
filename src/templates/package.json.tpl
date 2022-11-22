{
  "name": "{{project_name}}",
  "version": "1.0.0",
  {{#if author_email}}
  "author": "{{author_name}} <{{author_email}}>",
  {{else}}
  "author": "{{author_name}}",
  {{/if}}
  "license": "MIT",
  "scripts": {
    "run-node": "swanky phala node start",
    "compile": "swanky phala contract compile",
    "deploy": "swanky phala contract deploy"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "dependencies": {
  }
}
