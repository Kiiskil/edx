using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorApp1.Client
{
    public class TodoItem
    {
        //new class to represent todo item
        public string Title { get; set; }
        public bool IsDone { get; set; }
    }
}
