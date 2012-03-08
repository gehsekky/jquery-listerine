(function ($) {
	var defaults = {
		cols: 1,
		wrapper_style: {
			'position': 'relative'
		},
		column_style: {
			'text-align': 'center'
		},
		listitem_style: {
			
		},
		listitem_style_hover: {
		
		},
		wrapper_class: 'listerine-wrapper',
		column_class: 'listerine-column',
		listitem_class: 'listerine-griditem', 
		transform: 'columns',
		listitem_hover: {
			in: function () {
			
			}, 
			out: function () {
			
			}
		}
	};
	
	$.fn.listerine = function(action, options) {
		if (typeof (action) === 'object') {
			options = action;
			action = 'initialize';
		}

		options = $.extend({}, defaults, options);
		
		this.each(function (index, value) {
			var root = this;
			switch(action) {
				case 'initialize':
					if ($('.' + options.wrapper_class, this).length === 0) {
						switch (options.transform) {
							case 'columns':
								(function (that) {
									var num_items = Math.ceil($(that).children().length / options.cols);
									var fragment = document.createDocumentFragment();
									
									// build columns
									for (var i = 0; i < options.cols; i++) {
										var $col = $(document.createElement('div'))
											.addClass(options.column_class)
											.css('width', Math.floor(100 / options.cols) + '%')
											.css('float', 'left')
											.css(options.column_style)
											.append($(that).children().slice(0, num_items));
										
										fragment.appendChild($col[0]);
									}
									
									// build wrapper for columns
									$(document.createElement('div'))
										.addClass(options.wrapper_class)
										.appendTo(root)
										.css(options.wrapper_style)
										.append(fragment);
								})(this);
								break;
							case 'grid':
								(function (that) {
									// build wrapper
									var $wrapper = $(document.createElement('div'))
										.addClass(options.wrapper_class)
										.css(options.wrapper_style)
										.append($(that).children()
													.addClass(options.listitem_class)
													.css('float', 'left')
													.css(options.listitem_style)
												)
										.appendTo(root);
										
									$('.' + options.listitem_class).hover(options.listitem_hover.in, options.listitem_hover.out);
								})(this);
								break;
							default:
								// unrecognized transform value
								break;
						}
					}
					break;
				default:
					// unrecognized command
					break;
			}
		});
		
		return this;
	}
})(jQuery);