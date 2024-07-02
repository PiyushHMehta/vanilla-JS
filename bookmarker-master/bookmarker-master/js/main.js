// listen for form submit
document.querySelector('#myForm').addEventListener('submit', saveBookmark);


// save bookmark
function saveBookmark(e) {
	// prevent form from submitting
	e.preventDefault();

	// get form values
	var siteName = document.querySelector('#siteName').value;
	var siteUrl = document.querySelector('#siteUrl').value;

	const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
	const regex = new RegExp(expression);

	var bookmark = {
		name: siteName,
		url: siteUrl
	}

	// clear fields
	document.querySelector('#siteName').value = '';
	document.querySelector('#siteUrl').value = '';

	// validate
	if (!siteUrl.match(regex)) {
		alert('Please use a valid url');

		return false;
	}
	if (siteName === '' || siteUrl === '') {
		alert('Please fill in all the fields');
		return false;
	}


	// test if bookmarks is null
	if (localStorage.getItem('bookmarks') === null) {
		// initialize array
		var bookmarks = [];
		// add bookmark to bookmarks
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	} else {
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}

	fetchBookmarks();
}

// delete bookmark
function deleteBookmark(url) {
	// get bookmarks from localstorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	// loop through bookmarks
	for (var i = 0; i < bookmarks.length; i++) {
		if (bookmarks[i].url === url) {
			bookmarks.splice(i, 1);
		}
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
		fetchBookmarks();
	}
}


// fetch bookmarks
function fetchBookmarks() {
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	// get output id
	var bookmarksResults = document.querySelector('#bookmarksResults');

	// build output
	bookmarksResults.innerHTML = '';
	for (var i = 0; i < bookmarks.length; i++) {
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;

		bookmarksResults.innerHTML += 
			'<div class="well">' +
			'<h3>' + name +
			' <a class="btn btn-default" target="_blank" href="' + url + '">Visit</a> ' +
			' <a onclick="deleteBookmark(\'' + url + '\')" class="btn btn-danger" href="#">Delete</a> '
			'</h3>' +
			'</div>'

	}
}
