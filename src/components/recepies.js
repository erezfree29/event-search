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
import { updateRecepies } from "../redux/recepies";
import './recipes.css';

function Recipes() {
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

    // if (document.getElementById('theatre').checked) {
    //   endUrl = `&classificationName=theatre&${endUrl}`;
    //   url = beginUrl + keyWord + endUrl;
    // }

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

    /* eslint-disable-next-line no-console */
    console.log(url);

    const data = await fetch(url);
    /* eslint-disable-next-line no-console */
    const eventsJason = await data.json();
    /* eslint-disable-next-line no-console */
    console.log(eventsJason._embedded);
    const { events } = eventsJason._embedded;
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
    // if (localStorage.getItem('recipes') !== null) {
    //   const storedNames = JSON.parse(localStorage.getItem("recipes"));
    //   setRecipes(storedNames);
    // } else {
    //   document.querySelector('.carousel').style.setProperty("display", "none", "important");
    // }
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center"><h1>Events matching &quot;London&quot;</h1></div>
      <div className="recepies">
      <section className=" d-flex justify-content-center">
     <div className="filter d-flex justify-content-center">
    <fieldset>
        <div className="type d-flex justify-content-center">
            <form onSubmit={onSubmit} className="p-3">
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
          <div className="row">
            <div className="col-6">
              <div className="form-check d-flex">
                <input className="form-check-input" type="checkbox" value="" id="music" />
                <label className="form-check-label p-1" htmlFor="defaultCheck1" />
                Music
              </div>
            </div>
            <div className="col-6">
              <div className="form-check d-flex">
                <input className="form-check-input" type="checkbox" value="" id="sports" />
                <label className="form-check-label p-1" htmlFor="defaultCheck1" />
                Sports
              </div>
            </div>
            <div className="col-6">
              <div className="form-check d-flex">
                <input className="form-check-input" type="checkbox" value="" id="film" />
                <label className="form-check-label p-1" htmlFor="defaultCheck1" />
                Film
              </div>
            </div>
            <div className="col-6">
              <div className="form-check d-flex">
                <input className="form-check-input" type="checkbox" value="" id="art" />
                <label className="form-check-label p-1" htmlFor="defaultCheck1" />
                Art
              </div>
            </div>
            <div className="col-6">
              <div className="form-check d-flex">
                <input className="form-check-input" type="checkbox" value="" id="festival" />
                <label className="form-check-label p-1" htmlFor="defaultCheck1" />
                Festival
              </div>
            </div>
            <div className="col-6">
              <div className="form-check d-flex">
                <input className="form-check-input" type="checkbox" value="" id="comedy" />
                <label className="form-check-label p-1" htmlFor="defaultCheck1" />
                Comedy
              </div>
            </div>
            <div className="col-6">
              <div className="form-check d-flex">
                <input className="form-check-input" type="checkbox" value="" id="talk" />
                <label className="form-check-label p-1" htmlFor="defaultCheck1" />
                Talk
              </div>
            </div>
            <div className="col-6">
              <div className="form-check d-flex">
                <input className="form-check-input" type="checkbox" value="" id="theatre" />
                <label className="form-check-label p-1" htmlFor="defaultCheck1" />
                Theatre
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
        {/* <Carousel>
          {events.map((event) => (
            <>
              <div className="dish">
                <div>click to see the event</div>
                <img src={event.images[0].url} />
                <div className="label_name">{event.name}</div>
              </div>
              {}

            </>
          ))}

        </Carousel> */}
        </div>

      </div>
    </div>

  );
}
export default Recipes;
