using ProductManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductManagement
{
    public class ProductPosting
    {
        public Task<List<Product>> GetProducts()
        {
            throw new NotImplementedException();
        }

        public Task<GenericModel> PostProduct(Product model)
        {
            throw new NotImplementedException();
        }

        public Task<List<Product>> GetProductsByCategory(int id)
        {
            throw new NotImplementedException();
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

