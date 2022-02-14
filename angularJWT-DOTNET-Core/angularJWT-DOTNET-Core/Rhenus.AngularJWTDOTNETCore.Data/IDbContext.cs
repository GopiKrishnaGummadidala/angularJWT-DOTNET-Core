using Rhenus.AngularJWTDOTNETCore.Models;
using System.Collections.Generic;

namespace Rhenus.AngularJWTDOTNETCore.Data
{
    public interface IDbContext
    {
        List<UserViewModel> GetUsers();
        bool AddUser(UserViewModel user);
        UserViewModel GetUserById(int id);
        bool UpdateUser(UserViewModel user);
        bool DeleteUser(int id);
    }
}
