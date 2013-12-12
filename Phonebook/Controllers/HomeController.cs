using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Phonebook.Models;
using PhoneBookLib;
using PhoneBookLib.Base;
using PhoneBookLib.Business;
using PhoneBookLib.Data.Entities;

namespace Phonebook.Controllers{
    [Authorize]
    public class HomeController : Controller{
        private IPhonebookService phonebookService;

        public HomeController() {
            phonebookService = new PhonebookService();
        }

        public ActionResult Index(){
            return View(HomeIndexViewModel.ForUserPage(User.Identity.Name, 32));
        }

        [HttpPost]
        public JsonResult State_GetByID(int State_ID) { 
            var state = phonebookService.State_GetTarget(State_ID);
            return Json(state);
        } 

        [HttpPost]
        public JsonResult State_GetByCountry(DCountry country) {
            var states = country.Country_ID == 0?
                phonebookService.State_GetList() :
                phonebookService.State_GetByCountry(country);
            return Json(states);
        }

        [HttpPost]
        public ActionResult Address_Create(DAddress creating) {
            return View();
        }

        [HttpPost]
        public ActionResult Address_Update(DAddress updating) {
            return View();
        }

        [HttpPost]
        public ActionResult Address_Delete(DAddress deleting) {
            return View();
        }

        [HttpPost]
        public JsonResult Contact_Create(
            [Bind(Prefix="models")] IEnumerable<DContact> createBatch) {
            createBatch = createBatch ?? Enumerable.Empty<DContact>();
            IEnumerable<Contact> contacts = phonebookService.Contact_Create(createBatch, User.Identity.Name);
            return Json(contacts);
        }

        [HttpPost]
        public JsonResult Contact_Update(
            [Bind(Prefix="models")] IEnumerable<DContact> updateBatch) {
            updateBatch = updateBatch ?? Enumerable.Empty<DContact>();
            IEnumerable<Contact> contacts = phonebookService.Contact_Update(updateBatch, User.Identity.Name);
            return Json(contacts);
        }

        [HttpPost]
        public JsonResult Contact_Delete(
            [Bind(Prefix="models")] IEnumerable<DContact> deleteBatch) {
            deleteBatch = deleteBatch ?? Enumerable.Empty<DContact>();
            IEnumerable<Contact> contacts = phonebookService.Contact_Delete(deleteBatch, User.Identity.Name);
            return Json(contacts);
        }

        [HttpPost]
        public JsonResult Contact_GetForUser() {
            IEnumerable<DContact> contacts = phonebookService.Contact_GetByUser(User.Identity.Name);
            return Json(contacts);
        }

        [HttpPost]
        public ActionResult Country_Create(DCountry creating) {
            return View();
        }

        [HttpPost]
        public ActionResult Country_Update(DCountry updating) {
            return View();
        }

        [HttpPost]
        public ActionResult Country_Delete(DCountry deleting) {
            return View();
        }

        [HttpPost]
        public ActionResult Email_Create(DEmail creating) {
            return View();
        }

        [HttpPost]
        public ActionResult Email_Update(DEmail updating) {
            return View();
        }

        [HttpPost]
        public ActionResult Email_Delete(DEmail deleting) {
            return View();
        }

        [HttpPost]
        public JsonResult PhoneAddress_Create(
            [Bind(Prefix="models")] IEnumerable<DPhoneAddress> createBatch)
        {
            createBatch = createBatch ?? Enumerable.Empty<DPhoneAddress>();
            var results = phonebookService.PhoneAddress_Create(createBatch, User.Identity.Name);
            return Json(results);
        }

        [HttpPost]
        public JsonResult PhoneAddress_Update(
            [Bind(Prefix = "models")] IEnumerable<DPhoneAddress> updateBatch)
        {
            updateBatch = updateBatch ?? Enumerable.Empty<DPhoneAddress>();
            var results = phonebookService.PhoneAddress_Update(updateBatch, User.Identity.Name);
            return Json(results);
        }

        [HttpPost]
        public JsonResult PhoneAddress_Delete(
            [Bind(Prefix = "models")] IEnumerable<DPhoneAddress> deleteBatch)
        {
            deleteBatch = deleteBatch ?? Enumerable.Empty<DPhoneAddress>();
            var results = phonebookService.PhoneAddress_Delete(deleteBatch, User.Identity.Name);
            return Json(results);
        }

        [HttpPost]
        public ActionResult Place_Create(DPlace creating) {
            return View();
        }

        [HttpPost]
        public ActionResult Place_Update(DPlace updating) {
            return View();
        }

        [HttpPost]
        public ActionResult Place_Delete(DPlace deleting) {
            return View();
        }

        [HttpPost]
        public ActionResult State_Create(DState creating) {
            return View();
        }

        [HttpPost]
        public ActionResult State_Update(DState updating) {
            return View();
        }

        [HttpPost]
        public ActionResult State_Delete(DState deleting) {
            return View();
        }
        
    }
}
