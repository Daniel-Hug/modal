function modal(classStr, msg, buttonNames, callback) {
	var modalOuter = document.createElement('div');
	var modalInner = document.createElement('div');
	var msgEl = document.createElement('p');
	modalOuter.className = classStr && classStr !== '' ? 'model-backdrop ' + classStr : 'model-backdrop';
	modalInner.className = 'model';

	msgEl.textContent = msg;

	modalOuter.appendChild(modalInner);
	modalInner.appendChild(msgEl);

	function modalBtnClick() {
		modalOuter.parentNode.removeChild(modalOuter);
		if (typeof callback === 'function') callback(this.textContent);
	}

	for (var i = 0; i < buttonNames.length; i++) {
		var button = document.createElement('button');
		button.textContent = buttonNames[i];
		modalInner.appendChild(button);
		button.addEventListener('click', modalBtnClick);
	}

	document.body.appendChild(modalOuter);
}