using System;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;

using Assignment.Models;

namespace Assignment.Context
{
    public class Database2Context : DbContext
    {
        public Database2Context (DbContextOptions<Database2Context> options) : base(options)
        {
        }

        public DbSet<Movies> Movies { get; set; }
    }
}