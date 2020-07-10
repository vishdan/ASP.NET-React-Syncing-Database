using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using System.Threading.Tasks;
using System.IO;
using System.Linq;
using System.Text.Json;

using Assignment.Models;
using Assignment.Context;

namespace Assignment.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlatformController : ControllerBase
    {
        private readonly ILogger<PlatformController> _logger;
        public IEnumerable<Movies> Products;
        private readonly Database1Context _scanner;
        private readonly Database2Context _platform;
        public IWebHostEnvironment WebHostEnvironment { get; }

        public PlatformController(ILogger<PlatformController> logger, Database1Context scanner, Database2Context platform, IWebHostEnvironment webHostEnvironment )
        {
            _logger = logger;
            _scanner = scanner;
            _platform = platform;
            WebHostEnvironment = webHostEnvironment;
        }

        // This Function retrieves data from the Scanner(DB1)
        // and then stores it in the Platform(DB2)
        // when the user clicks on the link to view Platform data from the view. 
        [HttpGet]
        public IEnumerable<Movies> Index()
        {
            IEnumerable<Movies> updatedData = _scanner.Movies;
            _platform.Movies.RemoveRange(_platform.Movies);
            _platform.Movies.AddRange(updatedData);
            _platform.SaveChanges();
            return _platform.Movies;
        }

        [HttpPost]
        [Route("upload")]
        public async Task<IActionResult> Post(File model)
        {
           var file = model;
           string path = Path.Combine(WebHostEnvironment.ContentRootPath, "ClientApp", "files");
           using (var fs = new FileStream(Path.Combine(path, "file.txt"), FileMode.Create))
           {
                await file.CopyToAsync(fs);
           }
           return Ok();
        }
    }
}