# jQuery.columnFilter
[![Build Status](https://secure.travis-ci.org/herdiansc/jquery.columnfilter.png)](http://travis-ci.org/herdiansc/jquery.columnfilter)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

#About
**jQuery columnFilter** is a plug-in that lets you create filter for table which has many column.

When you hide several columns than the table will only columns that not been hiden.

The syntax is as follows:

#How  to Use It
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
And this is basic plugin initiation:
```javascript
$('table').columnFilter();
```
Or this is advance plugin initiation:
```javascript
$('table').columnFilter({
    columnCheckboxsContainer: '.column-list',
    localStorageNamespace: 'your.table.localstorage.name.column.' // Change this config if you have many tables
});
```

## DEMO
http://codepen.io/herdiansc/full/xgXoLJ/

## SCOPE
- Table structure: The table need to have head structure with this hierarchy: table > thead > tr > th
- This plugin relies on localStorage support on browser
