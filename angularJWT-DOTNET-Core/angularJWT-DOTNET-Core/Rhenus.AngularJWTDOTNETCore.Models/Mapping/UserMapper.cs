using Rhenus.AngularJWTDOTNETCore.Models.PostRequest;

namespace Rhenus.AngularJWTDOTNETCore.Models.Mapping
{
    public static class UserMapper
    {
        public static UserViewModel MapPostRequestToVM(this UserPostRequest userPostRequest)
        {
            return new UserViewModel()
            {
                Id = userPostRequest.Id,
                FirstName = userPostRequest.FirstName,
                LastName = userPostRequest.LastName,
                DOB = userPostRequest.DOB
            };
        }
    }
}
