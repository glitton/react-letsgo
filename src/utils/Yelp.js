const apiKey = 'wBRf1v9TC8dtbFUQb7hN8ILDk9DrfrU39mkc_ndP9PEhIvjJSAACivkEGpJUjPhcqSVoIhOJMmp1Shk1G51__ta4-RK0Vuu8O2-70Wa73N66kFO0P1Fx6x1BbnGsWnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
        if (jsonResponse.businesses) {
        return jsonResponse.businesses.map((business) => ({
           id: business.id,
           imageSrc: business.image_url,
           name: business.name,
           address: business.location.address1,
           city: business.location.city,
           state: business.location.state,
           zipCode: business.location.zip_code,
           category: business.categories[0].title,
           rating: business.rating,
           reviewCount: business.review_count,
         }));
        }
    });
  }
};


export default Yelp;
