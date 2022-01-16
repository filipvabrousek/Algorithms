## Views/ManagerNote/Index.cshtml

```cshtml
@model Note
@{
    <form asp-action="setNote" asp-controller="ManagerNoteController" method="post">
        <div asp-validation-summary="All" class="text-danger"></div>

        <div class="form-group">
            <label asp-for="Content">Obsah poznámky jestli bylo zboží vráceno v zákonné lhůtě</label>
            <input type="text" asp-for="Content" class="form-control">
            <span asp-validation-for="Content" class="text-danger"></span>
        </div>

        <div class="form-group">
            <label asp-for="Content">ID reklamovaného produktu</label>
            <input type="text" asp-for="ProductID" class="form-control">
            <span asp-validation-for="ProductID" class="text-danger"></span>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
}

```


## Areas/Admin/Controllers/ManagerNoteController.cs


```cshtml
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UTB.Eshop.Web.Models.Database;
using UTB.Eshop.Web.Models.Entity;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace UTB.Eshop.Web.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class ManagerNoteController : Controller
    {

        readonly EshopDbContext eshopDbContext;

        public ManagerNoteController(EshopDbContext eshopDb){
            eshopDbContext = eshopDb;
        }

        public IActionResult Index(){
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> setNote(Note note) {
            System.Diagnostics.Debug.WriteLine("COMPLAIN IT");
            Note myNote = new Note();
            myNote.ID = 100;
            myNote.ProductID = 1;
            myNote.Content = "This is test.";

            eshopDbContext.Notes.Add(note);
            await eshopDbContext.SaveChangesAsync();

            return RedirectToAction(nameof(ManagerNoteController.Index),
                nameof(ManagerNoteController).Replace("Controller", String.Empty),
                new { area = "Customer" });
        }


        [HttpGet]
        public IActionResult setNote()
        {
            return View();
        }
    }
}
```


## Note entity

```cs
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using UTB.Eshop.Web.Models.Validations;

namespace UTB.Eshop.Web.Models.Entity
{
    [Table(nameof(Note))]
    public class Note
    {
        [Key]
        [Required]
        public int ID { get; set; }

        [Required]
        public int ProductID { get; set; }

        [StringLength(800)]
        [Required]
        public string Content { get; set; }
    }
}
```



## SQl CREATE command

```sql
CREATE TABLE Note(
ID int primary key,
ProductID int,
Content varchar(800)
);
```
