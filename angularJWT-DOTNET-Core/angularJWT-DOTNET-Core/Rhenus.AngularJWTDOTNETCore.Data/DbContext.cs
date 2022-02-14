using LiteDB;
using Microsoft.Extensions.Configuration;
using Rhenus.AngularJWTDOTNETCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Rhenus.AngularJWTDOTNETCore.Data
{
    public class DbContext : IDbContext
    {
        private static string connectionString { get; set; }
        public DbContext(IConfiguration configuration)
        {
            connectionString = configuration["DbConfiguration:DBPath"];
        }

        public bool AddUser(UserModel user)
        {
            try
            {
                using (var db = new LiteDatabase(connectionString))
                {
                    var collection = db.GetCollection<UserModel>("Users");
                    collection.Insert(user);
                    return true;
                }
            }
            catch (Exception ex)
            {
                //Exception Logging
                return false;
            }
        }

        public bool DeleteUser(int id)
        {
            try
            {
                using (var db = new LiteDatabase(connectionString))
                {
                    var collection = db.GetCollection<UserModel>("Users");
                    return collection.Delete(id);
                }
            }
            catch (Exception ex)
            {
                //Exception Logging
                return false;
            }
        }

        public UserModel GetUserById(int id)
        {
            using (var db = new LiteDatabase(connectionString))
            {
                var collection = db.GetCollection<UserModel>("Users");
                return collection.FindById(id);
            }
        }

        public List<UserModel> GetUsers()
        {
            using (var db = new LiteDatabase(connectionString))
            {
                var collection = db.GetCollection<UserModel>("Users");
                return collection.Find(c => c.Id != 0).ToList();
            }
        }

        public bool UpdateUser(UserModel user)
        {
            try
            {
                using (var db = new LiteDatabase(connectionString))
                {
                    var collection = db.GetCollection<UserModel>("Users");
                    return collection.Update(user);
                }
            }
            catch (Exception ex)
            {
                //Exception Logging
                return false;
            }
        }
    }
}
