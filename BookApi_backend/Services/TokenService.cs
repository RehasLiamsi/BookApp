using BookApi_backend.Models;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace BookApi_backend.Services
{
    public class TokenService
    {
        private readonly string _jwtKey;
        private readonly string _issuer;

        public TokenService(string jwtKey, string issuer)
        {
            _jwtKey = jwtKey;
            _issuer = issuer;
        }

        public string CreateToken(User user)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.Name, user.Username)
            };

            if (string.IsNullOrEmpty(_jwtKey))
                throw new Exception("JWT key is missing in configuration.");

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _issuer,
                audience: _issuer,
                claims: claims,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}