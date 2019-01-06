using System;
using System.Numerics;
using System.Collections.Generic;

namespace restamatics.Models
{
    public class Evens
    {
        private readonly static string StaticName = "Evens";
        private readonly static Link[] StaticLinks = new Link[]
        {
            new Link
            {
                HRef = "/api/Reals/Integers/Evens",
                Rel = "self",
            },
        };
        public string Name { get => StaticName; }
        public IEnumerable<Link> Links { get => StaticLinks; }
        public IEnumerable<BigInteger> Values { get; set;}
    }   
}