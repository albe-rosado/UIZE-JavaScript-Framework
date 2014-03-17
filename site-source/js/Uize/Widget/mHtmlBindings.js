/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widget.mHtmlBindings Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2013-2014 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Class
	importance: 7
	codeCompleteness: 30
	docCompleteness: 10
*/

/*?
	Introduction
		The =Uize.Widget.mHtmlBindings= mixin implements features to provide various different ways to bind state properties to DOM nodes.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Widget.mHtmlBindings',
	builder:function () {
		'use strict';

		var
			/*** Variables for Scruncher Optimization ***/
				_Uize = Uize,
				_forEach = _Uize.forEach,
				_pairUp = _Uize.pairUp,

			/*** Variables for Performance Optimization ***/
				_applyAll = _Uize.applyAll
		;

		return function (_class) {
			_class.declare ({
				alphastructor:function () {
					var m = this;

					m.once (
						'wired',
						function () {
							/*** wire up handlers for state properties that have HTML bindings ***/
								var _wiringsForHtmlBindings = {};
								_forEach (
									m.Class.mHtmlBindings_bindings,
									function (_bindings,_property) {
										_wiringsForHtmlBindings ['Changed.' + _property] = function () {
											_applyAll (m,_bindings,[m.get (_property)]);
										};
									}
								);
								m.wire (_wiringsForHtmlBindings);

							/*** update UI ***/
								for (var _eventName in _wiringsForHtmlBindings)
									_wiringsForHtmlBindings [_eventName] ()
								;
						}
					);
				},

				staticMethods:{
					htmlBindings:function (_bindings) {
						function _resolvePropertyUpdater (_propertyName,_updater) {
							if (typeof _updater == 'string') {
								var
									_nodeNameAndBindingType = _updater.split (':'),
									_nodeName = _nodeNameAndBindingType [0],
									_bindingType = _nodeNameAndBindingType [1] || 'value'
								;
								if (_bindingType == 'value') {
									_updater = function (_propertyValue) {
										this.setNodeValue (
											_nodeName,
											_propertyValue == null ? '' : _propertyValue
										);
									};
								} else if (_bindingType == 'html' || _bindingType == 'innerHTML') {
									_updater = function (_propertyValue) {
										this.setNodeInnerHtml (_nodeName,_propertyValue == null ? '' : _propertyValue);
									};
								} else if (_bindingType == '?') {
									_updater = function (_propertyValue) {this.displayNode (_nodeName,!!_propertyValue)};
								} else if (_bindingType.charCodeAt (0) == 64) {
									var _attributeName = _bindingType.slice (1);
									_updater = function (_propertyValue) {
										var _node = this.getNode (_nodeName);
										_node && _node.setAttribute (_attributeName,_propertyValue);
									};
								} else if (_bindingType.slice (0,6) == 'style.') {
									var _stylePropertyName = _bindingType.slice (6);
									_updater = function (_propertyValue) {
										this.setNodeStyle (_nodeName,_pairUp (_stylePropertyName,_propertyValue));
									};
								} else {
									_updater = function (_propertyValue) {
										this.setNodeProperties (_nodeName,_pairUp (_bindingType,_propertyValue));
									};
								}
								_updater.propertyName = _propertyName;
								_updater.nodeName = _nodeName;
								_updater.bindingType = _bindingType;
							}
							return _updater;
						}
						var _htmlBindings = this.mHtmlBindings_bindings;
						_forEach (
							_bindings,
							function (_updater,_property) {
								var _propertyHtmlBindings = _htmlBindings [_property] || (_htmlBindings [_property] = []);
								function _resolveAndPushUpdater (_updater) {
									_propertyHtmlBindings.push (_resolvePropertyUpdater (_property,_updater));
								}
								_Uize.isArray (_updater)
									? _forEach (_updater,_resolveAndPushUpdater)
									: _resolveAndPushUpdater (_updater)
								;
							}
						);
						/*?
							Static Methods
								Uize.Widget.mHtmlBindings.htmlBindings
									.

									SYNTAX
									.........................................
									MyWidgetClass.htmlBindings (bindingsOBJ);
									.........................................

									EXAMPLE
									......................................................
									MyNamespace.MyWidgetClass = Uize.Widget.mHtmlBindings.subclass ({
										stateProperties:{
											foo:{value:'bar'}
										},
										htmlBindings:{
											foo:'foo'
										}
									});
									......................................................

									### Types of HTML Binding
										Binding to Inner HTML, with HTML-encoding
											.

										Binding to Inner HTML, As Is
											.

										Binding to Properties
											.

										Binding to Style Properties
											.

										Free Form Binding, Using a Function
											.
						*/
					}
				},

				staticProperties:{
					mHtmlBindings_bindings:{}
				}
			});
		};
	}
});

