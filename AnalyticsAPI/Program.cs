using Microsoft.EntityFrameworkCore;
using AnalyticsAPI.Data; // Ensure this is the correct namespace

var builder = WebApplication.CreateBuilder(args);

//  Fix: Correct MySQL Connection String
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Fix: Ensure the correct MySQL version is auto-detected
builder.Services.AddDbContext<DataContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

//  Enable Controllers and API Docs
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS Configuration (Allow Frontend Requests)
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins, policy =>
    {
        policy.WithOrigins("http://localhost:3000") // Allow React Frontend
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Enable Swagger in Development Mode
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
//  Ensure CORS is Applied
app.UseCors(MyAllowSpecificOrigins);
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Urls.Add("http://localhost:5000");

app.Run();
