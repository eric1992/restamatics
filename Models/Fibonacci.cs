using System;
using System.Numerics;
using System.Collections.Generic;

namespace restamatics.Models
{
    public class Fibonacci
    {
        private readonly static string StaticName = "Fibonacci";
        private readonly static Link[] StaticLinks = new Link[]
        {
            new Link
            {
                HRef = "/api/Reals/Integers/Fibonacci",
                Rel = "self",
            },
        };
        public string Name { get => StaticName; }
        public IEnumerable<Link> Links { get => StaticLinks; }
        public IEnumerable<BigInteger> Values { get; set;}
    }   
}