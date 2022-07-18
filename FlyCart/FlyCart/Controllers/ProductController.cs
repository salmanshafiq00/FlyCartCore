using FlyCart.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlyCart.Controllers
{
    [EnableCors("MyPolicy")]
    public class ProductController : Controller
    {
        private readonly FlyCartContext flyCartContext;
        
        public ProductController(FlyCartContext flyCartContext)
        {
            this.flyCartContext = flyCartContext;
        }
        
        public IActionResult Index()
        {
            var productList = flyCartContext.Products.ToList();
            return Json(productList);
        }
        
        public IActionResult GetProduct(int ProductID)
        {
            var productDetails = flyCartContext.Products.Where(w => w.ProductID == ProductID);
            return Json(productDetails);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Product product)
        {
            flyCartContext.Products.Add(product);
            flyCartContext.SaveChanges();
            return Ok("Data is inserted Successfully");
        }

        [HttpPut]
        public IActionResult Edit([FromBody] Product product)
        {
            flyCartContext.Entry(product).State = EntityState.Modified;
            flyCartContext.SaveChanges();
            return Ok("Edited Successfully");
        }
        [HttpDelete]
        public IActionResult Delete(int ProductID)
        {
            Product product = flyCartContext.Products.Where(w => w.ProductID == ProductID).FirstOrDefault();
            flyCartContext.Products.Remove(product);
            flyCartContext.SaveChanges();
            return Ok("Product Deleted");
        }


    }
}
