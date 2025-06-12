using Microsoft.AspNetCore.Mvc;
using BookApi_backend.Models;
using BookApi_backend.Services;
using Microsoft.AspNetCore.Authorization;

namespace BookApi_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly UserService _userService;
        private readonly TokenService _tokenService;

        public AuthController(UserService userService, TokenService tokenService)
        {
            _userService = userService;
            _tokenService = tokenService;
        }

        [HttpPost("register")]
        public IActionResult Register(User user)
        {
            if (_userService.UserExists(user.Username))
                return BadRequest("User already exists");

            _userService.RegisterUser(user);
            return Ok("User registered");
        }

        [HttpPost("login")]
        public IActionResult Login(User login)
        {
            var user = _userService.GetUser(login.Username, login.Password);
            if (user == null) return Unauthorized();

            var token = _tokenService.CreateToken(user);
            return Ok(new { token });
        }
    }
}
