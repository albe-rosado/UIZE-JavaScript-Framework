/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Test.Uize.Parse.JavaPropertiesUnicode.Document Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2015 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Test
	importance: 1
	codeCompleteness: 100
	docCompleteness: 100
*/

/*?
	Introduction
		The =Uize.Test.Uize.Parse.JavaPropertiesUnicode.Document= module defines a suite of unit tests for the =Uize.Parse.JavaPropertiesUnicode.Document= module.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Test.Uize.Parse.JavaPropertiesUnicode.Document',
	superclass:'Uize.Test.ParserTest',
	builder:function (_superclass) {
		'use strict';

		var _unicodeJavaPropertiesDocument = [
			'foo=bar',
			'ƒöö=bar',
			'baz=ǫûẋ',
			'ƀåž=ǫûẋ',
			'foo=\\\\u013D'
		].join ('\n');

		return _superclass.subclass ({
			staticProperties:{parserClass:'Uize.Parse.JavaPropertiesUnicode.Document'},

			set:{
				title:'Test for Uize.Parse.JavaPropertiesUnicode.Document Module',
				test:[
					Uize.Test.requiredModulesTest ('Uize.Parse.JavaPropertiesUnicode.Document'),
					Uize.Test.ParserTest.parserTest (
						'A Unicode Java properties document can be parsed',
						[_unicodeJavaPropertiesDocument],
						{
							items:{length:5},
							isValid:true
						}
					),
					Uize.Test.ParserTest.serializerTest (
						'A Unicode Java properties document can be serialized',
						_unicodeJavaPropertiesDocument,
						_unicodeJavaPropertiesDocument
					)
				]
			}
		});
	}
});

