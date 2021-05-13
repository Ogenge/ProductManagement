using ProductManagement.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ProductManagement
{
    public class ProductPosting
    {
        public async Task<List<Product>> GetProducts()
        {
            List<Product> prod = new List<Product>();
            using (SqlConnection connection = new SqlConnection())
            {
                using (SqlCommand cmd = new SqlCommand())
                {
                    cmd.CommandText = "vw_Products";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Connection = connection;
                    connection.Open();
                    var reader=cmd.ExecuteReaderAsync().Result;
                    while (reader.Read())
                    {
                        prod = reader;
                    }
                }
            }
            return prod;
        }

        public Task<GenericModel> PostProduct(Product model)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Product>> GetProductsByCategory(int id)
        {
            List<Product> prod = new List<Product>();
            using (SqlConnection connection = new SqlConnection())
            {
                using (SqlCommand cmd = new SqlCommand())
                {
                    cmd.CommandText = "vw_Products";
                    cmd.Parameters.AddWithValue("sku", SqlDbType.Int).Value = id;
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Connection = connection;
                    connection.Open();
                    var reader = cmd.ExecuteReaderAsync().Result;
                    while (reader.Read())
                    {
                        prod = reader;
                    }
                }
            }
            return prod;
        }

        public Task<GenericModel> UpdateProduct(Product model)
        {
            throw new NotImplementedException();
        }

        internal Task<List<ListModel>> GetCategoeies()
        {
            throw new NotImplementedException();
        }

        internal Task<GenericModel> PostCategories(Product model)
        {
            throw new NotImplementedException();
        }
    }
}

