# security
Security related updates for S2A related apps

- [Installation](#installation)
- [Usage Example](#usage-example)

## Installation
  ```
npm install git://github.com/S2A-IO/security --save
  ```
## Usage Example
submit any input field with script TAG , like name : KARIN <script>alert('hello');</script>  and render it with markdown , we can see that the script TAG is executing the code

To prevent any script or any other TAG please use this code .

First insure that XssPrevention js file is included in our project in assets.src.json  and include.json.
  ```
{{=XssPrevention.escapeHtml(current.firstName)}}
  ```
