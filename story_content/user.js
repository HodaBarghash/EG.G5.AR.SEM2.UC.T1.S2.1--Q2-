function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5XBOhOKca9P":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwLwjR_P_Dppbk_2zaEKsavr_yW1lPLWYBSWvTycPScE9fPmGWY1ATD7-rINeBKs_JtlQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

