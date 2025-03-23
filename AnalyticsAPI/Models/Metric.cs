using System;

namespace AnalyticsAPI.Models
{
    public class Metric
    {
        public int Id { get; set; }
        public required string City { get; set; } // Required to prevent null warnings
        public DateTime Timestamp { get; set; }
        public double Temperature { get; set; }
        public double Rainfall { get; set; }
        public double WindSpeed { get; set; }
        public required string Condition { get; set; } // Required field
    }
}
