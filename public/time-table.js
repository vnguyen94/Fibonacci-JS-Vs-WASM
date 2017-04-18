function createTermsArray(e,t){for(var r=[],n=1;n<=e;++n)r.push(n*t);return r}function testTermsArray(e){return e.reduce(function(e,t){return e.push({term:t,wasm:testAndExecute(t,findNthFibonacciTermWASM).time,js:testAndExecute(t,findNthFibonacciTermJS).time}),e},[])}function runTimeTableTests(e,t,r){for(var n=createTermsArray(e,t),i=[],m=[],a=0;a<r;++a){var u=testTermsArray(n);i.push(u)}for(var a=0;a<e;++a){for(var l=0,c=0,d=0;d<r;++d)l+=i[d][a].wasm,c+=i[d][a].js;m.push({term:n[a],wasm:l/r,js:c/r})}return m}function createTimeTable(e){var t=e.map(function(e){return'<tr>    <td width="200">'+e.term+'</td>    <td width="200">'+e.js+'</td>    <td width="200">'+e.wasm+"</td></tr>"}).reduce(function(e,t){return e+t},"");timeTable.innerHTML='<tr>    <th width="200">Term</th>    <th width="200">JavaScript</th>    <th width="200">WebAssembly</th></tr>'+t}var timeTableIncrement=document.getElementById("time-table-increment"),timeTableMultiplier=document.getElementById("time-table-multiplier"),timeTableRuns=document.getElementById("time-table-runs"),timeTableButton=document.getElementById("time-table-button"),timeTable=document.getElementById("time-table");timeTableButton.addEventListener("click",function(){createTimeTable(runTimeTableTests(timeTableIncrement.value,timeTableMultiplier.value,timeTableRuns.value))});