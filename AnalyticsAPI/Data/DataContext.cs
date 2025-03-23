using Microsoft.EntityFrameworkCore;
using AnalyticsAPI.Models;

namespace AnalyticsAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Metric> Metrics { get; set; } // Ensure this is added
        public DbSet<WeatherMetric> WeatherMetrics { get; set; } // Ensure weather metrics are included
    }
}
