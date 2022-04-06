/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-useless-concat */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable max-len */
/* eslint-disable no-empty */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Carousel from "react-elastic-carousel";
import './events.css';

function Events() {
  const [events, setEvents] = useState([]);

  const fetchItems = async () => {
    const query = document.getElementById('query').value;
    const beginUrl = "https://app.ticketmaster.com/discovery/v2/events.json?";
    const keyWord = `keyword=${query}`;
    let endUrl = "&dmaId=602&apikey=MOnDwV7JkArTT9CYE0NA50dUQeM1Os1i";
    let url = beginUrl + keyWord + endUrl;
    if (document.getElementById('music').checked) {
      endUrl = `&classificationName=music&${endUrl}`;
      url = beginUrl + keyWord + endUrl;
    }

    if (document.getElementById('sports').checked) {
      endUrl = `&classificationName=sportsk&${endUrl}`;
      url = beginUrl + keyWord + endUrl;
    }

    if (document.getElementById('film').checked) {
      endUrl = `&classificationName=filmk&${endUrl}`;
      url = beginUrl + keyWord + endUrl;
    }

    if (document.getElementById('art').checked) {
      endUrl = `&classificationName=art&${endUrl}`;
      url = beginUrl + keyWord + endUrl;
    }

    if (document.getElementById('festival').checked) {
      endUrl = `&classificationName=festival&${endUrl}`;
      url = beginUrl + keyWord + endUrl;
    }

    if (document.getElementById('comedy').checked) {
      endUrl = `&classificationName=comedy&${endUrl}`;
      url = beginUrl + keyWord + endUrl;
    }

    if (document.getElementById('talk').checked) {
      endUrl = `&classificationName=talkk&${endUrl}`;
      url = beginUrl + keyWord + endUrl;
    }

    if (document.getElementById('dance').checked) {
      endUrl = `&classificationName=dance&${endUrl}`;
      url = beginUrl + keyWord + endUrl;
    }

    if (document.getElementById('special').checked) {
      endUrl = `&classificationName=special&${endUrl}`;
      url = beginUrl + keyWord + endUrl;
    }

    if (document.getElementById('tribute').checked) {
      endUrl = `&classificationName=tribute&${endUrl}`;
      url = beginUrl + keyWord + endUrl;
    }

    const data = await fetch(url);
    /* eslint-disable-next-line no-console */
    const eventsJason = await data.json();
    const { events } = eventsJason._embedded;
    /* eslint-disable-next-line no-console */
    console.log(events);
    setEvents(events);
    /* eslint-disable-next-line no-console */
    localStorage.setItem('events', JSON.stringify(events));
  };

  const onSubmit = (e) => {
    fetchItems();
    document.querySelector('.carousel').style.setProperty("display", "block", "important");
    e.preventDefault();
  };

  useEffect(() => {
    if (localStorage.getItem('events') !== null) {
      const storedNames = JSON.parse(localStorage.getItem("events"));
      setEvents(storedNames);
    } else {
      document.querySelector('.carousel').style.setProperty("display", "none", "important");
    }
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center"><h1>Events matching &quot;London&quot;</h1></div>
      <div className="recepies">
      <section className=" d-flex justify-content-center">
     <div className="filter d-flex justify-content-center">
    <fieldset>
        <div className="type d-flex justify-content-center">
            <form onSubmit={onSubmit} className="mt-2 p-3">
          <div className="d-flex justify-content-center">
            <div className="form-group w-50 fg">
              <div className="input_button">
              <div className="d-flex justify-content-center">
              <input
                className="mb-3"
                id="query"
                name="q"
                type="search"
                autoComplete="off"
                maxLength="50"
                placeholder="Search artist, event, venue, location..."
              />
              </div>
                  <div className="d-flex justify-content-center"><button type="submit" className="btn btn-primary">Find</button></div>
              </div>
            </div>
          </div>
<div className="choice d-flex justify-content-center">
                    <div className="browse d-flex justify-content-between">

                        <div className="mr-5">
                            <div>

                                <input className="mr-1" type="checkbox" value="2" name="c" id="dance" />
                                <label htmlFor="category-2">Dance And Clubs</label>

                            </div>
                            <div>

                                <input className="mr-1" type="checkbox" value="3" name="c" id="music" />
                                <label htmlFor="category-3">Music</label>

                            </div>
                            <div>

                                <input className="mr-1" type="checkbox" value="5" name="c" id="tribute" />
                                <label htmlFor="category-5">Tribute</label>

                            </div>
                            <div>

                                <input className="mr-1" type="checkbox" value="92" name="c" id="film" />
                                <label htmlFor="category-92">Film</label>

                            </div>
                            <div>

                                <input className="mr-1" type="checkbox" value="40" name="c" id="art" />
                                <label htmlFor="category-40">Art</label>

                            </div>
                        </div>
                        <div>
                            <div>

                                <input className="mr-1" type="checkbox" value="14" name="c" id="festival" />
                                <label htmlFor="category-14">Festival</label>

                            </div>
                            <div>

                                <input className="mr-1" type="checkbox" value="27" name="c" id="special" />
                                <label htmlFor="category-27">Special Events</label>

                            </div>
                            <div>

                                <input className="mr-1" type="checkbox" value="76" name="c" id="comedy" />
                                <label htmlFor="category-76">Comedy</label>

                            </div>
                            <div>

                                <input className="mr-1" type="checkbox" value="18" name="c" id="talk" />
                                <label htmlFor="category-18">Talk</label>

                            </div>
                            <div>

                                <input className="mr-1" type="checkbox" value="246" name="c" id="sports" />
                                <label htmlFor="category-246">Sport</label>

                            </div>
                        </div>
                    </div>
</div>

            </form>
        </div>
        <div className="choice d-flex justify-content-center" />

    </fieldset>
     </div>
      </section>
        <div className="carousel">
        <Carousel>
          {events.map((event) => (
            <>
              <div className="event">
                <div>click to see the event</div>
                <a href={event.url}>
                <img src={event.images[0].url} />
                </a>
                <div>
{event._embedded.venues[0].name}
{' '}
                </div>
<div>{event.dates.start.localDate}</div>
<div>{event.dates.start.localTime.substring(0, event.dates.start.localTime.length - 3)}</div>

                <div className="label_name">{event.name}</div>
              </div>
              {}

            </>
          ))}
        </Carousel>
        </div>

      </div>
    </div>

  );
}
export default Events;
