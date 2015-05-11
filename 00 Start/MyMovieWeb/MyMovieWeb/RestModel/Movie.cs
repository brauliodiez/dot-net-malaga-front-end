using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyMovieWeb.RestModel
{
    public class Movie
    {
        public string Title { get;set; }
        public string Sinopsis { get; set; }
        public string PosterUrl { get; set; }
    }
}