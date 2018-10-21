document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');
});
// Initialization
let config = {...}
let client = new JSO(config)
client.callback()

// When your application wants to access the protected data
let f = new Fetcher(client)
let url = 'https://app.asana.com/api/1.0/users/me'
f.fetch(url, {})
	.then((data) => {
		return data.json()
	})
	.then((data) => {
		console.log("I got protected json data from the API", data)
	})
	.catch((err) => {
		console.error("Error from fetcher", err)
	})
	
	function authorizePopup() {
	let opts = {
		redirect_uri: "http://localhost:8001/popupCallback.html"
	}
	client.setLoader(Popup)
	client.getToken(opts)
		.then((token) => {
			console.log("I got the token: ", token)
		})
		.catch((err) => {
			console.error("Error from passive loader", err)
		})
}
$("#btnAuthenticate").on('click', (e) => {
	e.preventDefault()
	authorizePopup()
})