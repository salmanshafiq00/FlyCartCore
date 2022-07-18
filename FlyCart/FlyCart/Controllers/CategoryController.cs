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
    public class CategoryController : Controller
    {
        private readonly FlyCartContext flyCartContext;

        public CategoryController(FlyCartContext flyCartContext)
        {
            this.flyCartContext = flyCartContext;
        }
        public IActionResult Index()
        {
            var categoriesList = flyCartContext.Categories.ToList();
            return Json(categoriesList);
        }

        public IActionResult GetCategory(int CategoryID)
        {
            var productDetails = flyCartContext.Categories.Where(w => w.CategoryID == CategoryID);
            return Json(productDetails);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Category category)
        {
            flyCartContext.Categories.Add(category);
            flyCartContext.SaveChanges();
            return Ok("Data is inserted Successfully");
        }

        [HttpPut]
        public IActionResult Edit([FromBody] Category category)
        {
            flyCartContext.Entry(category).State = EntityState.Modified;
            flyCartContext.SaveChanges();
            return Ok("Edited Successfully");
        }
        [HttpDelete]
        public IActionResult Delete(int CategoryID)
        {
            Category category = flyCartContext.Categories.Where(w => w.CategoryID == CategoryID).FirstOrDefault();
            flyCartContext.Categories.Remove(category);
            flyCartContext.SaveChanges();
            return Ok("Deleted Successfully");
        }

    }
}
