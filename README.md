# jQuery.columnFilter

#About
**jQuery columnFilter** is a plug-in that lets you create filter for table which has many column.

When you hide several columns than the table will only columns that not been hiden.

The syntax is as follows:

#How  to Use It
Your table markup:
```html
<ul class="list-column"></ul>
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
And this is advance plugin initiation:
```javascript
$('table').columnFilter({
    columnCheckboxsContainer: '.list-column',
    localStorageNamespace: 'your.table.localstorage.name.column.'
});
```