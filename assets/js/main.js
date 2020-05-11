const tabs = document.querySelectorAll('[data-tab-target]'); //buttons
const tabContents = document.querySelectorAll('[data-tab-content]'); //images per button

tabs.forEach(tab => {
	tab.addEventListener('click', () =>{
		const target = document.querySelector(tab.dataset.tabTarget);
		tabContents.forEach(tabContent => tabContent.classList.remove('active'));
		tabs.forEach(tab => tab.classList.remove('active'));
		tab.classList.add('active');
		target.classList.add('active');
	});
});