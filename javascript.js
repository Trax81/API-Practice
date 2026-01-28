// http://www.omdbapi.com/?i=tt3896198&apikey=11a85b25

async function main() {
    const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=11a85b25")
    const data = await response.json()
    console.log (data)
    emailRef.innerHTML = data.email
}
main();