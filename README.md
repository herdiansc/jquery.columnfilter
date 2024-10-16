# jQuery.columnFilter
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## About
**jQuery columnFilter** is a plug-in that lets you create a filter for a table with many columns.

When you hide several columns then the table will only show selected columns.

## Functional Requirement
These are the requirements fulfilled by this plugin:
- Need to be able to hide several columns so that the table is easy to read
- The hidden column must remain hidden on sequence page(table) visits. 

## How  to Use It
Your table markup:
```html
<ul class="column-list"></ul>
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Display Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>John</td>
            <td>john@example.com</td>
            <td>John Doe</td>
        </tr>
    </tbody>
</table>
```
And use this basic plugin initiation:
```javascript
$('table').columnFilter();
```
Or use this advanced plugin initiation:
```javascript
$('table').columnFilter({
    columnCheckboxsContainer: '.column-list',
    localStorageNamespace: 'your.table.localstorage.name.column.' // Change this config if you have many tables
});
```

## Demo
http://codepen.io/herdiansc/full/xgXoLJ/

## Limitation
- Table structure: The table needs to have a head structure with this hierarchy: table > thead > tr > th
- This plugin relies on localStorage support on the browser

## Contribution
Please feel free to contribute by forking this repo and creating a PR.

## License
jQuery.columnFilter is licensed under the MIT License - see the LICENSE file for details
