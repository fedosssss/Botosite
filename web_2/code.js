function home_scroll(){
    const el = document.getElementById("first_panel");
    el.scrollIntoView({block: "end", behavior: "smooth"}); // Прокрутка до верхней границы
}

function about_scroll(){
  const el = document.getElementById("aboutt");
  el.scrollIntoView({block: "center", behavior: "smooth"}); // Прокрутка до верхней границы
}

function port_scroll(){
  const el = document.getElementById("port");
  el.scrollIntoView({block: "center", behavior: "smooth"}); // Прокрутка до верхней границы
}

function contacts_scroll(){
  const el = document.getElementById("contactt");
  el.scrollIntoView({block: "center", behavior: "smooth"}); // Прокрутка до верхней границы
}

var header = $('#header_scroll'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 200 && scrolled > scrollPrev) {
		header.addClass('out');
	} 
  else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});

$(window).scroll(function() {
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  var scroll = ($window.scrollTop() + $window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
        $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();

var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}
const projects = [
	{
		nr: '001',
		name: 'WinIR - remote control of your pc',
		link: 'https://github.com/fedosssss'
	},
	{
		nr: '002',
		name: 'Piyavka Lite',
		link: 'https://github.com/fedosssss'
	},{
		nr: '003',
		name: 'Piyavka Hard',
		link: 'https://github.com/fedosssss'
	}];
const app = document.getElementById('app');

projects.forEach(project => {
	const title = `${project.name} - #${project.nr}`;
	const imgURL = project.nr + '.jpg';
	console.log(imgURL);
	const projectEl = document.createElement('a');
	projectEl.classList.add('project');
	projectEl.href = project.link;
	projectEl.target = '_blank';

	projectEl.innerHTML = `
        <img src="${imgURL}" alt="${title}"/>
		<p>
			${title}
		</p>
    `;

	app.appendChild(projectEl);
});