using System;
using System.ComponentModel.DataAnnotations;

namespace Rhenus.AngularJWTDOTNETCore.Models.PostRequest
{
    public class UserPostRequest
    {
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public DateTime DOB { get; set; }
    }
}
