using System;
using System.Linq.Expressions;

namespace ConsoleLambdaExp
{
    public class Person{
        public int ID {get;set;}
        public string Name {get;set;}
        public int Age {get;set;}
    }
    public class FakeHtmlHelper<TModel>{

    }
    public class FakeViewPage<TModel>{
        public FakeHtmlHelper<TModel> HtmlHelper {get;}
        public FakeViewPage(){
            HtmlHelper = new FakeHtmlHelper<TModel>();
        }
    }
    public static class FakeHtmlHelperExtension {
        public static string GetName<TModel, TResult>(this FakeHtmlHelper<TModel> target, Expression<Func<TModel, TResult>> expression){
            var body = expression.Body as MemberExpression;
            return body.Member.Name;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var view = new FakeViewPage<Person>();
            var propertyName = view.HtmlHelper.GetName(p => p.ID);
            Console.WriteLine(propertyName);
            propertyName = view.HtmlHelper.GetName(p => p.Name);
            Console.WriteLine(propertyName);
            propertyName = view.HtmlHelper.GetName(p => p.Age);
            Console.WriteLine(propertyName);
        }
    }
}
