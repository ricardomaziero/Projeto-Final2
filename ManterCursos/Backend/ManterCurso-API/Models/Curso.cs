using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ManterCurso_API.Models
{
    public class Curso
    {
        public int CursoID { get; set; }

        [Required]
        public string DescricaoAssunto { get; set; }
        
        public DateTime DataInicio { get; set; }
        
        public DateTime DataFim { get; set; }

        public int? QtdAlunos { get; set; }

        [ForeignKey("Categoria")]
        public int CategoriaID { get; set; }


    }
}
