using BookApi_backend.Models;

namespace BookApi_backend.Services
{
    public class UserService
    {
        private List<User> _users = new();

        public User? GetUser(string username, string password)
        {
            return _users.FirstOrDefault(u => u.Username == username && u.Password == password);
        }

        public bool UserExists(string username) => _users.Any(u => u.Username == username);

        public void RegisterUser(User user)
        {
            user.Id = _users.Count + 1;
            _users.Add(user);
        }
    }
}