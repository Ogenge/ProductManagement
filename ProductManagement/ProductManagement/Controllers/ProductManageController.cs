using Microsoft.AspNetCore.Mvc;
using ProductManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProductManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductManageController : ControllerBase
    {
        ProductPosting ps = new ProductPosting();

        [HttpGet("products")]
        public async Task<List<Product>> GetProducts()
        {
            return await ps.GetProducts();
        }

        [HttpGet("products/{id}")]
        public async Task<List<Product>> GetProductsById( int id)
        {
            return await ps.GetProductsByCategory(id);
        }

        [HttpPost("products")]
        public async Task<GenericModel> PostProduct([FromBody] Product model)
        {
            return await ps.PostProduct(model);
        }

        [HttpPut("products")]
        public async Task<GenericModel> UpdateProduct([FromBody] Product model)
        {
            return await ps.UpdateProduct(model);
        }

        [HttpGet("productCatergories")]
        public async Task<List<ListModel>> GetCatergories()
        {
            return await ps.GetCategoeies();
        }

        [HttpPost("productCatergories")]
        public async Task<GenericModel> PostCatergories([FromBody] Product model)
        {
            return await ps.PostCategories (model);
        }

        [HttpGet("productAttributes")]
        public async Task<List<Product>> GetAttributes()
        {
            return await ps.GetProducts();
        }

        [HttpGet("productAttributes/{id}")]
        public async Task<List<Product>> GetAttributesById(int id)
        {
            return await ps.GetProductsByCategory(id);
        }

        [HttpPost("productAttributes")]
        public async Task<GenericModel> PostAttributes([FromBody] Product model)
        {
            return await ps.PostProduct(model);
        }
    }
}
