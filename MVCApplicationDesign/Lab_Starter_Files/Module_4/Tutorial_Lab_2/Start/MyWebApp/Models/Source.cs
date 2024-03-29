using System;
using System.Collections.Generic;

namespace MyWebApp.Models{
    public class Product{
        public int ID {get;set;}
        public string Name {get;set;}
        public double Price {get;set;}
    }
    public class Discount {
        public DateTime Start {get;set;}
        public DateTime End {get;set;}
        public double Rate {get;set;}
    }
    public class ProductListLVM {
        public Discount Discount {get;set;}
        public IList<Product> Products {get;set;}
    }
}