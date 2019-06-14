using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MyWebApp.Models;

namespace MyWebApp.Controllers {
    public class ProductController : Controller {
        public IActionResult Test(){
            var vm = new ProductListVM();
            vm.Discount = new Discount {
                Start = DateTime.Today,
                End = DateTime.Today.AddDays(30),
                Rate = 0.75
            };
            vm.Products = new List<Product>();
            vm.Products.Add(new Product (101, "Book", 20));
            vm.Products.Add(new Product (102, "Bike", 30));
            vm.Products.Add(new Product (103, "Fireworks", 40));
            return View("ProductList", vm);
        }
        //edit single product
        public IActionResult Edit(){
            var product = new Product(901,"Rocket", 99.99);
            return View(product);
        }
        //show product list
        public IActionResult Show(){
            var products = new List<Product>();
            products.Add(new Product(101,"Apple", 19.99));
            products.Add(new Product(201,"Bike", 29.99));
            products.Add(new Product(301,"Couch", 39.99));
            return View(products);
        }
    }
}