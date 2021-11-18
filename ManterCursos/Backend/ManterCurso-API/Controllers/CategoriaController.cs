using ManterCurso_API.Data;
using ManterCurso_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManterCurso_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoriaController : ControllerBase
    {

        private readonly ManterCursoContext _context;

        public CategoriaController(ManterCursoContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Categoria> GetCategorias()
        {
            return _context.Categorias;
        }

        [HttpPut("{id}")]
        public Categoria GetById(int id)
        {
            return _context.Categorias.FirstOrDefault(
                item => item.CategoriaID == id);
        }

        [HttpPost]
        public string Post()
        {
            return "qualquer coisa";
        }
    }
}
