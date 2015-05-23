using MyMovieWeb.RestModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace MyMovieWeb.Controllers
{
    /*
     * Steps to enable CORS:
     *   - NuGet download
     *   - Global.asax, register CORS
     *   - controllers EnableCors
     */
    // Beware, do not do this on production environment, add some restrictions
    [EnableCors(origins: "*", headers: "*", methods: "*")] 
    public class MoviesController : ApiController
    {
        // GET api/values
        public IEnumerable<Movie> Get()
        {
            return createSomeMockMoviesEntries();
        }


        private IEnumerable<Movie> createSomeMockMoviesEntries()
        {
            List<Movie> movies = new List<Movie>();

            movies.Add(new Movie()
            {
                Title = "2001: a space odyssey",
                Sinopsis = "Humanity finds a mysterious, obviously artificial, object buried beneath the Lunar surface and, with the intelligent computer H.A.L. 9000, sets off on a quest.",
                // Just for demo purposes, this shouldn't be here, just the name of the pic
                PosterUrl = "http://localhost:10048/images/2001.jpg"
            });


            movies.Add(new Movie()
            {
                Title = "Interstellar",
                Sinopsis = "A team of explorers travel through a wormhole in an attempt to ensure humanity's survival.",
                // Just for demo purposes, this shouldn't be here, just the name of the pic
                PosterUrl = "http://localhost:10048/images/interstellar.jpg"
            });

            movies.Add(new Movie()
            {
                Title = "Blade Runner",
                Sinopsis = "A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
                // Just for demo purposes, this shouldn't be here, just the name of the pic
                PosterUrl = "http://localhost:10048/images/bladerunner.jpg"
            });


            return movies;
        }
    }
}
