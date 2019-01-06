using System;
using System.Numerics;
using System.Collections.Generic;

namespace restamatics.Models
{
    public class Integers
    {
        private readonly static string StaticName = "Integers";
        private readonly static Link[] StaticLinks = new Link[]
        {
            new Link
            {
                HRef = "/api/Reals/Integers",
                Rel = "self",
            },
            new Link
            {
                HRef = "/api/Reals/Integers/Evens",
                Rel = "child",
            },
            new Link
            {
                HRef = "/api/Reals/Integers/Odds",
                Rel = "child",
            },
            new Link
            {
                HRef = "/api/Reals/Integers/Fibonacci",
                Rel = "child",
            },
            new Link
            {
                HRef = "/api/Reals/Integers/Factorial",
                Rel = "child"
            }
        };
        public string Name { get => StaticName; }
        public IEnumerable<Link> Links { get => StaticLinks; }
        public IEnumerable<BigInteger> Values { get; set;}
    }   
}