using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Collections.Generic;
using AnalyticsAPI.Data;
using AnalyticsAPI.Models;

namespace AnalyticsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
        private readonly DataContext _context;

        public WeatherController(DataContext context)
        {
            _context = context;
        }

        // Endpoint to get weather data
        [HttpGet("weatherdata")]
        public IActionResult GetWeatherData([FromQuery] string city, [FromQuery] DateTime startDate, [FromQuery] DateTime endDate)
        {
            // Validate input parameters
            if (string.IsNullOrEmpty(city))
            {
                return BadRequest(new { message = "City is required." });
            }

            if (startDate == default || endDate == default)
            {
                return BadRequest(new { message = "Start Date and End Date are required." });
            }

            if (startDate > endDate)
            {
                return BadRequest(new { message = "Start Date cannot be after End Date." });
            }

            // Fetch filtered data from database
            var filteredData = _context.WeatherMetrics
                .Where(w => w.City == city && w.Date >= startDate && w.Date <= endDate) // Fix column name
                .OrderBy(w => w.Date)
                .ToList();

            // Check if data is available
            if (!filteredData.Any())
            {
                return NotFound(new { message = "No data available for the selected range." });
            }

            return Ok(filteredData);
        }
    }
}
