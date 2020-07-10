using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql;

using Assignment.Models;
using Assignment.Context;

namespace Assignment.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ScannerController : ControllerBase
    {
        private readonly ILogger<ScannerController> _logger;
        public IEnumerable<Movies> Products;
        private readonly Database1Context _scanner;

        public ScannerController(ILogger<ScannerController> logger, Database1Context scanner )
        {
            _logger = logger;
            _scanner = scanner;
        }

        [HttpGet]
        public IEnumerable<Movies> Index()
        {
            return _scanner.Movies;
        }

        [Route("add")]
        [HttpPost]
        public async Task<ActionResult> addData([FromBody] Movies movies)   // Add data to Database1 (Scanner)
        {   
            _scanner.Add(movies);
            await _scanner.SaveChangesAsync();
            return Ok();
        }
    }
}