using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Reflection;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Bonus_Coverage.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        [HttpGet]
        [Route("send-email")]
        public async Task SendEmail()
        {
            
            var message = new MailMessage();
            message.To.Add(new MailAddress("idodi999@gmail.com"));
            message.From = new MailAddress("bonuscoverage.dev@gmail.com");
            message.Bcc.Add(new MailAddress("girishkolte2000@gmail.com"));
            message.Subject = "This is test email";
            message.Body = createEmailBody();
            message.IsBodyHtml = true;

            using (var smtp = new SmtpClient())
            {
                smtp.Port = 587;
                smtp.Host = "smtp.gmail.com"; //for gmail host  
                smtp.EnableSsl = true;
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = new NetworkCredential("bonuscoverage.dev@gmail.com", "ckfpmzfhqkhwfbso");
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;

                await smtp.SendMailAsync(message);
                await Task.FromResult(0);
            }
        }

        private string createEmailBody()
        {
            string body = string.Empty;
            string applicationPath = Path.GetDirectoryName(Assembly.GetEntryAssembly().Location);
            body = System.IO.File.ReadAllText(applicationPath + "\\email\\invite.html");
            body = body.Replace("{{ASSETS}}", "http://3.138.142.16/bonus-coverage/assets/");
            body = body.Replace("{{link_url}}", "http://3.138.142.16/bonus-coverage/customer-details?offer-id=10001");
            body = body.Replace("{{custom_img}}", "http://3.138.142.16/bonus-coverage/uploads//dodge_jpg.JPEG");           
            return body;
        }

        // GET: api/<EmailController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<EmailController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<EmailController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<EmailController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<EmailController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    public class EmailModel
    {
        public string ToName { get; set; }
        public string ToEmail { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
    }
}
