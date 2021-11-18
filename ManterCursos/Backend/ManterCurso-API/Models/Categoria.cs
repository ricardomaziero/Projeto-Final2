using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManterCurso_API.Models
{
    public class Categoria
    {
        public int CategoriaID { get; set; }

        public string CategoriaNome { get; set; }

        public virtual ICollection<Curso> Cursos { get; set; }
    }
}
