﻿using System;
using MyApp.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace MyApp
{
    class Program

    {
        static void Main(string[] args)
        {
            var dbContext = new sakilaContext();
            /* var actors = dbContext.Actor.ToList();
            foreach (var a in actors){
                System.Console.WriteLine($"ID:{a.ActorId} Name:{a.FirstName} {a.LastName}");
            } */
            //list all Films including their actors
            var records = dbContext.Film.Include(f => f.FilmActor).ThenInclude(r => r.Actor).ToList();
            foreach (var record in records){
                System.Console.WriteLine($"Film: {record.Title}");
                var counter = 1;
                foreach(var fa in record.FilmActor){
                    System.Console.WriteLine($"\tActor {counter++}: {fa.Actor.FirstName} {fa.Actor.LastName}");
                }
            }
            //Add new city to database
            /* var city = new City() {CityId = 1001, Name = "Redmond", CountryId = 103};
            dbContext.Add(city);
            dbContext.SaveChanges(); */

            //Update previously generated city
            /* var uTarget = dbContext.City.SingleOrDefault(c => c.CityId == 1001);
            if (uTarget != null){
                uTarget.Name = "Kirkland"; 
                dbContext.Update(uTarget);
                dbContext.SaveChanges();
            } */
            
            //delete previously generated city
            /* var dTarget = dbContext.City.SingleOrDefault(c => c.CityId == 1001);
            if (dTarget != null){
                dbContext.Remove(dTarget);
                dbContext.SaveChanges();
            } */

        }
    }
}
