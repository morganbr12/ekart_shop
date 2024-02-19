import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products = [
    {
      id: 1,
      name: "Nike React Infinity Run Flyknit",
      description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6,7,8,9,10,11],
      color: ["White", "Black", "Blue"],
      price: 160,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/45544e10-1e4c-437d-8340-dc4e9a9fbead/react-infinity-run-flyknit-3-road-running-shoes-TXLsbD.png",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 2,
      name: "KONFA",
      description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6,7,8,9,10,11],
      color: ["White", "Black", "Blue"],
      price: 100,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://m.media-amazon.com/images/I/61g3PwPZP2L._AC_SL1024_.jpg",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 3,
      name: "Nike Airforce 1",
      description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6,7,8,9,10,11],
      color: ["Black", "Red"],
      price: 800,
      discountedPrice: 300,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://shopwice.com/wp-content/uploads/2023/05/Nike-Airforce-1-Black-Red.webp",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 4,
      name: "Nike Airforce 1",
      description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6,7,8,9,10,11],
      color: ["Black", "Red"],
      price: 800,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "https://shopwice.com/wp-content/uploads/2023/05/Nike-Airforce-1-Black-Red.webp",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 5,
      name: "Nike Airforce 1",
      description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6,7,8,9,10,11],
      color: ["Black", "Red"],
      price: 800,
      discountedPrice: 100,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://shopwice.com/wp-content/uploads/2023/05/Nike-Airforce-1-Black-Red.webp",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 6,
      name: "Nike Airforce 1",
      description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6,7,8,9,10,11],
      color: ["Black", "Red"],
      price: 800,
      discountedPrice: 150,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://shopwice.com/wp-content/uploads/2023/05/Nike-Airforce-1-Black-Red.webp",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 7,
      name: "Nike Airforce 2",
      description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6,7,8,9,10,11],
      color: ["Black", "Red"],
      price: 800,
      is_in_inventory: false,
      items_left: 3,
      imageURL: "https://shopwice.com/wp-content/uploads/2023/05/Nike-Airforce-1-Black-Red.webp",
      slug: "nike-react-infinity-run-flyknit"
    },
  ]

  productInStock = this.products.filter(p => p.is_in_inventory === true).length;
  prouctOutOfStock = this.products.filter(p =>p.is_in_inventory === false).length

  selectedRadioButton: String = "all";

  onFilterSelected(value: String) {
    this.selectedRadioButton = value;
  }
  

}
