/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Test.Uize.Str.Replace Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2013-2016 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Test
	importance: 1
	codeCompleteness: 20
	docCompleteness: 100
*/

/*?
	Introduction
		The =Uize.Test.Uize.Str.Replace= module defines a suite of unit tests for the =Uize.Str.Replace= module.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Test.Uize.Str.Replace',
	builder:function () {
		'use strict';

		return Uize.Test.resolve ({
			title:'Test for Uize.Str.Replace Module',
			test:[
				Uize.Test.requiredModulesTest ('Uize.Str.Replace'),
				Uize.Test.staticMethodsTest ([
					['Uize.Str.Replace.replaceByLookup',[
						['',
							[
								'hello, the dog jumped over the foo. bar bar cat sheep, hello any wool. yes dog, yes dog, three bags there.',
								{foo:'bar',hello:'there',dog:'cat'}
							],
							'there, the cat jumped over the bar. bar bar cat sheep, there any wool. yes cat, yes cat, three bags there.'
						],
						['',
							[
								'<script type="text/javascript">&amp;</script>',
								{
									'<':'&lt;',
									'>':'&gt;',
									'"':'&quot;',
									'&':'&amp;'
								}
							],
							'&lt;script type=&quot;text/javascript&quot;&gt;&amp;amp;&lt;/script&gt;'
						],
						['',
							[
								'<script type="text/javascript">cat &amp; dog</script>',
								{
									'<':'&lt;',
									'>':'&gt;',
									'"':'&quot;',
									'&':'&amp;',
									cat:'feline',
									dog:'canine'
								}
							],
							'&lt;script type=&quot;text/javascript&quot;&gt;feline &amp;amp; canine&lt;/script&gt;'
						]
					]],
					['Uize.Str.Replace.replacerByLookup',[
					]]
				])
			]
		});
	}
});

