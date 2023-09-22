const scroller = document.querySelector("#scroller");
const output = document.querySelector("#output");

scroller.addEventListener("scroll", (event) => {
	const scrollTop = Math.round(scroller.scrollTop);
	const clientHeight = scroller.clientHeight;
	const scrollHeight = scroller.scrollHeight;
	const scrollHeightHalf = scroller.scrollHeight / 2;
	const scrollBottom = Math.round(Math.abs(scroller.scrollTop - scroller.scrollHeight + scroller.clientHeight));
	const scrollThreshold = 30 / 100;
	const upCheck = clientHeight * scrollThreshold;
	
	output.textContent = `scrollTop: ${scrollTop} /// clientHeight: ${clientHeight} /// scrollHeight: ${scrollHeight} /// Half: ${scrollHeightHalf} /// scrollBottom: ${scrollBottom} /// upCheck: ${upCheck} /// scrolledUp: ${scrollBottom > upCheck}`;
});
