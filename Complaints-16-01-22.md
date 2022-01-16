
Customer/Controllers/ComplaintController.cs
```cs
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using UTB.Eshop.Web.Models.Database;
using UTB.Eshop.Web.Models.Entity;
using UTB.Eshop.Web.Models.Identity;
using System;

namespace UTB.Eshop.Web.Areas.Customer.Controllers
{

    [Area("Customer")]
    [Authorize(Roles = nameof(Roles.Customer))]
    public class ComplaintController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        readonly EshopDbContext eshopDbContext;
      

        public ComplaintController(EshopDbContext eshopDB)
        {
            eshopDbContext = eshopDB;
        }



        /*
         * 
         * 
         * Migrace jsem provedl ručně

USE `UTB.Eshop`;

CREATE TABLE Complaint(
id int,
ProductID int,
Reason varchar(50)
);
        */


        [HttpGet]
        public IActionResult ComplainIt(int productID) {
            ViewData["ProductID"] = productID;
          //  ViewData["Description"] = description;
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> ComplainIt(Complaint complaint)
        {
            System.Diagnostics.Debug.WriteLine("COMPLAIN IT");

        
            eshopDbContext.Complaints.Add(complaint);
            await eshopDbContext.SaveChangesAsync();

            return RedirectToAction(nameof(CustomerOrdersController.Index),
                nameof(CustomerOrdersController).Replace("Controller", String.Empty),
                new { area = "Customer" });
        }


        public IActionResult Complain()
        {
            return View();
        }
    }
}

```


Views/Complaint/ComplainIt.cshtml
```cshtml
@model Complaint
@{
    <form asp-action="ComplainIt" method="post">
        <div asp-validation-summary="All" class="text-danger"></div>
        @{
                <input value="@ViewData["ProductID"]" asp-for="ProductID" type="hidden">  
        }


        <div class="form-group">
            <label asp-for="Reason">Complaint Reason</label>
            <input type="text" asp-for="Reason" class="form-control">
            <span asp-validation-for="Reason" class="text-danger"></span>
        </div>
       
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    }


@section Scripts
{
    <script src="~/lib/jquery-validation/dist/jquery.validate.js"></script>
    <script src="~/lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive.js"></script>
}
```
