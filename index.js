
function search() {
    let mainDiv = document.getElementById('out')
    mainDiv.innerHTML = ''

    // api config
    let limit = 50
    let key = "KLJVCTNIUYVY"

    // serch parameter
    let searchParam = document.getElementById('gifName').value

    let url = `https://g.tenor.com/v1/search?q=${searchParam}&key=${key}&limit=${limit}`
    const tenorRequest = new Request(url)
    let links = []

    fetch(tenorRequest)
        .then(resoponse => resoponse.json())
        .then(data => {
            for (let i=0 ; i<=limit ; i++){
                let gifUrl = data['results'][i]['media'][0]['gif']['url']
                let newDiv = document.createElement('div')
                newDiv.setAttribute('id', 'gif')
                let img = document.createElement('img')
                img.setAttribute('src', gifUrl)
                newDiv.appendChild(img)
                mainDiv.appendChild(newDiv)   
            }
        })
}