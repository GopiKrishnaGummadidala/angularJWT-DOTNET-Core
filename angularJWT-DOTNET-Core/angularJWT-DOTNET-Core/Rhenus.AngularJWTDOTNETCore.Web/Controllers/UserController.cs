using Microsoft.AspNetCore.Mvc;
using Rhenus.AngularJWTDOTNETCore.Data;
using Rhenus.AngularJWTDOTNETCore.Models;

namespace Rhenus.AngularJWTDOTNETCore.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IDbContext _dbContext { get; set; }
        
        public UserController(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        // GET api/users
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_dbContext.GetUsers());
        }

        // GET api/user/1
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_dbContext.GetUserById(id));
        }

        // POST api/user
        [HttpPost]
        public IActionResult Post([FromBody] UserModel user)
        {
            return Ok(_dbContext.AddUser(user));
        }

        // PUT api/user/1
        [HttpPut]
        public IActionResult Put([FromBody] UserModel user)
        {
            return Ok(_dbContext.UpdateUser(user));
        }

        // DELETE api/user/5
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            return Ok(_dbContext.DeleteUser(id));
        }
    }
}
