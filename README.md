# jquery.listerine.js

@author gehsekky

Listerine has 2 modes. One is “columns” which basically creates a user-set 
number of columns on the page and then evenly distributes the list items 
between columns. The other mode is “grid” which is more of a tile-like display.

TODO:

* change hover in/out to something that won't cause issues (ie. hoverin/hoverout)
* apply local clearfix somehow instead of just adding "clearfix" class
* ability to pass in list of classnames to apply to list items, columns, or wrapper

options (possible values):

* transform: the "mode" we are in. ("columns", "grid")
* cols: if in "columns" mode, the number of columns. (int)
* wrapper_style: style to be applied to list wrapper. (jquery css block)
* column_style: style to be applied to "columns" mode column. (jquery css block)
* listitem_style: style to be applied to list items. (jquery css block)
* wrapper_class: name of class applied to wrapper. (string)
* column_class: name of class applied to "columns" mode column. (string)
* listitem_class: name of class applied to list item. (string)
* listitem_hover: array of handlers for mouseenter and mouseleave events.
    * in: handler for mouseenter event on list item. (function)
    * out: handler for mouseleave event on list item. (function)


columns example:

    $('.list_container').listerine({
      cols: 3, 
      transform: 'columns'
    });

grid example:

    $('.list_container').listerine({
      transform: 'grid', 
      listitem_style: {
        'width': '200px',
        'min-height': '50px', 
        'margin': '0px 10px 10px 0px', 
        'background-color': '#eee'
      }, 
      listitem_hover: {
        'in': function () {
          var $this = $(this);
          $this.css('background-color', '#fff');
        }, 
        'out': function () {
          var $this = $(this);
          $this.css('background-color', '#eee');
        }
      }
    });

html:

    <div class="list_container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
    </div>
