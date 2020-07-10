using System;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;

using Assignment.Models;

namespace Assignment.Context
{
    public class Database1Context : DbContext
    {
        public Database1Context (DbContextOptions<Database1Context> options) : base(options)
        {
        }

        public DbSet<Movies> Movies { get; set; }
    }
}