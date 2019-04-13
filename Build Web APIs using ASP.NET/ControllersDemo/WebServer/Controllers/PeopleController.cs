using Microsoft.AspNetCore.Mvc;
using WebServer.Models;
using System.Linq;

namespace WebServer.Controllers
{
    [Route("api/people")]
    public class PeopleController : Controller
    {
        //get all people
        [HttpGet]
        public Person[] Get()
        {
            return Repository.People.ToArray();
        }

        //get person by ID
        [HttpGet("{id}")]
        public Person Get(int id)
        {
            return Repository.GetPersonByID(id);
        }

        //Create new person
        [HttpPost]
        public void Post([FromBody]Person person)
        {
            Repository.AddPerson(person);
        }

        //Replace existing person
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Person person)
        {
            Repository.ReplacePersonByID(id, person);
        }

        //Delete existing person
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Repository.RemovePersonByID(id);
        }
    }
}