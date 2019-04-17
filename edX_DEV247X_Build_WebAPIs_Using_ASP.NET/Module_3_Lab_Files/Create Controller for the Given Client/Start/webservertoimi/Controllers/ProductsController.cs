using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebServer.Models;

namespace WebServer.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        // GET api/values
        [HttpGet]
        public ActionResult GetProducts(){
            if (FakeData.Products != null){
                return Ok(FakeData.Products.Values.ToArray());
            }else{
                return NotFound();
            }
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult GetProductByID(int id)
        {
            if (FakeData.Products.ContainsKey(id)){
                return Ok(FakeData.Products[id]);
            }else{
                return NotFound();
            }
        }
        
        [HttpGet("price/{low}/{high}")]
        public Product[] GetProductsByFilter(int low, int high){
            var products = FakeData.Products.Values
            .Where(p => p.Price >= low && p.Price <= high).ToArray();
            return products;
        }

        // POST api/values
        [HttpPost]
        public ActionResult CreateNewProduct([FromBody]Product value)
        {
            value.ID = FakeData.Products.Keys.Max() +1;
            FakeData.Products.Add(value.ID, value);
            return Created($"api/products/{value.ID}",value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public ActionResult ModProduct(int id, [FromBody]Product product){
            if (FakeData.Products.ContainsKey(id)){
                var target = FakeData.Products[id];
                target.ID = product.ID;
                target.Name = product.Name;
                target.Price = product.Price;
                return Ok();
            }else{
                return NotFound();
            }
        }
        [HttpPut("raise/{nro}")]
        public ActionResult ModProductRaise(int nro){
            if (FakeData.Products != null){
                foreach (var product in FakeData.Products.Values)
                {
                    product.Price = product.Price + nro;
                }
                return Ok();
            }else{
                return NotFound();
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public ActionResult DeleteProductByID(int id){
            if (FakeData.Products.ContainsKey(id)){
                FakeData.Products.Remove(id);
                return Ok();
            }else{
                return NotFound();
            }
        }
    }
}
