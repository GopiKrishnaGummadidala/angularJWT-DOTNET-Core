using System;
namespace Rhenus.AngularJWTDOTNETCore.Models
{
    public class UserModel
    {
        public int Id {get; set;}
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DOB { get; set; }
    }
}
