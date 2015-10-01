/**
 * Created by 이상훈 on 2015-10-01.
 */
var names = new List();
names.append('이상훈');
names.append('이상희');
names.append('황경애');
names.append('이현');
names.append('조정아');
names.append('바보');
var spanConsole = document.getElementById("test-console");
spanConsole.innerText = names.toString();
names.remove('바보');
spanConsole.innerText = spanConsole.outerHTML + names.toString();
//document.getElementById("test-console").innerText(names.toString());

