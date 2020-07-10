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
        //  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        // {
        //     optionsBuilder.UseMySql("Server=127.0.0.1;Database=database1;User=root;", mySqlOptions => mySqlOptions
        //             .ServerVersion(new Version(8, 0, 18), ServerType.MySql)
        //     );
        // }

        public DbSet<Movies> Movies { get; set; }
    }
}