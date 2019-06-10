using Microsoft.AspNetCore.Mvc;
using MyWebApp.Models;

namespace MyWebApp.Controllers {
    public class FilmController : Controller{
        [HttpGet]
        public IActionResult Create(){
            return View();
        }

        [HttpPost]
        public IActionResult Create(Film film){
            if(this.ModelState.IsValid){
                //create a new film
                return View("Created");
            }
            else {
                return View("Error");
            }
        }
        [HttpGet]
        public IActionResult Update(){
            return View();
        }
        [HttpPost]
        public IActionResult Update(Film film){
            if (ModelState.IsValid){
                //Update the existing Film
                return View("Updated");
            }
            else {
                return View("Error");
            }
        }
    }
}