using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AnalyticsAPI.Models
{
    [Table("WeatherMetrics")]
    public class WeatherMetric
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string City { get; set; }

        [Required]
        public DateTime Date { get; set; }

        public float? Temperature { get; set; }
        public float? WindSpeed { get; set; }
        public float? Snowfall { get; set; }

        [Required]
        [MaxLength(50)]
        public string WeatherCondition { get; set; } 
    }
}
