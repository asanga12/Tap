using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Model;
using Microsoft.AspNetCore.SignalR;

namespace WebApplication1.Hubs
{
    public class MessageHub : Hub
        {
        public async Task SendMessage(Plant msg)
        {
            await Clients.All.SendAsync("MessageReceived", msg);
        }
    }
}
