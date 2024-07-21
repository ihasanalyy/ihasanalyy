// const newPromise = new Promise((resolve, reject) => {
//     const isCheck = true
//     if (isCheck) {
//         resolve("sucess")
//     } else {
//         reject("error 404")
//     }
// })
//     .then((result) => {
//         console.log(result, "result")
//     })
//     .catch((error) => {
//         console.log(error, "error")
//     })

fetch("https://api.escuelajs.co/api/v1/products")
    .then((data) =>
        data.json())
    .then(result => {
        console.log(result, "success")
        dataMap(result)
    })
    .catch(error => {
        console.log(error, "error")
    })
const dataMap = (products) => {
    let parent = document.getElementById("parent")
    for (var key of products) {
        console.log(key, "keys")
        parent.innerHTML +=  `<div class="card col-lg-3 col-md-4 col-sm-6 p-0 border-0" style="width: 20%;">
            <img src="${key.images[0]}" class="card-img-top" alt="...">
            <div class="card-body  ">
              <h5 class="card-title">${key.title.slice(0, 10)}</h5>
              <p class="card-text">${key.description.slice(0, 20)}</p>
              <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
          </div>`
    }
}

