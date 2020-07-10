using System;
using System.ComponentModel.DataAnnotations;

namespace Assignment.Models
{
    public class MoviesDTO
    {
        public string Title { get; set; }
        public string ReleaseDate { get; set; }
        public string Genre { get; set; }
        public decimal Price { get; set; }
    }
}