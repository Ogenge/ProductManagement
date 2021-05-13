using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductManagement.Models
{
    public class Product
    {
        public int SKU { get; set; }
        public string Name { get; set; }
        public int Category { get; set; }
        public string CategoryName { get; set; }
        public string Size { get; set; }
        public string Color { get; set; }
        public decimal Price { get; set; }
    }

    public class GenericModel 
    {
        public int RespStat { get; set; }
        public int RespMsg { get; set; }
    }

    public class ListModel
    {
        public int Code { get; set; }
        public string Label { get; set; }
    }
}
