
const circ = new mojs.Shape({
	top: 0,
	left: 0,
	isShowStart: true,
	stroke: "#3498db",
	strokeWidth: 6,
	fill: "none",
	radius: {15: 30},
	opacity: {1:0},
	duration: 300
}).then({
	strokeWidth: 0,
	scale: {1:2, easing: "sin.in"},
	duration: 300
}).play();
	
const sparks = new mojs.Burst({
	top: 0,
	left: 0,
	radius: {0:30, easing: "cubic.out"},
	angle: {0:90, easing: "quad.out"},
	count: 50,
	children: {
		shape: "cross",
		stroke: "#3498db",
		points: 12,
		radius: 10,
		fill: "none",
		angle: {0:360},
		duration: 600
	}
}).play();
	
const lines = new mojs.Burst({
	radius: {0 : 1000, easing: "cubic.out"},
	angle: {0: 1440, easing: "cubic.out"},
	left: 0,
	top: 0,
	children: {
		shape: "line",
		radius: {1 : 100, easing: "elastic.out"},
		fill: "none",
		stroke: ["#34495e", "#3498db"],
		delay: "stagger(10)",
		duration: 1300
	}
}).play();
		
setInterval(() => {
	var w = window.innerWidth / 2;
	var h = window.innerHeight / 2;
		
	circ
	.tune({x: w, y:h})
	.replay();
	
	sparks
	.tune({x: w, y:h})
	.replay();
	

	lines
	.tune({x: w, y:h})
	.replay();
}, 1300);
