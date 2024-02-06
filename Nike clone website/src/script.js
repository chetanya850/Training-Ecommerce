const data = [
  {
    id: 1,
    name: 'Nike React Infinity Run Flyknit',
    brand: 'NIKE',
    gender: 'MEN',
    category: 'RUNNING',
    price: 160,
    is_in_inventory: true,
    items_left: 3,
    imageURL:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg',
    slug: 'nike-react-infinity-run-flyknit',
    featured: 0
  },
  {
    id: 2,
    name: 'Nike React Miler',
    brand: 'NIKE',
    gender: 'MEN',
    category: 'RUNNING',
    price: 130,
    is_in_inventory: true,
    items_left: 3,
    imageURL:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg',
    slug: 'nike-react-miler',
    featured: 0
  },
  {
    id: 3,
    name: 'Nike Air Zoom Pegasus 37',
    brand: 'NIKE',
    gender: 'WOMEN',
    category: 'RUNNING',
    price: 120,
    is_in_inventory: true,
    items_left: 3,
    imageURL:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg',
    slug: 'nike-air-zoom-pegasus-37',
    featured: 0
  },
  {
    id: 4,
    name: 'Nike Joyride Run Flyknit',
    brand: 'NIKE',
    gender: 'WOMEN',
    category: 'RUNNING',
    price: 180,
    is_in_inventory: true,
    items_left: 3,
    imageURL:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg',
    slug: 'nike-joyride-run-flyknit',
    featured: 0
  },
  {
    id: 5,
    name: 'Nike Mercurial Vapor 13 Elite FG',
    brand: 'NIKE',
    gender: 'WOMEN',
    category: 'FOOTBALL',
    price: 250,
    is_in_inventory: true,
    items_left: 3,
    imageURL:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg',
    slug: 'nike-mercurial-vapor-13-elite-fg',
    featured: 0
  },
  {
    id: 6,
    name: 'Nike Phantom Vision Elite Dynamic Fit FG',
    brand: 'NIKE',
    gender: 'WOMEN',
    category: 'FOOTBALL',
    price: 150,
    is_in_inventory: true,
    items_left: 3,
    imageURL:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s1amp7uosrn0nqpsxeue/phantom-vision-elite-dynamic-fit-fg-firm-ground-soccer-cleat-19Kv1V.jpg',
    slug: 'nike-phantom-vision-elite-dynamic-fit-fg',
    featured: 0
  },
  {
    id: 9,
    name: 'Nike Mercurial Superfly 7 Pro MDS FG',
    brand: 'NIKE',
    gender: 'MEN',
    category: 'FOOTBALL',
    price: 137,
    is_in_inventory: true,
    items_left: 3,
    imageURL:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-a52a8aec-22dc-4982-961b-75c5f4c72805/mercurial-superfly-7-pro-mds-fg-firm-ground-soccer-cleat-mhcpdN.jpg',
    slug: 'nike-mercurial-superfly-7-pro-mds-fg',
    featured: 0
  },
  {
    id: 11,
    name: 'Nike Air Max 90',
    brand: 'NIKE',
    gender: 'KIDS',
    category: 'CASUAL',
    price: 100,
    is_in_inventory: true,
    items_left: 3,
    imageURL:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg',
    slug: 'nike-air-max-90',
    featured: 0
  }
]

const shoesss = document.getElementById('shoes')

// data.forEach(item => {
//   // console.log(shoesss)
//   newDiv = document.createElement('div')

//   newDiv.innerHTML = `

// <div  class="max-w-sm card rounded overflow-hidden shadow-lg my-2 mx-2">
//         <img
//           class="w-full"
//           src="${item.imageURL}"
//           alt="Sunset in the mountains"
//         />
//         <div class="px-6 py-4">
//           <div class="font-bold text-xl mb-2">${item.name}</div>
//           <p class="text-gray-700 text-base">$
// ${item.price}
//           </p>
//         </div>
//         <div class="px-6 pt-4 pb-2">
//           <span
//             class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//             >${item.category}</span
//           >
//                     <span
//             class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//             >${item.gender}</span
//           >
//         </div>
//       </div>`

//   shoesss.appendChild(newDiv)
// })

// const searchData = () => {
//   let sd = document.getElementById('search_data')
//   let Show_div = ''
//   console.log(sd)

//   for (let i = 0; i < data.length; i++) {
//     if (sd == '') {
//       console.log(data)
//       location.replace('./index.html')
//     } else if (data[i].name.toLowerCase().includes(sd)) {
//       Show_div += `
// <div  class="max-w-sm card rounded overflow-hidden shadow-lg my-2 mx-2">
//         <img
//           class="w-full"
//           src="${item.imageURL}"
//           alt="Sunset in the mountains"
//         />
//         <div class="px-6 py-4">
//           <div class="font-bold text-xl mb-2">${item.name}</div>
//           <p class="text-gray-700 text-base">$
// ${item.price}
//           </p>
//         </div>
//         <div class="px-6 pt-4 pb-2">
//           <span
//             class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//             >${item.category}</span
//           >
//                     <span
//             class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//             >${item.gender}</span
//           >
//         </div>
//       </div>`
//     }
//   }
//   document.getElementById('shoes').innerHTML = Show_div
// }
// element = ` <div class="max-w-sm rounded overflow-hidden shadow-lg">
//         <img
//           class="w-full"
//           src="./images/revolution-7-road-running-shoes-dC34tK.png"
//           alt="Sunset in the mountains"
//         />
//         <div class="px-6 py-4">
//           <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
//           <p class="text-gray-700 text-base">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//             Voluptatibus quia, nulla! Maiores et perferendis eaque,
//             exercitationem praesentium nihil.
//           </p>
//         </div>
//         <div class="px-6 pt-4 pb-2">
//           <span
//             class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//             >#photography</span
//           >
//           <span
//             class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//             >#travel</span
//           >
//           <span
//             class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//             >#winter</span
//           >
//         </div>
//       </div>`

// shoesss.append(element)

const searchData = () => {
  let sd = document.getElementById('search_data').value.toLowerCase()
  let showDiv = ''

  document.getElementById('firstimage').hidden = true

  console.log(sd)
  if (sd === '') {
    document.getElementById('firstimage').hidden = false
    showAllData()
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].name.toLowerCase().includes(sd)) {
        showDiv += `
          <div class="max-w-sm card rounded overflow-hidden shadow-lg my-2 mx-2">
            <img class="w-full" src="${data[i].imageURL}" alt="Product Image" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">${data[i].name}</div>
              <p class="text-gray-700 text-base">$${data[i].price}</p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                ${data[i].category}
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                ${data[i].gender}
              </span>
              
            </div>

            
            
          </div>
          
          `
      }
    }
    document.getElementById('shoes').innerHTML = showDiv
  }
}

const showAllData = () => {
  let showDiv = ''

  data.forEach(item => {
    showDiv += `
      <div class="max-w-sm card rounded overflow-hidden shadow-lg my-2 mx-2">
        <img class="w-full" src="${item.imageURL}" alt="Product Image" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">${item.name}</div>
          <p class="text-gray-700 text-base">$${item.price}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${item.category}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${item.gender}
          </span>
        </div>
      </div>`
  })

  document.getElementById('shoes').innerHTML = showDiv
}

// Initial display of all data
showAllData()
