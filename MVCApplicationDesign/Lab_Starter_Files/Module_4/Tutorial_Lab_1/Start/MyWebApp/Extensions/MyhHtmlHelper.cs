using System;
using System.Linq.Expressions;
using Microsoft.AspNetCore.Html;

namespace Microsoft.AspNetCore.Mvc.Rendering{
    //This class is used to render html-elements easily in views
    //The class and method has to be static for html-helper
    public static partial class MyHtmlHelperExtensions {
        
        public static IHtmlContent FakeTextBoxFor<TModel, TResult>(this IHtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TResult>> expression){
            var body = expression.Body as MemberExpression;
            //Study Delegates, lambda expressions and anonym functions!!!
            var propertyName = body.Member.Name.ToLower(); //keep lower case
            var tagBuilder = new TagBuilder("input");
            tagBuilder.Attributes.Add("type", "text");// can be omitted
            tagBuilder.Attributes.Add("name", propertyName); // key purpose 1: for name-value pair
            tagBuilder.Attributes.Add("id", propertyName); //key purpose 2: for client JavaScript and CSS
            return tagBuilder;
        }
    }
}
