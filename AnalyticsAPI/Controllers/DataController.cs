using Microsoft.AspNetCore.Mvc;
using AnalyticsAPI.Data;
using AnalyticsAPI.Models;
using System.Linq;

namespace AnalyticsAPI.Controllers
{
    [ApiController]
    [Route("api/data")]
    public class DataController : ControllerBase
    {
        private readonly DataContext _context;

        public DataController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetData()
        {
            var data = _context.Metrics.ToList(); 

            if (data == null || data.Count == 0) 
            {
                return NotFound("No data available in Metrics table.");
            }

            return Ok(data);
        }
    }
}
