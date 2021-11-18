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
    public class CursoController : ControllerBase
    {

        private readonly ManterCursoContext _context;

        public CursoController(ManterCursoContext context)
        {
            _context = context;
        }

        private bool CursoExists(int id)
        {
            return _context.Cursos.Any(cur => cur.CursoID == id);
        }

        [HttpGet]
        public IEnumerable<dynamic> GetCursos()
        {
            //return _context.Cursos;
            var curso = from cur in _context.Cursos
                        join cat in _context.Categorias on cur.CategoriaID equals cat.CategoriaID
                        select new
                        {
                            cur.CursoID,
                            cur.DescricaoAssunto,
                            cur.DataInicio,
                            cur.DataFim,
                            cur.QtdAlunos,
                            cat.CategoriaNome
                        };
            return curso;
        }

        [HttpPost]
        public async Task<ActionResult> PostCurso(Curso curso)
        {
            try
            {
                _context.Cursos.Add(curso);
                await _context.SaveChangesAsync();

                return Ok(new { id = curso.CursoID });

            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message, StackTrace = ex.StackTrace });
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCurso(int id)
        {
            var curso = await _context.Cursos.FindAsync(id);
            if (curso == null)
            {
                return NotFound("Curso não encontrado");
            }

            _context.Cursos.Remove(curso);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAutor(int id, Curso curso)
        {
            if (id != curso.CursoID)
            {
                return BadRequest("ID do parâmetro diferente do ID do FormData");
            }

            if(!CursoExists(id)){
                return NotFound("O Curso de ID informado não existe");
            }

            _context.Entry(curso).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CursoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
    }
}
