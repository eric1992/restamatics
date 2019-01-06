using System;
using System.Numerics;
using System.Collections.Generic;

namespace restamatics.Models
{
    public class Odds
    {
        private readonly static string StaticName = "Odds";
        private readonly static Link[] StaticLinks = new Link[]
        {
            new Link
            {
                HRef = "/api/Reals/Integers/Odds",
                Rel = "self",
            },
        };
        public string Name { get => StaticName; }
        public IEnumerable<Link> Links { get => StaticLinks; }
        public IEnumerable<BigInteger> Values { get; set;}
    }   
}