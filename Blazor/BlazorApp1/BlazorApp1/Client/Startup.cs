using Microsoft.AspNetCore.Components.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace BlazorApp1.Client
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            //f working with a Blazor Server app, the WeatherForecastService service is registered as a singleton in Startup.ConfigureServices
            //services.AddRazorPages();
            //services.AddServerSideBlazor();
            //services.AddSingleton<WeatherForecastService>()
        }

        public void Configure(IComponentsApplicationBuilder app)
        {
            app.AddComponent<App>("app");
        }
    }
}
