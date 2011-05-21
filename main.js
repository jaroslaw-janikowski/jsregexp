function view_onOpen()
{
}

function isArray(obj) {
   if (obj.constructor.toString().indexOf("Array") == -1)
      return false;
   else
      return true;
}

function testExpression()
{
	Matches.value = "";
	var re_text = RegularExpression.value;
	if (re_text == "") 
	{
		view.alert("Regular expression is empty :(");
		return;
	}
	if (TestedText.value == "")
	{
		view.alert("Text is empty :(");
		return;
	}

	var re_options = '';
	if (re_option_g.value) 
		re_options += 'g';
	if (re_option_i.value)
		re_options += 'i';

	if ((re_text.charAt(0) == '/') && (re_text.charAt(re_text.length-1) == '/'))
		re_text = re_text.substr(1,re_text.length-2);

	re = new RegExp(re_text,re_options);
	var found = TestedText.value.match(re);
	if (!isArray(found)) return;
	for (var i=0;i<found.length;i++)
	{
		Matches.value += found[i] + ', ';
	}
	ResultsCount.innerText = found.length;
}

function RegularExpression_onkeydown()
{
	if (event.keycode == 13)
		testExpression();
}