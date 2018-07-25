'use strict';
let data = {
    phones: [
        {
            id: "1",
            categoryId: "1",
            name: "Apple iPhone 5c",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 823,
            image: "images/iphone5c-selection-hero-2013.png",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "2",
            categoryId: "1",
            name: "Apple iPhone 6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 953,
            image: "images/51u6y9Rm8QL._SY300_.jpg",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "3",
            categoryId: "4",
            name: "Lenovo A6000",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 764,
            image: "images/_35%20(1).JPG",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "4",
            categoryId: "5",
            name: "Nokia Lumia 1520",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 674,
            image: "images/Lumia1520-Front-Back-png.png",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "5",
            categoryId: "3",
            name: "HTC One",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 674,
            image: "images/htc-one-m7-802w-dual-sim-silver.jpg",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "6",
            categoryId: "2",
            name: "Samsung Galaxy S6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 674,
            image: "images/Agnes_Case_for_Samsung_Galaxy_S6_(1)__92643_thumb.jpg",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        }
    ]
};
const moduleCard = document.querySelector('.module-card-bottom');

const container = document.querySelector('.container');
const template = document.querySelector('#template').innerHTML.trim();

const func = Handlebars.compile(template);

// function somersBy(element) {
//     return element === event.target
// }

function clickCardMove(event) {

    if (btnArr.includes(event.target)) {
        // alert('Pojontak')
        // const hideShow = document.querySelector('.hide');
        event.target.classList.toggle('show');
        console.log(hideShow);

    }
    // return console.log(event)
}

// let data = {
//     phones: [
//         {
//             id: "1",
//             categoryId: "1",
//             name: "Apple iPhone 5c",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 823,
//             image: "images/iphone5c-selection-hero-2013.png",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "2",
//             categoryId: "1",
//             name: "Apple iPhone 6",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 953,
//             image: "images/51u6y9Rm8QL._SY300_.jpg",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "3",
//             categoryId: "4",
//             name: "Lenovo A6000",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 764,
//             image: "images/_35%20(1).JPG",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "4",
//             categoryId: "5",
//             name: "Nokia Lumia 1520",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 674,
//             image: "images/Lumia1520-Front-Back-png.png",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "5",
//             categoryId: "3",
//             name: "HTC One",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 674,
//             image: "images/htc-one-m7-802w-dual-sim-silver.jpg",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         },
//         {
//             id: "6",
//             categoryId: "2",
//             name: "Samsung Galaxy S6",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
//             price: 674,
//             image: "images/Agnes_Case_for_Samsung_Galaxy_S6_(1)__92643_thumb.jpg",
//             cpu: "1.3GHz Apple A6",
//             camera: "8mp (3264x2448)",
//             size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
//             weight: "132 grams (4.7 ounces) with battery",
//             display: "4.0 326 pixel density",
//             battery: "1480 mAh",
//             memory: "16GB, 32GB and RAM 1 GB"
//         }
//     ]
// };

const funcApply = func(data);
container.innerHTML = funcApply;
const btn = document.querySelectorAll('.module-card-button');
console.log(btn);
const btnArr = Array.from(btn);


const clickCard = container.addEventListener('click', clickCardMove);