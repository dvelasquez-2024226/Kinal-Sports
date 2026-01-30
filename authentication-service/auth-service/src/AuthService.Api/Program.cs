using AuthService.Api.Extensions;
using AuthService.Persistence.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddApplicationServices(builder.Configuration);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
    
    try
    {
        logger.LogInformation("Chequeando la conexión a la base de datos. . .");
        await context.Database.EnsureCreatedAsync();
        
        logger.LogInformation("Base de datos conectada correctamente, insertabndo seeds.");
        await DataSeeder.SeedAsync(context);

        logger.LogInformation("Data insertada correctamente.");
    }
    catch (Exception ex)
    {
        logger.LogError(ex, "Error al conectar con la db o insertar data.");
        throw;
    }
}

app.Run();