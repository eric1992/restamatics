using System;
using System.Collections.Generic;

namespace restamatics.Models
{
    public class Reals
    {
        private readonly static string StaticName = "Reals";
        private readonly static Link[] StaticLinks = new Link[] 
        {
            new Link 
            {
                HRef = "/api/Reals",
                Rel = "self",
            },
            new Link
            {
                HRef = "/api/Reals/Integers",
                Rel = "child",
            }
        };
        public string Name { get => StaticName; }
        public IEnumerable<Link> Links { get => StaticLinks; }
    }
}