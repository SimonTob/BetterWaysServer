﻿using BetterWays.Api.BoundedContexts.Shared.Domain;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BetterWays.Api.Bounded_Contexts.CoachingCourses.Core.Models.User
{
    public class UserDialog : AggregateRoot
    {
        [JsonProperty(PropertyName = "receiverDescription")]
        public string ReceiverDescription { get; set; }
        [JsonProperty(PropertyName = "entries")]
        public List<DialogEntry> Entries { get; set; }

        [JsonProperty(PropertyName = "ownerId")]
        public Guid OwnerId { get; set; }
        [JsonProperty(PropertyName = "receiverId")]
        public Guid ReceiverId { get; set; }

    }
}