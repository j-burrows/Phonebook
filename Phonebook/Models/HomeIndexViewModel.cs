using System.Collections.Generic;
using PhoneBookLib;
using PhoneBookLib.Data.Entities;
using InfastructureLib;
using InfastructureLib.Data.Entities;
namespace Phonebook.Models{
    public class HomeIndexViewModel{
        public IEnumerable<IEnumerable<DPage>> navSection { get; set; }

        public static HomeIndexViewModel ForUserPage(string username, int Page_ID){
            IInfastructureService infastructure = new InfastructureService();
            IPhonebookService provider = new PhonebookService();

            return new HomeIndexViewModel { 
                navSection = infastructure.PageStructure_GetBySelected(Page_ID)
            };
        }
    }
}