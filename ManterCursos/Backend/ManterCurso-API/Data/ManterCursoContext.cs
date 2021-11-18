using ManterCurso_API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManterCurso_API.Data
{
    public class ManterCursoContext : DbContext
    {
        public ManterCursoContext(DbContextOptions<ManterCursoContext> options) : base(options) { }

        public DbSet<Curso> Cursos { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
    }
}
