using Rhenus.AngularJWTDOTNETCore.Models;
using System.Collections.Generic;

namespace Rhenus.AngularJWTDOTNETCore.Data
{
    public interface IDbContext
    {
        List<UserModel> GetUsers();
        bool AddUser(UserModel user);
        UserModel GetUserById(int id);
        bool UpdateUser(UserModel user);
        bool DeleteUser(int id);
    }
}
